function testscript(str) {
    var list_ascii = convert_ascii(str)
    alert(list_ascii);

    var list_binary = convert_binary(list_ascii);
    alert(list_binary)

    var binary_str = list_binary.join('');
    alert(binary_str);

    var split5_list = split_5bit(binary_str);
    alert(split5_list);
}

function convert_ascii(str) {
    var list = str.split("");
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