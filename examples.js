var qs = require('./');

/**
 * add
 */

var obj = qs.add('color=red', 'size', 'small');
console.log(obj);

var obj = qs.add('color=red&size=small', 'size', 'large');
console.log(obj);

/**
 * remove
 */

var obj = qs.remove('color=red&size=small&size=large', 'size', 'large');
console.log(obj);

var obj = qs.remove('color=red&size=small', 'size', 'small');
console.log(obj);

var obj = qs.remove('color=red&size=small', 'price', '100');
console.log(obj);