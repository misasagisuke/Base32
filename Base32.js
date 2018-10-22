function testscript(str) {
    alert(convert_ascii(str));
}

function convert_ascii(str) {
    var list = str.split("");
    for(var i = 0; i < list.length; i++) {
        list[i] = list[i].charCodeAt(0);
    }
    return list;
}

