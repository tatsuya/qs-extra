/**
 * Module dependencies.
 */

var qs = require('querystring');

/**
 * Array#indexOf shim.
 */

var indexOf = typeof Array.prototype.indexOf === 'function'
  ? function(arr, el) { return arr.indexOf(el); }
  : function(arr, el) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === el) return i;
      }
      return -1;
    };

/**
 * Array.isArray shim.
 */

var isArray = Array.isArray || function(arr) {
  return toString.call(arr) == '[object Array]';
};


var QueryString = exports;

QueryString.stringify = qs.stringify;
QueryString.parse = qs.parse;
QueryString.escape = qs.escape;
QueryString.unescape = qs.unescape;

/**
 * Add key/val pair to query string.
 * 
 * @param {String} str - querystring
 * @param {String} key
 * @param {String} val
 * @return {String}
 * @api public
 */
QueryString.add = function(str, key, val) {
  if ('string' != typeof key || 'string' != typeof val) {
    return str;
  }

  var obj = qs.parse(str);

  if (!obj[key]) {
    obj[key] = val;
  } else if ('string' == typeof obj[key]) {
    obj[key] = [obj[key], val];
  } else if (isArray(obj[key])) {
    obj[key].push(val);
  }

  return qs.stringify(obj);
}

/**
 * Remove key's val from query string.
 * 
 * @param {String} str - querystring
 * @param {String} key
 * @param {String} val
 * @return {String}
 * @api public
 */
QueryString.remove = function(str, key, val) {
  if ('string' != typeof key || 'string' != typeof val) {
    return str;
  }

  var obj = qs.parse(str);

  if (isArray(obj[key])) {
    var idx = indexOf(obj[key], val);
    if (idx >= 0) {
      obj[key].splice(idx, 1);
    }
  } else if (obj[key] == val) {
    delete obj[key];
  }

  return qs.stringify(obj);
}
