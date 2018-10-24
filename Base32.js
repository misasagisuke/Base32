// MIT License

// Copyright (c) 2018 rwadada

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

//Test run functions
function testscript(str) {
    alert('input : ' + str);

    alert('encode : ' + base32_encode(str));

    alert('decode : ' + base32_decode(base32_encode(str)));
    
}

//Encode the passed string with Base32
function base32_encode(str) {
    var list = convert_ascii(str);
    list = convert_binary(list);
    list = display_8bit(list);
    str = list.join('');
    list = split_5bit(str);
    list = binary_to_decimal(list);
    list = convert_on_dictionary(list);
    return padding(list.join(''));
}

//Decode the passed string with Base32
function base32_decode(str) {
    var list = unpadding(str);
    list = unconvert_on_dictionary(list);
    list = convert_binary(list);
    list = display_5bit(list);
    list = split_8bit(list);
    list = binary_to_decimal(list);
    return ascii_to_string(list);
}

//Dictionary for Conversion
const Dictionary = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '2', '3', '4', '5', '6', '7'];

function convert_ascii(str) {
    var list = str.split('');
    for(var i = 0; i < list.length; i++) {
        list[i] = list[i].charCodeAt(0);
    }
    return list;
}

function convert_binary(list) {
    for(var i = 0; i < list.length; i++) {
        list[i] = list[i].toString(2);
    }
    return list;
}

function split_5bit(str) {
    var res = "";
    var input_list = str.split('');
    var list = new Array();
    var index = 0;
    for(var i = 0; i < input_list.length; i++) {
        res = res + input_list[i];

        if((i+1) % 5 == 0) {
            list[index] = res;
            index ++;
            res = '';
        } else if (i+1 == input_list.length) {
            var sub = 5 - res.length;
            for(var j = 0; j < sub; j++) {
                res = res + '0';
            }
            list[index] = res;
        }
    }
    return list;
}

function binary_to_decimal(list) {
    for(var i = 0; i < list.length; i++) {
        list[i] = parseInt(list[i],2);
    }
    return list;
}

function convert_on_dictionary(list) {
    for(var i = 0; i < list.length; i++) {
        list[i] = Dictionary[list[i]];
    }
    return list;
}

function padding(str) {
    var sub = str.length % 8;
    for (var i = 0; i < sub; i++) {
        str = str + '=';
    }
    return str;
} 

function unpadding(str) {
    var list = str.split('');
    var res = new Array();
    for(var i = 0; i < list.length; i++) {
        if(list[i] == '='){
            break;
        }
        res[i] = list[i];
    }
    return res;
}

function unconvert_on_dictionary(list) {
    for(var i = 0; i < list.length; i++) {
        for(var j = 0; j < Dictionary.length; j++) {
            if(list[i] == Dictionary[j]) {
                list[i] = j;
                break;
            }
        }
    }
    return list;
}

function display_5bit(list) {
    for(var i = 0; i < list.length; i++) {
        var sub = 5-list[i].length;
        for(var j = 0; j < sub; j++) {
            list[i] = '0' + list[i];
        }
    }
    return list;
}

function display_8bit(list) {
    for(var i = 0; i < list.length; i++) {
        var sub = 8-list[i].length;
        for(var j = 0; j < sub; j++) {
            list[i] = '0' + list[i];
        }
    }
    return list;
}

function split_8bit(list) {
    var input_list = list.join('').split('');
    var res = new Array();
    var index = 0;
    var str = '';
    for(var i = 0; i < input_list.length; i++) {
        str = str + input_list[i];

        if((i+1) % 8 == 0) {
            res[index] = str;
            index ++;
            str = '';
        } 
    }
    return res;
}

function ascii_to_string(list) {
    for(var i = 0; i < list.length; i++) {
        list[i] = String.fromCharCode(list[i]);
    }
    return list.join('');
}