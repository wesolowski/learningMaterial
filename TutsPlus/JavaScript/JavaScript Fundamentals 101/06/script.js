var obj = 'This is a string object.',
    length = obj.length; // 24

var index      = obj.indexOf('is'),
    index2     = obj.indexOf('is', index + 1),
    index3     = obj.indexOf('test'),
    indexLast  = obj.lastIndexOf('is'),
    indexLast2 = obj.lastIndexOf('is', indexLast - 1),
    substr     = obj.substr(0, 4),
    substr2    = obj.substr(10, 6),
    substr3    = obj.substr(index, 6),
    substring  = obj.substring(0, 4),
    newstring  = obj.replace('object', 'value'),
    upperCase  = obj.toUpperCase(),
    lowerCase  = obj.toLowerCase();

console.log(index);
console.log(index2);
console.log(index3);
console.log(indexLast);
console.log(indexLast2);
console.log(substr);
console.log(substr2);
console.log(substr3);
console.log(substring);
console.log(newstring);
console.log(upperCase);
console.log(lowerCase);
console.log(obj);