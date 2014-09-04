# qs-extra

The extended node.js [querystring](http://nodejs.org/api/querystring.html) APIs supporting add/remove parameters.

## Installation

    $ npm install qs-extra

## API

### .add(str, key, val)

  Add key/val pair to query string.

```js
var qs = require('qs-extra');
qs.add('color=red', 'size', 'small');
// => 'color=red&size=small'
```

### .remove(str, key, val)

  Remove key's val from query string.

```js
var qs = require('qs-extra');
qs.remove('color=red&size=small&size=large', 'size', 'large');
// => 'color=red&size=small'
```

[General querystring APIs](http://nodejs.org/api/querystring.html) are also available through this module.

## Testing

Install dev dependencies:

    $ npm install -d

and execute:

    $ make test
