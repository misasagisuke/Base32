function testscript(str) {
    var list_ascii = convert_ascii(str)
    alert(list_ascii);

    var list_binary = convert_binary(list_ascii);
    alert(list_binary)
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