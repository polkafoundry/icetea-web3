/*! icetea-web3 v0.1.1 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["IceTeaWeb3"] = factory();
	else
		root["IceTeaWeb3"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/icetea-common/dist/browser.js":
/*!****************************************************!*\
  !*** ./node_modules/icetea-common/dist/browser.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/*! icetea-common v0.1.5 */
!function(t,e){ true?module.exports=e():undefined}(this,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=69)}([function(t,e,r){var n=r(43),i=n.Buffer;function o(t,e){for(var r in t)e[r]=t[r]}function f(t,e,r){return i(t,e,r)}i.from&&i.alloc&&i.allocUnsafe&&i.allocUnsafeSlow?t.exports=n:(o(n,e),e.Buffer=f),o(i,f),f.from=function(t,e,r){if("number"==typeof t)throw new TypeError("Argument must not be a number");return i(t,e,r)},f.alloc=function(t,e,r){if("number"!=typeof t)throw new TypeError("Argument must be a number");var n=i(t);return void 0!==e?"string"==typeof r?n.fill(e,r):n.fill(e):n.fill(0),n},f.allocUnsafe=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return i(t)},f.allocUnsafeSlow=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return n.SlowBuffer(t)}},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t,e,r){var n=e.global=r(71),i=e.hasBuffer=n&&!!n.isBuffer,o=e.hasArrayBuffer="undefined"!=typeof ArrayBuffer,f=e.isArray=r(15);e.isArrayBuffer=o?function(t){return t instanceof ArrayBuffer||d(t)}:y;var s=e.isBuffer=i?n.isBuffer:y,a=e.isView=o?ArrayBuffer.isView||v("ArrayBuffer","buffer"):y;e.alloc=p,e.concat=function(t,r){r||(r=0,Array.prototype.forEach.call(t,function(t){r+=t.length}));var n=this!==e&&this||t[0],i=p.call(n,r),o=0;return Array.prototype.forEach.call(t,function(t){o+=l.copy.call(t,i,o)}),i},e.from=function(t){return"string"==typeof t?function(t){var e=3*t.length,r=p.call(this,e),n=l.write.call(r,t);e!==n&&(r=l.slice.call(r,0,n));return r}.call(this,t):g(this).from(t)};var u=e.Array=r(72),h=e.Buffer=r(73),c=e.Uint8Array=r(74),l=e.prototype=r(22);function p(t){return g(this).alloc(t)}var d=v("ArrayBuffer");function g(t){return s(t)?h:a(t)?c:f(t)?u:i?h:o?c:u}function y(){return!1}function v(t,e){return t="[object "+t+"]",function(r){return null!=r&&{}.toString.call(e?r[e]:r)===t}}},function(t,e,r){"use strict";(function(e){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function n(t,e){if(t===e)return 0;for(var r=t.length,n=e.length,i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0}function i(t){return e.Buffer&&"function"==typeof e.Buffer.isBuffer?e.Buffer.isBuffer(t):!(null==t||!t._isBuffer)}var o=r(120),f=Object.prototype.hasOwnProperty,s=Array.prototype.slice,a="foo"===function(){}.name;function u(t){return Object.prototype.toString.call(t)}function h(t){return!i(t)&&("function"==typeof e.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):!!t&&(t instanceof DataView||!!(t.buffer&&t.buffer instanceof ArrayBuffer))))}var c=t.exports=v,l=/\s*function\s+([^\(\s]*)\s*/;function p(t){if(o.isFunction(t)){if(a)return t.name;var e=t.toString().match(l);return e&&e[1]}}function d(t,e){return"string"==typeof t?t.length<e?t:t.slice(0,e):t}function g(t){if(a||!o.isFunction(t))return o.inspect(t);var e=p(t);return"[Function"+(e?": "+e:"")+"]"}function y(t,e,r,n,i){throw new c.AssertionError({message:r,actual:t,expected:e,operator:n,stackStartFunction:i})}function v(t,e){t||y(t,!0,e,"==",c.ok)}function b(t,e,r,f){if(t===e)return!0;if(i(t)&&i(e))return 0===n(t,e);if(o.isDate(t)&&o.isDate(e))return t.getTime()===e.getTime();if(o.isRegExp(t)&&o.isRegExp(e))return t.source===e.source&&t.global===e.global&&t.multiline===e.multiline&&t.lastIndex===e.lastIndex&&t.ignoreCase===e.ignoreCase;if(null!==t&&"object"==typeof t||null!==e&&"object"==typeof e){if(h(t)&&h(e)&&u(t)===u(e)&&!(t instanceof Float32Array||t instanceof Float64Array))return 0===n(new Uint8Array(t.buffer),new Uint8Array(e.buffer));if(i(t)!==i(e))return!1;var a=(f=f||{actual:[],expected:[]}).actual.indexOf(t);return-1!==a&&a===f.expected.indexOf(e)||(f.actual.push(t),f.expected.push(e),function(t,e,r,n){if(null==t||null==e)return!1;if(o.isPrimitive(t)||o.isPrimitive(e))return t===e;if(r&&Object.getPrototypeOf(t)!==Object.getPrototypeOf(e))return!1;var i=m(t),f=m(e);if(i&&!f||!i&&f)return!1;if(i)return t=s.call(t),e=s.call(e),b(t,e,r);var a,u,h=E(t),c=E(e);if(h.length!==c.length)return!1;for(h.sort(),c.sort(),u=h.length-1;u>=0;u--)if(h[u]!==c[u])return!1;for(u=h.length-1;u>=0;u--)if(a=h[u],!b(t[a],e[a],r,n))return!1;return!0}(t,e,r,f))}return r?t===e:t==e}function m(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function w(t,e){if(!t||!e)return!1;if("[object RegExp]"==Object.prototype.toString.call(e))return e.test(t);try{if(t instanceof e)return!0}catch(t){}return!Error.isPrototypeOf(e)&&!0===e.call({},t)}function _(t,e,r,n){var i;if("function"!=typeof e)throw new TypeError('"block" argument must be a function');"string"==typeof r&&(n=r,r=null),i=function(t){var e;try{t()}catch(t){e=t}return e}(e),n=(r&&r.name?" ("+r.name+").":".")+(n?" "+n:"."),t&&!i&&y(i,r,"Missing expected exception"+n);var f="string"==typeof n,s=!t&&i&&!r;if((!t&&o.isError(i)&&f&&w(i,r)||s)&&y(i,r,"Got unwanted exception"+n),t&&i&&r&&!w(i,r)||!t&&i)throw i}c.AssertionError=function(t){var e;this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=d(g((e=this).actual),128)+" "+e.operator+" "+d(g(e.expected),128),this.generatedMessage=!0);var r=t.stackStartFunction||y;if(Error.captureStackTrace)Error.captureStackTrace(this,r);else{var n=new Error;if(n.stack){var i=n.stack,o=p(r),f=i.indexOf("\n"+o);if(f>=0){var s=i.indexOf("\n",f+1);i=i.substring(s+1)}this.stack=i}}},o.inherits(c.AssertionError,Error),c.fail=y,c.ok=v,c.equal=function(t,e,r){t!=e&&y(t,e,r,"==",c.equal)},c.notEqual=function(t,e,r){t==e&&y(t,e,r,"!=",c.notEqual)},c.deepEqual=function(t,e,r){b(t,e,!1)||y(t,e,r,"deepEqual",c.deepEqual)},c.deepStrictEqual=function(t,e,r){b(t,e,!0)||y(t,e,r,"deepStrictEqual",c.deepStrictEqual)},c.notDeepEqual=function(t,e,r){b(t,e,!1)&&y(t,e,r,"notDeepEqual",c.notDeepEqual)},c.notDeepStrictEqual=function t(e,r,n){b(e,r,!0)&&y(e,r,n,"notDeepStrictEqual",t)},c.strictEqual=function(t,e,r){t!==e&&y(t,e,r,"===",c.strictEqual)},c.notStrictEqual=function(t,e,r){t===e&&y(t,e,r,"!==",c.notStrictEqual)},c.throws=function(t,e,r){_(!0,t,e,r)},c.doesNotThrow=function(t,e,r){_(!1,t,e,r)},c.ifError=function(t){if(t)throw t};var E=Object.keys||function(t){var e=[];for(var r in t)f.call(t,r)&&e.push(r);return e}}).call(this,r(5))},function(t,e,r){var n=r(63);r(123),t.exports=n},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";var n=r(17),i=Object.keys||function(t){var e=[];for(var r in t)e.push(r);return e};t.exports=c;var o=r(11);o.inherits=r(1);var f=r(45),s=r(29);o.inherits(c,f);for(var a=i(s.prototype),u=0;u<a.length;u++){var h=a[u];c.prototype[h]||(c.prototype[h]=s.prototype[h])}function c(t){if(!(this instanceof c))return new c(t);f.call(this,t),s.call(this,t),t&&!1===t.readable&&(this.readable=!1),t&&!1===t.writable&&(this.writable=!1),this.allowHalfOpen=!0,t&&!1===t.allowHalfOpen&&(this.allowHalfOpen=!1),this.once("end",l)}function l(){this.allowHalfOpen||this._writableState.ended||n.nextTick(p,this)}function p(t){t.end()}Object.defineProperty(c.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(c.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed&&this._writableState.destroyed)},set:function(t){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=t,this._writableState.destroyed=t)}}),c.prototype._destroy=function(t,e){this.push(null),this.end(),n.nextTick(e,t)}},function(t,e,r){var n=r(0).Buffer,i=r(44).Transform,o=r(30).StringDecoder;function f(t){i.call(this),this.hashMode="string"==typeof t,this.hashMode?this[t]=this._finalOrDigest:this.final=this._finalOrDigest,this._final&&(this.__final=this._final,this._final=null),this._decoder=null,this._encoding=null}r(1)(f,i),f.prototype.update=function(t,e,r){"string"==typeof t&&(t=n.from(t,e));var i=this._update(t);return this.hashMode?this:(r&&(i=this._toString(i,r)),i)},f.prototype.setAutoPadding=function(){},f.prototype.getAuthTag=function(){throw new Error("trying to get auth tag in unsupported state")},f.prototype.setAuthTag=function(){throw new Error("trying to set auth tag in unsupported state")},f.prototype.setAAD=function(){throw new Error("trying to set aad in unsupported state")},f.prototype._transform=function(t,e,r){var n;try{this.hashMode?this._update(t):this.push(this._update(t))}catch(t){n=t}finally{r(n)}},f.prototype._flush=function(t){var e;try{this.push(this.__final())}catch(t){e=t}t(e)},f.prototype._finalOrDigest=function(t){var e=this.__final()||n.alloc(0);return t&&(e=this._toString(e,t,!0)),e},f.prototype._toString=function(t,e,r){if(this._decoder||(this._decoder=new o(e),this._encoding=e),this._encoding!==e)throw new Error("can't switch encodings");var n=this._decoder.write(t);return r&&(n+=this._decoder.end()),n},t.exports=f},function(t,e,r){"use strict";var n=r(25),i=r(126);t.exports={sha1:function(t,e){return n("sha1").update(t).digest(e)},sha256:function(t,e){return n("sha256").update(t).digest(e)},sha512:function(t,e){return n("sha512").update(t).digest(e)},HmacSHA256:function(t,e){return i("sha256",e).update(t).digest()},ripemd160:function(t){return n("rmd160").update(t).digest()}}},function(t,e){var r,n,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function f(){throw new Error("clearTimeout has not been defined")}function s(t){if(r===setTimeout)return setTimeout(t,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(t){r=o}try{n="function"==typeof clearTimeout?clearTimeout:f}catch(t){n=f}}();var a,u=[],h=!1,c=-1;function l(){h&&a&&(h=!1,a.length?u=a.concat(u):c=-1,u.length&&p())}function p(){if(!h){var t=s(l);h=!0;for(var e=u.length;e;){for(a=u,u=[];++c<e;)a&&a[c].run();c=-1,e=u.length}a=null,h=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===f||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function g(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];u.push(new d(t,e)),1!==u.length||h||s(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e,r){var n=r(0).Buffer;function i(t,e){this._block=n.alloc(t),this._finalSize=e,this._blockSize=t,this._len=0}i.prototype.update=function(t,e){"string"==typeof t&&(e=e||"utf8",t=n.from(t,e));for(var r=this._block,i=this._blockSize,o=t.length,f=this._len,s=0;s<o;){for(var a=f%i,u=Math.min(o-s,i-a),h=0;h<u;h++)r[a+h]=t[s+h];s+=u,(f+=u)%i==0&&this._update(r)}return this._len+=o,this},i.prototype.digest=function(t){var e=this._len%this._blockSize;this._block[e]=128,this._block.fill(0,e+1),e>=this._finalSize&&(this._update(this._block),this._block.fill(0));var r=8*this._len;if(r<=4294967295)this._block.writeUInt32BE(r,this._blockSize-4);else{var n=(4294967295&r)>>>0,i=(r-n)/4294967296;this._block.writeUInt32BE(i,this._blockSize-8),this._block.writeUInt32BE(n,this._blockSize-4)}this._update(this._block);var o=this._hash();return t?o.toString(t):o},i.prototype._update=function(){throw new Error("_update must be implemented by subclass")},t.exports=i},function(t,e){function r(t){return Object.prototype.toString.call(t)}e.isArray=function(t){return Array.isArray?Array.isArray(t):"[object Array]"===r(t)},e.isBoolean=function(t){return"boolean"==typeof t},e.isNull=function(t){return null===t},e.isNullOrUndefined=function(t){return null==t},e.isNumber=function(t){return"number"==typeof t},e.isString=function(t){return"string"==typeof t},e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=function(t){return void 0===t},e.isRegExp=function(t){return"[object RegExp]"===r(t)},e.isObject=function(t){return"object"==typeof t&&null!==t},e.isDate=function(t){return"[object Date]"===r(t)},e.isError=function(t){return"[object Error]"===r(t)||t instanceof Error},e.isFunction=function(t){return"function"==typeof t},e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=Buffer.isBuffer},function(t,e){t.exports=function(t,e){for(var r=Math.min(t.length,e.length),n=new Buffer(r),i=0;i<r;++i)n[i]=t[i]^e[i];return n}},function(t,e,r){"use strict";var n=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],n=!0,i=!1,o=void 0;try{for(var f,s=t[Symbol.iterator]();!(n=(f=s.next()).done)&&(r.push(f.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=r(3),f=r(31),s=r(4),a=f.getCurveByName("secp256k1"),u=r(8),h=r(14),c=a.G,l=a.n;function p(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"EOS";if("string"==typeof t){var r=p.fromString(t,e);return o(null!=r,"Invalid public key"),r}if(Buffer.isBuffer(t))return p.fromBuffer(t);if("object"===(void 0===t?"undefined":i(t))&&t.Q)return p(t.Q);function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.compressed;return t.getEncoded(e)}o.equal(void 0===t?"undefined":i(t),"object","Invalid public key"),o.equal(i(t.compressed),"boolean","Invalid public key");return{Q:t,toString:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"EOS")+h.checkEncode(n())},toUncompressed:function(){var e=t.getEncoded(!1),r=f.Point.decodeFrom(a,e);return p.fromPoint(r)},toBuffer:n,child:function(e){console.error("Deprecated warning: PublicKey.child"),o(Buffer.isBuffer(e),"Buffer required: offset"),o.equal(e.length,32,"offset length"),e=Buffer.concat([n(),e]),e=u.sha256(e);var r=s.fromBuffer(e);if(r.compareTo(l)>=0)throw new Error("Child offset went out of bounds, try again");var i=c.multiply(r),f=t.add(i);if(a.isInfinity(f))throw new Error("Child offset derived to an invalid key, try again");return p.fromPoint(f)},toHex:function(){return n().toString("hex")}}}t.exports=p,p.isValid=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"EOS";try{return p(t,e),!0}catch(t){return!1}},p.fromBinary=function(t){return p.fromBuffer(new Buffer(t,"binary"))},p.fromBuffer=function(t){return p(f.Point.decodeFrom(a,t))},p.fromPoint=function(t){return p(t)},p.fromString=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"EOS";try{return p.fromStringOrThrow(t,e)}catch(t){return null}},p.fromStringOrThrow=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"EOS";o.equal(void 0===t?"undefined":i(t),"string","public_key");var r=t.match(/^PUB_([A-Za-z0-9]+)_([A-Za-z0-9]+)$/);if(null===r)return new RegExp("^"+e).test(t)&&(t=t.substring(e.length)),p.fromBuffer(h.checkDecode(t));o(3===r.length,"Expecting public key like: PUB_K1_base58pubkey..");var f=n(r,3),s=f[1],a=f[2];return o.equal(s,"K1","K1 private key expected"),p.fromBuffer(h.checkDecode(a,s))},p.fromHex=function(t){return p.fromBuffer(new Buffer(t,"hex"))},p.fromStringHex=function(t){return p.fromString(new Buffer(t,"hex"))}},function(t,e,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(129),o=r(3),f=r(54),s=r(8);t.exports={random32ByteBuffer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.cpuEntropyBits,r=void 0===e?0:e,i=t.safe,a=void 0===i||i;o.equal(void 0===r?"undefined":n(r),"number","cpuEntropyBits"),o.equal(void 0===a?"undefined":n(a),"boolean","boolean"),a&&o(u>=128,"Call initialize() to add entropy");var l=[];return l.push(f(32)),l.push(Buffer.from(c(r))),l.push(h),l.push(function(){var t=Array(f(101)).join();try{t+=(new Date).toString()+" "+window.screen.height+" "+window.screen.width+" "+window.screen.colorDepth+"  "+window.screen.availHeight+" "+window.screen.availWidth+" "+window.screen.pixelDepth+navigator.language+" "+window.location+" "+window.history.length;for(var e,r=0;r<navigator.mimeTypes.length;r++)e=navigator.mimeTypes[r],t+=e.description+" "+e.type+" "+e.suffixes+" "}catch(e){t+=s.sha256((new Date).toString())}var n=new Buffer(t),i=t+=n.toString("binary")+" "+(new Date).toString(),o=Date.now();for(;Date.now()-o<25;)i=s.sha256(i);return i}()),s.sha256(Buffer.concat(l))},addEntropy:function(){o.equal(h.length,101,"externalEntropyArray");for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];u+=e.length;var n=!0,i=!1,f=void 0;try{for(var s,c=e[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){var l=s.value,p=a++%101,d=h[p]+=l;d>9007199254740991&&(h[p]=0)}}catch(t){i=!0,f=t}finally{try{!n&&c.return&&c.return()}finally{if(i)throw f}}},cpuEntropy:c,entropyCount:function(){return u},checkDecode:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;o(null!=t,"private key expected");var r=new Buffer(i.decode(t)),n=r.slice(-4),f=r.slice(0,-4),a=void 0;if("sha256x2"===e)a=s.sha256(s.sha256(f)).slice(0,4);else{var u=[f];e&&u.push(Buffer.from(e)),a=s.ripemd160(Buffer.concat(u)).slice(0,4)}if(n.toString()!==a.toString())throw new Error("Invalid checksum, "+n.toString("hex")+" != "+a.toString("hex"));return f},checkEncode:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(o(Buffer.isBuffer(t),"expecting keyBuffer<Buffer>"),"sha256x2"===e){var r=s.sha256(s.sha256(t)).slice(0,4);return i.encode(Buffer.concat([t,r]))}var n=[t];e&&n.push(Buffer.from(e));var f=s.ripemd160(Buffer.concat(n)).slice(0,4);return i.encode(Buffer.concat([t,f]))}};var a=0,u=0,h=f(101);function c(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:128,e=[],r=null,n=0;e.length<t;){var i=l();if(null!=r){var o=i-r;if(Math.abs(o)<1){n++;continue}var f=Math.floor(p(Math.abs(o))+1);if(f<4){f<2&&n++;continue}e.push(o)}r=i}if(n>10){var s=Number(n/t*100).toFixed(2);console.warn("WARN: "+s+"% low CPU entropy re-sampled")}return e}function l(){for(var t=Date.now(),e=0,r=0;Date.now()<t+7+1;)r=Math.sin(Math.sqrt(Math.log(++e+r)));return e}var p=function(t){return Math.log(t)/Math.LN2}},function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},function(t,e,r){var n=r(15);e.createCodec=s,e.install=function(t){for(var e in t)o.prototype[e]=f(o.prototype[e],t[e])},e.filter=function(t){return n(t)?function(t){return t=t.slice(),function(r){return t.reduce(e,r)};function e(t,e){return e(t)}}(t):t};var i=r(2);function o(t){if(!(this instanceof o))return new o(t);this.options=t,this.init()}function f(t,e){return t&&e?function(){return t.apply(this,arguments),e.apply(this,arguments)}:t||e}function s(t){return new o(t)}o.prototype.init=function(){var t=this.options;return t&&t.uint8array&&(this.bufferish=i.Uint8Array),this},e.preset=s({preset:!0})},function(t,e,r){"use strict";(function(e){!e.version||0===e.version.indexOf("v0.")||0===e.version.indexOf("v1.")&&0!==e.version.indexOf("v1.8.")?t.exports={nextTick:function(t,r,n,i){if("function"!=typeof t)throw new TypeError('"callback" argument must be a function');var o,f,s=arguments.length;switch(s){case 0:case 1:return e.nextTick(t);case 2:return e.nextTick(function(){t.call(null,r)});case 3:return e.nextTick(function(){t.call(null,r,n)});case 4:return e.nextTick(function(){t.call(null,r,n,i)});default:for(o=new Array(s-1),f=0;f<o.length;)o[f++]=arguments[f];return e.nextTick(function(){t.apply(null,o)})}}}:t.exports=e}).call(this,r(9))},function(t,e,r){var n=r(0).Buffer;function i(t){n.isBuffer(t)||(t=n.from(t));for(var e=t.length/4|0,r=new Array(e),i=0;i<e;i++)r[i]=t.readUInt32BE(4*i);return r}function o(t){for(;0<t.length;t++)t[0]=0}function f(t,e,r,n,i){for(var o,f,s,a,u=r[0],h=r[1],c=r[2],l=r[3],p=t[0]^e[0],d=t[1]^e[1],g=t[2]^e[2],y=t[3]^e[3],v=4,b=1;b<i;b++)o=u[p>>>24]^h[d>>>16&255]^c[g>>>8&255]^l[255&y]^e[v++],f=u[d>>>24]^h[g>>>16&255]^c[y>>>8&255]^l[255&p]^e[v++],s=u[g>>>24]^h[y>>>16&255]^c[p>>>8&255]^l[255&d]^e[v++],a=u[y>>>24]^h[p>>>16&255]^c[d>>>8&255]^l[255&g]^e[v++],p=o,d=f,g=s,y=a;return o=(n[p>>>24]<<24|n[d>>>16&255]<<16|n[g>>>8&255]<<8|n[255&y])^e[v++],f=(n[d>>>24]<<24|n[g>>>16&255]<<16|n[y>>>8&255]<<8|n[255&p])^e[v++],s=(n[g>>>24]<<24|n[y>>>16&255]<<16|n[p>>>8&255]<<8|n[255&d])^e[v++],a=(n[y>>>24]<<24|n[p>>>16&255]<<16|n[d>>>8&255]<<8|n[255&g])^e[v++],[o>>>=0,f>>>=0,s>>>=0,a>>>=0]}var s=[0,1,2,4,8,16,32,64,128,27,54],a=function(){for(var t=new Array(256),e=0;e<256;e++)t[e]=e<128?e<<1:e<<1^283;for(var r=[],n=[],i=[[],[],[],[]],o=[[],[],[],[]],f=0,s=0,a=0;a<256;++a){var u=s^s<<1^s<<2^s<<3^s<<4;u=u>>>8^255&u^99,r[f]=u,n[u]=f;var h=t[f],c=t[h],l=t[c],p=257*t[u]^16843008*u;i[0][f]=p<<24|p>>>8,i[1][f]=p<<16|p>>>16,i[2][f]=p<<8|p>>>24,i[3][f]=p,p=16843009*l^65537*c^257*h^16843008*f,o[0][u]=p<<24|p>>>8,o[1][u]=p<<16|p>>>16,o[2][u]=p<<8|p>>>24,o[3][u]=p,0===f?f=s=1:(f=h^t[t[t[l^h]]],s^=t[t[s]])}return{SBOX:r,INV_SBOX:n,SUB_MIX:i,INV_SUB_MIX:o}}();function u(t){this._key=i(t),this._reset()}u.blockSize=16,u.keySize=32,u.prototype.blockSize=u.blockSize,u.prototype.keySize=u.keySize,u.prototype._reset=function(){for(var t=this._key,e=t.length,r=e+6,n=4*(r+1),i=[],o=0;o<e;o++)i[o]=t[o];for(o=e;o<n;o++){var f=i[o-1];o%e==0?(f=f<<8|f>>>24,f=a.SBOX[f>>>24]<<24|a.SBOX[f>>>16&255]<<16|a.SBOX[f>>>8&255]<<8|a.SBOX[255&f],f^=s[o/e|0]<<24):e>6&&o%e==4&&(f=a.SBOX[f>>>24]<<24|a.SBOX[f>>>16&255]<<16|a.SBOX[f>>>8&255]<<8|a.SBOX[255&f]),i[o]=i[o-e]^f}for(var u=[],h=0;h<n;h++){var c=n-h,l=i[c-(h%4?0:4)];u[h]=h<4||c<=4?l:a.INV_SUB_MIX[0][a.SBOX[l>>>24]]^a.INV_SUB_MIX[1][a.SBOX[l>>>16&255]]^a.INV_SUB_MIX[2][a.SBOX[l>>>8&255]]^a.INV_SUB_MIX[3][a.SBOX[255&l]]}this._nRounds=r,this._keySchedule=i,this._invKeySchedule=u},u.prototype.encryptBlockRaw=function(t){return f(t=i(t),this._keySchedule,a.SUB_MIX,a.SBOX,this._nRounds)},u.prototype.encryptBlock=function(t){var e=this.encryptBlockRaw(t),r=n.allocUnsafe(16);return r.writeUInt32BE(e[0],0),r.writeUInt32BE(e[1],4),r.writeUInt32BE(e[2],8),r.writeUInt32BE(e[3],12),r},u.prototype.decryptBlock=function(t){var e=(t=i(t))[1];t[1]=t[3],t[3]=e;var r=f(t,this._invKeySchedule,a.INV_SUB_MIX,a.INV_SBOX,this._nRounds),o=n.allocUnsafe(16);return o.writeUInt32BE(r[0],0),o.writeUInt32BE(r[3],4),o.writeUInt32BE(r[2],8),o.writeUInt32BE(r[1],12),o},u.prototype.scrub=function(){o(this._keySchedule),o(this._invKeySchedule),o(this._key)},t.exports.AES=u},function(t,e,r){"use strict";var n=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],n=!0,i=!1,o=void 0;try{for(var f,s=t[Symbol.iterator]();!(n=(f=s.next()).done)&&(r.push(f.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var o=r(31),f=o.Point,s=o.getCurveByName("secp256k1"),a=r(4),u=r(3),h=r(8),c=r(13),l=r(14),p=r(25),d=r(131);s.G,s.n;function g(t){if("string"==typeof t)return g.fromString(t);if(Buffer.isBuffer(t))return g.fromBuffer(t);if("object"===(void 0===t?"undefined":i(t))&&a.isBigInteger(t.d))return g(t.d);if(!a.isBigInteger(t))throw new TypeError("Invalid private key");function e(){var t=n();return t=Buffer.concat([new Buffer([128]),t]),l.checkEncode(t,"sha256x2")}var r=void 0;function n(){return t.toBuffer(32)}return{d:t,toWif:e,toString:function(){return e()},toPublic:function(){if(r)return r;var e=s.G.multiply(t);return r=c.fromPoint(e)},toBuffer:n,getSharedSecret:function(t){var e=(t=c(t)).toUncompressed().toBuffer(),r=f.fromAffine(s,a.fromBuffer(e.slice(1,33)),a.fromBuffer(e.slice(33,65))),i=n(),o=r.multiply(a.fromBuffer(i)).affineX.toBuffer({size:32});return h.sha512(o)},getChildKey:function(t){return g(p("sha256").update(n()).update(t).digest())}}}function y(t){u.equal(void 0===t?"undefined":i(t),"string","privateStr");var e=t.match(/^PVT_([A-Za-z0-9]+)_([A-Za-z0-9]+)$/);if(null===e){var r=l.checkDecode(t,"sha256x2"),o=r.readUInt8(0);u.equal(128,o,"Expected version 128, instead got "+o);return{privateKey:g.fromBuffer(r.slice(1)),format:"WIF",keyType:"K1"}}u(3===e.length,"Expecting private key like: PVT_K1_base58privateKey..");var f=n(e,3),s=f[1],a=f[2];return u.equal(s,"K1","K1 private key expected"),{privateKey:g.fromBuffer(l.checkDecode(a,s)),format:"PVT",keyType:s}}t.exports=g,g.fromHex=function(t){return g.fromBuffer(new Buffer(t,"hex"))},g.fromBuffer=function(t){if(!Buffer.isBuffer(t))throw new Error("Expecting parameter to be a Buffer type");if(33===t.length&&1===t[32]&&(t=t.slice(0,-1)),32!==t.length)throw new Error("Expecting 32 bytes, instead got "+t.length);return g(a.fromBuffer(t))},g.fromSeed=function(t){if("string"!=typeof t)throw new Error("seed must be of type string");return g.fromBuffer(h.sha256(t))},g.isWif=function(t){try{return u("WIF"===y(t).format),!0}catch(t){return!1}},g.isValid=function(t){try{return g(t),!0}catch(t){return!1}},g.fromWif=function(t){return console.log("PrivateKey.fromWif is deprecated, please use PrivateKey.fromString"),g.fromString(t)},g.fromString=function(t){return y(t).privateKey},g.randomKey=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return g.initialize().then(function(){return g.fromBuffer(l.random32ByteBuffer({cpuEntropyBits:t}))})},g.unsafeRandomKey=function(){return Promise.resolve(g.fromBuffer(l.random32ByteBuffer({safe:!1})))};var v=!1;g.initialize=d(function(){v||(function(){var t=g(h.sha256("")),e="key comparison test failed on a known private key";u.equal(t.toWif(),"5KYZdUEo39z3FPrtuX2QbbwGnNP5zTd7yyr2SC1j299sBCnWjss",e),u.equal(t.toString(),"5KYZdUEo39z3FPrtuX2QbbwGnNP5zTd7yyr2SC1j299sBCnWjss",e);var r=t.toPublic();u.equal(r.toString(),"EOS859gxfnXyUriMgUeThh1fWv3oqcpLFyHa3TfFYC4PK2HqhToVM","pubkey string comparison test failed on a known public key"),b(function(){return g.fromString(t.toWif())},"converting known wif from string"),b(function(){return g.fromString(t.toString())},"converting known pvt from string"),b(function(){return c.fromString(r.toString())},"converting known public key from string"),!0}(),l.addEntropy.apply(l,function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}(l.cpuEntropy())),u(l.entropyCount()>=128,"insufficient entropy"),v=!0)});var b=function(t,e){try{t()}catch(t){throw t.message=e+" ==> "+t.message,t}}},function(t,e,r){var n=r(21).ExtBuffer,i=r(76),o=r(77),f=r(16);function s(){var t=this.options;return this.encode=function(t){var e=o.getWriteType(t);return function(t,r){var n=e[typeof r];if(!n)throw new Error('Unsupported type "'+typeof r+'": '+r);n(t,r)}}(t),t&&t.preset&&i.setExtPackers(this),this}f.install({addExtPacker:function(t,e,r){r=f.filter(r);var i=e.name;if(i&&"Object"!==i){var o=this.extPackers||(this.extPackers={});o[i]=a}else{var s=this.extEncoderList||(this.extEncoderList=[]);s.unshift([e,a])}function a(e){return r&&(e=r(e)),new n(e,t)}},getExtPacker:function(t){var e=this.extPackers||(this.extPackers={}),r=t.constructor,n=r&&r.name&&e[r.name];if(n)return n;for(var i=this.extEncoderList||(this.extEncoderList=[]),o=i.length,f=0;f<o;f++){var s=i[f];if(r===s[0])return s[1]}},init:s}),e.preset=s.call(f.preset)},function(t,e,r){e.ExtBuffer=function t(e,r){if(!(this instanceof t))return new t(e,r);this.buffer=n.from(e);this.type=r};var n=r(2)},function(t,e,r){var n=r(75);e.copy=a,e.slice=u,e.toString=function(t,e,r){return(!f&&i.isBuffer(this)?this.toString:n.toString).apply(this,arguments)},e.write=function(t){return function(){return(this[t]||n[t]).apply(this,arguments)}}("write");var i=r(2),o=i.global,f=i.hasBuffer&&"TYPED_ARRAY_SUPPORT"in o,s=f&&!o.TYPED_ARRAY_SUPPORT;function a(t,e,r,o){var f=i.isBuffer(this),a=i.isBuffer(t);if(f&&a)return this.copy(t,e,r,o);if(s||f||a||!i.isView(this)||!i.isView(t))return n.copy.call(this,t,e,r,o);var h=r||null!=o?u.call(this,r,o):this;return t.set(h,e),h.length}function u(t,e){var r=this.slice||!s&&this.subarray;if(r)return r.call(this,t,e);var n=i.alloc.call(this,e-t);return a.call(this,n,0,t,e),n}},function(t,e,r){!function(t){var e,r="undefined",n=r!==typeof Buffer&&Buffer,i=r!==typeof Uint8Array&&Uint8Array,o=r!==typeof ArrayBuffer&&ArrayBuffer,f=[0,0,0,0,0,0,0,0],s=Array.isArray||function(t){return!!t&&"[object Array]"==Object.prototype.toString.call(t)},a=4294967296,u=16777216;function h(s,h,_){var E=h?0:4,B=h?4:0,T=h?0:3,S=h?1:2,I=h?2:1,x=h?3:0,k=h?v:m,A=h?b:w,U=R.prototype,L="is"+s,O="_"+L;return U.buffer=void 0,U.offset=0,U[O]=!0,U.toNumber=C,U.toString=function(t){var e=this.buffer,r=this.offset,n=M(e,r+E),i=M(e,r+B),o="",f=!_&&2147483648&n;f&&(n=~n,i=a-i);t=t||10;for(;;){var s=n%t*a+i;if(n=Math.floor(n/t),i=Math.floor(s/t),o=(s%t).toString(t)+o,!n&&!i)break}f&&(o="-"+o);return o},U.toJSON=C,U.toArray=c,n&&(U.toBuffer=l),i&&(U.toArrayBuffer=p),R[L]=function(t){return!(!t||!t[O])},t[s]=R,R;function R(t,n,s,u){return this instanceof R?function(t,n,s,u,h){i&&o&&(n instanceof o&&(n=new i(n)),u instanceof o&&(u=new i(u)));if(!(n||s||u||e))return void(t.buffer=y(f,0));if(!d(n,s)){var c=e||Array;h=s,u=n,s=0,n=new c(8)}if(t.buffer=n,t.offset=s|=0,r===typeof u)return;"string"==typeof u?function(t,e,r,n){var i=0,o=r.length,f=0,s=0;"-"===r[0]&&i++;var u=i;for(;i<o;){var h=parseInt(r[i++],n);if(!(h>=0))break;s=s*n+h,f=f*n+Math.floor(s/a),s%=a}u&&(f=~f,s?s=a-s:f++);D(t,e+E,f),D(t,e+B,s)}(n,s,u,h||10):d(u,h)?g(n,s,u,h):"number"==typeof h?(D(n,s+E,u),D(n,s+B,h)):u>0?k(n,s,u):u<0?A(n,s,u):g(n,s,f,0)}(this,t,n,s,u):new R(t,n,s,u)}function C(){var t=this.buffer,e=this.offset,r=M(t,e+E),n=M(t,e+B);return _||(r|=0),r?r*a+n:n}function D(t,e,r){t[e+x]=255&r,r>>=8,t[e+I]=255&r,r>>=8,t[e+S]=255&r,r>>=8,t[e+T]=255&r}function M(t,e){return t[e+T]*u+(t[e+S]<<16)+(t[e+I]<<8)+t[e+x]}}function c(t){var r=this.buffer,n=this.offset;return e=null,!1!==t&&0===n&&8===r.length&&s(r)?r:y(r,n)}function l(t){var r=this.buffer,i=this.offset;if(e=n,!1!==t&&0===i&&8===r.length&&Buffer.isBuffer(r))return r;var o=new n(8);return g(o,0,r,i),o}function p(t){var r=this.buffer,n=this.offset,f=r.buffer;if(e=i,!1!==t&&0===n&&f instanceof o&&8===f.byteLength)return f;var s=new i(8);return g(s,0,r,n),s.buffer}function d(t,e){var r=t&&t.length;return e|=0,r&&e+8<=r&&"string"!=typeof t[e]}function g(t,e,r,n){e|=0,n|=0;for(var i=0;i<8;i++)t[e++]=255&r[n++]}function y(t,e){return Array.prototype.slice.call(t,e,e+8)}function v(t,e,r){for(var n=e+8;n>e;)t[--n]=255&r,r/=256}function b(t,e,r){var n=e+8;for(r++;n>e;)t[--n]=255&-r^255,r/=256}function m(t,e,r){for(var n=e+8;e<n;)t[e++]=255&r,r/=256}function w(t,e,r){var n=e+8;for(r++;e<n;)t[e++]=255&-r^255,r/=256}h("Uint64BE",!0,!0),h("Int64BE",!0,!1),h("Uint64LE",!1,!0),h("Int64LE",!1,!1)}("string"!=typeof e.nodeName?e:this||{})},function(t,e,r){var n=r(21).ExtBuffer,i=r(79),o=r(40).readUint8,f=r(80),s=r(16);function a(){var t=this.options;return this.decode=function(t){var e=f.getReadToken(t);return function(t){var r=o(t),n=e[r];if(!n)throw new Error("Invalid type: "+(r?"0x"+r.toString(16):r));return n(t)}}(t),t&&t.preset&&i.setExtUnpackers(this),this}s.install({addExtUnpacker:function(t,e){(this.extUnpackers||(this.extUnpackers=[]))[t]=s.filter(e)},getExtUnpacker:function(t){return(this.extUnpackers||(this.extUnpackers=[]))[t]||function(e){return new n(e,t)}},init:a}),e.preset=a.call(s.preset)},function(t,e,r){"use strict";var n=r(1),i=r(26),o=r(49),f=r(50),s=r(7);function a(t){s.call(this,"digest"),this._hash=t}n(a,s),a.prototype._update=function(t){this._hash.update(t)},a.prototype._final=function(){return this._hash.digest()},t.exports=function(t){return"md5"===(t=t.toLowerCase())?new i:"rmd160"===t||"ripemd160"===t?new o:new a(f(t))}},function(t,e,r){"use strict";var n=r(1),i=r(42),o=r(0).Buffer,f=new Array(16);function s(){i.call(this,64),this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878}function a(t,e){return t<<e|t>>>32-e}function u(t,e,r,n,i,o,f){return a(t+(e&r|~e&n)+i+o|0,f)+e|0}function h(t,e,r,n,i,o,f){return a(t+(e&n|r&~n)+i+o|0,f)+e|0}function c(t,e,r,n,i,o,f){return a(t+(e^r^n)+i+o|0,f)+e|0}function l(t,e,r,n,i,o,f){return a(t+(r^(e|~n))+i+o|0,f)+e|0}n(s,i),s.prototype._update=function(){for(var t=f,e=0;e<16;++e)t[e]=this._block.readInt32LE(4*e);var r=this._a,n=this._b,i=this._c,o=this._d;r=u(r,n,i,o,t[0],3614090360,7),o=u(o,r,n,i,t[1],3905402710,12),i=u(i,o,r,n,t[2],606105819,17),n=u(n,i,o,r,t[3],3250441966,22),r=u(r,n,i,o,t[4],4118548399,7),o=u(o,r,n,i,t[5],1200080426,12),i=u(i,o,r,n,t[6],2821735955,17),n=u(n,i,o,r,t[7],4249261313,22),r=u(r,n,i,o,t[8],1770035416,7),o=u(o,r,n,i,t[9],2336552879,12),i=u(i,o,r,n,t[10],4294925233,17),n=u(n,i,o,r,t[11],2304563134,22),r=u(r,n,i,o,t[12],1804603682,7),o=u(o,r,n,i,t[13],4254626195,12),i=u(i,o,r,n,t[14],2792965006,17),r=h(r,n=u(n,i,o,r,t[15],1236535329,22),i,o,t[1],4129170786,5),o=h(o,r,n,i,t[6],3225465664,9),i=h(i,o,r,n,t[11],643717713,14),n=h(n,i,o,r,t[0],3921069994,20),r=h(r,n,i,o,t[5],3593408605,5),o=h(o,r,n,i,t[10],38016083,9),i=h(i,o,r,n,t[15],3634488961,14),n=h(n,i,o,r,t[4],3889429448,20),r=h(r,n,i,o,t[9],568446438,5),o=h(o,r,n,i,t[14],3275163606,9),i=h(i,o,r,n,t[3],4107603335,14),n=h(n,i,o,r,t[8],1163531501,20),r=h(r,n,i,o,t[13],2850285829,5),o=h(o,r,n,i,t[2],4243563512,9),i=h(i,o,r,n,t[7],1735328473,14),r=c(r,n=h(n,i,o,r,t[12],2368359562,20),i,o,t[5],4294588738,4),o=c(o,r,n,i,t[8],2272392833,11),i=c(i,o,r,n,t[11],1839030562,16),n=c(n,i,o,r,t[14],4259657740,23),r=c(r,n,i,o,t[1],2763975236,4),o=c(o,r,n,i,t[4],1272893353,11),i=c(i,o,r,n,t[7],4139469664,16),n=c(n,i,o,r,t[10],3200236656,23),r=c(r,n,i,o,t[13],681279174,4),o=c(o,r,n,i,t[0],3936430074,11),i=c(i,o,r,n,t[3],3572445317,16),n=c(n,i,o,r,t[6],76029189,23),r=c(r,n,i,o,t[9],3654602809,4),o=c(o,r,n,i,t[12],3873151461,11),i=c(i,o,r,n,t[15],530742520,16),r=l(r,n=c(n,i,o,r,t[2],3299628645,23),i,o,t[0],4096336452,6),o=l(o,r,n,i,t[7],1126891415,10),i=l(i,o,r,n,t[14],2878612391,15),n=l(n,i,o,r,t[5],4237533241,21),r=l(r,n,i,o,t[12],1700485571,6),o=l(o,r,n,i,t[3],2399980690,10),i=l(i,o,r,n,t[10],4293915773,15),n=l(n,i,o,r,t[1],2240044497,21),r=l(r,n,i,o,t[8],1873313359,6),o=l(o,r,n,i,t[15],4264355552,10),i=l(i,o,r,n,t[6],2734768916,15),n=l(n,i,o,r,t[13],1309151649,21),r=l(r,n,i,o,t[4],4149444226,6),o=l(o,r,n,i,t[11],3174756917,10),i=l(i,o,r,n,t[2],718787259,15),n=l(n,i,o,r,t[9],3951481745,21),this._a=this._a+r|0,this._b=this._b+n|0,this._c=this._c+i|0,this._d=this._d+o|0},s.prototype._digest=function(){this._block[this._blockOffset++]=128,this._blockOffset>56&&(this._block.fill(0,this._blockOffset,64),this._update(),this._blockOffset=0),this._block.fill(0,this._blockOffset,56),this._block.writeUInt32LE(this._length[0],56),this._block.writeUInt32LE(this._length[1],60),this._update();var t=o.allocUnsafe(16);return t.writeInt32LE(this._a,0),t.writeInt32LE(this._b,4),t.writeInt32LE(this._c,8),t.writeInt32LE(this._d,12),t},t.exports=s},function(t,e,r){"use strict";var n,i="object"==typeof Reflect?Reflect:null,o=i&&"function"==typeof i.apply?i.apply:function(t,e,r){return Function.prototype.apply.call(t,e,r)};n=i&&"function"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var f=Number.isNaN||function(t){return t!=t};function s(){s.init.call(this)}t.exports=s,s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var a=10;function u(t){return void 0===t._maxListeners?s.defaultMaxListeners:t._maxListeners}function h(t,e,r,n){var i,o,f,s;if("function"!=typeof r)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof r);if(void 0===(o=t._events)?(o=t._events=Object.create(null),t._eventsCount=0):(void 0!==o.newListener&&(t.emit("newListener",e,r.listener?r.listener:r),o=t._events),f=o[e]),void 0===f)f=o[e]=r,++t._eventsCount;else if("function"==typeof f?f=o[e]=n?[r,f]:[f,r]:n?f.unshift(r):f.push(r),(i=u(t))>0&&f.length>i&&!f.warned){f.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+f.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=t,a.type=e,a.count=f.length,s=a,console&&console.warn&&console.warn(s)}return t}function c(t,e,r){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},i=function(){for(var t=[],e=0;e<arguments.length;e++)t.push(arguments[e]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,o(this.listener,this.target,t))}.bind(n);return i.listener=r,n.wrapFn=i,i}function l(t,e,r){var n=t._events;if(void 0===n)return[];var i=n[e];return void 0===i?[]:"function"==typeof i?r?[i.listener||i]:[i]:r?function(t){for(var e=new Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}(i):d(i,i.length)}function p(t){var e=this._events;if(void 0!==e){var r=e[t];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function d(t,e){for(var r=new Array(e),n=0;n<e;++n)r[n]=t[n];return r}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(t){if("number"!=typeof t||t<0||f(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");a=t}}),s.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||f(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},s.prototype.getMaxListeners=function(){return u(this)},s.prototype.emit=function(t){for(var e=[],r=1;r<arguments.length;r++)e.push(arguments[r]);var n="error"===t,i=this._events;if(void 0!==i)n=n&&void 0===i.error;else if(!n)return!1;if(n){var f;if(e.length>0&&(f=e[0]),f instanceof Error)throw f;var s=new Error("Unhandled error."+(f?" ("+f.message+")":""));throw s.context=f,s}var a=i[t];if(void 0===a)return!1;if("function"==typeof a)o(a,this,e);else{var u=a.length,h=d(a,u);for(r=0;r<u;++r)o(h[r],this,e)}return!0},s.prototype.addListener=function(t,e){return h(this,t,e,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(t,e){return h(this,t,e,!0)},s.prototype.once=function(t,e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);return this.on(t,c(this,t,e)),this},s.prototype.prependOnceListener=function(t,e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);return this.prependListener(t,c(this,t,e)),this},s.prototype.removeListener=function(t,e){var r,n,i,o,f;if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e);if(void 0===(n=this._events))return this;if(void 0===(r=n[t]))return this;if(r===e||r.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete n[t],n.removeListener&&this.emit("removeListener",t,r.listener||e));else if("function"!=typeof r){for(i=-1,o=r.length-1;o>=0;o--)if(r[o]===e||r[o].listener===e){f=r[o].listener,i=o;break}if(i<0)return this;0===i?r.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(r,i),1===r.length&&(n[t]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",t,f||e)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(t){var e,r,n;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[t]),this;if(0===arguments.length){var i,o=Object.keys(r);for(n=0;n<o.length;++n)"removeListener"!==(i=o[n])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=r[t]))this.removeListener(t,e);else if(void 0!==e)for(n=e.length-1;n>=0;n--)this.removeListener(t,e[n]);return this},s.prototype.listeners=function(t){return l(this,t,!0)},s.prototype.rawListeners=function(t){return l(this,t,!1)},s.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):p.call(t,e)},s.prototype.listenerCount=p,s.prototype.eventNames=function(){return this._eventsCount>0?n(this._events):[]}},function(t,e,r){(e=t.exports=r(45)).Stream=e,e.Readable=e,e.Writable=r(29),e.Duplex=r(6),e.Transform=r(48),e.PassThrough=r(96)},function(t,e,r){"use strict";(function(e,n,i){var o=r(17);function f(t){var e=this;this.next=null,this.entry=null,this.finish=function(){!function(t,e,r){var n=t.entry;t.entry=null;for(;n;){var i=n.callback;e.pendingcb--,i(r),n=n.next}e.corkedRequestsFree?e.corkedRequestsFree.next=t:e.corkedRequestsFree=t}(e,t)}}t.exports=b;var s,a=!e.browser&&["v0.10","v0.9."].indexOf(e.version.slice(0,5))>-1?n:o.nextTick;b.WritableState=v;var u=r(11);u.inherits=r(1);var h={deprecate:r(95)},c=r(46),l=r(0).Buffer,p=i.Uint8Array||function(){};var d,g=r(47);function y(){}function v(t,e){s=s||r(6),t=t||{};var n=e instanceof s;this.objectMode=!!t.objectMode,n&&(this.objectMode=this.objectMode||!!t.writableObjectMode);var i=t.highWaterMark,u=t.writableHighWaterMark,h=this.objectMode?16:16384;this.highWaterMark=i||0===i?i:n&&(u||0===u)?u:h,this.highWaterMark=Math.floor(this.highWaterMark),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var c=!1===t.decodeStrings;this.decodeStrings=!c,this.defaultEncoding=t.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(t){!function(t,e){var r=t._writableState,n=r.sync,i=r.writecb;if(function(t){t.writing=!1,t.writecb=null,t.length-=t.writelen,t.writelen=0}(r),e)!function(t,e,r,n,i){--e.pendingcb,r?(o.nextTick(i,n),o.nextTick(T,t,e),t._writableState.errorEmitted=!0,t.emit("error",n)):(i(n),t._writableState.errorEmitted=!0,t.emit("error",n),T(t,e))}(t,r,n,e,i);else{var f=E(r);f||r.corked||r.bufferProcessing||!r.bufferedRequest||_(t,r),n?a(w,t,r,f,i):w(t,r,f,i)}}(e,t)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new f(this)}function b(t){if(s=s||r(6),!(d.call(b,this)||this instanceof s))return new b(t);this._writableState=new v(t,this),this.writable=!0,t&&("function"==typeof t.write&&(this._write=t.write),"function"==typeof t.writev&&(this._writev=t.writev),"function"==typeof t.destroy&&(this._destroy=t.destroy),"function"==typeof t.final&&(this._final=t.final)),c.call(this)}function m(t,e,r,n,i,o,f){e.writelen=n,e.writecb=f,e.writing=!0,e.sync=!0,r?t._writev(i,e.onwrite):t._write(i,o,e.onwrite),e.sync=!1}function w(t,e,r,n){r||function(t,e){0===e.length&&e.needDrain&&(e.needDrain=!1,t.emit("drain"))}(t,e),e.pendingcb--,n(),T(t,e)}function _(t,e){e.bufferProcessing=!0;var r=e.bufferedRequest;if(t._writev&&r&&r.next){var n=e.bufferedRequestCount,i=new Array(n),o=e.corkedRequestsFree;o.entry=r;for(var s=0,a=!0;r;)i[s]=r,r.isBuf||(a=!1),r=r.next,s+=1;i.allBuffers=a,m(t,e,!0,e.length,i,"",o.finish),e.pendingcb++,e.lastBufferedRequest=null,o.next?(e.corkedRequestsFree=o.next,o.next=null):e.corkedRequestsFree=new f(e),e.bufferedRequestCount=0}else{for(;r;){var u=r.chunk,h=r.encoding,c=r.callback;if(m(t,e,!1,e.objectMode?1:u.length,u,h,c),r=r.next,e.bufferedRequestCount--,e.writing)break}null===r&&(e.lastBufferedRequest=null)}e.bufferedRequest=r,e.bufferProcessing=!1}function E(t){return t.ending&&0===t.length&&null===t.bufferedRequest&&!t.finished&&!t.writing}function B(t,e){t._final(function(r){e.pendingcb--,r&&t.emit("error",r),e.prefinished=!0,t.emit("prefinish"),T(t,e)})}function T(t,e){var r=E(e);return r&&(!function(t,e){e.prefinished||e.finalCalled||("function"==typeof t._final?(e.pendingcb++,e.finalCalled=!0,o.nextTick(B,t,e)):(e.prefinished=!0,t.emit("prefinish")))}(t,e),0===e.pendingcb&&(e.finished=!0,t.emit("finish"))),r}u.inherits(b,c),v.prototype.getBuffer=function(){for(var t=this.bufferedRequest,e=[];t;)e.push(t),t=t.next;return e},function(){try{Object.defineProperty(v.prototype,"buffer",{get:h.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(t){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(d=Function.prototype[Symbol.hasInstance],Object.defineProperty(b,Symbol.hasInstance,{value:function(t){return!!d.call(this,t)||this===b&&(t&&t._writableState instanceof v)}})):d=function(t){return t instanceof this},b.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))},b.prototype.write=function(t,e,r){var n,i=this._writableState,f=!1,s=!i.objectMode&&(n=t,l.isBuffer(n)||n instanceof p);return s&&!l.isBuffer(t)&&(t=function(t){return l.from(t)}(t)),"function"==typeof e&&(r=e,e=null),s?e="buffer":e||(e=i.defaultEncoding),"function"!=typeof r&&(r=y),i.ended?function(t,e){var r=new Error("write after end");t.emit("error",r),o.nextTick(e,r)}(this,r):(s||function(t,e,r,n){var i=!0,f=!1;return null===r?f=new TypeError("May not write null values to stream"):"string"==typeof r||void 0===r||e.objectMode||(f=new TypeError("Invalid non-string/buffer chunk")),f&&(t.emit("error",f),o.nextTick(n,f),i=!1),i}(this,i,t,r))&&(i.pendingcb++,f=function(t,e,r,n,i,o){if(!r){var f=function(t,e,r){t.objectMode||!1===t.decodeStrings||"string"!=typeof e||(e=l.from(e,r));return e}(e,n,i);n!==f&&(r=!0,i="buffer",n=f)}var s=e.objectMode?1:n.length;e.length+=s;var a=e.length<e.highWaterMark;a||(e.needDrain=!0);if(e.writing||e.corked){var u=e.lastBufferedRequest;e.lastBufferedRequest={chunk:n,encoding:i,isBuf:r,callback:o,next:null},u?u.next=e.lastBufferedRequest:e.bufferedRequest=e.lastBufferedRequest,e.bufferedRequestCount+=1}else m(t,e,!1,s,n,i,o);return a}(this,i,s,t,e,r)),f},b.prototype.cork=function(){this._writableState.corked++},b.prototype.uncork=function(){var t=this._writableState;t.corked&&(t.corked--,t.writing||t.corked||t.finished||t.bufferProcessing||!t.bufferedRequest||_(this,t))},b.prototype.setDefaultEncoding=function(t){if("string"==typeof t&&(t=t.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((t+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+t);return this._writableState.defaultEncoding=t,this},Object.defineProperty(b.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),b.prototype._write=function(t,e,r){r(new Error("_write() is not implemented"))},b.prototype._writev=null,b.prototype.end=function(t,e,r){var n=this._writableState;"function"==typeof t?(r=t,t=null,e=null):"function"==typeof e&&(r=e,e=null),null!=t&&this.write(t,e),n.corked&&(n.corked=1,this.uncork()),n.ending||n.finished||function(t,e,r){e.ending=!0,T(t,e),r&&(e.finished?o.nextTick(r):t.once("finish",r));e.ended=!0,t.writable=!1}(this,n,r)},Object.defineProperty(b.prototype,"destroyed",{get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(t){this._writableState&&(this._writableState.destroyed=t)}}),b.prototype.destroy=g.destroy,b.prototype._undestroy=g.undestroy,b.prototype._destroy=function(t,e){this.end(),e(t)}}).call(this,r(9),r(93).setImmediate,r(5))},function(t,e,r){"use strict";var n=r(0).Buffer,i=n.isEncoding||function(t){switch((t=""+t)&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function o(t){var e;switch(this.encoding=function(t){var e=function(t){if(!t)return"utf8";for(var e;;)switch(t){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return t;default:if(e)return;t=(""+t).toLowerCase(),e=!0}}(t);if("string"!=typeof e&&(n.isEncoding===i||!i(t)))throw new Error("Unknown encoding: "+t);return e||t}(t),this.encoding){case"utf16le":this.text=a,this.end=u,e=4;break;case"utf8":this.fillLast=s,e=4;break;case"base64":this.text=h,this.end=c,e=3;break;default:return this.write=l,void(this.end=p)}this.lastNeed=0,this.lastTotal=0,this.lastChar=n.allocUnsafe(e)}function f(t){return t<=127?0:t>>5==6?2:t>>4==14?3:t>>3==30?4:t>>6==2?-1:-2}function s(t){var e=this.lastTotal-this.lastNeed,r=function(t,e,r){if(128!=(192&e[0]))return t.lastNeed=0,"�";if(t.lastNeed>1&&e.length>1){if(128!=(192&e[1]))return t.lastNeed=1,"�";if(t.lastNeed>2&&e.length>2&&128!=(192&e[2]))return t.lastNeed=2,"�"}}(this,t);return void 0!==r?r:this.lastNeed<=t.length?(t.copy(this.lastChar,e,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(t.copy(this.lastChar,e,0,t.length),void(this.lastNeed-=t.length))}function a(t,e){if((t.length-e)%2==0){var r=t.toString("utf16le",e);if(r){var n=r.charCodeAt(r.length-1);if(n>=55296&&n<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1],r.slice(0,-1)}return r}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=t[t.length-1],t.toString("utf16le",e,t.length-1)}function u(t){var e=t&&t.length?this.write(t):"";if(this.lastNeed){var r=this.lastTotal-this.lastNeed;return e+this.lastChar.toString("utf16le",0,r)}return e}function h(t,e){var r=(t.length-e)%3;return 0===r?t.toString("base64",e):(this.lastNeed=3-r,this.lastTotal=3,1===r?this.lastChar[0]=t[t.length-1]:(this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1]),t.toString("base64",e,t.length-r))}function c(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+this.lastChar.toString("base64",0,3-this.lastNeed):e}function l(t){return t.toString(this.encoding)}function p(t){return t&&t.length?this.write(t):""}e.StringDecoder=o,o.prototype.write=function(t){if(0===t.length)return"";var e,r;if(this.lastNeed){if(void 0===(e=this.fillLast(t)))return"";r=this.lastNeed,this.lastNeed=0}else r=0;return r<t.length?e?e+this.text(t,r):this.text(t,r):e||""},o.prototype.end=function(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+"�":e},o.prototype.text=function(t,e){var r=function(t,e,r){var n=e.length-1;if(n<r)return 0;var i=f(e[n]);if(i>=0)return i>0&&(t.lastNeed=i-1),i;if(--n<r||-2===i)return 0;if((i=f(e[n]))>=0)return i>0&&(t.lastNeed=i-2),i;if(--n<r||-2===i)return 0;if((i=f(e[n]))>=0)return i>0&&(2===i?i=0:t.lastNeed=i-3),i;return 0}(this,t,e);if(!this.lastNeed)return t.toString("utf8",e);this.lastTotal=r;var n=t.length-(r-this.lastNeed);return t.copy(this.lastChar,0,n),t.toString("utf8",e,n)},o.prototype.fillLast=function(t){if(this.lastNeed<=t.length)return t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,t.length),this.lastNeed-=t.length}},function(t,e,r){var n=r(62),i=r(64),o=r(124);t.exports={Curve:i,Point:n,getCurveByName:o}},function(t,e,r){var n=r(70),i=r(85),o=r(25);e.encode=n.encode,e.decode=n.decode,e.stringify=i.stringify,e.parse=i.parse,e.sha256=function(t,e){"string"!=typeof t&&(t=i.stringify(t));var r=o("sha256").update(t);return e?r.digest(e):r.digest()}},function(t,e,r){e.encode=function(t,e){var r=new n(e);return r.write(t),r.read()};var n=r(34).EncodeBuffer},function(t,e,r){e.EncodeBuffer=i;var n=r(20).preset;function i(t){if(!(this instanceof i))return new i(t);if(t&&(this.options=t,t.codec)){var e=this.codec=t.codec;e.bufferish&&(this.bufferish=e.bufferish)}}r(37).FlexEncoder.mixin(i.prototype),i.prototype.codec=n,i.prototype.write=function(t){this.codec.encode(this,t)}},function(t,e){e.read=function(t,e,r,n,i){var o,f,s=8*i-n-1,a=(1<<s)-1,u=a>>1,h=-7,c=r?i-1:0,l=r?-1:1,p=t[e+c];for(c+=l,o=p&(1<<-h)-1,p>>=-h,h+=s;h>0;o=256*o+t[e+c],c+=l,h-=8);for(f=o&(1<<-h)-1,o>>=-h,h+=n;h>0;f=256*f+t[e+c],c+=l,h-=8);if(0===o)o=1-u;else{if(o===a)return f?NaN:1/0*(p?-1:1);f+=Math.pow(2,n),o-=u}return(p?-1:1)*f*Math.pow(2,o-n)},e.write=function(t,e,r,n,i,o){var f,s,a,u=8*o-i-1,h=(1<<u)-1,c=h>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,d=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,f=h):(f=Math.floor(Math.log(e)/Math.LN2),e*(a=Math.pow(2,-f))<1&&(f--,a*=2),(e+=f+c>=1?l/a:l*Math.pow(2,1-c))*a>=2&&(f++,a/=2),f+c>=h?(s=0,f=h):f+c>=1?(s=(e*a-1)*Math.pow(2,i),f+=c):(s=e*Math.pow(2,c-1)*Math.pow(2,i),f=0));i>=8;t[r+p]=255&s,p+=d,s/=256,i-=8);for(f=f<<i|s,u+=i;u>0;t[r+p]=255&f,p+=d,f/=256,u-=8);t[r+p-d]|=128*g}},function(t,e){for(var r=e.uint8=new Array(256),n=0;n<=255;n++)r[n]=i(n);function i(t){return function(e){var r=e.reserve(1);e.buffer[r]=t}}},function(t,e,r){e.FlexDecoder=s,e.FlexEncoder=a;var n=r(2),i=2048,o=65536,f="BUFFER_SHORTAGE";function s(){if(!(this instanceof s))return new s}function a(){if(!(this instanceof a))return new a}function u(){throw new Error("method not implemented: write()")}function h(){throw new Error("method not implemented: fetch()")}function c(){return this.buffers&&this.buffers.length?(this.flush(),this.pull()):this.fetch()}function l(t){(this.buffers||(this.buffers=[])).push(t)}function p(){return(this.buffers||(this.buffers=[])).shift()}function d(t){return function(e){for(var r in t)e[r]=t[r];return e}}s.mixin=d(function(){return{bufferish:n,write:function(t){var e=this.offset?n.prototype.slice.call(this.buffer,this.offset):this.buffer;this.buffer=e?t?this.bufferish.concat([e,t]):e:t,this.offset=0},fetch:h,flush:function(){for(;this.offset<this.buffer.length;){var t,e=this.offset;try{t=this.fetch()}catch(t){if(t&&t.message!=f)throw t;this.offset=e;break}this.push(t)}},push:l,pull:p,read:c,reserve:function(t){var e=this.offset,r=e+t;if(r>this.buffer.length)throw new Error(f);return this.offset=r,e},offset:0}}()),s.mixin(s.prototype),a.mixin=d(function(){return{bufferish:n,write:u,fetch:function(){var t=this.start;if(t<this.offset){var e=this.start=this.offset;return n.prototype.slice.call(this.buffer,t,e)}},flush:function(){for(;this.start<this.offset;){var t=this.fetch();t&&this.push(t)}},push:l,pull:function(){var t=this.buffers||(this.buffers=[]),e=t.length>1?this.bufferish.concat(t):t[0];return t.length=0,e},read:c,reserve:function(t){var e=0|t;if(this.buffer){var r=this.buffer.length,n=0|this.offset,i=n+e;if(i<r)return this.offset=i,n;this.flush(),t=Math.max(t,Math.min(2*r,this.maxBufferSize))}return t=Math.max(t,this.minBufferSize),this.buffer=this.bufferish.alloc(t),this.start=0,this.offset=e,0},send:function(t){var e=t.length;if(e>this.minBufferSize)this.flush(),this.push(t);else{var r=this.reserve(e);n.prototype.copy.call(t,this.buffer,r)}},maxBufferSize:o,minBufferSize:i,offset:0,start:0}}()),a.mixin(a.prototype)},function(t,e,r){e.decode=function(t,e){var r=new n(e);return r.write(t),r.read()};var n=r(39).DecodeBuffer},function(t,e,r){e.DecodeBuffer=i;var n=r(24).preset;function i(t){if(!(this instanceof i))return new i(t);if(t&&(this.options=t,t.codec)){var e=this.codec=t.codec;e.bufferish&&(this.bufferish=e.bufferish)}}r(37).FlexDecoder.mixin(i.prototype),i.prototype.codec=n,i.prototype.fetch=function(){return this.codec.decode(this)}},function(t,e,r){var n=r(35),i=r(23),o=i.Uint64BE,f=i.Int64BE;e.getReadFormat=function(t){var e=s.hasArrayBuffer&&t&&t.binarraybuffer,r=t&&t.int64;return{map:u&&t&&t.usemap?l:c,array:p,str:d,bin:e?y:g,ext:v,uint8:b,uint16:w,uint32:E,uint64:T(8,r?x:S),int8:m,int16:_,int32:B,int64:T(8,r?k:I),float32:T(4,A),float64:T(8,U)}},e.readUint8=b;var s=r(2),a=r(22),u="undefined"!=typeof Map,h=!0;function c(t,e){var r,n={},i=new Array(e),o=new Array(e),f=t.codec.decode;for(r=0;r<e;r++)i[r]=f(t),o[r]=f(t);for(r=0;r<e;r++)n[i[r]]=o[r];return n}function l(t,e){var r,n=new Map,i=new Array(e),o=new Array(e),f=t.codec.decode;for(r=0;r<e;r++)i[r]=f(t),o[r]=f(t);for(r=0;r<e;r++)n.set(i[r],o[r]);return n}function p(t,e){for(var r=new Array(e),n=t.codec.decode,i=0;i<e;i++)r[i]=n(t);return r}function d(t,e){var r=t.reserve(e),n=r+e;return a.toString.call(t.buffer,"utf-8",r,n)}function g(t,e){var r=t.reserve(e),n=r+e,i=a.slice.call(t.buffer,r,n);return s.from(i)}function y(t,e){var r=t.reserve(e),n=r+e,i=a.slice.call(t.buffer,r,n);return s.Uint8Array.from(i).buffer}function v(t,e){var r=t.reserve(e+1),n=t.buffer[r++],i=r+e,o=t.codec.getExtUnpacker(n);if(!o)throw new Error("Invalid ext type: "+(n?"0x"+n.toString(16):n));return o(a.slice.call(t.buffer,r,i))}function b(t){var e=t.reserve(1);return t.buffer[e]}function m(t){var e=t.reserve(1),r=t.buffer[e];return 128&r?r-256:r}function w(t){var e=t.reserve(2),r=t.buffer;return r[e++]<<8|r[e]}function _(t){var e=t.reserve(2),r=t.buffer,n=r[e++]<<8|r[e];return 32768&n?n-65536:n}function E(t){var e=t.reserve(4),r=t.buffer;return 16777216*r[e++]+(r[e++]<<16)+(r[e++]<<8)+r[e]}function B(t){var e=t.reserve(4),r=t.buffer;return r[e++]<<24|r[e++]<<16|r[e++]<<8|r[e]}function T(t,e){return function(r){var n=r.reserve(t);return e.call(r.buffer,n,h)}}function S(t){return new o(this,t).toNumber()}function I(t){return new f(this,t).toNumber()}function x(t){return new o(this,t)}function k(t){return new f(this,t)}function A(t){return n.read(this,t,!1,23,4)}function U(t){return n.read(this,t,!1,52,8)}},function(t,e,r){!function(e){t.exports=e;var r="listeners",n={on:function(t,e){return f(this,t).push(e),this},once:function(t,e){var r=this;return n.originalListener=e,f(r,t).push(n),r;function n(){o.call(r,t,n),e.apply(this,arguments)}},off:o,emit:function(t,e){var r=this,n=f(r,t,!0);if(!n)return!1;var i=arguments.length;if(1===i)n.forEach(function(t){t.call(r)});else if(2===i)n.forEach(function(t){t.call(r,e)});else{var o=Array.prototype.slice.call(arguments,1);n.forEach(function(t){t.apply(r,o)})}return!!n.length}};function i(t){for(var e in n)t[e]=n[e];return t}function o(t,e){var n;if(arguments.length){if(e){if(n=f(this,t,!0)){if(!(n=n.filter(function(t){return t!==e&&t.originalListener!==e})).length)return o.call(this,t);this[r][t]=n}}else if((n=this[r])&&(delete n[t],!Object.keys(n).length))return o.call(this)}else delete this[r];return this}function f(t,e,n){if(!n||t[r]){var i=t[r]||(t[r]={});return i[e]||(i[e]=[])}}i(e.prototype),e.mixin=i}(
/**
 * event-lite.js - Light-weight EventEmitter (less than 1KB when gzipped)
 *
 * @copyright Yusuke Kawasaki
 * @license MIT
 * @constructor
 * @see https://github.com/kawanet/event-lite
 * @see http://kawanet.github.io/event-lite/EventLite.html
 * @example
 * var EventLite = require("event-lite");
 *
 * function MyClass() {...}             // your class
 *
 * EventLite.mixin(MyClass.prototype);  // import event methods
 *
 * var obj = new MyClass();
 * obj.on("foo", function() {...});     // add event listener
 * obj.once("bar", function() {...});   // add one-time event listener
 * obj.emit("foo");                     // dispatch event
 * obj.emit("bar");                     // dispatch another event
 * obj.off("foo");                      // remove event listener
 */
function t(){if(!(this instanceof t))return new t})},function(t,e,r){"use strict";var n=r(0).Buffer,i=r(44).Transform;function o(t){i.call(this),this._block=n.allocUnsafe(t),this._blockSize=t,this._blockOffset=0,this._length=[0,0,0,0],this._finalized=!1}r(1)(o,i),o.prototype._transform=function(t,e,r){var n=null;try{this.update(t,e)}catch(t){n=t}r(n)},o.prototype._flush=function(t){var e=null;try{this.push(this.digest())}catch(t){e=t}t(e)},o.prototype.update=function(t,e){if(function(t,e){if(!n.isBuffer(t)&&"string"!=typeof t)throw new TypeError(e+" must be a string or a buffer")}(t,"Data"),this._finalized)throw new Error("Digest already called");n.isBuffer(t)||(t=n.from(t,e));for(var r=this._block,i=0;this._blockOffset+t.length-i>=this._blockSize;){for(var o=this._blockOffset;o<this._blockSize;)r[o++]=t[i++];this._update(),this._blockOffset=0}for(;i<t.length;)r[this._blockOffset++]=t[i++];for(var f=0,s=8*t.length;s>0;++f)this._length[f]+=s,(s=this._length[f]/4294967296|0)>0&&(this._length[f]-=4294967296*s);return this},o.prototype._update=function(){throw new Error("_update is not implemented")},o.prototype.digest=function(t){if(this._finalized)throw new Error("Digest already called");this._finalized=!0;var e=this._digest();void 0!==t&&(e=e.toString(t)),this._block.fill(0),this._blockOffset=0;for(var r=0;r<4;++r)this._length[r]=0;return e},o.prototype._digest=function(){throw new Error("_digest is not implemented")},t.exports=o},function(t,e){t.exports=Buffer},function(t,e,r){t.exports=i;var n=r(27).EventEmitter;function i(){n.call(this)}r(1)(i,n),i.Readable=r(28),i.Writable=r(97),i.Duplex=r(98),i.Transform=r(99),i.PassThrough=r(100),i.Stream=i,i.prototype.pipe=function(t,e){var r=this;function i(e){t.writable&&!1===t.write(e)&&r.pause&&r.pause()}function o(){r.readable&&r.resume&&r.resume()}r.on("data",i),t.on("drain",o),t._isStdio||e&&!1===e.end||(r.on("end",s),r.on("close",a));var f=!1;function s(){f||(f=!0,t.end())}function a(){f||(f=!0,"function"==typeof t.destroy&&t.destroy())}function u(t){if(h(),0===n.listenerCount(this,"error"))throw t}function h(){r.removeListener("data",i),t.removeListener("drain",o),r.removeListener("end",s),r.removeListener("close",a),r.removeListener("error",u),t.removeListener("error",u),r.removeListener("end",h),r.removeListener("close",h),t.removeListener("close",h)}return r.on("error",u),t.on("error",u),r.on("end",h),r.on("close",h),t.on("close",h),t.emit("pipe",r),t}},function(t,e,r){"use strict";(function(e,n){var i=r(17);t.exports=m;var o,f=r(15);m.ReadableState=b;r(27).EventEmitter;var s=function(t,e){return t.listeners(e).length},a=r(46),u=r(0).Buffer,h=e.Uint8Array||function(){};var c=r(11);c.inherits=r(1);var l=r(90),p=void 0;p=l&&l.debuglog?l.debuglog("stream"):function(){};var d,g=r(91),y=r(47);c.inherits(m,a);var v=["error","close","destroy","pause","resume"];function b(t,e){t=t||{};var n=e instanceof(o=o||r(6));this.objectMode=!!t.objectMode,n&&(this.objectMode=this.objectMode||!!t.readableObjectMode);var i=t.highWaterMark,f=t.readableHighWaterMark,s=this.objectMode?16:16384;this.highWaterMark=i||0===i?i:n&&(f||0===f)?f:s,this.highWaterMark=Math.floor(this.highWaterMark),this.buffer=new g,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.destroyed=!1,this.defaultEncoding=t.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,t.encoding&&(d||(d=r(30).StringDecoder),this.decoder=new d(t.encoding),this.encoding=t.encoding)}function m(t){if(o=o||r(6),!(this instanceof m))return new m(t);this._readableState=new b(t,this),this.readable=!0,t&&("function"==typeof t.read&&(this._read=t.read),"function"==typeof t.destroy&&(this._destroy=t.destroy)),a.call(this)}function w(t,e,r,n,i){var o,f=t._readableState;null===e?(f.reading=!1,function(t,e){if(e.ended)return;if(e.decoder){var r=e.decoder.end();r&&r.length&&(e.buffer.push(r),e.length+=e.objectMode?1:r.length)}e.ended=!0,T(t)}(t,f)):(i||(o=function(t,e){var r;n=e,u.isBuffer(n)||n instanceof h||"string"==typeof e||void 0===e||t.objectMode||(r=new TypeError("Invalid non-string/buffer chunk"));var n;return r}(f,e)),o?t.emit("error",o):f.objectMode||e&&e.length>0?("string"==typeof e||f.objectMode||Object.getPrototypeOf(e)===u.prototype||(e=function(t){return u.from(t)}(e)),n?f.endEmitted?t.emit("error",new Error("stream.unshift() after end event")):_(t,f,e,!0):f.ended?t.emit("error",new Error("stream.push() after EOF")):(f.reading=!1,f.decoder&&!r?(e=f.decoder.write(e),f.objectMode||0!==e.length?_(t,f,e,!1):I(t,f)):_(t,f,e,!1))):n||(f.reading=!1));return function(t){return!t.ended&&(t.needReadable||t.length<t.highWaterMark||0===t.length)}(f)}function _(t,e,r,n){e.flowing&&0===e.length&&!e.sync?(t.emit("data",r),t.read(0)):(e.length+=e.objectMode?1:r.length,n?e.buffer.unshift(r):e.buffer.push(r),e.needReadable&&T(t)),I(t,e)}Object.defineProperty(m.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(t){this._readableState&&(this._readableState.destroyed=t)}}),m.prototype.destroy=y.destroy,m.prototype._undestroy=y.undestroy,m.prototype._destroy=function(t,e){this.push(null),e(t)},m.prototype.push=function(t,e){var r,n=this._readableState;return n.objectMode?r=!0:"string"==typeof t&&((e=e||n.defaultEncoding)!==n.encoding&&(t=u.from(t,e),e=""),r=!0),w(this,t,e,!1,r)},m.prototype.unshift=function(t){return w(this,t,null,!0,!1)},m.prototype.isPaused=function(){return!1===this._readableState.flowing},m.prototype.setEncoding=function(t){return d||(d=r(30).StringDecoder),this._readableState.decoder=new d(t),this._readableState.encoding=t,this};var E=8388608;function B(t,e){return t<=0||0===e.length&&e.ended?0:e.objectMode?1:t!=t?e.flowing&&e.length?e.buffer.head.data.length:e.length:(t>e.highWaterMark&&(e.highWaterMark=function(t){return t>=E?t=E:(t--,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t++),t}(t)),t<=e.length?t:e.ended?e.length:(e.needReadable=!0,0))}function T(t){var e=t._readableState;e.needReadable=!1,e.emittedReadable||(p("emitReadable",e.flowing),e.emittedReadable=!0,e.sync?i.nextTick(S,t):S(t))}function S(t){p("emit readable"),t.emit("readable"),U(t)}function I(t,e){e.readingMore||(e.readingMore=!0,i.nextTick(x,t,e))}function x(t,e){for(var r=e.length;!e.reading&&!e.flowing&&!e.ended&&e.length<e.highWaterMark&&(p("maybeReadMore read 0"),t.read(0),r!==e.length);)r=e.length;e.readingMore=!1}function k(t){p("readable nexttick read 0"),t.read(0)}function A(t,e){e.reading||(p("resume read 0"),t.read(0)),e.resumeScheduled=!1,e.awaitDrain=0,t.emit("resume"),U(t),e.flowing&&!e.reading&&t.read(0)}function U(t){var e=t._readableState;for(p("flow",e.flowing);e.flowing&&null!==t.read(););}function L(t,e){return 0===e.length?null:(e.objectMode?r=e.buffer.shift():!t||t>=e.length?(r=e.decoder?e.buffer.join(""):1===e.buffer.length?e.buffer.head.data:e.buffer.concat(e.length),e.buffer.clear()):r=function(t,e,r){var n;t<e.head.data.length?(n=e.head.data.slice(0,t),e.head.data=e.head.data.slice(t)):n=t===e.head.data.length?e.shift():r?function(t,e){var r=e.head,n=1,i=r.data;t-=i.length;for(;r=r.next;){var o=r.data,f=t>o.length?o.length:t;if(f===o.length?i+=o:i+=o.slice(0,t),0===(t-=f)){f===o.length?(++n,r.next?e.head=r.next:e.head=e.tail=null):(e.head=r,r.data=o.slice(f));break}++n}return e.length-=n,i}(t,e):function(t,e){var r=u.allocUnsafe(t),n=e.head,i=1;n.data.copy(r),t-=n.data.length;for(;n=n.next;){var o=n.data,f=t>o.length?o.length:t;if(o.copy(r,r.length-t,0,f),0===(t-=f)){f===o.length?(++i,n.next?e.head=n.next:e.head=e.tail=null):(e.head=n,n.data=o.slice(f));break}++i}return e.length-=i,r}(t,e);return n}(t,e.buffer,e.decoder),r);var r}function O(t){var e=t._readableState;if(e.length>0)throw new Error('"endReadable()" called on non-empty stream');e.endEmitted||(e.ended=!0,i.nextTick(R,e,t))}function R(t,e){t.endEmitted||0!==t.length||(t.endEmitted=!0,e.readable=!1,e.emit("end"))}function C(t,e){for(var r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1}m.prototype.read=function(t){p("read",t),t=parseInt(t,10);var e=this._readableState,r=t;if(0!==t&&(e.emittedReadable=!1),0===t&&e.needReadable&&(e.length>=e.highWaterMark||e.ended))return p("read: emitReadable",e.length,e.ended),0===e.length&&e.ended?O(this):T(this),null;if(0===(t=B(t,e))&&e.ended)return 0===e.length&&O(this),null;var n,i=e.needReadable;return p("need readable",i),(0===e.length||e.length-t<e.highWaterMark)&&p("length less than watermark",i=!0),e.ended||e.reading?p("reading or ended",i=!1):i&&(p("do read"),e.reading=!0,e.sync=!0,0===e.length&&(e.needReadable=!0),this._read(e.highWaterMark),e.sync=!1,e.reading||(t=B(r,e))),null===(n=t>0?L(t,e):null)?(e.needReadable=!0,t=0):e.length-=t,0===e.length&&(e.ended||(e.needReadable=!0),r!==t&&e.ended&&O(this)),null!==n&&this.emit("data",n),n},m.prototype._read=function(t){this.emit("error",new Error("_read() is not implemented"))},m.prototype.pipe=function(t,e){var r=this,o=this._readableState;switch(o.pipesCount){case 0:o.pipes=t;break;case 1:o.pipes=[o.pipes,t];break;default:o.pipes.push(t)}o.pipesCount+=1,p("pipe count=%d opts=%j",o.pipesCount,e);var a=(!e||!1!==e.end)&&t!==n.stdout&&t!==n.stderr?h:m;function u(e,n){p("onunpipe"),e===r&&n&&!1===n.hasUnpiped&&(n.hasUnpiped=!0,p("cleanup"),t.removeListener("close",v),t.removeListener("finish",b),t.removeListener("drain",c),t.removeListener("error",y),t.removeListener("unpipe",u),r.removeListener("end",h),r.removeListener("end",m),r.removeListener("data",g),l=!0,!o.awaitDrain||t._writableState&&!t._writableState.needDrain||c())}function h(){p("onend"),t.end()}o.endEmitted?i.nextTick(a):r.once("end",a),t.on("unpipe",u);var c=function(t){return function(){var e=t._readableState;p("pipeOnDrain",e.awaitDrain),e.awaitDrain&&e.awaitDrain--,0===e.awaitDrain&&s(t,"data")&&(e.flowing=!0,U(t))}}(r);t.on("drain",c);var l=!1;var d=!1;function g(e){p("ondata"),d=!1,!1!==t.write(e)||d||((1===o.pipesCount&&o.pipes===t||o.pipesCount>1&&-1!==C(o.pipes,t))&&!l&&(p("false write response, pause",r._readableState.awaitDrain),r._readableState.awaitDrain++,d=!0),r.pause())}function y(e){p("onerror",e),m(),t.removeListener("error",y),0===s(t,"error")&&t.emit("error",e)}function v(){t.removeListener("finish",b),m()}function b(){p("onfinish"),t.removeListener("close",v),m()}function m(){p("unpipe"),r.unpipe(t)}return r.on("data",g),function(t,e,r){if("function"==typeof t.prependListener)return t.prependListener(e,r);t._events&&t._events[e]?f(t._events[e])?t._events[e].unshift(r):t._events[e]=[r,t._events[e]]:t.on(e,r)}(t,"error",y),t.once("close",v),t.once("finish",b),t.emit("pipe",r),o.flowing||(p("pipe resume"),r.resume()),t},m.prototype.unpipe=function(t){var e=this._readableState,r={hasUnpiped:!1};if(0===e.pipesCount)return this;if(1===e.pipesCount)return t&&t!==e.pipes?this:(t||(t=e.pipes),e.pipes=null,e.pipesCount=0,e.flowing=!1,t&&t.emit("unpipe",this,r),this);if(!t){var n=e.pipes,i=e.pipesCount;e.pipes=null,e.pipesCount=0,e.flowing=!1;for(var o=0;o<i;o++)n[o].emit("unpipe",this,r);return this}var f=C(e.pipes,t);return-1===f?this:(e.pipes.splice(f,1),e.pipesCount-=1,1===e.pipesCount&&(e.pipes=e.pipes[0]),t.emit("unpipe",this,r),this)},m.prototype.on=function(t,e){var r=a.prototype.on.call(this,t,e);if("data"===t)!1!==this._readableState.flowing&&this.resume();else if("readable"===t){var n=this._readableState;n.endEmitted||n.readableListening||(n.readableListening=n.needReadable=!0,n.emittedReadable=!1,n.reading?n.length&&T(this):i.nextTick(k,this))}return r},m.prototype.addListener=m.prototype.on,m.prototype.resume=function(){var t=this._readableState;return t.flowing||(p("resume"),t.flowing=!0,function(t,e){e.resumeScheduled||(e.resumeScheduled=!0,i.nextTick(A,t,e))}(this,t)),this},m.prototype.pause=function(){return p("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(p("pause"),this._readableState.flowing=!1,this.emit("pause")),this},m.prototype.wrap=function(t){var e=this,r=this._readableState,n=!1;for(var i in t.on("end",function(){if(p("wrapped end"),r.decoder&&!r.ended){var t=r.decoder.end();t&&t.length&&e.push(t)}e.push(null)}),t.on("data",function(i){(p("wrapped data"),r.decoder&&(i=r.decoder.write(i)),r.objectMode&&null==i)||(r.objectMode||i&&i.length)&&(e.push(i)||(n=!0,t.pause()))}),t)void 0===this[i]&&"function"==typeof t[i]&&(this[i]=function(e){return function(){return t[e].apply(t,arguments)}}(i));for(var o=0;o<v.length;o++)t.on(v[o],this.emit.bind(this,v[o]));return this._read=function(e){p("wrapped _read",e),n&&(n=!1,t.resume())},this},Object.defineProperty(m.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),m._fromList=L}).call(this,r(5),r(9))},function(t,e,r){t.exports=r(27).EventEmitter},function(t,e,r){"use strict";var n=r(17);function i(t,e){t.emit("error",e)}t.exports={destroy:function(t,e){var r=this,o=this._readableState&&this._readableState.destroyed,f=this._writableState&&this._writableState.destroyed;return o||f?(e?e(t):!t||this._writableState&&this._writableState.errorEmitted||n.nextTick(i,this,t),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(t||null,function(t){!e&&t?(n.nextTick(i,r,t),r._writableState&&(r._writableState.errorEmitted=!0)):e&&e(t)}),this)},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)}}},function(t,e,r){"use strict";t.exports=f;var n=r(6),i=r(11);function o(t,e){var r=this._transformState;r.transforming=!1;var n=r.writecb;if(!n)return this.emit("error",new Error("write callback called multiple times"));r.writechunk=null,r.writecb=null,null!=e&&this.push(e),n(t);var i=this._readableState;i.reading=!1,(i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}function f(t){if(!(this instanceof f))return new f(t);n.call(this,t),this._transformState={afterTransform:o.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,t&&("function"==typeof t.transform&&(this._transform=t.transform),"function"==typeof t.flush&&(this._flush=t.flush)),this.on("prefinish",s)}function s(){var t=this;"function"==typeof this._flush?this._flush(function(e,r){a(t,e,r)}):a(this,null,null)}function a(t,e,r){if(e)return t.emit("error",e);if(null!=r&&t.push(r),t._writableState.length)throw new Error("Calling transform done when ws.length != 0");if(t._transformState.transforming)throw new Error("Calling transform done when still transforming");return t.push(null)}i.inherits=r(1),i.inherits(f,n),f.prototype.push=function(t,e){return this._transformState.needTransform=!1,n.prototype.push.call(this,t,e)},f.prototype._transform=function(t,e,r){throw new Error("_transform() is not implemented")},f.prototype._write=function(t,e,r){var n=this._transformState;if(n.writecb=r,n.writechunk=t,n.writeencoding=e,!n.transforming){var i=this._readableState;(n.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},f.prototype._read=function(t){var e=this._transformState;null!==e.writechunk&&e.writecb&&!e.transforming?(e.transforming=!0,this._transform(e.writechunk,e.writeencoding,e.afterTransform)):e.needTransform=!0},f.prototype._destroy=function(t,e){var r=this;n.prototype._destroy.call(this,t,function(t){e(t),r.emit("close")})}},function(t,e,r){"use strict";var n=r(43).Buffer,i=r(1),o=r(42),f=new Array(16),s=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],a=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],u=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],h=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11],c=[0,1518500249,1859775393,2400959708,2840853838],l=[1352829926,1548603684,1836072691,2053994217,0];function p(){o.call(this,64),this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520}function d(t,e){return t<<e|t>>>32-e}function g(t,e,r,n,i,o,f,s){return d(t+(e^r^n)+o+f|0,s)+i|0}function y(t,e,r,n,i,o,f,s){return d(t+(e&r|~e&n)+o+f|0,s)+i|0}function v(t,e,r,n,i,o,f,s){return d(t+((e|~r)^n)+o+f|0,s)+i|0}function b(t,e,r,n,i,o,f,s){return d(t+(e&n|r&~n)+o+f|0,s)+i|0}function m(t,e,r,n,i,o,f,s){return d(t+(e^(r|~n))+o+f|0,s)+i|0}i(p,o),p.prototype._update=function(){for(var t=f,e=0;e<16;++e)t[e]=this._block.readInt32LE(4*e);for(var r=0|this._a,n=0|this._b,i=0|this._c,o=0|this._d,p=0|this._e,w=0|this._a,_=0|this._b,E=0|this._c,B=0|this._d,T=0|this._e,S=0;S<80;S+=1){var I,x;S<16?(I=g(r,n,i,o,p,t[s[S]],c[0],u[S]),x=m(w,_,E,B,T,t[a[S]],l[0],h[S])):S<32?(I=y(r,n,i,o,p,t[s[S]],c[1],u[S]),x=b(w,_,E,B,T,t[a[S]],l[1],h[S])):S<48?(I=v(r,n,i,o,p,t[s[S]],c[2],u[S]),x=v(w,_,E,B,T,t[a[S]],l[2],h[S])):S<64?(I=b(r,n,i,o,p,t[s[S]],c[3],u[S]),x=y(w,_,E,B,T,t[a[S]],l[3],h[S])):(I=m(r,n,i,o,p,t[s[S]],c[4],u[S]),x=g(w,_,E,B,T,t[a[S]],l[4],h[S])),r=p,p=o,o=d(i,10),i=n,n=I,w=T,T=B,B=d(E,10),E=_,_=x}var k=this._b+i+B|0;this._b=this._c+o+T|0,this._c=this._d+p+w|0,this._d=this._e+r+_|0,this._e=this._a+n+E|0,this._a=k},p.prototype._digest=function(){this._block[this._blockOffset++]=128,this._blockOffset>56&&(this._block.fill(0,this._blockOffset,64),this._update(),this._blockOffset=0),this._block.fill(0,this._blockOffset,56),this._block.writeUInt32LE(this._length[0],56),this._block.writeUInt32LE(this._length[1],60),this._update();var t=n.alloc?n.alloc(20):new n(20);return t.writeInt32LE(this._a,0),t.writeInt32LE(this._b,4),t.writeInt32LE(this._c,8),t.writeInt32LE(this._d,12),t.writeInt32LE(this._e,16),t},t.exports=p},function(t,e,r){(e=t.exports=function(t){t=t.toLowerCase();var r=e[t];if(!r)throw new Error(t+" is not supported (we accept pull requests)");return new r}).sha=r(101),e.sha1=r(102),e.sha224=r(103),e.sha256=r(51),e.sha384=r(104),e.sha512=r(52)},function(t,e,r){var n=r(1),i=r(10),o=r(0).Buffer,f=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],s=new Array(64);function a(){this.init(),this._w=s,i.call(this,64,56)}function u(t,e,r){return r^t&(e^r)}function h(t,e,r){return t&e|r&(t|e)}function c(t){return(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10)}function l(t){return(t>>>6|t<<26)^(t>>>11|t<<21)^(t>>>25|t<<7)}function p(t){return(t>>>7|t<<25)^(t>>>18|t<<14)^t>>>3}n(a,i),a.prototype.init=function(){return this._a=1779033703,this._b=3144134277,this._c=1013904242,this._d=2773480762,this._e=1359893119,this._f=2600822924,this._g=528734635,this._h=1541459225,this},a.prototype._update=function(t){for(var e,r=this._w,n=0|this._a,i=0|this._b,o=0|this._c,s=0|this._d,a=0|this._e,d=0|this._f,g=0|this._g,y=0|this._h,v=0;v<16;++v)r[v]=t.readInt32BE(4*v);for(;v<64;++v)r[v]=0|(((e=r[v-2])>>>17|e<<15)^(e>>>19|e<<13)^e>>>10)+r[v-7]+p(r[v-15])+r[v-16];for(var b=0;b<64;++b){var m=y+l(a)+u(a,d,g)+f[b]+r[b]|0,w=c(n)+h(n,i,o)|0;y=g,g=d,d=a,a=s+m|0,s=o,o=i,i=n,n=m+w|0}this._a=n+this._a|0,this._b=i+this._b|0,this._c=o+this._c|0,this._d=s+this._d|0,this._e=a+this._e|0,this._f=d+this._f|0,this._g=g+this._g|0,this._h=y+this._h|0},a.prototype._hash=function(){var t=o.allocUnsafe(32);return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t.writeInt32BE(this._h,28),t},t.exports=a},function(t,e,r){var n=r(1),i=r(10),o=r(0).Buffer,f=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],s=new Array(160);function a(){this.init(),this._w=s,i.call(this,128,112)}function u(t,e,r){return r^t&(e^r)}function h(t,e,r){return t&e|r&(t|e)}function c(t,e){return(t>>>28|e<<4)^(e>>>2|t<<30)^(e>>>7|t<<25)}function l(t,e){return(t>>>14|e<<18)^(t>>>18|e<<14)^(e>>>9|t<<23)}function p(t,e){return(t>>>1|e<<31)^(t>>>8|e<<24)^t>>>7}function d(t,e){return(t>>>1|e<<31)^(t>>>8|e<<24)^(t>>>7|e<<25)}function g(t,e){return(t>>>19|e<<13)^(e>>>29|t<<3)^t>>>6}function y(t,e){return(t>>>19|e<<13)^(e>>>29|t<<3)^(t>>>6|e<<26)}function v(t,e){return t>>>0<e>>>0?1:0}n(a,i),a.prototype.init=function(){return this._ah=1779033703,this._bh=3144134277,this._ch=1013904242,this._dh=2773480762,this._eh=1359893119,this._fh=2600822924,this._gh=528734635,this._hh=1541459225,this._al=4089235720,this._bl=2227873595,this._cl=4271175723,this._dl=1595750129,this._el=2917565137,this._fl=725511199,this._gl=4215389547,this._hl=327033209,this},a.prototype._update=function(t){for(var e=this._w,r=0|this._ah,n=0|this._bh,i=0|this._ch,o=0|this._dh,s=0|this._eh,a=0|this._fh,b=0|this._gh,m=0|this._hh,w=0|this._al,_=0|this._bl,E=0|this._cl,B=0|this._dl,T=0|this._el,S=0|this._fl,I=0|this._gl,x=0|this._hl,k=0;k<32;k+=2)e[k]=t.readInt32BE(4*k),e[k+1]=t.readInt32BE(4*k+4);for(;k<160;k+=2){var A=e[k-30],U=e[k-30+1],L=p(A,U),O=d(U,A),R=g(A=e[k-4],U=e[k-4+1]),C=y(U,A),D=e[k-14],M=e[k-14+1],N=e[k-32],j=e[k-32+1],F=O+M|0,P=L+D+v(F,O)|0;P=(P=P+R+v(F=F+C|0,C)|0)+N+v(F=F+j|0,j)|0,e[k]=P,e[k+1]=F}for(var q=0;q<160;q+=2){P=e[q],F=e[q+1];var z=h(r,n,i),V=h(w,_,E),H=c(r,w),W=c(w,r),Z=l(s,T),G=l(T,s),K=f[q],X=f[q+1],Y=u(s,a,b),J=u(T,S,I),$=x+G|0,Q=m+Z+v($,x)|0;Q=(Q=(Q=Q+Y+v($=$+J|0,J)|0)+K+v($=$+X|0,X)|0)+P+v($=$+F|0,F)|0;var tt=W+V|0,et=H+z+v(tt,W)|0;m=b,x=I,b=a,I=S,a=s,S=T,s=o+Q+v(T=B+$|0,B)|0,o=i,B=E,i=n,E=_,n=r,_=w,r=Q+et+v(w=$+tt|0,$)|0}this._al=this._al+w|0,this._bl=this._bl+_|0,this._cl=this._cl+E|0,this._dl=this._dl+B|0,this._el=this._el+T|0,this._fl=this._fl+S|0,this._gl=this._gl+I|0,this._hl=this._hl+x|0,this._ah=this._ah+r+v(this._al,w)|0,this._bh=this._bh+n+v(this._bl,_)|0,this._ch=this._ch+i+v(this._cl,E)|0,this._dh=this._dh+o+v(this._dl,B)|0,this._eh=this._eh+s+v(this._el,T)|0,this._fh=this._fh+a+v(this._fl,S)|0,this._gh=this._gh+b+v(this._gl,I)|0,this._hh=this._hh+m+v(this._hl,x)|0},a.prototype._hash=function(){var t=o.allocUnsafe(64);function e(e,r,n){t.writeInt32BE(e,n),t.writeInt32BE(r,n+4)}return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),e(this._gh,this._gl,48),e(this._hh,this._hl,56),t},t.exports=a},function(t,e,r){"use strict";var n=r(54),i=r(108),o=r(110),f=r(3),s=r(13),a=r(19),u=r(8),h=i.Long;function c(t,e,r,n,h){if(!(t=a(t)))throw new TypeError("private_key is required");if(!(e=s(e)))throw new TypeError("public_key is required");if(!(r=p(r)))throw new TypeError("nonce is required");if(!Buffer.isBuffer(n)){if("string"!=typeof n)throw new TypeError("message should be buffer or string");n=new Buffer(n,"binary")}if(h&&"number"!=typeof h)throw new TypeError("checksum should be a number");var c=t.getSharedSecret(e),l=new i(i.DEFAULT_CAPACITY,i.LITTLE_ENDIAN);l.writeUint64(r),l.append(c.toString("binary"),"binary"),l=new Buffer(l.copy(0,l.offset).toBinary(),"binary");var g=u.sha512(l),y=g.slice(32,48),v=g.slice(0,32),b=u.sha256(g);b=b.slice(0,4);var m=i.fromBinary(b.toString("binary"),i.DEFAULT_CAPACITY,i.LITTLE_ENDIAN);if(b=m.readUint32(),h){if(b!==h)throw new Error("Invalid key");n=function(t,e,r){f(t,"Missing cipher text"),t=d(t);var n=o.createDecipheriv("aes-256-cbc",e,r);return t=Buffer.concat([n.update(t),n.final()])}(n,v,y)}else n=function(t,e,r){f(t,"Missing plain text"),t=d(t);var n=o.createCipheriv("aes-256-cbc",e,r);return t=Buffer.concat([n.update(t),n.final()])}(n,v,y);return{nonce:r,message:n,checksum:b}}t.exports={encrypt:function(t,e,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){if(null===l){var t=new Uint8Array(n(2));l=parseInt(t[0]<<8|t[1],10)}var e=h.fromNumber(Date.now()),r=++l%65535;return(e=e.shiftLeft(16).or(h.fromNumber(r))).toString()}();return c(t,e,i,r)},decrypt:function(t,e,r,n,i){return c(t,e,r,n,i).message}};var l=null,p=function(t){return t?h.isLong(t)?t:h.fromString(t):t},d=function(t){return t?Buffer.isBuffer(t)?t:new Buffer(t,"binary"):t}},function(t,e,r){"use strict";(function(e,n){var i=65536,o=4294967295;var f=r(0).Buffer,s=e.crypto||e.msCrypto;s&&s.getRandomValues?t.exports=function(t,e){if(t>o)throw new RangeError("requested too many random bytes");var r=f.allocUnsafe(t);if(t>0)if(t>i)for(var a=0;a<t;a+=i)s.getRandomValues(r.slice(a,a+i));else s.getRandomValues(r);if("function"==typeof e)return n.nextTick(function(){e(null,r)});return r}:t.exports=function(){throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")}}).call(this,r(5),r(9))},function(t,e,r){var n={ECB:r(112),CBC:r(113),CFB:r(114),CFB8:r(115),CFB1:r(116),OFB:r(117),CTR:r(56),GCM:r(56)},i=r(58);for(var o in i)i[o].module=n[i[o].mode];t.exports=i},function(t,e,r){var n=r(12),i=r(0).Buffer,o=r(57);function f(t){var e=t._cipher.encryptBlockRaw(t._prev);return o(t._prev),e}e.encrypt=function(t,e){var r=Math.ceil(e.length/16),o=t._cache.length;t._cache=i.concat([t._cache,i.allocUnsafe(16*r)]);for(var s=0;s<r;s++){var a=f(t),u=o+16*s;t._cache.writeUInt32BE(a[0],u+0),t._cache.writeUInt32BE(a[1],u+4),t._cache.writeUInt32BE(a[2],u+8),t._cache.writeUInt32BE(a[3],u+12)}var h=t._cache.slice(0,e.length);return t._cache=t._cache.slice(e.length),n(e,h)}},function(t,e){t.exports=function(t){for(var e,r=t.length;r--;){if(255!==(e=t.readUInt8(r))){e++,t.writeUInt8(e,r);break}t.writeUInt8(0,r)}}},function(t){t.exports={"aes-128-ecb":{cipher:"AES",key:128,iv:0,mode:"ECB",type:"block"},"aes-192-ecb":{cipher:"AES",key:192,iv:0,mode:"ECB",type:"block"},"aes-256-ecb":{cipher:"AES",key:256,iv:0,mode:"ECB",type:"block"},"aes-128-cbc":{cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},"aes-192-cbc":{cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},"aes-256-cbc":{cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},aes128:{cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},aes192:{cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},aes256:{cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},"aes-128-cfb":{cipher:"AES",key:128,iv:16,mode:"CFB",type:"stream"},"aes-192-cfb":{cipher:"AES",key:192,iv:16,mode:"CFB",type:"stream"},"aes-256-cfb":{cipher:"AES",key:256,iv:16,mode:"CFB",type:"stream"},"aes-128-cfb8":{cipher:"AES",key:128,iv:16,mode:"CFB8",type:"stream"},"aes-192-cfb8":{cipher:"AES",key:192,iv:16,mode:"CFB8",type:"stream"},"aes-256-cfb8":{cipher:"AES",key:256,iv:16,mode:"CFB8",type:"stream"},"aes-128-cfb1":{cipher:"AES",key:128,iv:16,mode:"CFB1",type:"stream"},"aes-192-cfb1":{cipher:"AES",key:192,iv:16,mode:"CFB1",type:"stream"},"aes-256-cfb1":{cipher:"AES",key:256,iv:16,mode:"CFB1",type:"stream"},"aes-128-ofb":{cipher:"AES",key:128,iv:16,mode:"OFB",type:"stream"},"aes-192-ofb":{cipher:"AES",key:192,iv:16,mode:"OFB",type:"stream"},"aes-256-ofb":{cipher:"AES",key:256,iv:16,mode:"OFB",type:"stream"},"aes-128-ctr":{cipher:"AES",key:128,iv:16,mode:"CTR",type:"stream"},"aes-192-ctr":{cipher:"AES",key:192,iv:16,mode:"CTR",type:"stream"},"aes-256-ctr":{cipher:"AES",key:256,iv:16,mode:"CTR",type:"stream"},"aes-128-gcm":{cipher:"AES",key:128,iv:12,mode:"GCM",type:"auth"},"aes-192-gcm":{cipher:"AES",key:192,iv:12,mode:"GCM",type:"auth"},"aes-256-gcm":{cipher:"AES",key:256,iv:12,mode:"GCM",type:"auth"}}},function(t,e,r){var n=r(18),i=r(0).Buffer,o=r(7),f=r(1),s=r(118),a=r(12),u=r(57);function h(t,e,r,f){o.call(this);var a=i.alloc(4,0);this._cipher=new n.AES(e);var h=this._cipher.encryptBlock(a);this._ghash=new s(h),r=function(t,e,r){if(12===e.length)return t._finID=i.concat([e,i.from([0,0,0,1])]),i.concat([e,i.from([0,0,0,2])]);var n=new s(r),o=e.length,f=o%16;n.update(e),f&&(f=16-f,n.update(i.alloc(f,0))),n.update(i.alloc(8,0));var a=8*o,h=i.alloc(8);h.writeUIntBE(a,0,8),n.update(h),t._finID=n.state;var c=i.from(t._finID);return u(c),c}(this,r,h),this._prev=i.from(r),this._cache=i.allocUnsafe(0),this._secCache=i.allocUnsafe(0),this._decrypt=f,this._alen=0,this._len=0,this._mode=t,this._authTag=null,this._called=!1}f(h,o),h.prototype._update=function(t){if(!this._called&&this._alen){var e=16-this._alen%16;e<16&&(e=i.alloc(e,0),this._ghash.update(e))}this._called=!0;var r=this._mode.encrypt(this,t);return this._decrypt?this._ghash.update(t):this._ghash.update(r),this._len+=t.length,r},h.prototype._final=function(){if(this._decrypt&&!this._authTag)throw new Error("Unsupported state or unable to authenticate data");var t=a(this._ghash.final(8*this._alen,8*this._len),this._cipher.encryptBlock(this._finID));if(this._decrypt&&function(t,e){var r=0;t.length!==e.length&&r++;for(var n=Math.min(t.length,e.length),i=0;i<n;++i)r+=t[i]^e[i];return r}(t,this._authTag))throw new Error("Unsupported state or unable to authenticate data");this._authTag=t,this._cipher.scrub()},h.prototype.getAuthTag=function(){if(this._decrypt||!i.isBuffer(this._authTag))throw new Error("Attempting to get auth tag in unsupported state");return this._authTag},h.prototype.setAuthTag=function(t){if(!this._decrypt)throw new Error("Attempting to set auth tag in unsupported state");this._authTag=t},h.prototype.setAAD=function(t){if(this._called)throw new Error("Attempting to set AAD in unsupported state");this._ghash.update(t),this._alen+=t.length},t.exports=h},function(t,e,r){var n=r(18),i=r(0).Buffer,o=r(7);function f(t,e,r,f){o.call(this),this._cipher=new n.AES(e),this._prev=i.from(r),this._cache=i.allocUnsafe(0),this._secCache=i.allocUnsafe(0),this._decrypt=f,this._mode=t}r(1)(f,o),f.prototype._update=function(t){return this._mode.encrypt(this,t,this._decrypt)},f.prototype._final=function(){this._cipher.scrub()},t.exports=f},function(t,e,r){var n=r(0).Buffer,i=r(26);t.exports=function(t,e,r,o){if(n.isBuffer(t)||(t=n.from(t,"binary")),e&&(n.isBuffer(e)||(e=n.from(e,"binary")),8!==e.length))throw new RangeError("salt should be Buffer with 8 byte length");for(var f=r/8,s=n.alloc(f),a=n.alloc(o||0),u=n.alloc(0);f>0||o>0;){var h=new i;h.update(u),h.update(t),e&&h.update(e),u=h.digest();var c=0;if(f>0){var l=s.length-f;c=Math.min(f,u.length),u.copy(s,l,0,c),f-=c}if(c<u.length&&o>0){var p=a.length-o,d=Math.min(o,u.length-c);u.copy(a,p,c,c+d),o-=d}}return u.fill(0),{key:s,iv:a}}},function(t,e,r){var n=r(3),i=r(0).Buffer,o=r(4),f=o.valueOf(3);function s(t,e,r,i){n.notStrictEqual(i,void 0,"Missing Z coordinate"),this.curve=t,this.x=e,this.y=r,this.z=i,this._zInv=null,this.compressed=!0}Object.defineProperty(s.prototype,"zInv",{get:function(){return null===this._zInv&&(this._zInv=this.z.modInverse(this.curve.p)),this._zInv}}),Object.defineProperty(s.prototype,"affineX",{get:function(){return this.x.multiply(this.zInv).mod(this.curve.p)}}),Object.defineProperty(s.prototype,"affineY",{get:function(){return this.y.multiply(this.zInv).mod(this.curve.p)}}),s.fromAffine=function(t,e,r){return new s(t,e,r,o.ONE)},s.prototype.equals=function(t){return t===this||(this.curve.isInfinity(this)?this.curve.isInfinity(t):this.curve.isInfinity(t)?this.curve.isInfinity(this):0===t.y.multiply(this.z).subtract(this.y.multiply(t.z)).mod(this.curve.p).signum()&&0===t.x.multiply(this.z).subtract(this.x.multiply(t.z)).mod(this.curve.p).signum())},s.prototype.negate=function(){var t=this.curve.p.subtract(this.y);return new s(this.curve,this.x,t,this.z)},s.prototype.add=function(t){if(this.curve.isInfinity(this))return t;if(this.curve.isInfinity(t))return this;var e=this.x,r=this.y,n=t.x,i=t.y.multiply(this.z).subtract(r.multiply(t.z)).mod(this.curve.p),o=n.multiply(this.z).subtract(e.multiply(t.z)).mod(this.curve.p);if(0===o.signum())return 0===i.signum()?this.twice():this.curve.infinity;var a=o.square(),u=a.multiply(o),h=e.multiply(a),c=i.square().multiply(this.z),l=c.subtract(h.shiftLeft(1)).multiply(t.z).subtract(u).multiply(o).mod(this.curve.p),p=h.multiply(f).multiply(i).subtract(r.multiply(u)).subtract(c.multiply(i)).multiply(t.z).add(i.multiply(u)).mod(this.curve.p),d=u.multiply(this.z).multiply(t.z).mod(this.curve.p);return new s(this.curve,l,p,d)},s.prototype.twice=function(){if(this.curve.isInfinity(this))return this;if(0===this.y.signum())return this.curve.infinity;var t=this.x,e=this.y,r=e.multiply(this.z).mod(this.curve.p),n=r.multiply(e).mod(this.curve.p),i=this.curve.a,o=t.square().multiply(f);0!==i.signum()&&(o=o.add(this.z.square().multiply(i)));var a=(o=o.mod(this.curve.p)).square().subtract(t.shiftLeft(3).multiply(n)).shiftLeft(1).multiply(r).mod(this.curve.p),u=o.multiply(f).multiply(t).subtract(n.shiftLeft(1)).shiftLeft(2).multiply(n).subtract(o.pow(3)).mod(this.curve.p),h=r.pow(3).shiftLeft(3).mod(this.curve.p);return new s(this.curve,a,u,h)},s.prototype.multiply=function(t){if(this.curve.isInfinity(this))return this;if(0===t.signum())return this.curve.infinity;for(var e=t,r=e.multiply(f),n=this.negate(),i=this,o=r.bitLength()-2;o>0;--o){var s=r.testBit(o),a=e.testBit(o);i=i.twice(),s!==a&&(i=i.add(s?this:n))}return i},s.prototype.multiplyTwo=function(t,e,r){for(var n=Math.max(t.bitLength(),r.bitLength())-1,i=this.curve.infinity,o=this.add(e);n>=0;){var f=t.testBit(n),s=r.testBit(n);i=i.twice(),f?i=s?i.add(o):i.add(this):s&&(i=i.add(e)),--n}return i},s.prototype.getEncoded=function(t){if(null==t&&(t=this.compressed),this.curve.isInfinity(this))return i.alloc(1,0);var e,r=this.affineX,n=this.affineY,o=this.curve.pLength;return t?(e=i.allocUnsafe(1+o)).writeUInt8(n.isEven()?2:3,0):((e=i.allocUnsafe(1+o+o)).writeUInt8(4,0),n.toBuffer(o).copy(e,1+o)),r.toBuffer(o).copy(e,1),e},s.decodeFrom=function(t,e){var r,i=e.readUInt8(0),f=4!==i,a=Math.floor((t.p.bitLength()+7)/8),u=o.fromBuffer(e.slice(1,1+a));if(f){n.equal(e.length,a+1,"Invalid sequence length"),n(2===i||3===i,"Invalid sequence tag");var h=3===i;r=t.pointFromX(h,u)}else{n.equal(e.length,1+a+a,"Invalid sequence length");var c=o.fromBuffer(e.slice(1+a));r=s.fromAffine(t,u,c)}return r.compressed=f,r},s.prototype.toString=function(){return this.curve.isInfinity(this)?"(INFINITY)":"("+this.affineX.toString()+","+this.affineY.toString()+")"},t.exports=s},function(t,e,r){function n(t,e,r){if(!(this instanceof n))return new n(t,e,r);null!=t&&("number"==typeof t?this.fromNumber(t,e,r):null==e&&"string"!=typeof t?this.fromString(t,256):this.fromString(t,e))}var i=n.prototype;i.__bigi=r(122).version,n.isBigInteger=function(t,e){return t&&t.__bigi&&(!e||t.__bigi===i.__bigi)},n.prototype.am=function(t,e,r,n,i,o){for(;--o>=0;){var f=e*this[t++]+r[n]+i;i=Math.floor(f/67108864),r[n++]=67108863&f}return i},n.prototype.DB=26,n.prototype.DM=67108863;var o=n.prototype.DV=1<<26;n.prototype.FV=Math.pow(2,52),n.prototype.F1=26,n.prototype.F2=0;var f,s,a="0123456789abcdefghijklmnopqrstuvwxyz",u=new Array;for(f="0".charCodeAt(0),s=0;s<=9;++s)u[f++]=s;for(f="a".charCodeAt(0),s=10;s<36;++s)u[f++]=s;for(f="A".charCodeAt(0),s=10;s<36;++s)u[f++]=s;function h(t){return a.charAt(t)}function c(t,e){var r=u[t.charCodeAt(e)];return null==r?-1:r}function l(t){var e=new n;return e.fromInt(t),e}function p(t){var e,r=1;return 0!=(e=t>>>16)&&(t=e,r+=16),0!=(e=t>>8)&&(t=e,r+=8),0!=(e=t>>4)&&(t=e,r+=4),0!=(e=t>>2)&&(t=e,r+=2),0!=(e=t>>1)&&(t=e,r+=1),r}function d(t){this.m=t}function g(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}function y(t,e){return t&e}function v(t,e){return t|e}function b(t,e){return t^e}function m(t,e){return t&~e}function w(t){if(0==t)return-1;var e=0;return 0==(65535&t)&&(t>>=16,e+=16),0==(255&t)&&(t>>=8,e+=8),0==(15&t)&&(t>>=4,e+=4),0==(3&t)&&(t>>=2,e+=2),0==(1&t)&&++e,e}function _(t){for(var e=0;0!=t;)t&=t-1,++e;return e}function E(){}function B(t){return t}function T(t){this.r2=new n,this.q3=new n,n.ONE.dlShiftTo(2*t.t,this.r2),this.mu=this.r2.divide(t),this.m=t}d.prototype.convert=function(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t},d.prototype.revert=function(t){return t},d.prototype.reduce=function(t){t.divRemTo(this.m,null,t)},d.prototype.mulTo=function(t,e,r){t.multiplyTo(e,r),this.reduce(r)},d.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)},g.prototype.convert=function(t){var e=new n;return t.abs().dlShiftTo(this.m.t,e),e.divRemTo(this.m,null,e),t.s<0&&e.compareTo(n.ZERO)>0&&this.m.subTo(e,e),e},g.prototype.revert=function(t){var e=new n;return t.copyTo(e),this.reduce(e),e},g.prototype.reduce=function(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var e=0;e<this.m.t;++e){var r=32767&t[e],n=r*this.mpl+((r*this.mph+(t[e]>>15)*this.mpl&this.um)<<15)&t.DM;for(t[r=e+this.m.t]+=this.m.am(0,n,t,e,0,this.m.t);t[r]>=t.DV;)t[r]-=t.DV,t[++r]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)},g.prototype.mulTo=function(t,e,r){t.multiplyTo(e,r),this.reduce(r)},g.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)},i.copyTo=function(t){for(var e=this.t-1;e>=0;--e)t[e]=this[e];t.t=this.t,t.s=this.s},i.fromInt=function(t){this.t=1,this.s=t<0?-1:0,t>0?this[0]=t:t<-1?this[0]=t+o:this.t=0},i.fromString=function(t,e){var r;if(16==e)r=4;else if(8==e)r=3;else if(256==e)r=8;else if(2==e)r=1;else if(32==e)r=5;else{if(4!=e)return void this.fromRadix(t,e);r=2}this.t=0,this.s=0;for(var i=t.length,o=!1,f=0;--i>=0;){var s=8==r?255&t[i]:c(t,i);s<0?"-"==t.charAt(i)&&(o=!0):(o=!1,0==f?this[this.t++]=s:f+r>this.DB?(this[this.t-1]|=(s&(1<<this.DB-f)-1)<<f,this[this.t++]=s>>this.DB-f):this[this.t-1]|=s<<f,(f+=r)>=this.DB&&(f-=this.DB))}8==r&&0!=(128&t[0])&&(this.s=-1,f>0&&(this[this.t-1]|=(1<<this.DB-f)-1<<f)),this.clamp(),o&&n.ZERO.subTo(this,this)},i.clamp=function(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)--this.t},i.dlShiftTo=function(t,e){var r;for(r=this.t-1;r>=0;--r)e[r+t]=this[r];for(r=t-1;r>=0;--r)e[r]=0;e.t=this.t+t,e.s=this.s},i.drShiftTo=function(t,e){for(var r=t;r<this.t;++r)e[r-t]=this[r];e.t=Math.max(this.t-t,0),e.s=this.s},i.lShiftTo=function(t,e){var r,n=t%this.DB,i=this.DB-n,o=(1<<i)-1,f=Math.floor(t/this.DB),s=this.s<<n&this.DM;for(r=this.t-1;r>=0;--r)e[r+f+1]=this[r]>>i|s,s=(this[r]&o)<<n;for(r=f-1;r>=0;--r)e[r]=0;e[f]=s,e.t=this.t+f+1,e.s=this.s,e.clamp()},i.rShiftTo=function(t,e){e.s=this.s;var r=Math.floor(t/this.DB);if(r>=this.t)e.t=0;else{var n=t%this.DB,i=this.DB-n,o=(1<<n)-1;e[0]=this[r]>>n;for(var f=r+1;f<this.t;++f)e[f-r-1]|=(this[f]&o)<<i,e[f-r]=this[f]>>n;n>0&&(e[this.t-r-1]|=(this.s&o)<<i),e.t=this.t-r,e.clamp()}},i.subTo=function(t,e){for(var r=0,n=0,i=Math.min(t.t,this.t);r<i;)n+=this[r]-t[r],e[r++]=n&this.DM,n>>=this.DB;if(t.t<this.t){for(n-=t.s;r<this.t;)n+=this[r],e[r++]=n&this.DM,n>>=this.DB;n+=this.s}else{for(n+=this.s;r<t.t;)n-=t[r],e[r++]=n&this.DM,n>>=this.DB;n-=t.s}e.s=n<0?-1:0,n<-1?e[r++]=this.DV+n:n>0&&(e[r++]=n),e.t=r,e.clamp()},i.multiplyTo=function(t,e){var r=this.abs(),i=t.abs(),o=r.t;for(e.t=o+i.t;--o>=0;)e[o]=0;for(o=0;o<i.t;++o)e[o+r.t]=r.am(0,i[o],e,o,0,r.t);e.s=0,e.clamp(),this.s!=t.s&&n.ZERO.subTo(e,e)},i.squareTo=function(t){for(var e=this.abs(),r=t.t=2*e.t;--r>=0;)t[r]=0;for(r=0;r<e.t-1;++r){var n=e.am(r,e[r],t,2*r,0,1);(t[r+e.t]+=e.am(r+1,2*e[r],t,2*r+1,n,e.t-r-1))>=e.DV&&(t[r+e.t]-=e.DV,t[r+e.t+1]=1)}t.t>0&&(t[t.t-1]+=e.am(r,e[r],t,2*r,0,1)),t.s=0,t.clamp()},i.divRemTo=function(t,e,r){var i=t.abs();if(!(i.t<=0)){var o=this.abs();if(o.t<i.t)return null!=e&&e.fromInt(0),void(null!=r&&this.copyTo(r));null==r&&(r=new n);var f=new n,s=this.s,a=t.s,u=this.DB-p(i[i.t-1]);u>0?(i.lShiftTo(u,f),o.lShiftTo(u,r)):(i.copyTo(f),o.copyTo(r));var h=f.t,c=f[h-1];if(0!=c){var l=c*(1<<this.F1)+(h>1?f[h-2]>>this.F2:0),d=this.FV/l,g=(1<<this.F1)/l,y=1<<this.F2,v=r.t,b=v-h,m=null==e?new n:e;for(f.dlShiftTo(b,m),r.compareTo(m)>=0&&(r[r.t++]=1,r.subTo(m,r)),n.ONE.dlShiftTo(h,m),m.subTo(f,f);f.t<h;)f[f.t++]=0;for(;--b>=0;){var w=r[--v]==c?this.DM:Math.floor(r[v]*d+(r[v-1]+y)*g);if((r[v]+=f.am(0,w,r,b,0,h))<w)for(f.dlShiftTo(b,m),r.subTo(m,r);r[v]<--w;)r.subTo(m,r)}null!=e&&(r.drShiftTo(h,e),s!=a&&n.ZERO.subTo(e,e)),r.t=h,r.clamp(),u>0&&r.rShiftTo(u,r),s<0&&n.ZERO.subTo(r,r)}}},i.invDigit=function(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var e=3&t;return(e=(e=(e=(e=e*(2-(15&t)*e)&15)*(2-(255&t)*e)&255)*(2-((65535&t)*e&65535))&65535)*(2-t*e%this.DV)%this.DV)>0?this.DV-e:-e},i.isEven=function(){return 0==(this.t>0?1&this[0]:this.s)},i.exp=function(t,e){if(t>4294967295||t<1)return n.ONE;var r=new n,i=new n,o=e.convert(this),f=p(t)-1;for(o.copyTo(r);--f>=0;)if(e.sqrTo(r,i),(t&1<<f)>0)e.mulTo(i,o,r);else{var s=r;r=i,i=s}return e.revert(r)},i.toString=function(t){var e;if(this.s<0)return"-"+this.negate().toString(t);if(16==t)e=4;else if(8==t)e=3;else if(2==t)e=1;else if(32==t)e=5;else{if(4!=t)return this.toRadix(t);e=2}var r,n=(1<<e)-1,i=!1,o="",f=this.t,s=this.DB-f*this.DB%e;if(f-- >0)for(s<this.DB&&(r=this[f]>>s)>0&&(i=!0,o=h(r));f>=0;)s<e?(r=(this[f]&(1<<s)-1)<<e-s,r|=this[--f]>>(s+=this.DB-e)):(r=this[f]>>(s-=e)&n,s<=0&&(s+=this.DB,--f)),r>0&&(i=!0),i&&(o+=h(r));return i?o:"0"},i.negate=function(){var t=new n;return n.ZERO.subTo(this,t),t},i.abs=function(){return this.s<0?this.negate():this},i.compareTo=function(t){var e=this.s-t.s;if(0!=e)return e;var r=this.t;if(0!=(e=r-t.t))return this.s<0?-e:e;for(;--r>=0;)if(0!=(e=this[r]-t[r]))return e;return 0},i.bitLength=function(){return this.t<=0?0:this.DB*(this.t-1)+p(this[this.t-1]^this.s&this.DM)},i.byteLength=function(){return this.bitLength()>>3},i.mod=function(t){var e=new n;return this.abs().divRemTo(t,null,e),this.s<0&&e.compareTo(n.ZERO)>0&&t.subTo(e,e),e},i.modPowInt=function(t,e){var r;return r=t<256||e.isEven()?new d(e):new g(e),this.exp(t,r)},E.prototype.convert=B,E.prototype.revert=B,E.prototype.mulTo=function(t,e,r){t.multiplyTo(e,r)},E.prototype.sqrTo=function(t,e){t.squareTo(e)},T.prototype.convert=function(t){if(t.s<0||t.t>2*this.m.t)return t.mod(this.m);if(t.compareTo(this.m)<0)return t;var e=new n;return t.copyTo(e),this.reduce(e),e},T.prototype.revert=function(t){return t},T.prototype.reduce=function(t){for(t.drShiftTo(this.m.t-1,this.r2),t.t>this.m.t+1&&(t.t=this.m.t+1,t.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);t.compareTo(this.r2)<0;)t.dAddOffset(1,this.m.t+1);for(t.subTo(this.r2,t);t.compareTo(this.m)>=0;)t.subTo(this.m,t)},T.prototype.mulTo=function(t,e,r){t.multiplyTo(e,r),this.reduce(r)},T.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)};var S=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],I=(1<<26)/S[S.length-1];i.chunkSize=function(t){return Math.floor(Math.LN2*this.DB/Math.log(t))},i.toRadix=function(t){if(null==t&&(t=10),0==this.signum()||t<2||t>36)return"0";var e=this.chunkSize(t),r=Math.pow(t,e),i=l(r),o=new n,f=new n,s="";for(this.divRemTo(i,o,f);o.signum()>0;)s=(r+f.intValue()).toString(t).substr(1)+s,o.divRemTo(i,o,f);return f.intValue().toString(t)+s},i.fromRadix=function(t,e){this.fromInt(0),null==e&&(e=10);for(var r=this.chunkSize(e),i=Math.pow(e,r),o=!1,f=0,s=0,a=0;a<t.length;++a){var u=c(t,a);u<0?"-"==t.charAt(a)&&0==this.signum()&&(o=!0):(s=e*s+u,++f>=r&&(this.dMultiply(i),this.dAddOffset(s,0),f=0,s=0))}f>0&&(this.dMultiply(Math.pow(e,f)),this.dAddOffset(s,0)),o&&n.ZERO.subTo(this,this)},i.fromNumber=function(t,e,r){if("number"==typeof e)if(t<2)this.fromInt(1);else for(this.fromNumber(t,r),this.testBit(t-1)||this.bitwiseTo(n.ONE.shiftLeft(t-1),v,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(e);)this.dAddOffset(2,0),this.bitLength()>t&&this.subTo(n.ONE.shiftLeft(t-1),this);else{var i=new Array,o=7&t;i.length=1+(t>>3),e.nextBytes(i),o>0?i[0]&=(1<<o)-1:i[0]=0,this.fromString(i,256)}},i.bitwiseTo=function(t,e,r){var n,i,o=Math.min(t.t,this.t);for(n=0;n<o;++n)r[n]=e(this[n],t[n]);if(t.t<this.t){for(i=t.s&this.DM,n=o;n<this.t;++n)r[n]=e(this[n],i);r.t=this.t}else{for(i=this.s&this.DM,n=o;n<t.t;++n)r[n]=e(i,t[n]);r.t=t.t}r.s=e(this.s,t.s),r.clamp()},i.changeBit=function(t,e){var r=n.ONE.shiftLeft(t);return this.bitwiseTo(r,e,r),r},i.addTo=function(t,e){for(var r=0,n=0,i=Math.min(t.t,this.t);r<i;)n+=this[r]+t[r],e[r++]=n&this.DM,n>>=this.DB;if(t.t<this.t){for(n+=t.s;r<this.t;)n+=this[r],e[r++]=n&this.DM,n>>=this.DB;n+=this.s}else{for(n+=this.s;r<t.t;)n+=t[r],e[r++]=n&this.DM,n>>=this.DB;n+=t.s}e.s=n<0?-1:0,n>0?e[r++]=n:n<-1&&(e[r++]=this.DV+n),e.t=r,e.clamp()},i.dMultiply=function(t){this[this.t]=this.am(0,t-1,this,0,0,this.t),++this.t,this.clamp()},i.dAddOffset=function(t,e){if(0!=t){for(;this.t<=e;)this[this.t++]=0;for(this[e]+=t;this[e]>=this.DV;)this[e]-=this.DV,++e>=this.t&&(this[this.t++]=0),++this[e]}},i.multiplyLowerTo=function(t,e,r){var n,i=Math.min(this.t+t.t,e);for(r.s=0,r.t=i;i>0;)r[--i]=0;for(n=r.t-this.t;i<n;++i)r[i+this.t]=this.am(0,t[i],r,i,0,this.t);for(n=Math.min(t.t,e);i<n;++i)this.am(0,t[i],r,i,0,e-i);r.clamp()},i.multiplyUpperTo=function(t,e,r){--e;var n=r.t=this.t+t.t-e;for(r.s=0;--n>=0;)r[n]=0;for(n=Math.max(e-this.t,0);n<t.t;++n)r[this.t+n-e]=this.am(e-n,t[n],r,0,0,this.t+n-e);r.clamp(),r.drShiftTo(1,r)},i.modInt=function(t){if(t<=0)return 0;var e=this.DV%t,r=this.s<0?t-1:0;if(this.t>0)if(0==e)r=this[0]%t;else for(var n=this.t-1;n>=0;--n)r=(e*r+this[n])%t;return r},i.millerRabin=function(t){var e=this.subtract(n.ONE),r=e.getLowestSetBit();if(r<=0)return!1;var i=e.shiftRight(r);(t=t+1>>1)>S.length&&(t=S.length);for(var o=new n(null),f=[],s=0;s<t;++s){for(;u=S[Math.floor(Math.random()*S.length)],-1!=f.indexOf(u););f.push(u),o.fromInt(u);var a=o.modPow(i,this);if(0!=a.compareTo(n.ONE)&&0!=a.compareTo(e)){for(var u=1;u++<r&&0!=a.compareTo(e);)if(0==(a=a.modPowInt(2,this)).compareTo(n.ONE))return!1;if(0!=a.compareTo(e))return!1}}return!0},i.clone=function(){var t=new n;return this.copyTo(t),t},i.intValue=function(){if(this.s<0){if(1==this.t)return this[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]},i.byteValue=function(){return 0==this.t?this.s:this[0]<<24>>24},i.shortValue=function(){return 0==this.t?this.s:this[0]<<16>>16},i.signum=function(){return this.s<0?-1:this.t<=0||1==this.t&&this[0]<=0?0:1},i.toByteArray=function(){var t=this.t,e=new Array;e[0]=this.s;var r,n=this.DB-t*this.DB%8,i=0;if(t-- >0)for(n<this.DB&&(r=this[t]>>n)!=(this.s&this.DM)>>n&&(e[i++]=r|this.s<<this.DB-n);t>=0;)n<8?(r=(this[t]&(1<<n)-1)<<8-n,r|=this[--t]>>(n+=this.DB-8)):(r=this[t]>>(n-=8)&255,n<=0&&(n+=this.DB,--t)),0!=(128&r)&&(r|=-256),0===i&&(128&this.s)!=(128&r)&&++i,(i>0||r!=this.s)&&(e[i++]=r);return e},i.equals=function(t){return 0==this.compareTo(t)},i.min=function(t){return this.compareTo(t)<0?this:t},i.max=function(t){return this.compareTo(t)>0?this:t},i.and=function(t){var e=new n;return this.bitwiseTo(t,y,e),e},i.or=function(t){var e=new n;return this.bitwiseTo(t,v,e),e},i.xor=function(t){var e=new n;return this.bitwiseTo(t,b,e),e},i.andNot=function(t){var e=new n;return this.bitwiseTo(t,m,e),e},i.not=function(){for(var t=new n,e=0;e<this.t;++e)t[e]=this.DM&~this[e];return t.t=this.t,t.s=~this.s,t},i.shiftLeft=function(t){var e=new n;return t<0?this.rShiftTo(-t,e):this.lShiftTo(t,e),e},i.shiftRight=function(t){var e=new n;return t<0?this.lShiftTo(-t,e):this.rShiftTo(t,e),e},i.getLowestSetBit=function(){for(var t=0;t<this.t;++t)if(0!=this[t])return t*this.DB+w(this[t]);return this.s<0?this.t*this.DB:-1},i.bitCount=function(){for(var t=0,e=this.s&this.DM,r=0;r<this.t;++r)t+=_(this[r]^e);return t},i.testBit=function(t){var e=Math.floor(t/this.DB);return e>=this.t?0!=this.s:0!=(this[e]&1<<t%this.DB)},i.setBit=function(t){return this.changeBit(t,v)},i.clearBit=function(t){return this.changeBit(t,m)},i.flipBit=function(t){return this.changeBit(t,b)},i.add=function(t){var e=new n;return this.addTo(t,e),e},i.subtract=function(t){var e=new n;return this.subTo(t,e),e},i.multiply=function(t){var e=new n;return this.multiplyTo(t,e),e},i.divide=function(t){var e=new n;return this.divRemTo(t,e,null),e},i.remainder=function(t){var e=new n;return this.divRemTo(t,null,e),e},i.divideAndRemainder=function(t){var e=new n,r=new n;return this.divRemTo(t,e,r),new Array(e,r)},i.modPow=function(t,e){var r,i,o=t.bitLength(),f=l(1);if(o<=0)return f;r=o<18?1:o<48?3:o<144?4:o<768?5:6,i=o<8?new d(e):e.isEven()?new T(e):new g(e);var s=new Array,a=3,u=r-1,h=(1<<r)-1;if(s[1]=i.convert(this),r>1){var c=new n;for(i.sqrTo(s[1],c);a<=h;)s[a]=new n,i.mulTo(c,s[a-2],s[a]),a+=2}var y,v,b=t.t-1,m=!0,w=new n;for(o=p(t[b])-1;b>=0;){for(o>=u?y=t[b]>>o-u&h:(y=(t[b]&(1<<o+1)-1)<<u-o,b>0&&(y|=t[b-1]>>this.DB+o-u)),a=r;0==(1&y);)y>>=1,--a;if((o-=a)<0&&(o+=this.DB,--b),m)s[y].copyTo(f),m=!1;else{for(;a>1;)i.sqrTo(f,w),i.sqrTo(w,f),a-=2;a>0?i.sqrTo(f,w):(v=f,f=w,w=v),i.mulTo(w,s[y],f)}for(;b>=0&&0==(t[b]&1<<o);)i.sqrTo(f,w),v=f,f=w,w=v,--o<0&&(o=this.DB-1,--b)}return i.revert(f)},i.modInverse=function(t){var e=t.isEven();if(0===this.signum())throw new Error("division by zero");if(this.isEven()&&e||0==t.signum())return n.ZERO;for(var r=t.clone(),i=this.clone(),o=l(1),f=l(0),s=l(0),a=l(1);0!=r.signum();){for(;r.isEven();)r.rShiftTo(1,r),e?(o.isEven()&&f.isEven()||(o.addTo(this,o),f.subTo(t,f)),o.rShiftTo(1,o)):f.isEven()||f.subTo(t,f),f.rShiftTo(1,f);for(;i.isEven();)i.rShiftTo(1,i),e?(s.isEven()&&a.isEven()||(s.addTo(this,s),a.subTo(t,a)),s.rShiftTo(1,s)):a.isEven()||a.subTo(t,a),a.rShiftTo(1,a);r.compareTo(i)>=0?(r.subTo(i,r),e&&o.subTo(s,o),f.subTo(a,f)):(i.subTo(r,i),e&&s.subTo(o,s),a.subTo(f,a))}if(0!=i.compareTo(n.ONE))return n.ZERO;for(;a.compareTo(t)>=0;)a.subTo(t,a);for(;a.signum()<0;)a.addTo(t,a);return a},i.pow=function(t){return this.exp(t,new E)},i.gcd=function(t){var e=this.s<0?this.negate():this.clone(),r=t.s<0?t.negate():t.clone();if(e.compareTo(r)<0){var n=e;e=r,r=n}var i=e.getLowestSetBit(),o=r.getLowestSetBit();if(o<0)return e;for(i<o&&(o=i),o>0&&(e.rShiftTo(o,e),r.rShiftTo(o,r));e.signum()>0;)(i=e.getLowestSetBit())>0&&e.rShiftTo(i,e),(i=r.getLowestSetBit())>0&&r.rShiftTo(i,r),e.compareTo(r)>=0?(e.subTo(r,e),e.rShiftTo(1,e)):(r.subTo(e,r),r.rShiftTo(1,r));return o>0&&r.lShiftTo(o,r),r},i.isProbablePrime=function(t){var e,r=this.abs();if(1==r.t&&r[0]<=S[S.length-1]){for(e=0;e<S.length;++e)if(r[0]==S[e])return!0;return!1}if(r.isEven())return!1;for(e=1;e<S.length;){for(var n=S[e],i=e+1;i<S.length&&n<I;)n*=S[i++];for(n=r.modInt(n);e<i;)if(n%S[e++]==0)return!1}return r.millerRabin(t)},i.square=function(){var t=new n;return this.squareTo(t),t},n.ZERO=l(0),n.ONE=l(1),n.valueOf=l,t.exports=n},function(t,e,r){var n=r(3),i=r(4),o=r(62);function f(t,e,r,n,f,s,a){this.p=t,this.a=e,this.b=r,this.G=o.fromAffine(this,n,f),this.n=s,this.h=a,this.infinity=new o(this,null,null,i.ZERO),this.pOverFour=t.add(i.ONE).shiftRight(2),this.pLength=Math.floor((this.p.bitLength()+7)/8)}f.prototype.pointFromX=function(t,e){var r=e.pow(3).add(this.a.multiply(e)).add(this.b).mod(this.p).modPow(this.pOverFour,this.p),n=r;return r.isEven()^!t&&(n=this.p.subtract(n)),o.fromAffine(this,e,n)},f.prototype.isInfinity=function(t){return t===this.infinity||0===t.z.signum()&&0!==t.y.signum()},f.prototype.isOnCurve=function(t){if(this.isInfinity(t))return!0;var e=t.affineX,r=t.affineY,n=this.a,i=this.b,o=this.p;if(e.signum()<0||e.compareTo(o)>=0)return!1;if(r.signum()<0||r.compareTo(o)>=0)return!1;var f=r.square().mod(o),s=e.pow(3).add(n.multiply(e)).add(i).mod(o);return f.equals(s)},f.prototype.validate=function(t){n(!this.isInfinity(t),"Point is at infinity"),n(this.isOnCurve(t),"Point is not on the curve");var e=t.multiply(this.n);return n(this.isInfinity(e),"Point is not a scalar multiple of G"),!0},t.exports=f},function(t,e,r){"use strict";var n=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],n=!0,i=!1,o=void 0;try{for(var f,s=t[Symbol.iterator]();!(n=(f=s.next()).done)&&(r.push(f.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=r(132),f=r(8),s=r(31).getCurveByName("secp256k1"),a=r(3),u=r(4),h=r(14),c=r(13),l=r(19);function p(t,e,r){function n(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"utf8";return"string"==typeof t&&(t=Buffer.from(t,r)),a(Buffer.isBuffer(t),"data is a required String or Buffer"),i(t=f.sha256(t),e)}function i(r,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"hex";if("string"==typeof r&&(r=Buffer.from(r,i)),32!==r.length||!Buffer.isBuffer(r))throw new Error("dataSha256: 32 bytes required");var f=c(n);return a(f,"pubkey required"),o.verify(s,r,{r:t,s:e},f.Q)}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"utf8";return"string"==typeof t&&(t=Buffer.from(t,e)),a(Buffer.isBuffer(t),"data is a required String or Buffer"),p(t=f.sha256(t))}function p(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hex";if("string"==typeof n&&(n=Buffer.from(n,i)),32!==n.length||!Buffer.isBuffer(n))throw new Error("dataSha256: 32 byte String or buffer requred");var f=u.fromBuffer(n),a=r;a-=27,a&=3;var h=o.recoverPubKey(s,f,{r:t,s:e,i:r},a);return c.fromPoint(h)}function d(){var n;return(n=new Buffer(65)).writeUInt8(r,0),t.toBuffer(32).copy(n,1),e.toBuffer(32).copy(n,33),n}a.equal(null!=t,!0,"Missing parameter"),a.equal(null!=e,!0,"Missing parameter"),a.equal(null!=r,!0,"Missing parameter");var g=void 0;return{r:t,s:e,i:r,toBuffer:d,verify:n,verifyHash:i,verifyHex:function(t,e){return console.log('Deprecated: use verify(data, pubkey, "hex")'),n(Buffer.from(t,"hex"),e)},recover:l,recoverHash:p,toHex:function(){return d().toString("hex")},toString:function(){return g||(g="SIG_K1_"+h.checkEncode(d(),"K1"))},verifyBuffer:function(){return console.log("Deprecated: use signature.verify instead (same arguments)"),n.apply(void 0,arguments)},recoverPublicKey:function(){return console.log("Deprecated: use signature.recover instead (same arguments)"),l.apply(void 0,arguments)},recoverPublicKeyFromBuffer:function(){return console.log("Deprecated: use signature.recoverHash instead (same arguments)"),p.apply(void 0,arguments)}}}t.exports=p,p.sign=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"utf8";return"string"==typeof t&&(t=Buffer.from(t,r)),a(Buffer.isBuffer(t),"data is a required String or Buffer"),t=f.sha256(t),p.signHash(t,e)},p.signHash=function(t,e){var r,n,i,f,h,c,d,g=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"hex";if("string"==typeof t&&(t=Buffer.from(t,g)),32!==t.length||!Buffer.isBuffer(t))throw new Error("dataSha256: 32 byte buffer requred");for(e=l(e),a(e,"privateKey required"),f=null,d=0,n=u.fromBuffer(t);;){if(c=(r=(i=o.sign(s,t,e.d,d++)).toDER())[5+(h=r[3])],32===h&&32===c){f=o.calcPubKeyRecoveryParam(s,n,i,e.toPublic().Q),f+=4,f+=27;break}d%10==0&&console.log("WARN: "+d+" attempts to find canonical signature")}return p(i.r,i.s,f)},p.fromBuffer=function(t){var e;return a(Buffer.isBuffer(t),"Buffer is required"),a.equal(t.length,65,"Invalid signature length"),e=t.readUInt8(0),a.equal(e-27,e-27&7,"Invalid signature parameter"),p(u.fromBuffer(t.slice(1,33)),u.fromBuffer(t.slice(33)),e)},p.fromHex=function(t){return p.fromBuffer(Buffer.from(t,"hex"))},p.fromString=function(t){try{return p.fromStringOrThrow(t)}catch(t){return null}},p.fromStringOrThrow=function(t){a.equal(void 0===t?"undefined":i(t),"string","signature");var e=t.match(/^SIG_([A-Za-z0-9]+)_([A-Za-z0-9]+)$/);a(null!=e&&3===e.length,"Expecting signature like: SIG_K1_base58signature..");var r=n(e,3),o=r[1],f=r[2];return a.equal(o,"K1","K1 signature expected"),p.fromBuffer(h.checkDecode(f,o))},p.from=function(t){var e=t?t.r&&t.s&&t.i?t:"string"==typeof t&&130===t.length?p.fromHex(t):"string"==typeof t&&130!==t.length?p.fromStringOrThrow(t):Buffer.isBuffer(t)?p.fromBuffer(t):null:t;if(!e)throw new TypeError("signature should be a hex string or buffer");return e}},function(t,e,r){"use strict";function n(t){var e=t.toString().match(/function (.*?)\(/);return e?e[1]:null}t.exports=function(t,e){switch(t){case"Array":if(Array.isArray(e))return;break;case"Boolean":if("boolean"==typeof e)return;break;case"Buffer":if(Buffer.isBuffer(e))return;break;case"Number":if("number"==typeof e)return;break;case"String":if("string"==typeof e)return;break;default:if(n(e.constructor)===n(t))return}throw new TypeError("Expected "+(n(t)||t)+", got "+e)}},function(t,e,r){function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var i=r(68).TxOp,o=r(32).sha256;t.exports=function(){function t(e,r,n,i,f,s){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!e)throw new Error('Transaction "from" is required.');if(this.from=e||"",this.to=r||"",this.value=parseFloat(n)||0,this.fee=parseFloat(i)||0,this.data=f||{},this.nonce=s||Date.now(),this.value<0||this.fee<0)throw new Error("Value and fee cannot be negative.");var a={from:this.from,to:this.to,value:this.value,fee:this.fee,data:this.data,nonce:this.nonce};this.signatureMessage=o(a,"hex")}var e,r,f;return e=t,(r=[{key:"setSignature",value:function(t){return this.signature=t,this}},{key:"isContractCreation",value:function(){return this.data&&this.data.op===i.DEPLOY_CONTRACT}},{key:"isContractCall",value:function(){return this.data&&this.data.op===i.CALL_CONTRACT}}])&&n(e.prototype,r),f&&n(e,f),t}()},function(t,e){e.ContractMode=Object.freeze({JS_RAW:0,JS_DECORATED:1,WASM:100}),e.TxOp=Object.freeze({DEPLOY_CONTRACT:0,CALL_CONTRACT:1,VOTE:2})},function(t,e,r){var n=r(32),i=r(105),o=r(67),f=r(68),s=f.ContractMode,a=f.TxOp;e.codec=n,e.ecc=i,e.Tx=o,e.ContractMode=s,e.TxOp=a},function(t,e,r){e.encode=r(33).encode,e.decode=r(38).decode,e.Encoder=r(81).Encoder,e.Decoder=r(82).Decoder,e.createCodec=r(83).createCodec,e.codec=r(84).codec},function(t,e){function r(t){return t&&t.isBuffer&&t}t.exports=r("undefined"!=typeof Buffer&&Buffer)||r(this.Buffer)||r("undefined"!=typeof window&&window.Buffer)||this.Buffer},function(t,e,r){var n=r(2);function i(t){return new Array(t)}(e=t.exports=i(0)).alloc=i,e.concat=n.concat,e.from=function(t){if(!n.isBuffer(t)&&n.isView(t))t=n.Uint8Array.from(t);else if(n.isArrayBuffer(t))t=new Uint8Array(t);else{if("string"==typeof t)return n.from.call(e,t);if("number"==typeof t)throw new TypeError('"value" argument must not be a number')}return Array.prototype.slice.call(t)}},function(t,e,r){var n=r(2),i=n.global;function o(t){return new i(t)}(e=t.exports=n.hasBuffer?o(0):[]).alloc=n.hasBuffer&&i.alloc||o,e.concat=n.concat,e.from=function(t){if(!n.isBuffer(t)&&n.isView(t))t=n.Uint8Array.from(t);else if(n.isArrayBuffer(t))t=new Uint8Array(t);else{if("string"==typeof t)return n.from.call(e,t);if("number"==typeof t)throw new TypeError('"value" argument must not be a number')}return i.from&&1!==i.from.length?i.from(t):new i(t)}},function(t,e,r){var n=r(2);function i(t){return new Uint8Array(t)}(e=t.exports=n.hasArrayBuffer?i(0):[]).alloc=i,e.concat=n.concat,e.from=function(t){if(n.isView(t)){var r=t.byteOffset,i=t.byteLength;(t=t.buffer).byteLength!==i&&(t.slice?t=t.slice(r,r+i):(t=new Uint8Array(t)).byteLength!==i&&(t=Array.prototype.slice.call(t,r,r+i)))}else{if("string"==typeof t)return n.from.call(e,t);if("number"==typeof t)throw new TypeError('"value" argument must not be a number')}return new Uint8Array(t)}},function(t,e){e.copy=function(t,e,r,n){var i;r||(r=0);n||0===n||(n=this.length);e||(e=0);var o=n-r;if(t===this&&r<e&&e<n)for(i=o-1;i>=0;i--)t[i+e]=this[i+r];else for(i=0;i<o;i++)t[i+e]=this[i+r];return o},e.toString=function(t,e,r){var n=0|e;r||(r=this.length);var i="",o=0;for(;n<r;)(o=this[n++])<128?i+=String.fromCharCode(o):(192==(224&o)?o=(31&o)<<6|63&this[n++]:224==(240&o)?o=(15&o)<<12|(63&this[n++])<<6|63&this[n++]:240==(248&o)&&(o=(7&o)<<18|(63&this[n++])<<12|(63&this[n++])<<6|63&this[n++]),o>=65536?(o-=65536,i+=String.fromCharCode(55296+(o>>>10),56320+(1023&o))):i+=String.fromCharCode(o));return i},e.write=function(t,e){var r=e||(e|=0),n=t.length,i=0,o=0;for(;o<n;)(i=t.charCodeAt(o++))<128?this[r++]=i:i<2048?(this[r++]=192|i>>>6,this[r++]=128|63&i):i<55296||i>57343?(this[r++]=224|i>>>12,this[r++]=128|i>>>6&63,this[r++]=128|63&i):(i=65536+(i-55296<<10|t.charCodeAt(o++)-56320),this[r++]=240|i>>>18,this[r++]=128|i>>>12&63,this[r++]=128|i>>>6&63,this[r++]=128|63&i);return r-e}},function(t,e,r){e.setExtPackers=function(t){t.addExtPacker(14,Error,[c,a]),t.addExtPacker(1,EvalError,[c,a]),t.addExtPacker(2,RangeError,[c,a]),t.addExtPacker(3,ReferenceError,[c,a]),t.addExtPacker(4,SyntaxError,[c,a]),t.addExtPacker(5,TypeError,[c,a]),t.addExtPacker(6,URIError,[c,a]),t.addExtPacker(10,RegExp,[h,a]),t.addExtPacker(11,Boolean,[u,a]),t.addExtPacker(12,String,[u,a]),t.addExtPacker(13,Date,[Number,a]),t.addExtPacker(15,Number,[u,a]),"undefined"!=typeof Uint8Array&&(t.addExtPacker(17,Int8Array,f),t.addExtPacker(18,Uint8Array,f),t.addExtPacker(19,Int16Array,f),t.addExtPacker(20,Uint16Array,f),t.addExtPacker(21,Int32Array,f),t.addExtPacker(22,Uint32Array,f),t.addExtPacker(23,Float32Array,f),"undefined"!=typeof Float64Array&&t.addExtPacker(24,Float64Array,f),"undefined"!=typeof Uint8ClampedArray&&t.addExtPacker(25,Uint8ClampedArray,f),t.addExtPacker(26,ArrayBuffer,f),t.addExtPacker(29,DataView,f));i.hasBuffer&&t.addExtPacker(27,o,i.from)};var n,i=r(2),o=i.global,f=i.Uint8Array.from,s={name:1,message:1,stack:1,columnNumber:1,fileName:1,lineNumber:1};function a(t){return n||(n=r(33).encode),n(t)}function u(t){return t.valueOf()}function h(t){(t=RegExp.prototype.toString.call(t).split("/")).shift();var e=[t.pop()];return e.unshift(t.join("/")),e}function c(t){var e={};for(var r in s)e[r]=t[r];return e}},function(t,e,r){var n=r(15),i=r(23),o=i.Uint64BE,f=i.Int64BE,s=r(2),a=r(22),u=r(78),h=r(36).uint8,c=r(21).ExtBuffer,l="undefined"!=typeof Uint8Array,p="undefined"!=typeof Map,d=[];d[1]=212,d[2]=213,d[4]=214,d[8]=215,d[16]=216,e.getWriteType=function(t){var e=u.getWriteToken(t),r=t&&t.useraw,i=l&&t&&t.binarraybuffer,g=i?s.isArrayBuffer:s.isBuffer,y=i?function(t,e){w(t,new Uint8Array(e))}:w,v=p&&t&&t.usemap?function(t,r){if(!(r instanceof Map))return _(t,r);var n=r.size;e[n<16?128+n:n<=65535?222:223](t,n);var i=t.codec.encode;r.forEach(function(e,r,n){i(t,r),i(t,e)})}:_;return{boolean:function(t,r){e[r?195:194](t,r)},function:m,number:function(t,r){var n,i=0|r;if(r!==i)return void e[n=203](t,r);n=-32<=i&&i<=127?255&i:0<=i?i<=255?204:i<=65535?205:206:-128<=i?208:-32768<=i?209:210;e[n](t,i)},object:r?function(t,r){if(g(r))return function(t,r){var n=r.length;e[n<32?160+n:n<=65535?218:219](t,n),t.send(r)}(t,r);b(t,r)}:b,string:function(t){return function(r,n){var i=n.length,o=5+3*i;r.offset=r.reserve(o);var f=r.buffer,s=t(i),u=r.offset+s;i=a.write.call(f,n,u);var h=t(i);if(s!==h){var c=u+h-s,l=u+i;a.copy.call(f,f,c,u,l)}e[1===h?160+i:h<=3?215+h:219](r,i),r.offset+=i}}(r?function(t){return t<32?1:t<=65535?3:5}:function(t){return t<32?1:t<=255?2:t<=65535?3:5}),symbol:m,undefined:m};function b(t,r){if(null===r)return m(t,r);if(g(r))return y(t,r);if(n(r))return function(t,r){var n=r.length;e[n<16?144+n:n<=65535?220:221](t,n);for(var i=t.codec.encode,o=0;o<n;o++)i(t,r[o])}(t,r);if(o.isUint64BE(r))return function(t,r){e[207](t,r.toArray())}(t,r);if(f.isInt64BE(r))return function(t,r){e[211](t,r.toArray())}(t,r);var i=t.codec.getExtPacker(r);if(i&&(r=i(r)),r instanceof c)return function(t,r){var n=r.buffer,i=n.length,o=d[i]||(i<255?199:i<=65535?200:201);e[o](t,i),h[r.type](t),t.send(n)}(t,r);v(t,r)}function m(t,r){e[192](t,r)}function w(t,r){var n=r.length,i=n<255?196:n<=65535?197:198;e[i](t,n),t.send(r)}function _(t,r){var n=Object.keys(r),i=n.length,o=i<16?128+i:i<=65535?222:223;e[o](t,i);var f=t.codec.encode;n.forEach(function(e){f(t,e),f(t,r[e])})}}},function(t,e,r){var n=r(35),i=r(23),o=i.Uint64BE,f=i.Int64BE,s=r(36).uint8,a=r(2),u=a.global,h=a.hasBuffer&&"TYPED_ARRAY_SUPPORT"in u&&!u.TYPED_ARRAY_SUPPORT,c=a.hasBuffer&&u.prototype||{};function l(){var t=s.slice();return t[196]=p(196),t[197]=d(197),t[198]=g(198),t[199]=p(199),t[200]=d(200),t[201]=g(201),t[202]=y(202,4,c.writeFloatBE||m,!0),t[203]=y(203,8,c.writeDoubleBE||w,!0),t[204]=p(204),t[205]=d(205),t[206]=g(206),t[207]=y(207,8,v),t[208]=p(208),t[209]=d(209),t[210]=g(210),t[211]=y(211,8,b),t[217]=p(217),t[218]=d(218),t[219]=g(219),t[220]=d(220),t[221]=g(221),t[222]=d(222),t[223]=g(223),t}function p(t){return function(e,r){var n=e.reserve(2),i=e.buffer;i[n++]=t,i[n]=r}}function d(t){return function(e,r){var n=e.reserve(3),i=e.buffer;i[n++]=t,i[n++]=r>>>8,i[n]=r}}function g(t){return function(e,r){var n=e.reserve(5),i=e.buffer;i[n++]=t,i[n++]=r>>>24,i[n++]=r>>>16,i[n++]=r>>>8,i[n]=r}}function y(t,e,r,n){return function(i,o){var f=i.reserve(e+1);i.buffer[f++]=t,r.call(i.buffer,o,f,n)}}function v(t,e){new o(this,e,t)}function b(t,e){new f(this,e,t)}function m(t,e){n.write(this,t,e,!1,23,4)}function w(t,e){n.write(this,t,e,!1,52,8)}e.getWriteToken=function(t){return t&&t.uint8array?((e=l())[202]=y(202,4,m),e[203]=y(203,8,w),e):h||a.hasBuffer&&t&&t.safe?function(){var t=s.slice();return t[196]=y(196,1,u.prototype.writeUInt8),t[197]=y(197,2,u.prototype.writeUInt16BE),t[198]=y(198,4,u.prototype.writeUInt32BE),t[199]=y(199,1,u.prototype.writeUInt8),t[200]=y(200,2,u.prototype.writeUInt16BE),t[201]=y(201,4,u.prototype.writeUInt32BE),t[202]=y(202,4,u.prototype.writeFloatBE),t[203]=y(203,8,u.prototype.writeDoubleBE),t[204]=y(204,1,u.prototype.writeUInt8),t[205]=y(205,2,u.prototype.writeUInt16BE),t[206]=y(206,4,u.prototype.writeUInt32BE),t[207]=y(207,8,v),t[208]=y(208,1,u.prototype.writeInt8),t[209]=y(209,2,u.prototype.writeInt16BE),t[210]=y(210,4,u.prototype.writeInt32BE),t[211]=y(211,8,b),t[217]=y(217,1,u.prototype.writeUInt8),t[218]=y(218,2,u.prototype.writeUInt16BE),t[219]=y(219,4,u.prototype.writeUInt32BE),t[220]=y(220,2,u.prototype.writeUInt16BE),t[221]=y(221,4,u.prototype.writeUInt32BE),t[222]=y(222,2,u.prototype.writeUInt16BE),t[223]=y(223,4,u.prototype.writeUInt32BE),t}():l();var e}},function(t,e,r){e.setExtUnpackers=function(t){t.addExtUnpacker(14,[s,u(Error)]),t.addExtUnpacker(1,[s,u(EvalError)]),t.addExtUnpacker(2,[s,u(RangeError)]),t.addExtUnpacker(3,[s,u(ReferenceError)]),t.addExtUnpacker(4,[s,u(SyntaxError)]),t.addExtUnpacker(5,[s,u(TypeError)]),t.addExtUnpacker(6,[s,u(URIError)]),t.addExtUnpacker(10,[s,a]),t.addExtUnpacker(11,[s,h(Boolean)]),t.addExtUnpacker(12,[s,h(String)]),t.addExtUnpacker(13,[s,h(Date)]),t.addExtUnpacker(15,[s,h(Number)]),"undefined"!=typeof Uint8Array&&(t.addExtUnpacker(17,h(Int8Array)),t.addExtUnpacker(18,h(Uint8Array)),t.addExtUnpacker(19,[c,h(Int16Array)]),t.addExtUnpacker(20,[c,h(Uint16Array)]),t.addExtUnpacker(21,[c,h(Int32Array)]),t.addExtUnpacker(22,[c,h(Uint32Array)]),t.addExtUnpacker(23,[c,h(Float32Array)]),"undefined"!=typeof Float64Array&&t.addExtUnpacker(24,[c,h(Float64Array)]),"undefined"!=typeof Uint8ClampedArray&&t.addExtUnpacker(25,h(Uint8ClampedArray)),t.addExtUnpacker(26,c),t.addExtUnpacker(29,[c,h(DataView)]));i.hasBuffer&&t.addExtUnpacker(27,h(o))};var n,i=r(2),o=i.global,f={name:1,message:1,stack:1,columnNumber:1,fileName:1,lineNumber:1};function s(t){return n||(n=r(38).decode),n(t)}function a(t){return RegExp.apply(null,t)}function u(t){return function(e){var r=new t;for(var n in f)r[n]=e[n];return r}}function h(t){return function(e){return new t(e)}}function c(t){return new Uint8Array(t).buffer}},function(t,e,r){var n=r(40);function i(t){var e,r=new Array(256);for(e=0;e<=127;e++)r[e]=o(e);for(e=128;e<=143;e++)r[e]=s(e-128,t.map);for(e=144;e<=159;e++)r[e]=s(e-144,t.array);for(e=160;e<=191;e++)r[e]=s(e-160,t.str);for(r[192]=o(null),r[193]=null,r[194]=o(!1),r[195]=o(!0),r[196]=f(t.uint8,t.bin),r[197]=f(t.uint16,t.bin),r[198]=f(t.uint32,t.bin),r[199]=f(t.uint8,t.ext),r[200]=f(t.uint16,t.ext),r[201]=f(t.uint32,t.ext),r[202]=t.float32,r[203]=t.float64,r[204]=t.uint8,r[205]=t.uint16,r[206]=t.uint32,r[207]=t.uint64,r[208]=t.int8,r[209]=t.int16,r[210]=t.int32,r[211]=t.int64,r[212]=s(1,t.ext),r[213]=s(2,t.ext),r[214]=s(4,t.ext),r[215]=s(8,t.ext),r[216]=s(16,t.ext),r[217]=f(t.uint8,t.str),r[218]=f(t.uint16,t.str),r[219]=f(t.uint32,t.str),r[220]=f(t.uint16,t.array),r[221]=f(t.uint32,t.array),r[222]=f(t.uint16,t.map),r[223]=f(t.uint32,t.map),e=224;e<=255;e++)r[e]=o(e-256);return r}function o(t){return function(){return t}}function f(t,e){return function(r){var n=t(r);return e(r,n)}}function s(t,e){return function(r){return e(r,t)}}e.getReadToken=function(t){var e=n.getReadFormat(t);return t&&t.useraw?function(t){var e,r=i(t).slice();for(r[217]=r[196],r[218]=r[197],r[219]=r[198],e=160;e<=191;e++)r[e]=s(e-160,t.bin);return r}(e):i(e)}},function(t,e,r){e.Encoder=o;var n=r(41),i=r(34).EncodeBuffer;function o(t){if(!(this instanceof o))return new o(t);i.call(this,t)}o.prototype=new i,n.mixin(o.prototype),o.prototype.encode=function(t){this.write(t),this.emit("data",this.read())},o.prototype.end=function(t){arguments.length&&this.encode(t),this.flush(),this.emit("end")}},function(t,e,r){e.Decoder=o;var n=r(41),i=r(39).DecodeBuffer;function o(t){if(!(this instanceof o))return new o(t);i.call(this,t)}o.prototype=new i,n.mixin(o.prototype),o.prototype.decode=function(t){arguments.length&&this.write(t),this.flush()},o.prototype.push=function(t){this.emit("data",t)},o.prototype.end=function(t){this.decode(t),this.emit("end")}},function(t,e,r){r(24),r(20),e.createCodec=r(16).createCodec},function(t,e,r){r(24),r(20),e.codec={preset:r(16).preset}},function(t,e,r){let n=r(86);const i=":base64:";function o(t){return a(t,s)}function f(t,e){return null!=e&&"Buffer"===e.type&&Array.isArray(e.data)&&(e=Buffer.from(e)),Buffer.isBuffer(e)?`${i}${function(t){let e=Math.ceil(t.length*(4/3));return t.toString("base64").slice(0,e)}(e)}`:e}function s(t,e){return"string"!=typeof e?e:e.startsWith(i)?Buffer.from(e.slice(i.length),"base64"):e}function a(t,e){if("object"!=typeof(t=e(null,t)))return t;for(let r in t)t[r]=a(t[r],e);return t}t.exports={stringify:function(t){return n(t,{replacer:f})},parse:function(t){return o(JSON.parse(t))},convertBuffersToBase64:function(t){return a(t,f)},convertBase64ToBuffers:o}},function(t,e,r){var n="undefined"!=typeof JSON?JSON:r(87);t.exports=function(t,e){e||(e={}),"function"==typeof e&&(e={cmp:e});var r=e.space||"";"number"==typeof r&&(r=Array(r+1).join(" "));var f,s="boolean"==typeof e.cycles&&e.cycles,a=e.replacer||function(t,e){return e},u=e.cmp&&(f=e.cmp,function(t){return function(e,r){var n={key:e,value:t[e]},i={key:r,value:t[r]};return f(n,i)}}),h=[];return function t(e,f,c,l){var p=r?"\n"+new Array(l+1).join(r):"",d=r?": ":":";if(c&&c.toJSON&&"function"==typeof c.toJSON&&(c=c.toJSON()),void 0!==(c=a.call(e,f,c))){if("object"!=typeof c||null===c)return n.stringify(c);if(i(c)){for(var g=[],y=0;y<c.length;y++){var v=t(c,y,c[y],l+1)||n.stringify(null);g.push(p+r+v)}return"["+g.join(",")+p+"]"}if(-1!==h.indexOf(c)){if(s)return n.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}h.push(c);var b=o(c).sort(u&&u(c));for(g=[],y=0;y<b.length;y++){var m=t(c,f=b[y],c[f],l+1);if(m){var w=n.stringify(f)+d+m;g.push(p+r+w)}}return h.splice(h.indexOf(c),1),"{"+g.join(",")+p+"}"}}({"":t},"",t,0)};var i=Array.isArray||function(t){return"[object Array]"==={}.toString.call(t)},o=Object.keys||function(t){var e=Object.prototype.hasOwnProperty||function(){return!0},r=[];for(var n in t)e.call(t,n)&&r.push(n);return r}},function(t,e,r){e.parse=r(88),e.stringify=r(89)},function(t,e){var r,n,i,o,f={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},s=function(t){throw{name:"SyntaxError",message:t,at:r,text:i}},a=function(t){return t&&t!==n&&s("Expected '"+t+"' instead of '"+n+"'"),n=i.charAt(r),r+=1,n},u=function(){var t,e="";for("-"===n&&(e="-",a("-"));n>="0"&&n<="9";)e+=n,a();if("."===n)for(e+=".";a()&&n>="0"&&n<="9";)e+=n;if("e"===n||"E"===n)for(e+=n,a(),"-"!==n&&"+"!==n||(e+=n,a());n>="0"&&n<="9";)e+=n,a();if(t=+e,isFinite(t))return t;s("Bad number")},h=function(){var t,e,r,i="";if('"'===n)for(;a();){if('"'===n)return a(),i;if("\\"===n)if(a(),"u"===n){for(r=0,e=0;e<4&&(t=parseInt(a(),16),isFinite(t));e+=1)r=16*r+t;i+=String.fromCharCode(r)}else{if("string"!=typeof f[n])break;i+=f[n]}else i+=n}s("Bad string")},c=function(){for(;n&&n<=" ";)a()};o=function(){switch(c(),n){case"{":return function(){var t,e={};if("{"===n){if(a("{"),c(),"}"===n)return a("}"),e;for(;n;){if(t=h(),c(),a(":"),Object.hasOwnProperty.call(e,t)&&s('Duplicate key "'+t+'"'),e[t]=o(),c(),"}"===n)return a("}"),e;a(","),c()}}s("Bad object")}();case"[":return function(){var t=[];if("["===n){if(a("["),c(),"]"===n)return a("]"),t;for(;n;){if(t.push(o()),c(),"]"===n)return a("]"),t;a(","),c()}}s("Bad array")}();case'"':return h();case"-":return u();default:return n>="0"&&n<="9"?u():function(){switch(n){case"t":return a("t"),a("r"),a("u"),a("e"),!0;case"f":return a("f"),a("a"),a("l"),a("s"),a("e"),!1;case"n":return a("n"),a("u"),a("l"),a("l"),null}s("Unexpected '"+n+"'")}()}},t.exports=function(t,e){var f;return i=t,r=0,n=" ",f=o(),c(),n&&s("Syntax error"),"function"==typeof e?function t(r,n){var i,o,f=r[n];if(f&&"object"==typeof f)for(i in f)Object.prototype.hasOwnProperty.call(f,i)&&(void 0!==(o=t(f,i))?f[i]=o:delete f[i]);return e.call(r,n,f)}({"":f},""):f}},function(t,e){var r,n,i,o=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,f={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function s(t){return o.lastIndex=0,o.test(t)?'"'+t.replace(o,function(t){var e=f[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}t.exports=function(t,e,o){var f;if(r="",n="","number"==typeof o)for(f=0;f<o;f+=1)n+=" ";else"string"==typeof o&&(n=o);if(i=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return function t(e,o){var f,a,u,h,c,l=r,p=o[e];switch(p&&"object"==typeof p&&"function"==typeof p.toJSON&&(p=p.toJSON(e)),"function"==typeof i&&(p=i.call(o,e,p)),typeof p){case"string":return s(p);case"number":return isFinite(p)?String(p):"null";case"boolean":case"null":return String(p);case"object":if(!p)return"null";if(r+=n,c=[],"[object Array]"===Object.prototype.toString.apply(p)){for(h=p.length,f=0;f<h;f+=1)c[f]=t(f,p)||"null";return u=0===c.length?"[]":r?"[\n"+r+c.join(",\n"+r)+"\n"+l+"]":"["+c.join(",")+"]",r=l,u}if(i&&"object"==typeof i)for(h=i.length,f=0;f<h;f+=1)"string"==typeof(a=i[f])&&(u=t(a,p))&&c.push(s(a)+(r?": ":":")+u);else for(a in p)Object.prototype.hasOwnProperty.call(p,a)&&(u=t(a,p))&&c.push(s(a)+(r?": ":":")+u);return u=0===c.length?"{}":r?"{\n"+r+c.join(",\n"+r)+"\n"+l+"}":"{"+c.join(",")+"}",r=l,u}}("",{"":t})}},function(t,e){},function(t,e,r){"use strict";var n=r(0).Buffer,i=r(92);t.exports=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.head=null,this.tail=null,this.length=0}return t.prototype.push=function(t){var e={data:t,next:null};this.length>0?this.tail.next=e:this.head=e,this.tail=e,++this.length},t.prototype.unshift=function(t){var e={data:t,next:this.head};0===this.length&&(this.tail=e),this.head=e,++this.length},t.prototype.shift=function(){if(0!==this.length){var t=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,t}},t.prototype.clear=function(){this.head=this.tail=null,this.length=0},t.prototype.join=function(t){if(0===this.length)return"";for(var e=this.head,r=""+e.data;e=e.next;)r+=t+e.data;return r},t.prototype.concat=function(t){if(0===this.length)return n.alloc(0);if(1===this.length)return this.head.data;for(var e,r,i,o=n.allocUnsafe(t>>>0),f=this.head,s=0;f;)e=f.data,r=o,i=s,e.copy(r,i),s+=f.data.length,f=f.next;return o},t}(),i&&i.inspect&&i.inspect.custom&&(t.exports.prototype[i.inspect.custom]=function(){var t=i.inspect({length:this.length});return this.constructor.name+" "+t})},function(t,e){},function(t,e,r){(function(t){var n=void 0!==t&&t||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function o(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new o(i.call(setTimeout,n,arguments),clearTimeout)},e.setInterval=function(){return new o(i.call(setInterval,n,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(n,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},r(94),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,r(5))},function(t,e,r){(function(t,e){!function(t,r){"use strict";if(!t.setImmediate){var n,i,o,f,s,a=1,u={},h=!1,c=t.document,l=Object.getPrototypeOf&&Object.getPrototypeOf(t);l=l&&l.setTimeout?l:t,"[object process]"==={}.toString.call(t.process)?n=function(t){e.nextTick(function(){d(t)})}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,r=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=r,e}}()?t.MessageChannel?((o=new MessageChannel).port1.onmessage=function(t){d(t.data)},n=function(t){o.port2.postMessage(t)}):c&&"onreadystatechange"in c.createElement("script")?(i=c.documentElement,n=function(t){var e=c.createElement("script");e.onreadystatechange=function(){d(t),e.onreadystatechange=null,i.removeChild(e),e=null},i.appendChild(e)}):n=function(t){setTimeout(d,0,t)}:(f="setImmediate$"+Math.random()+"$",s=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(f)&&d(+e.data.slice(f.length))},t.addEventListener?t.addEventListener("message",s,!1):t.attachEvent("onmessage",s),n=function(e){t.postMessage(f+e,"*")}),l.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),r=0;r<e.length;r++)e[r]=arguments[r+1];var i={callback:t,args:e};return u[a]=i,n(a),a++},l.clearImmediate=p}function p(t){delete u[t]}function d(t){if(h)setTimeout(d,0,t);else{var e=u[t];if(e){h=!0;try{!function(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(r,n)}}(e)}finally{p(t),h=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,r(5),r(9))},function(t,e,r){(function(e){function r(t){try{if(!e.localStorage)return!1}catch(t){return!1}var r=e.localStorage[t];return null!=r&&"true"===String(r).toLowerCase()}t.exports=function(t,e){if(r("noDeprecation"))return t;var n=!1;return function(){if(!n){if(r("throwDeprecation"))throw new Error(e);r("traceDeprecation")?console.trace(e):console.warn(e),n=!0}return t.apply(this,arguments)}}}).call(this,r(5))},function(t,e,r){"use strict";t.exports=o;var n=r(48),i=r(11);function o(t){if(!(this instanceof o))return new o(t);n.call(this,t)}i.inherits=r(1),i.inherits(o,n),o.prototype._transform=function(t,e,r){r(null,t)}},function(t,e,r){t.exports=r(29)},function(t,e,r){t.exports=r(6)},function(t,e,r){t.exports=r(28).Transform},function(t,e,r){t.exports=r(28).PassThrough},function(t,e,r){var n=r(1),i=r(10),o=r(0).Buffer,f=[1518500249,1859775393,-1894007588,-899497514],s=new Array(80);function a(){this.init(),this._w=s,i.call(this,64,56)}function u(t){return t<<30|t>>>2}function h(t,e,r,n){return 0===t?e&r|~e&n:2===t?e&r|e&n|r&n:e^r^n}n(a,i),a.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},a.prototype._update=function(t){for(var e,r=this._w,n=0|this._a,i=0|this._b,o=0|this._c,s=0|this._d,a=0|this._e,c=0;c<16;++c)r[c]=t.readInt32BE(4*c);for(;c<80;++c)r[c]=r[c-3]^r[c-8]^r[c-14]^r[c-16];for(var l=0;l<80;++l){var p=~~(l/20),d=0|((e=n)<<5|e>>>27)+h(p,i,o,s)+a+r[l]+f[p];a=s,s=o,o=u(i),i=n,n=d}this._a=n+this._a|0,this._b=i+this._b|0,this._c=o+this._c|0,this._d=s+this._d|0,this._e=a+this._e|0},a.prototype._hash=function(){var t=o.allocUnsafe(20);return t.writeInt32BE(0|this._a,0),t.writeInt32BE(0|this._b,4),t.writeInt32BE(0|this._c,8),t.writeInt32BE(0|this._d,12),t.writeInt32BE(0|this._e,16),t},t.exports=a},function(t,e,r){var n=r(1),i=r(10),o=r(0).Buffer,f=[1518500249,1859775393,-1894007588,-899497514],s=new Array(80);function a(){this.init(),this._w=s,i.call(this,64,56)}function u(t){return t<<5|t>>>27}function h(t){return t<<30|t>>>2}function c(t,e,r,n){return 0===t?e&r|~e&n:2===t?e&r|e&n|r&n:e^r^n}n(a,i),a.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},a.prototype._update=function(t){for(var e,r=this._w,n=0|this._a,i=0|this._b,o=0|this._c,s=0|this._d,a=0|this._e,l=0;l<16;++l)r[l]=t.readInt32BE(4*l);for(;l<80;++l)r[l]=(e=r[l-3]^r[l-8]^r[l-14]^r[l-16])<<1|e>>>31;for(var p=0;p<80;++p){var d=~~(p/20),g=u(n)+c(d,i,o,s)+a+r[p]+f[d]|0;a=s,s=o,o=h(i),i=n,n=g}this._a=n+this._a|0,this._b=i+this._b|0,this._c=o+this._c|0,this._d=s+this._d|0,this._e=a+this._e|0},a.prototype._hash=function(){var t=o.allocUnsafe(20);return t.writeInt32BE(0|this._a,0),t.writeInt32BE(0|this._b,4),t.writeInt32BE(0|this._c,8),t.writeInt32BE(0|this._d,12),t.writeInt32BE(0|this._e,16),t},t.exports=a},function(t,e,r){var n=r(1),i=r(51),o=r(10),f=r(0).Buffer,s=new Array(64);function a(){this.init(),this._w=s,o.call(this,64,56)}n(a,i),a.prototype.init=function(){return this._a=3238371032,this._b=914150663,this._c=812702999,this._d=4144912697,this._e=4290775857,this._f=1750603025,this._g=1694076839,this._h=3204075428,this},a.prototype._hash=function(){var t=f.allocUnsafe(28);return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t},t.exports=a},function(t,e,r){var n=r(1),i=r(52),o=r(10),f=r(0).Buffer,s=new Array(160);function a(){this.init(),this._w=s,o.call(this,128,112)}n(a,i),a.prototype.init=function(){return this._ah=3418070365,this._bh=1654270250,this._ch=2438529370,this._dh=355462360,this._eh=1731405415,this._fh=2394180231,this._gh=3675008525,this._hh=1203062813,this._al=3238371032,this._bl=914150663,this._cl=812702999,this._dl=4144912697,this._el=4290775857,this._fl=1750603025,this._gl=1694076839,this._hl=3204075428,this},a.prototype._hash=function(){var t=f.allocUnsafe(48);function e(e,r,n){t.writeInt32BE(e,n),t.writeInt32BE(r,n+4)}return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),t},t.exports=a},function(t,e,r){var n=r(106),i=r(67),o={verify:function(t,e,r){if(!t)throw new Error("Signature is required");if(!e)throw new Error("Message is required to verify signature");return n.verify(t,e,"EOS"+r)},verifyTxSignature:function(t){if(!o.verify(t.signature,t.signatureMessage,t.from))throw new Error("Invalid signature")},generateKey:n.randomKey,toPublicKey:function(t){return n.privateToPublic(t).slice(3)},sign:n.sign,signTxData:function(t,e){var r=new i(t.from,t.to,t.value,t.fee,t.data,t.nonce);return t.signature=n.sign(r.signatureMessage,e),t.nonce||(t.nonce=r.nonce),"string"!=typeof t.data&&(t.data=JSON.stringify(t.data)),t}};t.exports=o},function(t,e,r){"use strict";var n=r(107),i=r(134),o=Object.assign({},n,i);t.exports=o},function(t,e,r){"use strict";r(53);var n=r(19),i=r(13),o=r(65),f=(r(14),r(8)),s={initialize:n.initialize,unsafeRandomKey:function(){return n.unsafeRandomKey().then(function(t){return t.toString()})},randomKey:function(t){return n.randomKey(t).then(function(t){return t.toString()})},seedPrivate:function(t){return n.fromSeed(t).toString()},privateToPublic:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"EOS";return n(t).toPublic().toString(e)},isValidPublic:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"EOS";return i.isValid(t,e)},isValidPrivate:function(t){return n.isValid(t)},sign:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"utf8";if(!0===r)throw new TypeError("API changed, use signHash(..) instead");return!1===r&&console.log("Warning: ecc.sign hashData parameter was removed"),o.sign(t,e,r).toString()},signHash:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"hex";return o.signHash(t,e,r).toString()},verify:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"utf8";if(!0===n)throw new TypeError("API changed, use verifyHash(..) instead");return!1===n&&console.log("Warning: ecc.verify hashData parameter was removed"),(t=o.from(t)).verify(e,r,n)},verifyHash:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"hex";return(t=o.from(t)).verifyHash(e,r,n)},recover:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"utf8";if(!0===r)throw new TypeError("API changed, use recoverHash(signature, data) instead");return!1===r&&console.log("Warning: ecc.recover hashData parameter was removed"),(t=o.from(t)).recover(e,r).toString()},recoverHash:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"hex";return(t=o.from(t)).recoverHash(e,r).toString()},sha256:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hex";return f.sha256(t,e)}};t.exports=s},function(t,e,r){var n,i,o;
/**
 * @license bytebuffer.js (c) 2015 Daniel Wirtz <dcode@dcode.io>
 * Backing buffer: ArrayBuffer, Accessor: Uint8Array
 * Released under the Apache License, Version 2.0
 * see: https://github.com/dcodeIO/bytebuffer.js for details
 */i=[r(109)],void 0===(o="function"==typeof(n=function(t){"use strict";var e=function(t,r,i){if(void 0===t&&(t=e.DEFAULT_CAPACITY),void 0===r&&(r=e.DEFAULT_ENDIAN),void 0===i&&(i=e.DEFAULT_NOASSERT),!i){if((t|=0)<0)throw RangeError("Illegal capacity");r=!!r,i=!!i}this.buffer=0===t?n:new ArrayBuffer(t),this.view=0===t?null:new Uint8Array(this.buffer),this.offset=0,this.markedOffset=-1,this.limit=t,this.littleEndian=r,this.noAssert=i};e.VERSION="5.0.1",e.LITTLE_ENDIAN=!0,e.BIG_ENDIAN=!1,e.DEFAULT_CAPACITY=16,e.DEFAULT_ENDIAN=e.BIG_ENDIAN,e.DEFAULT_NOASSERT=!1,e.Long=t||null;var r=e.prototype;r.__isByteBuffer__,Object.defineProperty(r,"__isByteBuffer__",{value:!0,enumerable:!1,configurable:!1});var n=new ArrayBuffer(0),i=String.fromCharCode;function o(t){var e=0;return function(){return e<t.length?t.charCodeAt(e++):null}}function f(){var t=[],e=[];return function(){if(0===arguments.length)return e.join("")+i.apply(String,t);t.length+arguments.length>1024&&(e.push(i.apply(String,t)),t.length=0),Array.prototype.push.apply(t,arguments)}}function s(t,e,r,n,i){var o,f,s=8*i-n-1,a=(1<<s)-1,u=a>>1,h=-7,c=r?i-1:0,l=r?-1:1,p=t[e+c];for(c+=l,o=p&(1<<-h)-1,p>>=-h,h+=s;h>0;o=256*o+t[e+c],c+=l,h-=8);for(f=o&(1<<-h)-1,o>>=-h,h+=n;h>0;f=256*f+t[e+c],c+=l,h-=8);if(0===o)o=1-u;else{if(o===a)return f?NaN:1/0*(p?-1:1);f+=Math.pow(2,n),o-=u}return(p?-1:1)*f*Math.pow(2,o-n)}function a(t,e,r,n,i,o){var f,s,a,u=8*o-i-1,h=(1<<u)-1,c=h>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,d=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,f=h):(f=Math.floor(Math.log(e)/Math.LN2),e*(a=Math.pow(2,-f))<1&&(f--,a*=2),(e+=f+c>=1?l/a:l*Math.pow(2,1-c))*a>=2&&(f++,a/=2),f+c>=h?(s=0,f=h):f+c>=1?(s=(e*a-1)*Math.pow(2,i),f+=c):(s=e*Math.pow(2,c-1)*Math.pow(2,i),f=0));i>=8;t[r+p]=255&s,p+=d,s/=256,i-=8);for(f=f<<i|s,u+=i;u>0;t[r+p]=255&f,p+=d,f/=256,u-=8);t[r+p-d]|=128*g}e.accessor=function(){return Uint8Array},e.allocate=function(t,r,n){return new e(t,r,n)},e.concat=function(t,r,n,i){"boolean"!=typeof r&&"string"==typeof r||(i=n,n=r,r=void 0);for(var o,f=0,s=0,a=t.length;s<a;++s)e.isByteBuffer(t[s])||(t[s]=e.wrap(t[s],r)),(o=t[s].limit-t[s].offset)>0&&(f+=o);if(0===f)return new e(0,n,i);var u,h=new e(f,n,i);for(s=0;s<a;)(o=(u=t[s++]).limit-u.offset)<=0||(h.view.set(u.view.subarray(u.offset,u.limit),h.offset),h.offset+=o);return h.limit=h.offset,h.offset=0,h},e.isByteBuffer=function(t){return!0===(t&&t.__isByteBuffer__)},e.type=function(){return ArrayBuffer},e.wrap=function(t,n,i,o){if("string"!=typeof n&&(o=i,i=n,n=void 0),"string"==typeof t)switch(void 0===n&&(n="utf8"),n){case"base64":return e.fromBase64(t,i);case"hex":return e.fromHex(t,i);case"binary":return e.fromBinary(t,i);case"utf8":return e.fromUTF8(t,i);case"debug":return e.fromDebug(t,i);default:throw Error("Unsupported encoding: "+n)}if(null===t||"object"!=typeof t)throw TypeError("Illegal buffer");var f;if(e.isByteBuffer(t))return(f=r.clone.call(t)).markedOffset=-1,f;if(t instanceof Uint8Array)f=new e(0,i,o),t.length>0&&(f.buffer=t.buffer,f.offset=t.byteOffset,f.limit=t.byteOffset+t.byteLength,f.view=new Uint8Array(t.buffer));else if(t instanceof ArrayBuffer)f=new e(0,i,o),t.byteLength>0&&(f.buffer=t,f.offset=0,f.limit=t.byteLength,f.view=t.byteLength>0?new Uint8Array(t):null);else{if("[object Array]"!==Object.prototype.toString.call(t))throw TypeError("Illegal buffer");(f=new e(t.length,i,o)).limit=t.length;for(var s=0;s<t.length;++s)f.view[s]=t[s]}return f},r.writeBitSet=function(t,e){var r=void 0===e;if(r&&(e=this.offset),!this.noAssert){if(!(t instanceof Array))throw TypeError("Illegal BitSet: Not an array");if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+0) <= "+this.buffer.byteLength)}var n,i=e,o=t.length,f=o>>3,s=0;for(e+=this.writeVarint32(o,e);f--;)n=1&!!t[s++]|(1&!!t[s++])<<1|(1&!!t[s++])<<2|(1&!!t[s++])<<3|(1&!!t[s++])<<4|(1&!!t[s++])<<5|(1&!!t[s++])<<6|(1&!!t[s++])<<7,this.writeByte(n,e++);if(s<o){var a=0;for(n=0;s<o;)n|=(1&!!t[s++])<<a++;this.writeByte(n,e++)}return r?(this.offset=e,this):e-i},r.readBitSet=function(t){var e=void 0===t;e&&(t=this.offset);var r,n=this.readVarint32(t),i=n.value,o=i>>3,f=0,s=[];for(t+=n.length;o--;)r=this.readByte(t++),s[f++]=!!(1&r),s[f++]=!!(2&r),s[f++]=!!(4&r),s[f++]=!!(8&r),s[f++]=!!(16&r),s[f++]=!!(32&r),s[f++]=!!(64&r),s[f++]=!!(128&r);if(f<i){var a=0;for(r=this.readByte(t++);f<i;)s[f++]=!!(r>>a++&1)}return e&&(this.offset=t),s},r.readBytes=function(t,e){var r=void 0===e;if(r&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+t>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+"+t+") <= "+this.buffer.byteLength)}var n=this.slice(e,e+t);return r&&(this.offset+=t),n},r.writeBytes=r.append,r.writeInt8=function(t,e){var r=void 0===e;if(r&&(e=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal value: "+t+" (not an integer)");if(t|=0,"number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+0) <= "+this.buffer.byteLength)}e+=1;var n=this.buffer.byteLength;return e>n&&this.resize((n*=2)>e?n:e),e-=1,this.view[e]=t,r&&(this.offset+=1),this},r.writeByte=r.writeInt8,r.readInt8=function(t){var e=void 0===t;if(e&&(t=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+1>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+1) <= "+this.buffer.byteLength)}var r=this.view[t];return 128==(128&r)&&(r=-(255-r+1)),e&&(this.offset+=1),r},r.readByte=r.readInt8,r.writeUint8=function(t,e){var r=void 0===e;if(r&&(e=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal value: "+t+" (not an integer)");if(t>>>=0,"number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+0) <= "+this.buffer.byteLength)}e+=1;var n=this.buffer.byteLength;return e>n&&this.resize((n*=2)>e?n:e),e-=1,this.view[e]=t,r&&(this.offset+=1),this},r.writeUInt8=r.writeUint8,r.readUint8=function(t){var e=void 0===t;if(e&&(t=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+1>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+1) <= "+this.buffer.byteLength)}var r=this.view[t];return e&&(this.offset+=1),r},r.readUInt8=r.readUint8,r.writeInt16=function(t,e){var r=void 0===e;if(r&&(e=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal value: "+t+" (not an integer)");if(t|=0,"number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+0) <= "+this.buffer.byteLength)}e+=2;var n=this.buffer.byteLength;return e>n&&this.resize((n*=2)>e?n:e),e-=2,this.littleEndian?(this.view[e+1]=(65280&t)>>>8,this.view[e]=255&t):(this.view[e]=(65280&t)>>>8,this.view[e+1]=255&t),r&&(this.offset+=2),this},r.writeShort=r.writeInt16,r.readInt16=function(t){var e=void 0===t;if(e&&(t=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+2>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+2) <= "+this.buffer.byteLength)}var r=0;return this.littleEndian?(r=this.view[t],r|=this.view[t+1]<<8):(r=this.view[t]<<8,r|=this.view[t+1]),32768==(32768&r)&&(r=-(65535-r+1)),e&&(this.offset+=2),r},r.readShort=r.readInt16,r.writeUint16=function(t,e){var r=void 0===e;if(r&&(e=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal value: "+t+" (not an integer)");if(t>>>=0,"number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+0) <= "+this.buffer.byteLength)}e+=2;var n=this.buffer.byteLength;return e>n&&this.resize((n*=2)>e?n:e),e-=2,this.littleEndian?(this.view[e+1]=(65280&t)>>>8,this.view[e]=255&t):(this.view[e]=(65280&t)>>>8,this.view[e+1]=255&t),r&&(this.offset+=2),this},r.writeUInt16=r.writeUint16,r.readUint16=function(t){var e=void 0===t;if(e&&(t=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+2>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+2) <= "+this.buffer.byteLength)}var r=0;return this.littleEndian?(r=this.view[t],r|=this.view[t+1]<<8):(r=this.view[t]<<8,r|=this.view[t+1]),e&&(this.offset+=2),r},r.readUInt16=r.readUint16,r.writeInt32=function(t,e){var r=void 0===e;if(r&&(e=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal value: "+t+" (not an integer)");if(t|=0,"number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+0) <= "+this.buffer.byteLength)}e+=4;var n=this.buffer.byteLength;return e>n&&this.resize((n*=2)>e?n:e),e-=4,this.littleEndian?(this.view[e+3]=t>>>24&255,this.view[e+2]=t>>>16&255,this.view[e+1]=t>>>8&255,this.view[e]=255&t):(this.view[e]=t>>>24&255,this.view[e+1]=t>>>16&255,this.view[e+2]=t>>>8&255,this.view[e+3]=255&t),r&&(this.offset+=4),this},r.writeInt=r.writeInt32,r.readInt32=function(t){var e=void 0===t;if(e&&(t=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+4>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+4) <= "+this.buffer.byteLength)}var r=0;return this.littleEndian?(r=this.view[t+2]<<16,r|=this.view[t+1]<<8,r|=this.view[t],r+=this.view[t+3]<<24>>>0):(r=this.view[t+1]<<16,r|=this.view[t+2]<<8,r|=this.view[t+3],r+=this.view[t]<<24>>>0),r|=0,e&&(this.offset+=4),r},r.readInt=r.readInt32,r.writeUint32=function(t,e){var r=void 0===e;if(r&&(e=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal value: "+t+" (not an integer)");if(t>>>=0,"number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+0) <= "+this.buffer.byteLength)}e+=4;var n=this.buffer.byteLength;return e>n&&this.resize((n*=2)>e?n:e),e-=4,this.littleEndian?(this.view[e+3]=t>>>24&255,this.view[e+2]=t>>>16&255,this.view[e+1]=t>>>8&255,this.view[e]=255&t):(this.view[e]=t>>>24&255,this.view[e+1]=t>>>16&255,this.view[e+2]=t>>>8&255,this.view[e+3]=255&t),r&&(this.offset+=4),this},r.writeUInt32=r.writeUint32,r.readUint32=function(t){var e=void 0===t;if(e&&(t=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+4>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+4) <= "+this.buffer.byteLength)}var r=0;return this.littleEndian?(r=this.view[t+2]<<16,r|=this.view[t+1]<<8,r|=this.view[t],r+=this.view[t+3]<<24>>>0):(r=this.view[t+1]<<16,r|=this.view[t+2]<<8,r|=this.view[t+3],r+=this.view[t]<<24>>>0),e&&(this.offset+=4),r},r.readUInt32=r.readUint32,t&&(r.writeInt64=function(e,r){var n=void 0===r;if(n&&(r=this.offset),!this.noAssert){if("number"==typeof e)e=t.fromNumber(e);else if("string"==typeof e)e=t.fromString(e);else if(!(e&&e instanceof t))throw TypeError("Illegal value: "+e+" (not an integer or Long)");if("number"!=typeof r||r%1!=0)throw TypeError("Illegal offset: "+r+" (not an integer)");if((r>>>=0)<0||r+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+r+" (+0) <= "+this.buffer.byteLength)}"number"==typeof e?e=t.fromNumber(e):"string"==typeof e&&(e=t.fromString(e)),r+=8;var i=this.buffer.byteLength;r>i&&this.resize((i*=2)>r?i:r),r-=8;var o=e.low,f=e.high;return this.littleEndian?(this.view[r+3]=o>>>24&255,this.view[r+2]=o>>>16&255,this.view[r+1]=o>>>8&255,this.view[r]=255&o,r+=4,this.view[r+3]=f>>>24&255,this.view[r+2]=f>>>16&255,this.view[r+1]=f>>>8&255,this.view[r]=255&f):(this.view[r]=f>>>24&255,this.view[r+1]=f>>>16&255,this.view[r+2]=f>>>8&255,this.view[r+3]=255&f,r+=4,this.view[r]=o>>>24&255,this.view[r+1]=o>>>16&255,this.view[r+2]=o>>>8&255,this.view[r+3]=255&o),n&&(this.offset+=8),this},r.writeLong=r.writeInt64,r.readInt64=function(e){var r=void 0===e;if(r&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+8>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+8) <= "+this.buffer.byteLength)}var n=0,i=0;this.littleEndian?(n=this.view[e+2]<<16,n|=this.view[e+1]<<8,n|=this.view[e],n+=this.view[e+3]<<24>>>0,e+=4,i=this.view[e+2]<<16,i|=this.view[e+1]<<8,i|=this.view[e],i+=this.view[e+3]<<24>>>0):(i=this.view[e+1]<<16,i|=this.view[e+2]<<8,i|=this.view[e+3],i+=this.view[e]<<24>>>0,e+=4,n=this.view[e+1]<<16,n|=this.view[e+2]<<8,n|=this.view[e+3],n+=this.view[e]<<24>>>0);var o=new t(n,i,!1);return r&&(this.offset+=8),o},r.readLong=r.readInt64,r.writeUint64=function(e,r){var n=void 0===r;if(n&&(r=this.offset),!this.noAssert){if("number"==typeof e)e=t.fromNumber(e);else if("string"==typeof e)e=t.fromString(e);else if(!(e&&e instanceof t))throw TypeError("Illegal value: "+e+" (not an integer or Long)");if("number"!=typeof r||r%1!=0)throw TypeError("Illegal offset: "+r+" (not an integer)");if((r>>>=0)<0||r+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+r+" (+0) <= "+this.buffer.byteLength)}"number"==typeof e?e=t.fromNumber(e):"string"==typeof e&&(e=t.fromString(e)),r+=8;var i=this.buffer.byteLength;r>i&&this.resize((i*=2)>r?i:r),r-=8;var o=e.low,f=e.high;return this.littleEndian?(this.view[r+3]=o>>>24&255,this.view[r+2]=o>>>16&255,this.view[r+1]=o>>>8&255,this.view[r]=255&o,r+=4,this.view[r+3]=f>>>24&255,this.view[r+2]=f>>>16&255,this.view[r+1]=f>>>8&255,this.view[r]=255&f):(this.view[r]=f>>>24&255,this.view[r+1]=f>>>16&255,this.view[r+2]=f>>>8&255,this.view[r+3]=255&f,r+=4,this.view[r]=o>>>24&255,this.view[r+1]=o>>>16&255,this.view[r+2]=o>>>8&255,this.view[r+3]=255&o),n&&(this.offset+=8),this},r.writeUInt64=r.writeUint64,r.readUint64=function(e){var r=void 0===e;if(r&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+8>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+8) <= "+this.buffer.byteLength)}var n=0,i=0;this.littleEndian?(n=this.view[e+2]<<16,n|=this.view[e+1]<<8,n|=this.view[e],n+=this.view[e+3]<<24>>>0,e+=4,i=this.view[e+2]<<16,i|=this.view[e+1]<<8,i|=this.view[e],i+=this.view[e+3]<<24>>>0):(i=this.view[e+1]<<16,i|=this.view[e+2]<<8,i|=this.view[e+3],i+=this.view[e]<<24>>>0,e+=4,n=this.view[e+1]<<16,n|=this.view[e+2]<<8,n|=this.view[e+3],n+=this.view[e]<<24>>>0);var o=new t(n,i,!0);return r&&(this.offset+=8),o},r.readUInt64=r.readUint64),r.writeFloat32=function(t,e){var r=void 0===e;if(r&&(e=this.offset),!this.noAssert){if("number"!=typeof t)throw TypeError("Illegal value: "+t+" (not a number)");if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+0) <= "+this.buffer.byteLength)}e+=4;var n=this.buffer.byteLength;return e>n&&this.resize((n*=2)>e?n:e),e-=4,a(this.view,t,e,this.littleEndian,23,4),r&&(this.offset+=4),this},r.writeFloat=r.writeFloat32,r.readFloat32=function(t){var e=void 0===t;if(e&&(t=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+4>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+4) <= "+this.buffer.byteLength)}var r=s(this.view,t,this.littleEndian,23,4);return e&&(this.offset+=4),r},r.readFloat=r.readFloat32,r.writeFloat64=function(t,e){var r=void 0===e;if(r&&(e=this.offset),!this.noAssert){if("number"!=typeof t)throw TypeError("Illegal value: "+t+" (not a number)");if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+0) <= "+this.buffer.byteLength)}e+=8;var n=this.buffer.byteLength;return e>n&&this.resize((n*=2)>e?n:e),e-=8,a(this.view,t,e,this.littleEndian,52,8),r&&(this.offset+=8),this},r.writeDouble=r.writeFloat64,r.readFloat64=function(t){var e=void 0===t;if(e&&(t=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+8>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+8) <= "+this.buffer.byteLength)}var r=s(this.view,t,this.littleEndian,52,8);return e&&(this.offset+=8),r},r.readDouble=r.readFloat64,e.MAX_VARINT32_BYTES=5,e.calculateVarint32=function(t){return(t>>>=0)<128?1:t<16384?2:t<1<<21?3:t<1<<28?4:5},e.zigZagEncode32=function(t){return((t|=0)<<1^t>>31)>>>0},e.zigZagDecode32=function(t){return t>>>1^-(1&t)|0},r.writeVarint32=function(t,r){var n=void 0===r;if(n&&(r=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal value: "+t+" (not an integer)");if(t|=0,"number"!=typeof r||r%1!=0)throw TypeError("Illegal offset: "+r+" (not an integer)");if((r>>>=0)<0||r+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+r+" (+0) <= "+this.buffer.byteLength)}var i,o=e.calculateVarint32(t);r+=o;var f=this.buffer.byteLength;for(r>f&&this.resize((f*=2)>r?f:r),r-=o,t>>>=0;t>=128;)i=127&t|128,this.view[r++]=i,t>>>=7;return this.view[r++]=t,n?(this.offset=r,this):o},r.writeVarint32ZigZag=function(t,r){return this.writeVarint32(e.zigZagEncode32(t),r)},r.readVarint32=function(t){var e=void 0===t;if(e&&(t=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+1>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+1) <= "+this.buffer.byteLength)}var r,n=0,i=0;do{if(!this.noAssert&&t>this.limit){var o=Error("Truncated");throw o.truncated=!0,o}r=this.view[t++],n<5&&(i|=(127&r)<<7*n),++n}while(0!=(128&r));return i|=0,e?(this.offset=t,i):{value:i,length:n}},r.readVarint32ZigZag=function(t){var r=this.readVarint32(t);return"object"==typeof r?r.value=e.zigZagDecode32(r.value):r=e.zigZagDecode32(r),r},t&&(e.MAX_VARINT64_BYTES=10,e.calculateVarint64=function(e){"number"==typeof e?e=t.fromNumber(e):"string"==typeof e&&(e=t.fromString(e));var r=e.toInt()>>>0,n=e.shiftRightUnsigned(28).toInt()>>>0,i=e.shiftRightUnsigned(56).toInt()>>>0;return 0==i?0==n?r<16384?r<128?1:2:r<1<<21?3:4:n<16384?n<128?5:6:n<1<<21?7:8:i<128?9:10},e.zigZagEncode64=function(e){return"number"==typeof e?e=t.fromNumber(e,!1):"string"==typeof e?e=t.fromString(e,!1):!1!==e.unsigned&&(e=e.toSigned()),e.shiftLeft(1).xor(e.shiftRight(63)).toUnsigned()},e.zigZagDecode64=function(e){return"number"==typeof e?e=t.fromNumber(e,!1):"string"==typeof e?e=t.fromString(e,!1):!1!==e.unsigned&&(e=e.toSigned()),e.shiftRightUnsigned(1).xor(e.and(t.ONE).toSigned().negate()).toSigned()},r.writeVarint64=function(r,n){var i=void 0===n;if(i&&(n=this.offset),!this.noAssert){if("number"==typeof r)r=t.fromNumber(r);else if("string"==typeof r)r=t.fromString(r);else if(!(r&&r instanceof t))throw TypeError("Illegal value: "+r+" (not an integer or Long)");if("number"!=typeof n||n%1!=0)throw TypeError("Illegal offset: "+n+" (not an integer)");if((n>>>=0)<0||n+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+n+" (+0) <= "+this.buffer.byteLength)}"number"==typeof r?r=t.fromNumber(r,!1):"string"==typeof r?r=t.fromString(r,!1):!1!==r.unsigned&&(r=r.toSigned());var o=e.calculateVarint64(r),f=r.toInt()>>>0,s=r.shiftRightUnsigned(28).toInt()>>>0,a=r.shiftRightUnsigned(56).toInt()>>>0;n+=o;var u=this.buffer.byteLength;switch(n>u&&this.resize((u*=2)>n?u:n),n-=o,o){case 10:this.view[n+9]=a>>>7&1;case 9:this.view[n+8]=9!==o?128|a:127&a;case 8:this.view[n+7]=8!==o?s>>>21|128:s>>>21&127;case 7:this.view[n+6]=7!==o?s>>>14|128:s>>>14&127;case 6:this.view[n+5]=6!==o?s>>>7|128:s>>>7&127;case 5:this.view[n+4]=5!==o?128|s:127&s;case 4:this.view[n+3]=4!==o?f>>>21|128:f>>>21&127;case 3:this.view[n+2]=3!==o?f>>>14|128:f>>>14&127;case 2:this.view[n+1]=2!==o?f>>>7|128:f>>>7&127;case 1:this.view[n]=1!==o?128|f:127&f}return i?(this.offset+=o,this):o},r.writeVarint64ZigZag=function(t,r){return this.writeVarint64(e.zigZagEncode64(t),r)},r.readVarint64=function(e){var r=void 0===e;if(r&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+1>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+1) <= "+this.buffer.byteLength)}var n=e,i=0,o=0,f=0,s=0;if(s=this.view[e++],i=127&s,128&s&&(s=this.view[e++],i|=(127&s)<<7,(128&s||this.noAssert&&void 0===s)&&(s=this.view[e++],i|=(127&s)<<14,(128&s||this.noAssert&&void 0===s)&&(s=this.view[e++],i|=(127&s)<<21,(128&s||this.noAssert&&void 0===s)&&(s=this.view[e++],o=127&s,(128&s||this.noAssert&&void 0===s)&&(s=this.view[e++],o|=(127&s)<<7,(128&s||this.noAssert&&void 0===s)&&(s=this.view[e++],o|=(127&s)<<14,(128&s||this.noAssert&&void 0===s)&&(s=this.view[e++],o|=(127&s)<<21,(128&s||this.noAssert&&void 0===s)&&(s=this.view[e++],f=127&s,(128&s||this.noAssert&&void 0===s)&&(s=this.view[e++],f|=(127&s)<<7,128&s||this.noAssert&&void 0===s))))))))))throw Error("Buffer overrun");var a=t.fromBits(i|o<<28,o>>>4|f<<24,!1);return r?(this.offset=e,a):{value:a,length:e-n}},r.readVarint64ZigZag=function(r){var n=this.readVarint64(r);return n&&n.value instanceof t?n.value=e.zigZagDecode64(n.value):n=e.zigZagDecode64(n),n}),r.writeCString=function(t,e){var r=void 0===e;r&&(e=this.offset);var n,i=t.length;if(!this.noAssert){if("string"!=typeof t)throw TypeError("Illegal str: Not a string");for(n=0;n<i;++n)if(0===t.charCodeAt(n))throw RangeError("Illegal str: Contains NULL-characters");if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+0) <= "+this.buffer.byteLength)}i=h.calculateUTF16asUTF8(o(t))[1],e+=i+1;var f=this.buffer.byteLength;return e>f&&this.resize((f*=2)>e?f:e),e-=i+1,h.encodeUTF16toUTF8(o(t),function(t){this.view[e++]=t}.bind(this)),this.view[e++]=0,r?(this.offset=e,this):i},r.readCString=function(t){var e=void 0===t;if(e&&(t=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+1>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+1) <= "+this.buffer.byteLength)}var r,n=t,i=-1;return h.decodeUTF8toUTF16(function(){if(0===i)return null;if(t>=this.limit)throw RangeError("Illegal range: Truncated data, "+t+" < "+this.limit);return 0===(i=this.view[t++])?null:i}.bind(this),r=f(),!0),e?(this.offset=t,r()):{string:r(),length:t-n}},r.writeIString=function(t,e){var r=void 0===e;if(r&&(e=this.offset),!this.noAssert){if("string"!=typeof t)throw TypeError("Illegal str: Not a string");if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+0) <= "+this.buffer.byteLength)}var n,i=e;n=h.calculateUTF16asUTF8(o(t),this.noAssert)[1],e+=4+n;var f=this.buffer.byteLength;if(e>f&&this.resize((f*=2)>e?f:e),e-=4+n,this.littleEndian?(this.view[e+3]=n>>>24&255,this.view[e+2]=n>>>16&255,this.view[e+1]=n>>>8&255,this.view[e]=255&n):(this.view[e]=n>>>24&255,this.view[e+1]=n>>>16&255,this.view[e+2]=n>>>8&255,this.view[e+3]=255&n),e+=4,h.encodeUTF16toUTF8(o(t),function(t){this.view[e++]=t}.bind(this)),e!==i+4+n)throw RangeError("Illegal range: Truncated data, "+e+" == "+(e+4+n));return r?(this.offset=e,this):e-i},r.readIString=function(t){var r=void 0===t;if(r&&(t=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+4>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+4) <= "+this.buffer.byteLength)}var n=t,i=this.readUint32(t),o=this.readUTF8String(i,e.METRICS_BYTES,t+=4);return t+=o.length,r?(this.offset=t,o.string):{string:o.string,length:t-n}},e.METRICS_CHARS="c",e.METRICS_BYTES="b",r.writeUTF8String=function(t,e){var r,n=void 0===e;if(n&&(e=this.offset),!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: "+e+" (not an integer)");if((e>>>=0)<0||e+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+e+" (+0) <= "+this.buffer.byteLength)}var i=e;r=h.calculateUTF16asUTF8(o(t))[1],e+=r;var f=this.buffer.byteLength;return e>f&&this.resize((f*=2)>e?f:e),e-=r,h.encodeUTF16toUTF8(o(t),function(t){this.view[e++]=t}.bind(this)),n?(this.offset=e,this):e-i},r.writeString=r.writeUTF8String,e.calculateUTF8Chars=function(t){return h.calculateUTF16asUTF8(o(t))[0]},e.calculateUTF8Bytes=function(t){return h.calculateUTF16asUTF8(o(t))[1]},e.calculateString=e.calculateUTF8Bytes,r.readUTF8String=function(t,r,n){"number"==typeof r&&(n=r,r=void 0);var i=void 0===n;if(i&&(n=this.offset),void 0===r&&(r=e.METRICS_CHARS),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal length: "+t+" (not an integer)");if(t|=0,"number"!=typeof n||n%1!=0)throw TypeError("Illegal offset: "+n+" (not an integer)");if((n>>>=0)<0||n+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+n+" (+0) <= "+this.buffer.byteLength)}var o,s=0,a=n;if(r===e.METRICS_CHARS){if(o=f(),h.decodeUTF8(function(){return s<t&&n<this.limit?this.view[n++]:null}.bind(this),function(t){++s,h.UTF8toUTF16(t,o)}),s!==t)throw RangeError("Illegal range: Truncated data, "+s+" == "+t);return i?(this.offset=n,o()):{string:o(),length:n-a}}if(r===e.METRICS_BYTES){if(!this.noAssert){if("number"!=typeof n||n%1!=0)throw TypeError("Illegal offset: "+n+" (not an integer)");if((n>>>=0)<0||n+t>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+n+" (+"+t+") <= "+this.buffer.byteLength)}var u=n+t;if(h.decodeUTF8toUTF16(function(){return n<u?this.view[n++]:null}.bind(this),o=f(),this.noAssert),n!==u)throw RangeError("Illegal range: Truncated data, "+n+" == "+u);return i?(this.offset=n,o()):{string:o(),length:n-a}}throw TypeError("Unsupported metrics: "+r)},r.readString=r.readUTF8String,r.writeVString=function(t,r){var n=void 0===r;if(n&&(r=this.offset),!this.noAssert){if("string"!=typeof t)throw TypeError("Illegal str: Not a string");if("number"!=typeof r||r%1!=0)throw TypeError("Illegal offset: "+r+" (not an integer)");if((r>>>=0)<0||r+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+r+" (+0) <= "+this.buffer.byteLength)}var i,f,s=r;i=h.calculateUTF16asUTF8(o(t),this.noAssert)[1],f=e.calculateVarint32(i),r+=f+i;var a=this.buffer.byteLength;if(r>a&&this.resize((a*=2)>r?a:r),r-=f+i,r+=this.writeVarint32(i,r),h.encodeUTF16toUTF8(o(t),function(t){this.view[r++]=t}.bind(this)),r!==s+i+f)throw RangeError("Illegal range: Truncated data, "+r+" == "+(r+i+f));return n?(this.offset=r,this):r-s},r.readVString=function(t){var r=void 0===t;if(r&&(t=this.offset),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+1>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+1) <= "+this.buffer.byteLength)}var n=t,i=this.readVarint32(t),o=this.readUTF8String(i.value,e.METRICS_BYTES,t+=i.length);return t+=o.length,r?(this.offset=t,o.string):{string:o.string,length:t-n}},r.append=function(t,r,n){"number"!=typeof r&&"string"==typeof r||(n=r,r=void 0);var i=void 0===n;if(i&&(n=this.offset),!this.noAssert){if("number"!=typeof n||n%1!=0)throw TypeError("Illegal offset: "+n+" (not an integer)");if((n>>>=0)<0||n+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+n+" (+0) <= "+this.buffer.byteLength)}t instanceof e||(t=e.wrap(t,r));var o=t.limit-t.offset;if(o<=0)return this;n+=o;var f=this.buffer.byteLength;return n>f&&this.resize((f*=2)>n?f:n),n-=o,this.view.set(t.view.subarray(t.offset,t.limit),n),t.offset+=o,i&&(this.offset+=o),this},r.appendTo=function(t,e){return t.append(this,e),this},r.assert=function(t){return this.noAssert=!t,this},r.capacity=function(){return this.buffer.byteLength},r.clear=function(){return this.offset=0,this.limit=this.buffer.byteLength,this.markedOffset=-1,this},r.clone=function(t){var r=new e(0,this.littleEndian,this.noAssert);return t?(r.buffer=new ArrayBuffer(this.buffer.byteLength),r.view=new Uint8Array(r.buffer)):(r.buffer=this.buffer,r.view=this.view),r.offset=this.offset,r.markedOffset=this.markedOffset,r.limit=this.limit,r},r.compact=function(t,e){if(void 0===t&&(t=this.offset),void 0===e&&(e=this.limit),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal begin: Not an integer");if(t>>>=0,"number"!=typeof e||e%1!=0)throw TypeError("Illegal end: Not an integer");if(e>>>=0,t<0||t>e||e>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+t+" <= "+e+" <= "+this.buffer.byteLength)}if(0===t&&e===this.buffer.byteLength)return this;var r=e-t;if(0===r)return this.buffer=n,this.view=null,this.markedOffset>=0&&(this.markedOffset-=t),this.offset=0,this.limit=0,this;var i=new ArrayBuffer(r),o=new Uint8Array(i);return o.set(this.view.subarray(t,e)),this.buffer=i,this.view=o,this.markedOffset>=0&&(this.markedOffset-=t),this.offset=0,this.limit=r,this},r.copy=function(t,r){if(void 0===t&&(t=this.offset),void 0===r&&(r=this.limit),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal begin: Not an integer");if(t>>>=0,"number"!=typeof r||r%1!=0)throw TypeError("Illegal end: Not an integer");if(r>>>=0,t<0||t>r||r>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+t+" <= "+r+" <= "+this.buffer.byteLength)}if(t===r)return new e(0,this.littleEndian,this.noAssert);var n=r-t,i=new e(n,this.littleEndian,this.noAssert);return i.offset=0,i.limit=n,i.markedOffset>=0&&(i.markedOffset-=t),this.copyTo(i,0,t,r),i},r.copyTo=function(t,r,n,i){var o,f;if(!this.noAssert&&!e.isByteBuffer(t))throw TypeError("Illegal target: Not a ByteBuffer");if(r=(f=void 0===r)?t.offset:0|r,n=(o=void 0===n)?this.offset:0|n,i=void 0===i?this.limit:0|i,r<0||r>t.buffer.byteLength)throw RangeError("Illegal target range: 0 <= "+r+" <= "+t.buffer.byteLength);if(n<0||i>this.buffer.byteLength)throw RangeError("Illegal source range: 0 <= "+n+" <= "+this.buffer.byteLength);var s=i-n;return 0===s?t:(t.ensureCapacity(r+s),t.view.set(this.view.subarray(n,i),r),o&&(this.offset+=s),f&&(t.offset+=s),this)},r.ensureCapacity=function(t){var e=this.buffer.byteLength;return e<t?this.resize((e*=2)>t?e:t):this},r.fill=function(t,e,r){var n=void 0===e;if(n&&(e=this.offset),"string"==typeof t&&t.length>0&&(t=t.charCodeAt(0)),void 0===e&&(e=this.offset),void 0===r&&(r=this.limit),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal value: "+t+" (not an integer)");if(t|=0,"number"!=typeof e||e%1!=0)throw TypeError("Illegal begin: Not an integer");if(e>>>=0,"number"!=typeof r||r%1!=0)throw TypeError("Illegal end: Not an integer");if(r>>>=0,e<0||e>r||r>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+e+" <= "+r+" <= "+this.buffer.byteLength)}if(e>=r)return this;for(;e<r;)this.view[e++]=t;return n&&(this.offset=e),this},r.flip=function(){return this.limit=this.offset,this.offset=0,this},r.mark=function(t){if(t=void 0===t?this.offset:t,!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal offset: "+t+" (not an integer)");if((t>>>=0)<0||t+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)}return this.markedOffset=t,this},r.order=function(t){if(!this.noAssert&&"boolean"!=typeof t)throw TypeError("Illegal littleEndian: Not a boolean");return this.littleEndian=!!t,this},r.LE=function(t){return this.littleEndian=void 0===t||!!t,this},r.BE=function(t){return this.littleEndian=void 0!==t&&!t,this},r.prepend=function(t,r,n){"number"!=typeof r&&"string"==typeof r||(n=r,r=void 0);var i=void 0===n;if(i&&(n=this.offset),!this.noAssert){if("number"!=typeof n||n%1!=0)throw TypeError("Illegal offset: "+n+" (not an integer)");if((n>>>=0)<0||n+0>this.buffer.byteLength)throw RangeError("Illegal offset: 0 <= "+n+" (+0) <= "+this.buffer.byteLength)}t instanceof e||(t=e.wrap(t,r));var o=t.limit-t.offset;if(o<=0)return this;var f=o-n;if(f>0){var s=new ArrayBuffer(this.buffer.byteLength+f),a=new Uint8Array(s);a.set(this.view.subarray(n,this.buffer.byteLength),o),this.buffer=s,this.view=a,this.offset+=f,this.markedOffset>=0&&(this.markedOffset+=f),this.limit+=f,n+=f}else new Uint8Array(this.buffer);return this.view.set(t.view.subarray(t.offset,t.limit),n-o),t.offset=t.limit,i&&(this.offset-=o),this},r.prependTo=function(t,e){return t.prepend(this,e),this},r.printDebug=function(t){"function"!=typeof t&&(t=console.log.bind(console)),t(this.toString()+"\n-------------------------------------------------------------------\n"+this.toDebug(!0))},r.remaining=function(){return this.limit-this.offset},r.reset=function(){return this.markedOffset>=0?(this.offset=this.markedOffset,this.markedOffset=-1):this.offset=0,this},r.resize=function(t){if(!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal capacity: "+t+" (not an integer)");if((t|=0)<0)throw RangeError("Illegal capacity: 0 <= "+t)}if(this.buffer.byteLength<t){var e=new ArrayBuffer(t),r=new Uint8Array(e);r.set(this.view),this.buffer=e,this.view=r}return this},r.reverse=function(t,e){if(void 0===t&&(t=this.offset),void 0===e&&(e=this.limit),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal begin: Not an integer");if(t>>>=0,"number"!=typeof e||e%1!=0)throw TypeError("Illegal end: Not an integer");if(e>>>=0,t<0||t>e||e>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+t+" <= "+e+" <= "+this.buffer.byteLength)}return t===e?this:(Array.prototype.reverse.call(this.view.subarray(t,e)),this)},r.skip=function(t){if(!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal length: "+t+" (not an integer)");t|=0}var e=this.offset+t;if(!this.noAssert&&(e<0||e>this.buffer.byteLength))throw RangeError("Illegal length: 0 <= "+this.offset+" + "+t+" <= "+this.buffer.byteLength);return this.offset=e,this},r.slice=function(t,e){if(void 0===t&&(t=this.offset),void 0===e&&(e=this.limit),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal begin: Not an integer");if(t>>>=0,"number"!=typeof e||e%1!=0)throw TypeError("Illegal end: Not an integer");if(e>>>=0,t<0||t>e||e>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+t+" <= "+e+" <= "+this.buffer.byteLength)}var r=this.clone();return r.offset=t,r.limit=e,r},r.toBuffer=function(t){var e=this.offset,r=this.limit;if(!this.noAssert){if("number"!=typeof e||e%1!=0)throw TypeError("Illegal offset: Not an integer");if(e>>>=0,"number"!=typeof r||r%1!=0)throw TypeError("Illegal limit: Not an integer");if(r>>>=0,e<0||e>r||r>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+e+" <= "+r+" <= "+this.buffer.byteLength)}if(!t&&0===e&&r===this.buffer.byteLength)return this.buffer;if(e===r)return n;var i=new ArrayBuffer(r-e);return new Uint8Array(i).set(new Uint8Array(this.buffer).subarray(e,r),0),i},r.toArrayBuffer=r.toBuffer,r.toString=function(t,e,r){if(void 0===t)return"ByteBufferAB(offset="+this.offset+",markedOffset="+this.markedOffset+",limit="+this.limit+",capacity="+this.capacity()+")";switch("number"==typeof t&&(r=e=t="utf8"),t){case"utf8":return this.toUTF8(e,r);case"base64":return this.toBase64(e,r);case"hex":return this.toHex(e,r);case"binary":return this.toBinary(e,r);case"debug":return this.toDebug();case"columns":return this.toColumns();default:throw Error("Unsupported encoding: "+t)}};var u=function(){for(var t={},e=[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,48,49,50,51,52,53,54,55,56,57,43,47],r=[],n=0,i=e.length;n<i;++n)r[e[n]]=n;return t.encode=function(t,r){for(var n,i;null!==(n=t());)r(e[n>>2&63]),i=(3&n)<<4,null!==(n=t())?(r(e[63&((i|=n>>4&15)|n>>4&15)]),i=(15&n)<<2,null!==(n=t())?(r(e[63&(i|n>>6&3)]),r(e[63&n])):(r(e[63&i]),r(61))):(r(e[63&i]),r(61),r(61))},t.decode=function(t,e){var n,i,o;function f(t){throw Error("Illegal character code: "+t)}for(;null!==(n=t());)if(void 0===(i=r[n])&&f(n),null!==(n=t())&&(void 0===(o=r[n])&&f(n),e(i<<2>>>0|(48&o)>>4),null!==(n=t()))){if(void 0===(i=r[n])){if(61===n)break;f(n)}if(e((15&o)<<4>>>0|(60&i)>>2),null!==(n=t())){if(void 0===(o=r[n])){if(61===n)break;f(n)}e((3&i)<<6>>>0|o)}}},t.test=function(t){return/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(t)},t}();r.toBase64=function(t,e){if(void 0===t&&(t=this.offset),void 0===e&&(e=this.limit),e|=0,(t|=0)<0||e>this.capacity||t>e)throw RangeError("begin, end");var r;return u.encode(function(){return t<e?this.view[t++]:null}.bind(this),r=f()),r()},e.fromBase64=function(t,r){if("string"!=typeof t)throw TypeError("str");var n=new e(t.length/4*3,r),i=0;return u.decode(o(t),function(t){n.view[i++]=t}),n.limit=i,n},e.btoa=function(t){return e.fromBinary(t).toBase64()},e.atob=function(t){return e.fromBase64(t).toBinary()},r.toBinary=function(t,e){if(void 0===t&&(t=this.offset),void 0===e&&(e=this.limit),e|=0,(t|=0)<0||e>this.capacity()||t>e)throw RangeError("begin, end");if(t===e)return"";for(var r=[],n=[];t<e;)r.push(this.view[t++]),r.length>=1024&&(n.push(String.fromCharCode.apply(String,r)),r=[]);return n.join("")+String.fromCharCode.apply(String,r)},e.fromBinary=function(t,r){if("string"!=typeof t)throw TypeError("str");for(var n,i=0,o=t.length,f=new e(o,r);i<o;){if((n=t.charCodeAt(i))>255)throw RangeError("illegal char code: "+n);f.view[i++]=n}return f.limit=o,f},r.toDebug=function(t){for(var e,r=-1,n=this.buffer.byteLength,i="",o="",f="";r<n;){if(-1!==r&&(e=this.view[r],i+=e<16?"0"+e.toString(16).toUpperCase():e.toString(16).toUpperCase(),t&&(o+=e>32&&e<127?String.fromCharCode(e):".")),++r,t&&r>0&&r%16==0&&r!==n){for(;i.length<51;)i+=" ";f+=i+o+"\n",i=o=""}r===this.offset&&r===this.limit?i+=r===this.markedOffset?"!":"|":r===this.offset?i+=r===this.markedOffset?"[":"<":r===this.limit?i+=r===this.markedOffset?"]":">":i+=r===this.markedOffset?"'":t||0!==r&&r!==n?" ":""}if(t&&" "!==i){for(;i.length<51;)i+=" ";f+=i+o+"\n"}return t?f:i},e.fromDebug=function(t,r,n){for(var i,o,f=t.length,s=new e((f+1)/3|0,r,n),a=0,u=0,h=!1,c=!1,l=!1,p=!1,d=!1;a<f;){switch(i=t.charAt(a++)){case"!":if(!n){if(c||l||p){d=!0;break}c=l=p=!0}s.offset=s.markedOffset=s.limit=u,h=!1;break;case"|":if(!n){if(c||p){d=!0;break}c=p=!0}s.offset=s.limit=u,h=!1;break;case"[":if(!n){if(c||l){d=!0;break}c=l=!0}s.offset=s.markedOffset=u,h=!1;break;case"<":if(!n){if(c){d=!0;break}c=!0}s.offset=u,h=!1;break;case"]":if(!n){if(p||l){d=!0;break}p=l=!0}s.limit=s.markedOffset=u,h=!1;break;case">":if(!n){if(p){d=!0;break}p=!0}s.limit=u,h=!1;break;case"'":if(!n){if(l){d=!0;break}l=!0}s.markedOffset=u,h=!1;break;case" ":h=!1;break;default:if(!n&&h){d=!0;break}if(o=parseInt(i+t.charAt(a++),16),!n&&(isNaN(o)||o<0||o>255))throw TypeError("Illegal str: Not a debug encoded string");s.view[u++]=o,h=!0}if(d)throw TypeError("Illegal str: Invalid symbol at "+a)}if(!n){if(!c||!p)throw TypeError("Illegal str: Missing offset or limit");if(u<s.buffer.byteLength)throw TypeError("Illegal str: Not a debug encoded string (is it hex?) "+u+" < "+f)}return s},r.toHex=function(t,e){if(t=void 0===t?this.offset:t,e=void 0===e?this.limit:e,!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal begin: Not an integer");if(t>>>=0,"number"!=typeof e||e%1!=0)throw TypeError("Illegal end: Not an integer");if(e>>>=0,t<0||t>e||e>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+t+" <= "+e+" <= "+this.buffer.byteLength)}for(var r,n=new Array(e-t);t<e;)(r=this.view[t++])<16?n.push("0",r.toString(16)):n.push(r.toString(16));return n.join("")},e.fromHex=function(t,r,n){if(!n){if("string"!=typeof t)throw TypeError("Illegal str: Not a string");if(t.length%2!=0)throw TypeError("Illegal str: Length not a multiple of 2")}for(var i,o=t.length,f=new e(o/2|0,r),s=0,a=0;s<o;s+=2){if(i=parseInt(t.substring(s,s+2),16),!n&&(!isFinite(i)||i<0||i>255))throw TypeError("Illegal str: Contains non-hex characters");f.view[a++]=i}return f.limit=a,f};var h=function(){var t={MAX_CODEPOINT:1114111,encodeUTF8:function(t,e){var r=null;for("number"==typeof t&&(r=t,t=function(){return null});null!==r||null!==(r=t());)r<128?e(127&r):r<2048?(e(r>>6&31|192),e(63&r|128)):r<65536?(e(r>>12&15|224),e(r>>6&63|128),e(63&r|128)):(e(r>>18&7|240),e(r>>12&63|128),e(r>>6&63|128),e(63&r|128)),r=null},decodeUTF8:function(t,e){for(var r,n,i,o,f=function(t){t=t.slice(0,t.indexOf(null));var e=Error(t.toString());throw e.name="TruncatedError",e.bytes=t,e};null!==(r=t());)if(0==(128&r))e(r);else if(192==(224&r))null===(n=t())&&f([r,n]),e((31&r)<<6|63&n);else if(224==(240&r))(null===(n=t())||null===(i=t()))&&f([r,n,i]),e((15&r)<<12|(63&n)<<6|63&i);else{if(240!=(248&r))throw RangeError("Illegal starting byte: "+r);(null===(n=t())||null===(i=t())||null===(o=t()))&&f([r,n,i,o]),e((7&r)<<18|(63&n)<<12|(63&i)<<6|63&o)}},UTF16toUTF8:function(t,e){for(var r,n=null;null!==(r=null!==n?n:t());)r>=55296&&r<=57343&&null!==(n=t())&&n>=56320&&n<=57343?(e(1024*(r-55296)+n-56320+65536),n=null):e(r);null!==n&&e(n)},UTF8toUTF16:function(t,e){var r=null;for("number"==typeof t&&(r=t,t=function(){return null});null!==r||null!==(r=t());)r<=65535?e(r):(e(55296+((r-=65536)>>10)),e(r%1024+56320)),r=null},encodeUTF16toUTF8:function(e,r){t.UTF16toUTF8(e,function(e){t.encodeUTF8(e,r)})},decodeUTF8toUTF16:function(e,r){t.decodeUTF8(e,function(e){t.UTF8toUTF16(e,r)})},calculateCodePoint:function(t){return t<128?1:t<2048?2:t<65536?3:4},calculateUTF8:function(t){for(var e,r=0;null!==(e=t());)r+=e<128?1:e<2048?2:e<65536?3:4;return r},calculateUTF16asUTF8:function(e){var r=0,n=0;return t.UTF16toUTF8(e,function(t){++r,n+=t<128?1:t<2048?2:t<65536?3:4}),[r,n]}};return t}();return r.toUTF8=function(t,e){if(void 0===t&&(t=this.offset),void 0===e&&(e=this.limit),!this.noAssert){if("number"!=typeof t||t%1!=0)throw TypeError("Illegal begin: Not an integer");if(t>>>=0,"number"!=typeof e||e%1!=0)throw TypeError("Illegal end: Not an integer");if(e>>>=0,t<0||t>e||e>this.buffer.byteLength)throw RangeError("Illegal range: 0 <= "+t+" <= "+e+" <= "+this.buffer.byteLength)}var r;try{h.decodeUTF8toUTF16(function(){return t<e?this.view[t++]:null}.bind(this),r=f())}catch(r){if(t!==e)throw RangeError("Illegal range: Truncated data, "+t+" != "+e)}return r()},e.fromUTF8=function(t,r,n){if(!n&&"string"!=typeof t)throw TypeError("Illegal str: Not a string");var i=new e(h.calculateUTF16asUTF8(o(t),!0)[1],r,n),f=0;return h.encodeUTF16toUTF8(o(t),function(t){i.view[f++]=t}),i.limit=f,i},e})?n.apply(e,i):n)||(t.exports=o)},function(t,e,r){var n,i,o;
/**
 * @license long.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
 * Released under the Apache License, Version 2.0
 * see: https://github.com/dcodeIO/long.js for details
 */i=[],void 0===(o="function"==typeof(n=function(){"use strict";function t(t,e,r){this.low=0|t,this.high=0|e,this.unsigned=!!r}function e(t){return!0===(t&&t.__isLong__)}t.prototype.__isLong__,Object.defineProperty(t.prototype,"__isLong__",{value:!0,enumerable:!1,configurable:!1}),t.isLong=e;var r={},n={};function i(t,e){var i,o,s;return e?(s=0<=(t>>>=0)&&t<256)&&(o=n[t])?o:(i=f(t,(0|t)<0?-1:0,!0),s&&(n[t]=i),i):(s=-128<=(t|=0)&&t<128)&&(o=r[t])?o:(i=f(t,t<0?-1:0,!1),s&&(r[t]=i),i)}function o(t,e){if(isNaN(t)||!isFinite(t))return e?g:d;if(e){if(t<0)return g;if(t>=c)return w}else{if(t<=-l)return _;if(t+1>=l)return m}return t<0?o(-t,e).neg():f(t%h|0,t/h|0,e)}function f(e,r,n){return new t(e,r,n)}t.fromInt=i,t.fromNumber=o,t.fromBits=f;var s=Math.pow;function a(t,e,r){if(0===t.length)throw Error("empty string");if("NaN"===t||"Infinity"===t||"+Infinity"===t||"-Infinity"===t)return d;if("number"==typeof e?(r=e,e=!1):e=!!e,(r=r||10)<2||36<r)throw RangeError("radix");var n;if((n=t.indexOf("-"))>0)throw Error("interior hyphen");if(0===n)return a(t.substring(1),e,r).neg();for(var i=o(s(r,8)),f=d,u=0;u<t.length;u+=8){var h=Math.min(8,t.length-u),c=parseInt(t.substring(u,u+h),r);if(h<8){var l=o(s(r,h));f=f.mul(l).add(o(c))}else f=(f=f.mul(i)).add(o(c))}return f.unsigned=e,f}function u(e){return e instanceof t?e:"number"==typeof e?o(e):"string"==typeof e?a(e):f(e.low,e.high,e.unsigned)}t.fromString=a,t.fromValue=u;var h=4294967296,c=h*h,l=c/2,p=i(1<<24),d=i(0);t.ZERO=d;var g=i(0,!0);t.UZERO=g;var y=i(1);t.ONE=y;var v=i(1,!0);t.UONE=v;var b=i(-1);t.NEG_ONE=b;var m=f(-1,2147483647,!1);t.MAX_VALUE=m;var w=f(-1,-1,!0);t.MAX_UNSIGNED_VALUE=w;var _=f(0,-2147483648,!1);t.MIN_VALUE=_;var E=t.prototype;return E.toInt=function(){return this.unsigned?this.low>>>0:this.low},E.toNumber=function(){return this.unsigned?(this.high>>>0)*h+(this.low>>>0):this.high*h+(this.low>>>0)},E.toString=function(t){if((t=t||10)<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative()){if(this.eq(_)){var e=o(t),r=this.div(e),n=r.mul(e).sub(this);return r.toString(t)+n.toInt().toString(t)}return"-"+this.neg().toString(t)}for(var i=o(s(t,6),this.unsigned),f=this,a="";;){var u=f.div(i),h=(f.sub(u.mul(i)).toInt()>>>0).toString(t);if((f=u).isZero())return h+a;for(;h.length<6;)h="0"+h;a=""+h+a}},E.getHighBits=function(){return this.high},E.getHighBitsUnsigned=function(){return this.high>>>0},E.getLowBits=function(){return this.low},E.getLowBitsUnsigned=function(){return this.low>>>0},E.getNumBitsAbs=function(){if(this.isNegative())return this.eq(_)?64:this.neg().getNumBitsAbs();for(var t=0!=this.high?this.high:this.low,e=31;e>0&&0==(t&1<<e);e--);return 0!=this.high?e+33:e+1},E.isZero=function(){return 0===this.high&&0===this.low},E.isNegative=function(){return!this.unsigned&&this.high<0},E.isPositive=function(){return this.unsigned||this.high>=0},E.isOdd=function(){return 1==(1&this.low)},E.isEven=function(){return 0==(1&this.low)},E.equals=function(t){return e(t)||(t=u(t)),(this.unsigned===t.unsigned||this.high>>>31!=1||t.high>>>31!=1)&&this.high===t.high&&this.low===t.low},E.eq=E.equals,E.notEquals=function(t){return!this.eq(t)},E.neq=E.notEquals,E.lessThan=function(t){return this.comp(t)<0},E.lt=E.lessThan,E.lessThanOrEqual=function(t){return this.comp(t)<=0},E.lte=E.lessThanOrEqual,E.greaterThan=function(t){return this.comp(t)>0},E.gt=E.greaterThan,E.greaterThanOrEqual=function(t){return this.comp(t)>=0},E.gte=E.greaterThanOrEqual,E.compare=function(t){if(e(t)||(t=u(t)),this.eq(t))return 0;var r=this.isNegative(),n=t.isNegative();return r&&!n?-1:!r&&n?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.sub(t).isNegative()?-1:1},E.comp=E.compare,E.negate=function(){return!this.unsigned&&this.eq(_)?_:this.not().add(y)},E.neg=E.negate,E.add=function(t){e(t)||(t=u(t));var r=this.high>>>16,n=65535&this.high,i=this.low>>>16,o=65535&this.low,s=t.high>>>16,a=65535&t.high,h=t.low>>>16,c=0,l=0,p=0,d=0;return p+=(d+=o+(65535&t.low))>>>16,l+=(p+=i+h)>>>16,c+=(l+=n+a)>>>16,c+=r+s,f((p&=65535)<<16|(d&=65535),(c&=65535)<<16|(l&=65535),this.unsigned)},E.subtract=function(t){return e(t)||(t=u(t)),this.add(t.neg())},E.sub=E.subtract,E.multiply=function(t){if(this.isZero())return d;if(e(t)||(t=u(t)),t.isZero())return d;if(this.eq(_))return t.isOdd()?_:d;if(t.eq(_))return this.isOdd()?_:d;if(this.isNegative())return t.isNegative()?this.neg().mul(t.neg()):this.neg().mul(t).neg();if(t.isNegative())return this.mul(t.neg()).neg();if(this.lt(p)&&t.lt(p))return o(this.toNumber()*t.toNumber(),this.unsigned);var r=this.high>>>16,n=65535&this.high,i=this.low>>>16,s=65535&this.low,a=t.high>>>16,h=65535&t.high,c=t.low>>>16,l=65535&t.low,g=0,y=0,v=0,b=0;return v+=(b+=s*l)>>>16,y+=(v+=i*l)>>>16,v&=65535,y+=(v+=s*c)>>>16,g+=(y+=n*l)>>>16,y&=65535,g+=(y+=i*c)>>>16,y&=65535,g+=(y+=s*h)>>>16,g+=r*l+n*c+i*h+s*a,f((v&=65535)<<16|(b&=65535),(g&=65535)<<16|(y&=65535),this.unsigned)},E.mul=E.multiply,E.divide=function(t){if(e(t)||(t=u(t)),t.isZero())throw Error("division by zero");if(this.isZero())return this.unsigned?g:d;var r,n,i;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.gt(this))return g;if(t.gt(this.shru(1)))return v;i=g}else{if(this.eq(_))return t.eq(y)||t.eq(b)?_:t.eq(_)?y:(r=this.shr(1).div(t).shl(1)).eq(d)?t.isNegative()?y:b:(n=this.sub(t.mul(r)),i=r.add(n.div(t)));if(t.eq(_))return this.unsigned?g:d;if(this.isNegative())return t.isNegative()?this.neg().div(t.neg()):this.neg().div(t).neg();if(t.isNegative())return this.div(t.neg()).neg();i=d}for(n=this;n.gte(t);){r=Math.max(1,Math.floor(n.toNumber()/t.toNumber()));for(var f=Math.ceil(Math.log(r)/Math.LN2),a=f<=48?1:s(2,f-48),h=o(r),c=h.mul(t);c.isNegative()||c.gt(n);)c=(h=o(r-=a,this.unsigned)).mul(t);h.isZero()&&(h=y),i=i.add(h),n=n.sub(c)}return i},E.div=E.divide,E.modulo=function(t){return e(t)||(t=u(t)),this.sub(this.div(t).mul(t))},E.mod=E.modulo,E.not=function(){return f(~this.low,~this.high,this.unsigned)},E.and=function(t){return e(t)||(t=u(t)),f(this.low&t.low,this.high&t.high,this.unsigned)},E.or=function(t){return e(t)||(t=u(t)),f(this.low|t.low,this.high|t.high,this.unsigned)},E.xor=function(t){return e(t)||(t=u(t)),f(this.low^t.low,this.high^t.high,this.unsigned)},E.shiftLeft=function(t){return e(t)&&(t=t.toInt()),0==(t&=63)?this:t<32?f(this.low<<t,this.high<<t|this.low>>>32-t,this.unsigned):f(0,this.low<<t-32,this.unsigned)},E.shl=E.shiftLeft,E.shiftRight=function(t){return e(t)&&(t=t.toInt()),0==(t&=63)?this:t<32?f(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):f(this.high>>t-32,this.high>=0?0:-1,this.unsigned)},E.shr=E.shiftRight,E.shiftRightUnsigned=function(t){if(e(t)&&(t=t.toInt()),0==(t&=63))return this;var r=this.high;return t<32?f(this.low>>>t|r<<32-t,r>>>t,this.unsigned):f(32===t?r:r>>>t-32,0,this.unsigned)},E.shru=E.shiftRightUnsigned,E.toSigned=function(){return this.unsigned?f(this.low,this.high,!1):this},E.toUnsigned=function(){return this.unsigned?this:f(this.low,this.high,!0)},E.toBytes=function(t){return t?this.toBytesLE():this.toBytesBE()},E.toBytesLE=function(){var t=this.high,e=this.low;return[255&e,e>>>8&255,e>>>16&255,e>>>24&255,255&t,t>>>8&255,t>>>16&255,t>>>24&255]},E.toBytesBE=function(){var t=this.high,e=this.low;return[t>>>24&255,t>>>16&255,t>>>8&255,255&t,e>>>24&255,e>>>16&255,e>>>8&255,255&e]},t})?n.apply(e,i):n)||(t.exports=o)},function(t,e,r){var n=r(111),i=r(119),o=r(58);e.createCipher=e.Cipher=n.createCipher,e.createCipheriv=e.Cipheriv=n.createCipheriv,e.createDecipher=e.Decipher=i.createDecipher,e.createDecipheriv=e.Decipheriv=i.createDecipheriv,e.listCiphers=e.getCiphers=function(){return Object.keys(o)}},function(t,e,r){var n=r(55),i=r(59),o=r(0).Buffer,f=r(60),s=r(7),a=r(18),u=r(61);function h(t,e,r){s.call(this),this._cache=new l,this._cipher=new a.AES(e),this._prev=o.from(r),this._mode=t,this._autopadding=!0}r(1)(h,s),h.prototype._update=function(t){var e,r;this._cache.add(t);for(var n=[];e=this._cache.get();)r=this._mode.encrypt(this,e),n.push(r);return o.concat(n)};var c=o.alloc(16,16);function l(){this.cache=o.allocUnsafe(0)}function p(t,e,r){var s=n[t.toLowerCase()];if(!s)throw new TypeError("invalid suite type");if("string"==typeof e&&(e=o.from(e)),e.length!==s.key/8)throw new TypeError("invalid key length "+e.length);if("string"==typeof r&&(r=o.from(r)),"GCM"!==s.mode&&r.length!==s.iv)throw new TypeError("invalid iv length "+r.length);return"stream"===s.type?new f(s.module,e,r):"auth"===s.type?new i(s.module,e,r):new h(s.module,e,r)}h.prototype._final=function(){var t=this._cache.flush();if(this._autopadding)return t=this._mode.encrypt(this,t),this._cipher.scrub(),t;if(!t.equals(c))throw this._cipher.scrub(),new Error("data not multiple of block length")},h.prototype.setAutoPadding=function(t){return this._autopadding=!!t,this},l.prototype.add=function(t){this.cache=o.concat([this.cache,t])},l.prototype.get=function(){if(this.cache.length>15){var t=this.cache.slice(0,16);return this.cache=this.cache.slice(16),t}return null},l.prototype.flush=function(){for(var t=16-this.cache.length,e=o.allocUnsafe(t),r=-1;++r<t;)e.writeUInt8(t,r);return o.concat([this.cache,e])},e.createCipheriv=p,e.createCipher=function(t,e){var r=n[t.toLowerCase()];if(!r)throw new TypeError("invalid suite type");var i=u(e,!1,r.key,r.iv);return p(t,i.key,i.iv)}},function(t,e){e.encrypt=function(t,e){return t._cipher.encryptBlock(e)},e.decrypt=function(t,e){return t._cipher.decryptBlock(e)}},function(t,e,r){var n=r(12);e.encrypt=function(t,e){var r=n(e,t._prev);return t._prev=t._cipher.encryptBlock(r),t._prev},e.decrypt=function(t,e){var r=t._prev;t._prev=e;var i=t._cipher.decryptBlock(e);return n(i,r)}},function(t,e,r){var n=r(0).Buffer,i=r(12);function o(t,e,r){var o=e.length,f=i(e,t._cache);return t._cache=t._cache.slice(o),t._prev=n.concat([t._prev,r?e:f]),f}e.encrypt=function(t,e,r){for(var i,f=n.allocUnsafe(0);e.length;){if(0===t._cache.length&&(t._cache=t._cipher.encryptBlock(t._prev),t._prev=n.allocUnsafe(0)),!(t._cache.length<=e.length)){f=n.concat([f,o(t,e,r)]);break}i=t._cache.length,f=n.concat([f,o(t,e.slice(0,i),r)]),e=e.slice(i)}return f}},function(t,e,r){var n=r(0).Buffer;function i(t,e,r){var i=t._cipher.encryptBlock(t._prev)[0]^e;return t._prev=n.concat([t._prev.slice(1),n.from([r?e:i])]),i}e.encrypt=function(t,e,r){for(var o=e.length,f=n.allocUnsafe(o),s=-1;++s<o;)f[s]=i(t,e[s],r);return f}},function(t,e,r){var n=r(0).Buffer;function i(t,e,r){for(var n,i,f=-1,s=0;++f<8;)n=e&1<<7-f?128:0,s+=(128&(i=t._cipher.encryptBlock(t._prev)[0]^n))>>f%8,t._prev=o(t._prev,r?n:i);return s}function o(t,e){var r=t.length,i=-1,o=n.allocUnsafe(t.length);for(t=n.concat([t,n.from([e])]);++i<r;)o[i]=t[i]<<1|t[i+1]>>7;return o}e.encrypt=function(t,e,r){for(var o=e.length,f=n.allocUnsafe(o),s=-1;++s<o;)f[s]=i(t,e[s],r);return f}},function(t,e,r){var n=r(12);function i(t){return t._prev=t._cipher.encryptBlock(t._prev),t._prev}e.encrypt=function(t,e){for(;t._cache.length<e.length;)t._cache=Buffer.concat([t._cache,i(t)]);var r=t._cache.slice(0,e.length);return t._cache=t._cache.slice(e.length),n(e,r)}},function(t,e,r){var n=r(0).Buffer,i=n.alloc(16,0);function o(t){var e=n.allocUnsafe(16);return e.writeUInt32BE(t[0]>>>0,0),e.writeUInt32BE(t[1]>>>0,4),e.writeUInt32BE(t[2]>>>0,8),e.writeUInt32BE(t[3]>>>0,12),e}function f(t){this.h=t,this.state=n.alloc(16,0),this.cache=n.allocUnsafe(0)}f.prototype.ghash=function(t){for(var e=-1;++e<t.length;)this.state[e]^=t[e];this._multiply()},f.prototype._multiply=function(){for(var t,e,r,n=[(t=this.h).readUInt32BE(0),t.readUInt32BE(4),t.readUInt32BE(8),t.readUInt32BE(12)],i=[0,0,0,0],f=-1;++f<128;){for(0!=(this.state[~~(f/8)]&1<<7-f%8)&&(i[0]^=n[0],i[1]^=n[1],i[2]^=n[2],i[3]^=n[3]),r=0!=(1&n[3]),e=3;e>0;e--)n[e]=n[e]>>>1|(1&n[e-1])<<31;n[0]=n[0]>>>1,r&&(n[0]=n[0]^225<<24)}this.state=o(i)},f.prototype.update=function(t){var e;for(this.cache=n.concat([this.cache,t]);this.cache.length>=16;)e=this.cache.slice(0,16),this.cache=this.cache.slice(16),this.ghash(e)},f.prototype.final=function(t,e){return this.cache.length&&this.ghash(n.concat([this.cache,i],16)),this.ghash(o([0,t,0,e])),this.state},t.exports=f},function(t,e,r){var n=r(59),i=r(0).Buffer,o=r(55),f=r(60),s=r(7),a=r(18),u=r(61);function h(t,e,r){s.call(this),this._cache=new c,this._last=void 0,this._cipher=new a.AES(e),this._prev=i.from(r),this._mode=t,this._autopadding=!0}function c(){this.cache=i.allocUnsafe(0)}function l(t,e,r){var s=o[t.toLowerCase()];if(!s)throw new TypeError("invalid suite type");if("string"==typeof r&&(r=i.from(r)),"GCM"!==s.mode&&r.length!==s.iv)throw new TypeError("invalid iv length "+r.length);if("string"==typeof e&&(e=i.from(e)),e.length!==s.key/8)throw new TypeError("invalid key length "+e.length);return"stream"===s.type?new f(s.module,e,r,!0):"auth"===s.type?new n(s.module,e,r,!0):new h(s.module,e,r)}r(1)(h,s),h.prototype._update=function(t){var e,r;this._cache.add(t);for(var n=[];e=this._cache.get(this._autopadding);)r=this._mode.decrypt(this,e),n.push(r);return i.concat(n)},h.prototype._final=function(){var t=this._cache.flush();if(this._autopadding)return function(t){var e=t[15];if(e<1||e>16)throw new Error("unable to decrypt data");var r=-1;for(;++r<e;)if(t[r+(16-e)]!==e)throw new Error("unable to decrypt data");if(16===e)return;return t.slice(0,16-e)}(this._mode.decrypt(this,t));if(t)throw new Error("data not multiple of block length")},h.prototype.setAutoPadding=function(t){return this._autopadding=!!t,this},c.prototype.add=function(t){this.cache=i.concat([this.cache,t])},c.prototype.get=function(t){var e;if(t){if(this.cache.length>16)return e=this.cache.slice(0,16),this.cache=this.cache.slice(16),e}else if(this.cache.length>=16)return e=this.cache.slice(0,16),this.cache=this.cache.slice(16),e;return null},c.prototype.flush=function(){if(this.cache.length)return this.cache},e.createDecipher=function(t,e){var r=o[t.toLowerCase()];if(!r)throw new TypeError("invalid suite type");var n=u(e,!1,r.key,r.iv);return l(t,n.key,n.iv)},e.createDecipheriv=l},function(t,e,r){(function(t){var n=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++)r[e[n]]=Object.getOwnPropertyDescriptor(t,e[n]);return r},i=/%[sdj%]/g;e.format=function(t){if(!v(t)){for(var e=[],r=0;r<arguments.length;r++)e.push(s(arguments[r]));return e.join(" ")}r=1;for(var n=arguments,o=n.length,f=String(t).replace(i,function(t){if("%%"===t)return"%";if(r>=o)return t;switch(t){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(t){return"[Circular]"}default:return t}}),a=n[r];r<o;a=n[++r])g(a)||!w(a)?f+=" "+a:f+=" "+s(a);return f},e.deprecate=function(r,n){if(void 0!==t&&!0===t.noDeprecation)return r;if(void 0===t)return function(){return e.deprecate(r,n).apply(this,arguments)};var i=!1;return function(){if(!i){if(t.throwDeprecation)throw new Error(n);t.traceDeprecation?console.trace(n):console.error(n),i=!0}return r.apply(this,arguments)}};var o,f={};function s(t,r){var n={seen:[],stylize:u};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),d(r)?n.showHidden=r:r&&e._extend(n,r),b(n.showHidden)&&(n.showHidden=!1),b(n.depth)&&(n.depth=2),b(n.colors)&&(n.colors=!1),b(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=a),h(n,t,n.depth)}function a(t,e){var r=s.styles[e];return r?"["+s.colors[r][0]+"m"+t+"["+s.colors[r][1]+"m":t}function u(t,e){return t}function h(t,r,n){if(t.customInspect&&r&&B(r.inspect)&&r.inspect!==e.inspect&&(!r.constructor||r.constructor.prototype!==r)){var i=r.inspect(n,t);return v(i)||(i=h(t,i,n)),i}var o=function(t,e){if(b(e))return t.stylize("undefined","undefined");if(v(e)){var r="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(r,"string")}if(y(e))return t.stylize(""+e,"number");if(d(e))return t.stylize(""+e,"boolean");if(g(e))return t.stylize("null","null")}(t,r);if(o)return o;var f=Object.keys(r),s=function(t){var e={};return t.forEach(function(t,r){e[t]=!0}),e}(f);if(t.showHidden&&(f=Object.getOwnPropertyNames(r)),E(r)&&(f.indexOf("message")>=0||f.indexOf("description")>=0))return c(r);if(0===f.length){if(B(r)){var a=r.name?": "+r.name:"";return t.stylize("[Function"+a+"]","special")}if(m(r))return t.stylize(RegExp.prototype.toString.call(r),"regexp");if(_(r))return t.stylize(Date.prototype.toString.call(r),"date");if(E(r))return c(r)}var u,w="",T=!1,S=["{","}"];(p(r)&&(T=!0,S=["[","]"]),B(r))&&(w=" [Function"+(r.name?": "+r.name:"")+"]");return m(r)&&(w=" "+RegExp.prototype.toString.call(r)),_(r)&&(w=" "+Date.prototype.toUTCString.call(r)),E(r)&&(w=" "+c(r)),0!==f.length||T&&0!=r.length?n<0?m(r)?t.stylize(RegExp.prototype.toString.call(r),"regexp"):t.stylize("[Object]","special"):(t.seen.push(r),u=T?function(t,e,r,n,i){for(var o=[],f=0,s=e.length;f<s;++f)x(e,String(f))?o.push(l(t,e,r,n,String(f),!0)):o.push("");return i.forEach(function(i){i.match(/^\d+$/)||o.push(l(t,e,r,n,i,!0))}),o}(t,r,n,s,f):f.map(function(e){return l(t,r,n,s,e,T)}),t.seen.pop(),function(t,e,r){if(t.reduce(function(t,e){return 0,e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return r[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+r[1];return r[0]+e+" "+t.join(", ")+" "+r[1]}(u,w,S)):S[0]+w+S[1]}function c(t){return"["+Error.prototype.toString.call(t)+"]"}function l(t,e,r,n,i,o){var f,s,a;if((a=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]}).get?s=a.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):a.set&&(s=t.stylize("[Setter]","special")),x(n,i)||(f="["+i+"]"),s||(t.seen.indexOf(a.value)<0?(s=g(r)?h(t,a.value,null):h(t,a.value,r-1)).indexOf("\n")>-1&&(s=o?s.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+s.split("\n").map(function(t){return"   "+t}).join("\n")):s=t.stylize("[Circular]","special")),b(f)){if(o&&i.match(/^\d+$/))return s;(f=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(f=f.substr(1,f.length-2),f=t.stylize(f,"name")):(f=f.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),f=t.stylize(f,"string"))}return f+": "+s}function p(t){return Array.isArray(t)}function d(t){return"boolean"==typeof t}function g(t){return null===t}function y(t){return"number"==typeof t}function v(t){return"string"==typeof t}function b(t){return void 0===t}function m(t){return w(t)&&"[object RegExp]"===T(t)}function w(t){return"object"==typeof t&&null!==t}function _(t){return w(t)&&"[object Date]"===T(t)}function E(t){return w(t)&&("[object Error]"===T(t)||t instanceof Error)}function B(t){return"function"==typeof t}function T(t){return Object.prototype.toString.call(t)}function S(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(r){if(b(o)&&(o=t.env.NODE_DEBUG||""),r=r.toUpperCase(),!f[r])if(new RegExp("\\b"+r+"\\b","i").test(o)){var n=t.pid;f[r]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",r,n,t)}}else f[r]=function(){};return f[r]},e.inspect=s,s.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},s.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=p,e.isBoolean=d,e.isNull=g,e.isNullOrUndefined=function(t){return null==t},e.isNumber=y,e.isString=v,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=b,e.isRegExp=m,e.isObject=w,e.isDate=_,e.isError=E,e.isFunction=B,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=r(121);var I=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function x(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){var t,r;console.log("%s - %s",(t=new Date,r=[S(t.getHours()),S(t.getMinutes()),S(t.getSeconds())].join(":"),[t.getDate(),I[t.getMonth()],r].join(" ")),e.format.apply(e,arguments))},e.inherits=r(1),e._extend=function(t,e){if(!e||!w(e))return t;for(var r=Object.keys(e),n=r.length;n--;)t[r[n]]=e[r[n]];return t};var k="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function A(t,e){if(!t){var r=new Error("Promise was rejected with a falsy value");r.reason=t,t=r}return e(t)}e.promisify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');if(k&&t[k]){var e;if("function"!=typeof(e=t[k]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,k,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,r,n=new Promise(function(t,n){e=t,r=n}),i=[],o=0;o<arguments.length;o++)i.push(arguments[o]);i.push(function(t,n){t?r(t):e(n)});try{t.apply(this,i)}catch(t){r(t)}return n}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),k&&Object.defineProperty(e,k,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,n(t))},e.promisify.custom=k,e.callbackify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');function r(){for(var r=[],n=0;n<arguments.length;n++)r.push(arguments[n]);var i=r.pop();if("function"!=typeof i)throw new TypeError("The last argument must be of type Function");var o=this,f=function(){return i.apply(o,arguments)};e.apply(this,r).then(function(e){t.nextTick(f,null,e)},function(e){t.nextTick(A,e,f)})}return Object.setPrototypeOf(r,Object.getPrototypeOf(e)),Object.defineProperties(r,n(e)),r}}).call(this,r(9))},function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},function(t){t.exports={_from:"bigi@^1.4.2",_id:"bigi@1.4.2",_inBundle:!1,_integrity:"sha1-nGZalfiLiwj8Bc/XMfVhhZ1yWCU=",_location:"/bigi",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"bigi@^1.4.2",name:"bigi",escapedName:"bigi",rawSpec:"^1.4.2",saveSpec:null,fetchSpec:"^1.4.2"},_requiredBy:["/ecurve","/eosjs-ecc"],_resolved:"https://registry.npmjs.org/bigi/-/bigi-1.4.2.tgz",_shasum:"9c665a95f88b8b08fc05cfd731f561859d725825",_spec:"bigi@^1.4.2",_where:"/Users/thi/Documents/GitHub/icetea-common/node_modules/eosjs-ecc",bugs:{url:"https://github.com/cryptocoinjs/bigi/issues"},bundleDependencies:!1,dependencies:{},deprecated:!1,description:"Big integers.",devDependencies:{coveralls:"^2.11.2",istanbul:"^0.3.5",jshint:"^2.5.1",mocha:"^2.1.0",mochify:"^2.1.0"},homepage:"https://github.com/cryptocoinjs/bigi#readme",keywords:["cryptography","math","bitcoin","arbitrary","precision","arithmetic","big","integer","int","number","biginteger","bigint","bignumber","decimal","float"],main:"./lib/index.js",name:"bigi",repository:{url:"git+https://github.com/cryptocoinjs/bigi.git",type:"git"},scripts:{"browser-test":"mochify --wd -R spec",coverage:"istanbul cover ./node_modules/.bin/_mocha -- --reporter list test/*.js",coveralls:"npm run-script coverage && node ./node_modules/.bin/coveralls < coverage/lcov.info",jshint:"jshint --config jshint.json lib/*.js ; true",test:"_mocha -- test/*.js",unit:"mocha"},testling:{files:"test/*.js",harness:"mocha",browsers:["ie/9..latest","firefox/latest","chrome/latest","safari/6.0..latest","iphone/6.0..latest","android-browser/4.2..latest"]},version:"1.4.2"}},function(t,e,r){var n=r(3),i=r(63);i.fromByteArrayUnsigned=function(t){return 128&t[0]?new i([0].concat(t)):new i(t)},i.prototype.toByteArrayUnsigned=function(){var t=this.toByteArray();return 0===t[0]?t.slice(1):t},i.fromDERInteger=function(t){return new i(t)},i.prototype.toDERInteger=i.prototype.toByteArray,i.fromBuffer=function(t){if(128&t[0]){var e=Array.prototype.slice.call(t);return new i([0].concat(e))}return new i(t)},i.fromHex=function(t){return""===t?i.ZERO:(n.equal(t,t.match(/^[A-Fa-f0-9]+/),"Invalid hex string"),n.equal(t.length%2,0,"Incomplete hex"),new i(t,16))},i.prototype.toBuffer=function(t){for(var e=this.toByteArrayUnsigned(),r=[],n=t-e.length;r.length<n;)r.push(0);return new Buffer(r.concat(e))},i.prototype.toHex=function(t){return this.toBuffer(t).toString("hex")}},function(t,e,r){var n=r(4),i=r(125),o=r(64);t.exports=function(t){var e=i[t];if(!e)return null;var r=new n(e.p,16),f=new n(e.a,16),s=new n(e.b,16),a=new n(e.n,16),u=new n(e.h,16),h=new n(e.Gx,16),c=new n(e.Gy,16);return new o(r,f,s,h,c,a,u)}},function(t){t.exports={secp128r1:{p:"fffffffdffffffffffffffffffffffff",a:"fffffffdfffffffffffffffffffffffc",b:"e87579c11079f43dd824993c2cee5ed3",n:"fffffffe0000000075a30d1b9038a115",h:"01",Gx:"161ff7528b899b2d0c28607ca52c5b86",Gy:"cf5ac8395bafeb13c02da292dded7a83"},secp160k1:{p:"fffffffffffffffffffffffffffffffeffffac73",a:"00",b:"07",n:"0100000000000000000001b8fa16dfab9aca16b6b3",h:"01",Gx:"3b4c382ce37aa192a4019e763036f4f5dd4d7ebb",Gy:"938cf935318fdced6bc28286531733c3f03c4fee"},secp160r1:{p:"ffffffffffffffffffffffffffffffff7fffffff",a:"ffffffffffffffffffffffffffffffff7ffffffc",b:"1c97befc54bd7a8b65acf89f81d4d4adc565fa45",n:"0100000000000000000001f4c8f927aed3ca752257",h:"01",Gx:"4a96b5688ef573284664698968c38bb913cbfc82",Gy:"23a628553168947d59dcc912042351377ac5fb32"},secp192k1:{p:"fffffffffffffffffffffffffffffffffffffffeffffee37",a:"00",b:"03",n:"fffffffffffffffffffffffe26f2fc170f69466a74defd8d",h:"01",Gx:"db4ff10ec057e9ae26b07d0280b7f4341da5d1b1eae06c7d",Gy:"9b2f2f6d9c5628a7844163d015be86344082aa88d95e2f9d"},secp192r1:{p:"fffffffffffffffffffffffffffffffeffffffffffffffff",a:"fffffffffffffffffffffffffffffffefffffffffffffffc",b:"64210519e59c80e70fa7e9ab72243049feb8deecc146b9b1",n:"ffffffffffffffffffffffff99def836146bc9b1b4d22831",h:"01",Gx:"188da80eb03090f67cbf20eb43a18800f4ff0afd82ff1012",Gy:"07192b95ffc8da78631011ed6b24cdd573f977a11e794811"},secp256k1:{p:"fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",a:"00",b:"07",n:"fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",h:"01",Gx:"79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",Gy:"483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"},secp256r1:{p:"ffffffff00000001000000000000000000000000ffffffffffffffffffffffff",a:"ffffffff00000001000000000000000000000000fffffffffffffffffffffffc",b:"5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b",n:"ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551",h:"01",Gx:"6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296",Gy:"4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"}}},function(t,e,r){"use strict";var n=r(1),i=r(127),o=r(7),f=r(0).Buffer,s=r(128),a=r(49),u=r(50),h=f.alloc(128);function c(t,e){o.call(this,"digest"),"string"==typeof e&&(e=f.from(e));var r="sha512"===t||"sha384"===t?128:64;(this._alg=t,this._key=e,e.length>r)?e=("rmd160"===t?new a:u(t)).update(e).digest():e.length<r&&(e=f.concat([e,h],r));for(var n=this._ipad=f.allocUnsafe(r),i=this._opad=f.allocUnsafe(r),s=0;s<r;s++)n[s]=54^e[s],i[s]=92^e[s];this._hash="rmd160"===t?new a:u(t),this._hash.update(n)}n(c,o),c.prototype._update=function(t){this._hash.update(t)},c.prototype._final=function(){var t=this._hash.digest();return("rmd160"===this._alg?new a:u(this._alg)).update(this._opad).update(t).digest()},t.exports=function(t,e){return"rmd160"===(t=t.toLowerCase())||"ripemd160"===t?new c("rmd160",e):"md5"===t?new i(s,e):new c(t,e)}},function(t,e,r){"use strict";var n=r(1),i=r(0).Buffer,o=r(7),f=i.alloc(128),s=64;function a(t,e){o.call(this,"digest"),"string"==typeof e&&(e=i.from(e)),this._alg=t,this._key=e,e.length>s?e=t(e):e.length<s&&(e=i.concat([e,f],s));for(var r=this._ipad=i.allocUnsafe(s),n=this._opad=i.allocUnsafe(s),a=0;a<s;a++)r[a]=54^e[a],n[a]=92^e[a];this._hash=[r]}n(a,o),a.prototype._update=function(t){this._hash.push(t)},a.prototype._final=function(){var t=this._alg(i.concat(this._hash));return this._alg(i.concat([this._opad,t]))},t.exports=a},function(t,e,r){var n=r(26);t.exports=function(t){return(new n).update(t).digest()}},function(t,e,r){var n=r(130);t.exports=n("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")},function(t,e,r){const n=r(0).Buffer;t.exports=function(t){if(t.length>=255)throw new TypeError("Alphabet too long");const e=new Uint8Array(256);e.fill(255);for(let r=0;r<t.length;r++){const n=t.charAt(r),i=n.charCodeAt(0);if(255!==e[i])throw new TypeError(n+" is ambiguous");e[i]=r}const r=t.length,i=t.charAt(0),o=Math.log(r)/Math.log(256),f=Math.log(256)/Math.log(r);function s(t){if("string"!=typeof t)throw new TypeError("Expected String");if(0===t.length)return n.alloc(0);let f=0;if(" "===t[f])return;let s=0,a=0;for(;t[f]===i;)s++,f++;const u=(t.length-f)*o+1>>>0,h=new Uint8Array(u);for(;t[f];){let n=e[t.charCodeAt(f)];if(255===n)return;let i=0;for(let t=u-1;(0!==n||i<a)&&-1!==t;t--,i++)n+=r*h[t]>>>0,h[t]=n%256>>>0,n=n/256>>>0;if(0!==n)throw new Error("Non-zero carry");a=i,f++}if(" "===t[f])return;let c=u-a;for(;c!==u&&0===h[c];)c++;const l=n.allocUnsafe(s+(u-c));l.fill(0,0,s);let p=s;for(;c!==u;)l[p++]=h[c++];return l}return{encode:function(e){if(!n.isBuffer(e))throw new TypeError("Expected Buffer");if(0===e.length)return"";let o=0,s=0,a=0;const u=e.length;for(;a!==u&&0===e[a];)a++,o++;const h=(u-a)*f+1>>>0,c=new Uint8Array(h);for(;a!==u;){let t=e[a],n=0;for(let e=h-1;(0!==t||n<s)&&-1!==e;e--,n++)t+=256*c[e]>>>0,c[e]=t%r>>>0,t=t/r>>>0;if(0!==t)throw new Error("Non-zero carry");s=n,a++}let l=h-s;for(;l!==h&&0===c[l];)l++;let p=i.repeat(o);for(;l<h;++l)p+=t.charAt(c[l]);return p},decodeUnsafe:s,decode:function(t){const e=s(t);if(e)return e;throw new Error("Non-base"+r+" character")}}}},function(t,e,r){"use strict";t.exports=function(t){return function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return new Promise(function(e,n){setTimeout(function(){try{e(t.apply(void 0,r))}catch(t){n(t)}})})}}},function(t,e,r){"use strict";var n=r(3),i=r(8),o=r(66),f=r(4),s=r(133);function a(t,e,r,s,a){o("Buffer",e),o(f,r),a&&(e=i.sha256(Buffer.concat([e,new Buffer(a)]))),n.equal(e.length,32,"Hash must be 256 bit");var u=r.toBuffer(32),h=new Buffer(32),c=new Buffer(32);c.fill(1),h.fill(0),h=i.HmacSHA256(Buffer.concat([c,new Buffer([0]),u,e]),h),c=i.HmacSHA256(c,h),h=i.HmacSHA256(Buffer.concat([c,new Buffer([1]),u,e]),h),c=i.HmacSHA256(c,h),c=i.HmacSHA256(c,h);for(var l=f.fromBuffer(c);l.signum()<=0||l.compareTo(t.n)>=0||!s(l);)h=i.HmacSHA256(Buffer.concat([c,new Buffer([0])]),h),c=i.HmacSHA256(c,h),c=i.HmacSHA256(c,h),l=f.fromBuffer(c);return l}function u(t,e,r,n){var i=t.n,o=t.G,f=r.r,s=r.s;if(f.signum()<=0||f.compareTo(i)>=0)return!1;if(s.signum()<=0||s.compareTo(i)>=0)return!1;var a=s.modInverse(i),u=e.multiply(a).mod(i),h=f.multiply(a).mod(i),c=o.multiplyTwo(u,n,h);return!t.isInfinity(c)&&c.affineX.mod(i).equals(f)}function h(t,e,r,i){n.strictEqual(3&i,i,"Recovery param is more than two bits");var o=t.n,f=t.G,s=r.r,a=r.s;n(s.signum()>0&&s.compareTo(o)<0,"Invalid r value"),n(a.signum()>0&&a.compareTo(o)<0,"Invalid s value");var u=1&i,h=i>>1?s.add(o):s,c=t.pointFromX(u,h),l=c.multiply(o);n(t.isInfinity(l),"nR is not a valid curve point");var p=e.negate().mod(o),d=s.modInverse(o),g=c.multiplyTwo(a,f,p).multiply(d);return t.validate(g),g}t.exports={calcPubKeyRecoveryParam:function(t,e,r,n){for(var i=0;i<4;i++)if(h(t,e,r,i).equals(n))return i;throw new Error("Unable to find valid recovery factor")},deterministicGenerateK:a,recoverPubKey:h,sign:function(t,e,r,n){var i,o,u=f.fromBuffer(e),h=t.n,c=t.G,l=(a(t,e,r,function(e){var n=c.multiply(e);return!t.isInfinity(n)&&0!==(i=n.affineX.mod(h)).signum()&&0!==(o=e.modInverse(h).multiply(u.add(r.multiply(i))).mod(h)).signum()},n),h.shiftRight(1));return o.compareTo(l)>0&&(o=h.subtract(o)),s(i,o)},verify:function(t,e,r,n){return u(t,f.fromBuffer(e),r,n)},verifyRaw:u}},function(t,e,r){"use strict";var n=r(3),i=r(66),o=r(4);function f(t,e){function r(){var r=t.toDERInteger(),n=e.toDERInteger(),i=[];return i.push(2,r.length),(i=i.concat(r)).push(2,n.length),(i=i.concat(n)).unshift(48,i.length),new Buffer(i)}return i(o,t),i(o,e),{r:t,s:e,toCompact:function(r,n){n&&(r+=4),r+=27;var i=new Buffer(65);return i.writeUInt8(r,0),t.toBuffer(32).copy(i,1),e.toBuffer(32).copy(i,33),i},toDER:r,toScriptSignature:function(t){var e=new Buffer(1);return e.writeUInt8(t,0),Buffer.concat([r(),e])}}}f.parseCompact=function(t){n.equal(t.length,65,"Invalid signature length");var e=t.readUInt8(0)-27;return n.equal(e,7&e,"Invalid signature parameter"),{compressed:!!(4&e),i:e&=3,signature:f(o.fromBuffer(t.slice(1,33)),o.fromBuffer(t.slice(33)))}},f.fromDER=function(t){n.equal(t.readUInt8(0),48,"Not a DER sequence"),n.equal(t.readUInt8(1),t.length-2,"Invalid sequence length"),n.equal(t.readUInt8(2),2,"Expected a DER integer");var e=t.readUInt8(3);n(e>0,"R length is zero");var r=4+e;n.equal(t.readUInt8(r),2,"Expected a DER integer (2)");var i=t.readUInt8(r+1);n(i>0,"S length is zero");var s=t.slice(4,r),a=t.slice(r+2);r+=2+i,e>1&&0===s.readUInt8(0)&&n(128&s.readUInt8(1),"R value excessively padded"),i>1&&0===a.readUInt8(0)&&n(128&a.readUInt8(1),"S value excessively padded"),n.equal(r,t.length,"Invalid DER encoding");var u=o.fromDERInteger(s),h=o.fromDERInteger(a);return n(u.signum()>=0,"R value is negative"),n(h.signum()>=0,"S value is negative"),f(u,h)},f.parseScriptSignature=function(t){var e=t.readUInt8(t.length-1),r=-129&e;return n(r>0&&r<4,"Invalid hashType"),{signature:f.fromDER(t.slice(0,-1)),hashType:e}},t.exports=f},function(t,e,r){"use strict";var n=r(53),i=r(19),o=r(13),f=r(65),s=r(14);t.exports={Aes:n,PrivateKey:i,PublicKey:o,Signature:f,key_utils:s}}])});
//# sourceMappingURL=browser.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/websocket-as-promised/dist/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/websocket-as-promised/dist/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! websocket-as-promised v0.8.0 */
!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=16)}([function(e,t,n){"use strict";var r=n(24);e.exports=Function.prototype.bind||r},function(e,t,n){"use strict";e.exports=function(){if("function"!=typeof Promise)throw new TypeError("`Promise.prototype.finally` requires a global `Promise` be available.")}},function(e,t,n){var r=n(0);e.exports=r.call(Function.call,Object.prototype.hasOwnProperty)},function(e,t,n){"use strict";var r=Function.prototype.toString,o=/^\s*class /,i=function(e){try{var t=r.call(e).replace(/\/\/.*\n/g,"").replace(/\/\*[.\s\S]*\*\//g,"").replace(/\n/gm," ").replace(/ {2}/g," ");return o.test(t)}catch(e){return!1}},s=Object.prototype.toString,u="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;e.exports=function(e){if(!e)return!1;if("function"!=typeof e&&"object"!=typeof e)return!1;if(u)return function(e){try{return!i(e)&&(r.call(e),!0)}catch(e){return!1}}(e);if(i(e))return!1;var t=s.call(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=["onListenerAdded","onListenerRemoved","onFirstListenerAdded","onLastListenerRemoved"],i=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._listeners=[],this._mute=!1,this._accumulate=!1,this._accumulatedEvents=[],this._name=t||"",this._noInnerEvents=Boolean(n),n||o.forEach(function(t){return r[t]=new e(t,!0)})}return r(e,[{key:"addListener",value:function(e,t){this._pushListener(e,t,!1)}},{key:"addOnceListener",value:function(e,t){this._pushListener(e,t,!0)}},{key:"removeListener",value:function(e,t){this._ensureFunction(e);var n=this._indexOfListener(e,t);n>=0&&this._spliceListener(n)}},{key:"removeAllListeners",value:function(){for(;this.hasListeners();)this._spliceListener(0)}},{key:"hasListener",value:function(e,t){return this._ensureFunction(e),this._indexOfListener(e,t)>=0}},{key:"hasListeners",value:function(){return this._listeners.length>0}},{key:"dispatch",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this._invokeListeners({args:t,async:!1})}},{key:"dispatchAsync",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this._invokeListeners({args:t,async:!0})}},{key:"mute",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._mute=!0,e.accumulate?this._accumulate=!0:(this._accumulate=!1,this._accumulatedEvents=[])}},{key:"unmute",value:function(){this._mute=!1,this._accumulate&&(this._dispatchAccumulated(),this._accumulate=!1)}},{key:"_invokeListeners",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{args:[],async:!1};this._mute?this._accumulate&&this._accumulatedEvents.push(t):this._listeners.slice().forEach(function(n){e._invokeListener(n,t),n.once&&e.removeListener(n.callback,n.context)})}},{key:"_invokeListener",value:function(e,t){t.async?setTimeout(function(){return e.callback.apply(e.context,t.args)},0):e.callback.apply(e.context,t.args)}},{key:"_ensureFunction",value:function(e){if("function"!=typeof e)throw new Error("Channel "+this._name+": listener is not a function")}},{key:"_dispatchInnerAddEvents",value:function(){this._noInnerEvents||(this.onListenerAdded.dispatch.apply(this.onListenerAdded,arguments),1===this._listeners.length&&this.onFirstListenerAdded.dispatch.apply(this.onFirstListenerAdded,arguments))}},{key:"_dispatchInnerRemoveEvents",value:function(){this._noInnerEvents||(this.onListenerRemoved.dispatch.apply(this.onListenerRemoved,arguments),0===this._listeners.length&&this.onLastListenerRemoved.dispatch.apply(this.onLastListenerRemoved,arguments))}},{key:"_indexOfListener",value:function(e,t){for(var n=0;n<this._listeners.length;n++){var r=this._listeners[n],o=r.callback===e,i=void 0===t&&void 0===r.context,s=t===r.context;if(o&&(i||s))return n}}},{key:"_dispatchAccumulated",value:function(){var e=this;this._accumulatedEvents.forEach(function(t){return e._invokeListeners(t)}),this._accumulatedEvents=[]}},{key:"_pushListener",value:function(e,t,n){this._ensureFunction(e),this._listeners.push({callback:e,context:t,once:n}),this._dispatchInnerAddEvents.apply(this,arguments)}},{key:"_spliceListener",value:function(e){var t=this._listeners[e];this._listeners.splice(e,1);var n=[t.callback];t.context&&n.push(t.context),this._dispatchInnerRemoveEvents.apply(this,n)}}]),e}();t.default=i,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(19));var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=t.map(function(e){return new o.default(e)})}return r(e,[{key:"on",value:function(){return this._items.forEach(function(e){return e.on()}),this}},{key:"off",value:function(){return this._items.forEach(function(e){return e.off()}),this}}]),e}();t.default=i,e.exports=t.default},function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._options=Object.assign({},o,t),this._resolve=null,this._reject=null,this._isPending=!1,this._isFulfilled=!1,this._isRejected=!1,this._value=void 0,this._promise=null,this._timer=null}return r(e,[{key:"call",value:function(e){return this._isPending||(this.reset(),this._createPromise(),this._createTimer(),this._callFn(e)),this._promise}},{key:"resolve",value:function(e){this._isPending&&(s(e)?this._tryAttachToPromise(e):(this._settle(e),this._isFulfilled=!0,this._resolve(e)))}},{key:"reject",value:function(e){this._isPending&&(this._settle(e),this._isRejected=!0,this._reject(e))}},{key:"reset",value:function(){this._isPending&&this.reject(new Error(this._options.resetReason)),this._promise=null,this._isPending=!1,this._isFulfilled=!1,this._isRejected=!1,this._value=void 0,this._clearTimer()}},{key:"configure",value:function(e){Object.assign(this._options,e)}},{key:"_createPromise",value:function(){var e=this;this._promise=new Promise(function(t,n){e._isPending=!0,e._resolve=t,e._reject=n})}},{key:"_handleTimeout",value:function(){var e=this._options.timeoutReason;if("function"==typeof e)e();else{var t="string"==typeof e?new Error(e):e;this.reject(t)}}},{key:"_createTimer",value:function(){var e=this;this._options.timeout&&(this._timer=setTimeout(function(){return e._handleTimeout()},this._options.timeout))}},{key:"_clearTimer",value:function(){this._timer&&(clearTimeout(this._timer),this._timer=null)}},{key:"_settle",value:function(e){this._isPending=!1,this._value=e,this._clearTimer()}},{key:"_callFn",value:function(e){if("function"==typeof e)try{var t=e();this._tryAttachToPromise(t)}catch(e){this.reject(e)}}},{key:"_tryAttachToPromise",value:function(e){var t=this;s(e)&&e.then(function(e){return t.resolve(e)},function(e){return t.reject(e)})}},{key:"promise",get:function(){return this._promise}},{key:"value",get:function(){return this._value}},{key:"isPending",get:function(){return this._isPending}},{key:"isFulfilled",get:function(){return this._isFulfilled}},{key:"isRejected",get:function(){return this._isRejected}},{key:"isSettled",get:function(){return this._isFulfilled||this._isRejected}}]),e}();function s(e){return e&&"function"==typeof e.then}e.exports=i},function(e,t,n){"use strict";e.exports={timeout:0,timeoutReason:"Promise rejected by timeout",resetReason:"Promise rejected by reset"}}])},function(e,t,n){"use strict";var r=n(25),o=n(27),i="function"==typeof Symbol&&"symbol"==typeof Symbol(),s=Object.prototype.toString,u=Object.defineProperty&&function(){var e={};try{for(var t in Object.defineProperty(e,"x",{enumerable:!1,value:e}),e)return!1;return e.x===e}catch(e){return!1}}(),a=function(e,t,n,r){(!(t in e)||function(e){return"function"==typeof e&&"[object Function]"===s.call(e)}(r)&&r())&&(u?Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n,writable:!0}):e[t]=n)},c=function(e,t){var n=arguments.length>2?arguments[2]:{},s=r(t);i&&(s=s.concat(Object.getOwnPropertySymbols(t))),o(s,function(r){a(e,r,t[r],n[r])})};c.supportsDescriptors=!!u,e.exports=c},function(e,t,n){"use strict";n(1)();var r=n(28),o=n(0),i=function(e,t){return new e(function(e){e(t)})},s=Promise,u=o.call(Function.call,s.prototype.then),a=function(e){u(this,null,function(){});var t=r.SpeciesConstructor(this,s),n=e,o=e;return r.IsCallable(e)&&(n=function(e,t){return function(n){var r=t();return i(e,r).then(function(){return n})}}(t,e),o=function(e,t){return function(n){var r=t();return i(e,r).then(function(){throw n})}}(t,e)),this.then(n,o)};if(Object.getOwnPropertyDescriptor){var c=Object.getOwnPropertyDescriptor(a,"name");c&&c.configurable&&Object.defineProperty(a,"name",{configurable:!0,value:"finally"})}e.exports=a},function(e,t){e.exports=function(e){return null===e||"function"!=typeof e&&"object"!=typeof e}},function(e,t){e.exports=Number.isNaN||function(e){return e!=e}},function(e,t){var n=Number.isNaN||function(e){return e!=e};e.exports=Number.isFinite||function(e){return"number"==typeof e&&!n(e)&&e!==1/0&&e!==-1/0}},function(e,t){var n=Object.prototype.hasOwnProperty;e.exports=function(e,t){if(Object.assign)return Object.assign(e,t);for(var r in t)n.call(t,r)&&(e[r]=t[r]);return e}},function(e,t){e.exports=function(e){return e>=0?1:-1}},function(e,t){e.exports=function(e,t){var n=e%t;return Math.floor(n>=0?n:n+t)}},function(e,t,n){"use strict";var r=n(1),o=n(8);e.exports=function(){return r(),"function"==typeof Promise.prototype.finally?Promise.prototype.finally:o}},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=n(17),i=n(6),s=n(21),u=n(22),a=n(39),c=n(40).throwIf,l=0,f=1,p=2,h=3,y=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t,this._options=s(n,a),this._requests=new u,this._ws=null,this._wsSubscription=null,this._createOpeningController(),this._createClosingController(),this._createChannels()}return r(e,[{key:"open",value:function(){var e=this;return this.isClosing?Promise.reject(new Error("Can't open WebSocket while closing.")):this.isOpened?this._opening.promise:this._opening.call(function(){e._opening.promise.catch(function(t){return e._cleanup(t)}),e._createWS()})}},{key:"sendRequest",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.requestId||""+Math.random(),o=void 0!==n.timeout?n.timeout:this._options.timeout;return this._requests.create(r,function(){t._assertRequestIdHandlers();var n=t._options.attachRequestId(e,r);t.sendPacked(n)},o)}},{key:"sendPacked",value:function(e){this._assertPackingHandlers();var t=this._options.packMessage(e);this.send(t)}},{key:"send",value:function(e){c(!this.isOpened,"Can't send data because WebSocket is not opened."),this._ws.send(e),this._onSend.dispatchAsync(e)}},{key:"close",value:function(){var e=this;return this.isClosed?Promise.resolve(this._closing.value):this._closing.call(function(){return e._ws.close()})}},{key:"removeAllListeners",value:function(){this._onOpen.removeAllListeners(),this._onMessage.removeAllListeners(),this._onUnpackedMessage.removeAllListeners(),this._onResponse.removeAllListeners(),this._onSend.removeAllListeners(),this._onClose.removeAllListeners(),this._onError.removeAllListeners()}},{key:"_createOpeningController",value:function(){var e=this._options.connectionTimeout||this._options.timeout;this._opening=new i({timeout:e,timeoutReason:"Can't open WebSocket within allowed timeout: "+e+" ms."})}},{key:"_createClosingController",value:function(){var e=this._options.timeout;this._closing=new i({timeout:e,timeoutReason:"Can't close WebSocket within allowed timeout: "+e+" ms."})}},{key:"_createChannels",value:function(){this._onOpen=new o,this._onMessage=new o,this._onUnpackedMessage=new o,this._onResponse=new o,this._onSend=new o,this._onClose=new o,this._onError=new o}},{key:"_createWS",value:function(){var e=this;this._ws=this._options.createWebSocket(this._url),this._wsSubscription=new o.Subscription([{channel:this._ws,event:"open",listener:function(t){return e._handleOpen(t)}},{channel:this._ws,event:"message",listener:function(t){return e._handleMessage(t)}},{channel:this._ws,event:"error",listener:function(t){return e._handleError(t)}},{channel:this._ws,event:"close",listener:function(t){return e._handleClose(t)}}]).on()}},{key:"_handleOpen",value:function(e){this._onOpen.dispatchAsync(e),this._opening.resolve(e)}},{key:"_handleMessage",value:function(e){var t=e.data;this._onMessage.dispatchAsync(t),this._handleUnpackedMessage(t)}},{key:"_handleUnpackedMessage",value:function(e){if(this._options.unpackMessage){var t=this._options.unpackMessage(e);void 0!==t&&(this._onUnpackedMessage.dispatchAsync(t),this._handleResponse(t))}}},{key:"_handleResponse",value:function(e){if(this._options.extractRequestId){var t=this._options.extractRequestId(e);t&&(this._onResponse.dispatchAsync(e,t),this._requests.resolve(t,e))}}},{key:"_handleError",value:function(e){this._onError.dispatchAsync(e)}},{key:"_handleClose",value:function(e){this._onClose.dispatchAsync(e),this._closing.resolve(e);var t=new Error("WebSocket closed with reason: "+e.reason+" ("+e.code+").");this._opening.isPending&&this._opening.reject(t),this._cleanup(t)}},{key:"_cleanupWS",value:function(){this._wsSubscription&&(this._wsSubscription.off(),this._wsSubscription=null),this._ws=null}},{key:"_cleanup",value:function(e){this._cleanupWS(),this._requests.rejectAll(e)}},{key:"_assertPackingHandlers",value:function(){var e=this._options,t=e.packMessage,n=e.unpackMessage;c(!t||!n,"Please define 'options.packMessage / options.unpackMessage' for sending packed messages.")}},{key:"_assertRequestIdHandlers",value:function(){var e=this._options,t=e.attachRequestId,n=e.extractRequestId;c(!t||!n,"Please define 'options.attachRequestId / options.extractRequestId' for sending requests.")}},{key:"ws",get:function(){return this._ws}},{key:"isOpening",get:function(){return Boolean(this._ws&&this._ws.readyState===l)}},{key:"isOpened",get:function(){return Boolean(this._ws&&this._ws.readyState===f)}},{key:"isClosing",get:function(){return Boolean(this._ws&&this._ws.readyState===p)}},{key:"isClosed",get:function(){return Boolean(!this._ws||this._ws.readyState===h)}},{key:"onOpen",get:function(){return this._onOpen}},{key:"onSend",get:function(){return this._onSend}},{key:"onMessage",get:function(){return this._onMessage}},{key:"onPackedMessage",get:function(){throw new Error(["Websocket-as-promised 'onPackedMessage' was renamed into 'onUnpackedMessage' to match the argument","passed to the listener. Please just use 'onUnpackedMessage' instead."].join(" "))}},{key:"onUnpackedMessage",get:function(){return this._onUnpackedMessage}},{key:"onResponse",get:function(){return this._onResponse}},{key:"onClose",get:function(){return this._onClose}},{key:"onError",get:function(){return this._onError}}]),e}();e.exports=y},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(4)),o=u(n(18)),i=u(n(5)),s=u(n(20));function u(e){return e&&e.__esModule?e:{default:e}}var a=r.default;a.EventEmitter=o.default,a.Subscription=i.default,a.ReactSubscription=s.default,t.default=a,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(4));var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._channels=new Map}return r(e,[{key:"addListener",value:function(e,t,n){this._getChannel(e).addListener(t,n)}},{key:"on",value:function(e,t,n){this.addListener(e,t,n)}},{key:"addOnceListener",value:function(e,t,n){this._getChannel(e).addOnceListener(t,n)}},{key:"once",value:function(e,t,n){this.addOnceListener(e,t,n)}},{key:"removeListener",value:function(e,t,n){this._getChannel(e).removeListener(t,n)}},{key:"off",value:function(e,t,n){this.removeListener(e,t,n)}},{key:"hasListener",value:function(e,t,n){return this._getChannel(e).hasListener(t,n)}},{key:"has",value:function(e,t,n){return this.hasListener(e,t,n)}},{key:"hasListeners",value:function(e){return this._getChannel(e).hasListeners()}},{key:"dispatch",value:function(e){for(var t,n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];(t=this._getChannel(e)).dispatch.apply(t,r)}},{key:"emit",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.dispatch.apply(this,[e].concat(n))}},{key:"_getChannel",value:function(e){return this._channels.has(e)||this._channels.set(e,new o.default(e)),this._channels.get(e)}}]),e}();t.default=i,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._params=t,this._isOn=!1,this._assertParams()}return o(e,[{key:"on",value:function(){if(!this._isOn){var e=this._params.channel,t=e.addListener||e.addEventListener||e.on;this._applyMethod(t),this._isOn=!0}}},{key:"off",value:function(){if(this._isOn){var e=this._params.channel,t=e.removeListener||e.removeEventListener||e.off;this._applyMethod(t),this._isOn=!1}}},{key:"_applyMethod",value:function(e){var t=this._params,n=t.channel,r=t.event,o=t.listener,i=r?[r,o]:[o];e.apply(n,i)}},{key:"_assertParams",value:function(){var e=this._params,t=e.channel,n=e.event,o=e.listener;if(!t||"object"!==(void 0===t?"undefined":r(t)))throw new Error("Channel should be object");if(n&&"string"!=typeof n)throw new Error("Event should be string");if(!o||"function"!=typeof o)throw new Error("Listener should be function")}}]),e}();t.default=i,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(5));var i=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return r._overrideComponentCallback(e,"componentDidMount","on"),r._overrideComponentCallback(e,"componentWillUnmount","off"),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),r(t,[{key:"_overrideComponentCallback",value:function(e,t,n){var r=this,o=e[t];e[t]=function(){for(var t=arguments.length,i=Array(t),s=0;s<t;s++)i[s]=arguments[s];if(r[n](),"function"==typeof o)return o.apply(e,i)}}}]),t}();t.default=i,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e,t){var n=Object.assign({},t);e&&"object"===(void 0===e?"undefined":r(e))&&Object.keys(e).forEach(function(r){return function(e,t){if(t&&!Object.hasOwnProperty.call(t,e))throw new Error("Unknown option: "+e);return!0}(r,t)&&function(e,t,n){void 0!==t[e]&&(n[e]=t[e])}(r,e,n)});return n},e.exports=t.default},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=n(6),i=n(23);e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=new Map}return r(e,[{key:"create",value:function(e,t,n){return this._rejectExistingRequest(e),this._createNewRequest(e,t,n)}},{key:"resolve",value:function(e,t){e&&this._items.has(e)&&this._items.get(e).resolve(t)}},{key:"rejectAll",value:function(e){this._items.forEach(function(t){return t.isPending?t.reject(e):null})}},{key:"_rejectExistingRequest",value:function(e){var t=this._items.get(e);t&&t.isPending&&t.reject(new Error("WebSocket request is replaced, id: "+e))}},{key:"_createNewRequest",value:function(e,t,n){var r=this,s=new o({timeout:n,timeoutReason:"WebSocket request was rejected by timeout ("+n+" ms). RequestId: "+e});return this._items.set(e,s),i(s.call(t),function(){return r._deleteRequest(e,s)})}},{key:"_deleteRequest",value:function(e,t){this._items.get(e)===t&&this._items.delete(e)}}]),e}()},function(e,t,n){"use strict";var r=n(0),o=n(7),i=n(8),s=n(15),u=n(38),a=r.call(Function.call,s());o(a,{getPolyfill:s,implementation:i,shim:u}),e.exports=a},function(e,t,n){"use strict";var r=Array.prototype.slice,o=Object.prototype.toString;e.exports=function(e){var t=this;if("function"!=typeof t||"[object Function]"!==o.call(t))throw new TypeError("Function.prototype.bind called on incompatible "+t);for(var n,i=r.call(arguments,1),s=Math.max(0,t.length-i.length),u=[],a=0;a<s;a++)u.push("$"+a);if(n=Function("binder","return function ("+u.join(",")+"){ return binder.apply(this,arguments); }")(function(){if(this instanceof n){var o=t.apply(this,i.concat(r.call(arguments)));return Object(o)===o?o:this}return t.apply(e,i.concat(r.call(arguments)))}),t.prototype){var c=function(){};c.prototype=t.prototype,n.prototype=new c,c.prototype=null}return n}},function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,o=Object.prototype.toString,i=Array.prototype.slice,s=n(26),u=Object.prototype.propertyIsEnumerable,a=!u.call({toString:null},"toString"),c=u.call(function(){},"prototype"),l=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],f=function(e){var t=e.constructor;return t&&t.prototype===e},p={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},h=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!p["$"+e]&&r.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{f(window[e])}catch(e){return!0}}catch(e){return!0}return!1}(),y=function(e){var t=null!==e&&"object"==typeof e,n="[object Function]"===o.call(e),i=s(e),u=t&&"[object String]"===o.call(e),p=[];if(!t&&!n&&!i)throw new TypeError("Object.keys called on a non-object");var y=c&&n;if(u&&e.length>0&&!r.call(e,0))for(var b=0;b<e.length;++b)p.push(String(b));if(i&&e.length>0)for(var v=0;v<e.length;++v)p.push(String(v));else for(var d in e)y&&"prototype"===d||!r.call(e,d)||p.push(String(d));if(a)for(var m=function(e){if("undefined"==typeof window||!h)return f(e);try{return f(e)}catch(e){return!1}}(e),_=0;_<l.length;++_)m&&"constructor"===l[_]||!r.call(e,l[_])||p.push(l[_]);return p};y.shim=function(){if(Object.keys){if(!function(){return 2===(Object.keys(arguments)||"").length}(1,2)){var e=Object.keys;Object.keys=function(t){return s(t)?e(i.call(t)):e(t)}}}else Object.keys=y;return Object.keys||y},e.exports=y},function(e,t,n){"use strict";var r=Object.prototype.toString;e.exports=function(e){var t=r.call(e),n="[object Arguments]"===t;return n||(n="[object Array]"!==t&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===r.call(e.callee)),n}},function(e,t){var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString;e.exports=function(e,t,o){if("[object Function]"!==r.call(t))throw new TypeError("iterator must be a function");var i=e.length;if(i===+i)for(var s=0;s<i;s++)t.call(o,e[s],s,e);else for(var u in e)n.call(e,u)&&t.call(o,e[u],u,e)}},function(e,t,n){"use strict";e.exports=n(29)},function(e,t,n){"use strict";var r=n(30),o=n(12),i=o(o({},r),{SameValueNonNumber:function(e,t){if("number"==typeof e||typeof e!=typeof t)throw new TypeError("SameValueNonNumber requires two non-number values of the same type.");return this.SameValue(e,t)}});e.exports=i},function(e,t,n){"use strict";var r=n(2),o=n(31),i=Object.prototype.toString,s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator,u=n(10),a=n(11),c=Number.MAX_SAFE_INTEGER||Math.pow(2,53)-1,l=n(12),f=n(13),p=n(14),h=n(34),y=parseInt,b=n(0),v=b.call(Function.call,Array.prototype.slice),d=b.call(Function.call,String.prototype.slice),m=b.call(Function.call,RegExp.prototype.test,/^0b[01]+$/i),_=b.call(Function.call,RegExp.prototype.test,/^0o[0-7]+$/i),g=b.call(Function.call,RegExp.prototype.exec),w=["","​","￾"].join(""),j=new RegExp("["+w+"]","g"),O=b.call(Function.call,RegExp.prototype.test,j),k=b.call(Function.call,RegExp.prototype.test,/^[-+]0x[0-9a-f]+$/i),T=["\t\n\v\f\r   ᠎    ","         　\u2028","\u2029\ufeff"].join(""),S=new RegExp("(^["+T+"]+)|(["+T+"]+$)","g"),P=b.call(Function.call,String.prototype.replace),E=n(35),x=n(37),C=l(l({},E),{Call:function(e,t){var n=arguments.length>2?arguments[2]:[];if(!this.IsCallable(e))throw new TypeError(e+" is not a function");return e.apply(t,n)},ToPrimitive:o,ToNumber:function(e){var t=h(e)?e:o(e,Number);if("symbol"==typeof t)throw new TypeError("Cannot convert a Symbol value to a number");if("string"==typeof t){if(m(t))return this.ToNumber(y(d(t,2),2));if(_(t))return this.ToNumber(y(d(t,2),8));if(O(t)||k(t))return NaN;var n=function(e){return P(e,S,"")}(t);if(n!==t)return this.ToNumber(n)}return Number(t)},ToInt16:function(e){var t=this.ToUint16(e);return t>=32768?t-65536:t},ToInt8:function(e){var t=this.ToUint8(e);return t>=128?t-256:t},ToUint8:function(e){var t=this.ToNumber(e);if(u(t)||0===t||!a(t))return 0;var n=f(t)*Math.floor(Math.abs(t));return p(n,256)},ToUint8Clamp:function(e){var t=this.ToNumber(e);if(u(t)||t<=0)return 0;if(t>=255)return 255;var n=Math.floor(e);return n+.5<t?n+1:t<n+.5?n:n%2!=0?n+1:n},ToString:function(e){if("symbol"==typeof e)throw new TypeError("Cannot convert a Symbol value to a string");return String(e)},ToObject:function(e){return this.RequireObjectCoercible(e),Object(e)},ToPropertyKey:function(e){var t=this.ToPrimitive(e,String);return"symbol"==typeof t?t:this.ToString(t)},ToLength:function(e){var t=this.ToInteger(e);return t<=0?0:t>c?c:t},CanonicalNumericIndexString:function(e){if("[object String]"!==i.call(e))throw new TypeError("must be a string");if("-0"===e)return-0;var t=this.ToNumber(e);return this.SameValue(this.ToString(t),e)?t:void 0},RequireObjectCoercible:E.CheckObjectCoercible,IsArray:Array.isArray||function(e){return"[object Array]"===i.call(e)},IsConstructor:function(e){return"function"==typeof e&&!!e.prototype},IsExtensible:function(e){return!Object.preventExtensions||!h(e)&&Object.isExtensible(e)},IsInteger:function(e){if("number"!=typeof e||u(e)||!a(e))return!1;var t=Math.abs(e);return Math.floor(t)===t},IsPropertyKey:function(e){return"string"==typeof e||"symbol"==typeof e},IsRegExp:function(e){if(!e||"object"!=typeof e)return!1;if(s){var t=e[Symbol.match];if(void 0!==t)return E.ToBoolean(t)}return x(e)},SameValueZero:function(e,t){return e===t||u(e)&&u(t)},GetV:function(e,t){if(!this.IsPropertyKey(t))throw new TypeError("Assertion failed: IsPropertyKey(P) is not true");return this.ToObject(e)[t]},GetMethod:function(e,t){if(!this.IsPropertyKey(t))throw new TypeError("Assertion failed: IsPropertyKey(P) is not true");var n=this.GetV(e,t);if(null!=n){if(!this.IsCallable(n))throw new TypeError(t+"is not a function");return n}},Get:function(e,t){if("Object"!==this.Type(e))throw new TypeError("Assertion failed: Type(O) is not Object");if(!this.IsPropertyKey(t))throw new TypeError("Assertion failed: IsPropertyKey(P) is not true");return e[t]},Type:function(e){return"symbol"==typeof e?"Symbol":E.Type(e)},SpeciesConstructor:function(e,t){if("Object"!==this.Type(e))throw new TypeError("Assertion failed: Type(O) is not Object");var n=e.constructor;if(void 0===n)return t;if("Object"!==this.Type(n))throw new TypeError("O.constructor is not an Object");var r=s&&Symbol.species?n[Symbol.species]:void 0;if(null==r)return t;if(this.IsConstructor(r))return r;throw new TypeError("no constructor found")},CompletePropertyDescriptor:function(e){if(!this.IsPropertyDescriptor(e))throw new TypeError("Desc must be a Property Descriptor");return this.IsGenericDescriptor(e)||this.IsDataDescriptor(e)?(r(e,"[[Value]]")||(e["[[Value]]"]=void 0),r(e,"[[Writable]]")||(e["[[Writable]]"]=!1)):(r(e,"[[Get]]")||(e["[[Get]]"]=void 0),r(e,"[[Set]]")||(e["[[Set]]"]=void 0)),r(e,"[[Enumerable]]")||(e["[[Enumerable]]"]=!1),r(e,"[[Configurable]]")||(e["[[Configurable]]"]=!1),e},Set:function(e,t,n,r){if("Object"!==this.Type(e))throw new TypeError("O must be an Object");if(!this.IsPropertyKey(t))throw new TypeError("P must be a Property Key");if("Boolean"!==this.Type(r))throw new TypeError("Throw must be a Boolean");if(r)return e[t]=n,!0;try{e[t]=n}catch(e){return!1}},HasOwnProperty:function(e,t){if("Object"!==this.Type(e))throw new TypeError("O must be an Object");if(!this.IsPropertyKey(t))throw new TypeError("P must be a Property Key");return r(e,t)},HasProperty:function(e,t){if("Object"!==this.Type(e))throw new TypeError("O must be an Object");if(!this.IsPropertyKey(t))throw new TypeError("P must be a Property Key");return t in e},IsConcatSpreadable:function(e){if("Object"!==this.Type(e))return!1;if(s&&"symbol"==typeof Symbol.isConcatSpreadable){var t=this.Get(e,Symbol.isConcatSpreadable);if(void 0!==t)return this.ToBoolean(t)}return this.IsArray(e)},Invoke:function(e,t){if(!this.IsPropertyKey(t))throw new TypeError("P must be a Property Key");var n=v(arguments,2),r=this.GetV(e,t);return this.Call(r,e,n)},CreateIterResultObject:function(e,t){if("Boolean"!==this.Type(t))throw new TypeError("Assertion failed: Type(done) is not Boolean");return{value:e,done:t}},RegExpExec:function(e,t){if("Object"!==this.Type(e))throw new TypeError("R must be an Object");if("String"!==this.Type(t))throw new TypeError("S must be a String");var n=this.Get(e,"exec");if(this.IsCallable(n)){var r=this.Call(n,e,[t]);if(null===r||"Object"===this.Type(r))return r;throw new TypeError('"exec" method must return `null` or an Object')}return g(e,t)},ArraySpeciesCreate:function(e,t){if(!this.IsInteger(t)||t<0)throw new TypeError("Assertion failed: length must be an integer >= 0");var n,r=0===t?0:t;if(this.IsArray(e)&&(n=this.Get(e,"constructor"),"Object"===this.Type(n)&&s&&Symbol.species&&null===(n=this.Get(n,Symbol.species))&&(n=void 0)),void 0===n)return Array(r);if(!this.IsConstructor(n))throw new TypeError("C must be a constructor");return new n(r)},CreateDataProperty:function(e,t,n){if("Object"!==this.Type(e))throw new TypeError("Assertion failed: Type(O) is not Object");if(!this.IsPropertyKey(t))throw new TypeError("Assertion failed: IsPropertyKey(P) is not true");var r=Object.getOwnPropertyDescriptor(e,t),o=r||"function"!=typeof Object.isExtensible||Object.isExtensible(e);if(r&&(!r.writable||!r.configurable)||!o)return!1;var i={configurable:!0,enumerable:!0,value:n,writable:!0};return Object.defineProperty(e,t,i),!0},CreateDataPropertyOrThrow:function(e,t,n){if("Object"!==this.Type(e))throw new TypeError("Assertion failed: Type(O) is not Object");if(!this.IsPropertyKey(t))throw new TypeError("Assertion failed: IsPropertyKey(P) is not true");var r=this.CreateDataProperty(e,t,n);if(!r)throw new TypeError("unable to create data property");return r},AdvanceStringIndex:function(e,t,n){if("String"!==this.Type(e))throw new TypeError("Assertion failed: Type(S) is not String");if(!this.IsInteger(t))throw new TypeError("Assertion failed: length must be an integer >= 0 and <= (2**53 - 1)");if(t<0||t>c)throw new RangeError("Assertion failed: length must be an integer >= 0 and <= (2**53 - 1)");if("Boolean"!==this.Type(n))throw new TypeError("Assertion failed: Type(unicode) is not Boolean");if(!n)return t+1;if(t+1>=e.length)return t+1;var r=e.charCodeAt(t);if(r<55296||r>56319)return t+1;var o=e.charCodeAt(t+1);return o<56320||o>57343?t+1:t+2}});delete C.CheckObjectCoercible,e.exports=C},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator,o=n(9),i=n(3),s=n(32),u=n(33);e.exports=function(e,t){if(o(e))return e;var n,a="default";if(arguments.length>1&&(t===String?a="string":t===Number&&(a="number")),r&&(Symbol.toPrimitive?n=function(e,t){var n=e[t];if(null!==n&&void 0!==n){if(!i(n))throw new TypeError(n+" returned for property "+t+" of object "+e+" is not a function");return n}}(e,Symbol.toPrimitive):u(e)&&(n=Symbol.prototype.valueOf)),void 0!==n){var c=n.call(e,a);if(o(c))return c;throw new TypeError("unable to convert exotic object to primitive")}return"default"===a&&(s(e)||u(e))&&(a="string"),function(e,t){if(void 0===e||null===e)throw new TypeError("Cannot call method on "+e);if("string"!=typeof t||"number"!==t&&"string"!==t)throw new TypeError('hint must be "string" or "number"');var n,r,s,u="string"===t?["toString","valueOf"]:["valueOf","toString"];for(s=0;s<u.length;++s)if(n=e[u[s]],i(n)&&(r=n.call(e),o(r)))return r;throw new TypeError("No default value")}(e,"default"===a?"number":a)}},function(e,t,n){"use strict";var r=Date.prototype.getDay,o=Object.prototype.toString,i="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;e.exports=function(e){return"object"==typeof e&&null!==e&&(i?function(e){try{return r.call(e),!0}catch(e){return!1}}(e):"[object Date]"===o.call(e))}},function(e,t,n){"use strict";var r=Object.prototype.toString;if("function"==typeof Symbol&&"symbol"==typeof Symbol()){var o=Symbol.prototype.toString,i=/^Symbol\(.*\)$/;e.exports=function(e){if("symbol"==typeof e)return!0;if("[object Symbol]"!==r.call(e))return!1;try{return function(e){return"symbol"==typeof e.valueOf()&&i.test(o.call(e))}(e)}catch(e){return!1}}}else e.exports=function(e){return!1}},function(e,t){e.exports=function(e){return null===e||"function"!=typeof e&&"object"!=typeof e}},function(e,t,n){"use strict";var r=n(10),o=n(11),i=n(13),s=n(14),u=n(3),a=n(36),c=n(2),l={ToPrimitive:a,ToBoolean:function(e){return!!e},ToNumber:function(e){return Number(e)},ToInteger:function(e){var t=this.ToNumber(e);return r(t)?0:0!==t&&o(t)?i(t)*Math.floor(Math.abs(t)):t},ToInt32:function(e){return this.ToNumber(e)>>0},ToUint32:function(e){return this.ToNumber(e)>>>0},ToUint16:function(e){var t=this.ToNumber(e);if(r(t)||0===t||!o(t))return 0;var n=i(t)*Math.floor(Math.abs(t));return s(n,65536)},ToString:function(e){return String(e)},ToObject:function(e){return this.CheckObjectCoercible(e),Object(e)},CheckObjectCoercible:function(e,t){if(null==e)throw new TypeError(t||"Cannot call method on "+e);return e},IsCallable:u,SameValue:function(e,t){return e===t?0!==e||1/e==1/t:r(e)&&r(t)},Type:function(e){return null===e?"Null":void 0===e?"Undefined":"function"==typeof e||"object"==typeof e?"Object":"number"==typeof e?"Number":"boolean"==typeof e?"Boolean":"string"==typeof e?"String":void 0},IsPropertyDescriptor:function(e){if("Object"!==this.Type(e))return!1;var t={"[[Configurable]]":!0,"[[Enumerable]]":!0,"[[Get]]":!0,"[[Set]]":!0,"[[Value]]":!0,"[[Writable]]":!0};for(var n in e)if(c(e,n)&&!t[n])return!1;var r=c(e,"[[Value]]"),o=c(e,"[[Get]]")||c(e,"[[Set]]");if(r&&o)throw new TypeError("Property Descriptors may not be both accessor and data descriptors");return!0},IsAccessorDescriptor:function(e){if(void 0===e)return!1;if(!this.IsPropertyDescriptor(e))throw new TypeError("Desc must be a Property Descriptor");return!(!c(e,"[[Get]]")&&!c(e,"[[Set]]"))},IsDataDescriptor:function(e){if(void 0===e)return!1;if(!this.IsPropertyDescriptor(e))throw new TypeError("Desc must be a Property Descriptor");return!(!c(e,"[[Value]]")&&!c(e,"[[Writable]]"))},IsGenericDescriptor:function(e){if(void 0===e)return!1;if(!this.IsPropertyDescriptor(e))throw new TypeError("Desc must be a Property Descriptor");return!this.IsAccessorDescriptor(e)&&!this.IsDataDescriptor(e)},FromPropertyDescriptor:function(e){if(void 0===e)return e;if(!this.IsPropertyDescriptor(e))throw new TypeError("Desc must be a Property Descriptor");if(this.IsDataDescriptor(e))return{value:e["[[Value]]"],writable:!!e["[[Writable]]"],enumerable:!!e["[[Enumerable]]"],configurable:!!e["[[Configurable]]"]};if(this.IsAccessorDescriptor(e))return{get:e["[[Get]]"],set:e["[[Set]]"],enumerable:!!e["[[Enumerable]]"],configurable:!!e["[[Configurable]]"]};throw new TypeError("FromPropertyDescriptor must be called with a fully populated Property Descriptor")},ToPropertyDescriptor:function(e){if("Object"!==this.Type(e))throw new TypeError("ToPropertyDescriptor requires an object");var t={};if(c(e,"enumerable")&&(t["[[Enumerable]]"]=this.ToBoolean(e.enumerable)),c(e,"configurable")&&(t["[[Configurable]]"]=this.ToBoolean(e.configurable)),c(e,"value")&&(t["[[Value]]"]=e.value),c(e,"writable")&&(t["[[Writable]]"]=this.ToBoolean(e.writable)),c(e,"get")){var n=e.get;if(void 0!==n&&!this.IsCallable(n))throw new TypeError("getter must be a function");t["[[Get]]"]=n}if(c(e,"set")){var r=e.set;if(void 0!==r&&!this.IsCallable(r))throw new TypeError("setter must be a function");t["[[Set]]"]=r}if((c(t,"[[Get]]")||c(t,"[[Set]]"))&&(c(t,"[[Value]]")||c(t,"[[Writable]]")))throw new TypeError("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");return t}};e.exports=l},function(e,t,n){"use strict";var r=Object.prototype.toString,o=n(9),i=n(3),s=function(e,t){var n=t||("[object Date]"===r.call(e)?String:Number);if(n===String||n===Number){var s,u,a=n===String?["toString","valueOf"]:["valueOf","toString"];for(u=0;u<a.length;++u)if(i(e[a[u]])&&(s=e[a[u]](),o(s)))return s;throw new TypeError("No default value")}throw new TypeError("invalid [[DefaultValue]] hint supplied")};e.exports=function(e,t){return o(e)?e:s(e,t)}},function(e,t,n){"use strict";var r=n(2),o=RegExp.prototype.exec,i=Object.getOwnPropertyDescriptor,s=Object.prototype.toString,u="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;e.exports=function(e){if(!e||"object"!=typeof e)return!1;if(!u)return"[object RegExp]"===s.call(e);var t=i(e,"lastIndex");return!(!t||!r(t,"value"))&&function(e){try{var t=e.lastIndex;return e.lastIndex=0,o.call(e),!0}catch(e){return!1}finally{e.lastIndex=t}}(e)}},function(e,t,n){"use strict";var r=n(1),o=n(15),i=n(7);e.exports=function(){r();var e=o();return i(Promise.prototype,{finally:e},{finally:function(){return Promise.prototype.finally!==e}}),e}},function(e,t,n){"use strict";e.exports={createWebSocket:function(e){return new WebSocket(e)},packMessage:null,unpackMessage:null,attachRequestId:null,extractRequestId:null,timeout:0,connectionTimeout:0}},function(e,t,n){"use strict";t.throwIf=function(e,t){if(e)throw new Error(t)}}])});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/contract/Contract.js":
/*!**********************************!*\
  !*** ./src/contract/Contract.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = __webpack_require__(/*! icetea-common */ "./node_modules/icetea-common/dist/browser.js"),
    ecc = _require.ecc,
    TxOp = _require.TxOp;

function _serializeData(address, method, privateKey) {
  var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var formData = {};
  var txData = {
    op: TxOp.CALL_CONTRACT,
    name: method,
    params: params
  };
  formData.from = ecc.toPublicKey(privateKey);
  formData.to = address;
  formData.value = options.value || 0;
  formData.fee = options.fee || 0;
  formData.data = txData;
  return formData;
}

var Contract = function Contract(tweb3, address, privateKey) {
  _classCallCheck(this, Contract);

  // this.iweb3 = iweb3;
  // this.address = address;
  this.methods = new Proxy({}, {
    get: function get(obj, method) {
      return {
        call: function call() {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return tweb3.callReadonlyContractMethod(address, method, params, options);
        },
        sendAsync: function sendAsync(params, options) {
          var tx = _serializeData(address, method, privateKey, params, options);

          return tweb3.sendTransactionAsync(tx, privateKey);
        },
        sendSync: function sendSync(params, options) {
          var tx = _serializeData(address, method, privateKey, params, options);

          return tweb3.sendTransactionSync(tx, privateKey);
        },
        sendCommit: function sendCommit(params, options) {
          var tx = _serializeData(address, method, privateKey, params, options);

          return tweb3.sendTransactionCommit(tx, privateKey);
        }
      };
    },
    set: function set() {
      throw new Error('Cannot change methods.');
    }
  });
};

module.exports = Contract;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(/*! icetea-common */ "./node_modules/icetea-common/dist/browser.js"),
    ecc = _require.ecc,
    TxOp = _require.TxOp,
    ContractMode = _require.ContractMode;

var utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

var _require2 = __webpack_require__(/*! ./utils */ "./src/utils.js"),
    switchEncoding = _require2.switchEncoding,
    decodeTX = _require2.decodeTX,
    decodeEventData = _require2.decodeEventData,
    decodeTags = _require2.decodeTags,
    decodeTxResult = _require2.decodeTxResult;

var Contract = __webpack_require__(/*! ./contract/Contract */ "./src/contract/Contract.js");

var HttpProvider = __webpack_require__(/*! ./providers/HttpProvider */ "./src/providers/HttpProvider.js");

var WebSocketProvider = __webpack_require__(/*! ./providers/WebSocketProvider */ "./src/providers/WebSocketProvider.js");

var signTxData = ecc.signTxData;
exports.utils = utils;
/**
 * The IceTea web client.
 */

exports.IceTeaWeb3 =
/*#__PURE__*/
function () {
  /**
   * Initialize the IceTeaWeb3 instance.
   * @param {string} endpoint tendermint endpoint, e.g. http://localhost:26657
   */
  function IceTeaWeb3(endpoint, options) {
    _classCallCheck(this, IceTeaWeb3);

    this.isWebSocket = !!(endpoint.startsWith('ws://') || endpoint.startsWith('wss://'));

    if (this.isWebSocket) {
      this.rpc = new WebSocketProvider(endpoint, options);
    } else {
      this.rpc = new HttpProvider(endpoint);
    }

    this.utils = {
      decodeEventData: decodeEventData,
      decodeTags: decodeTags,
      decodeTxResult: decodeTxResult
    };
    this.subscriptions = {};
    this.countSubscribeEvent = 0;
  }

  _createClass(IceTeaWeb3, [{
    key: "close",
    value: function close() {
      if (this.isWebSocket) {
        this.rpc.close();
      }
    }
    /**
     * Get account balance.
     * @param {string} address address of the account.
     * @returns {number} account balance.
     */

  }, {
    key: "getBalance",
    value: function getBalance(address) {
      return this.rpc.query('balance', address);
    }
    /**
     * Get a single block.
     * @param {*} options example {height: 10}, skip to get latest block.
     * @returns the tendermint block.
     */

  }, {
    key: "getBlock",
    value: function getBlock(options) {
      return this.rpc.call('block', options);
    }
    /**
     * Get a list of blocks.
     * @param {*} options optional, e.g. {minHeight: 0, maxHeight: 10}
     * @returns {Array} an array of tendermint blocks
     */

  }, {
    key: "getBlocks",
    value: function getBlocks(options) {
      return this.rpc.call('blockchain', options);
    }
    /**
     * Get a single transaction.
     * @param {string} hash required, hex string without '0x'.
     * @param {*} options optional, e.g. {prove: true} to request proof.
     * @return {*} the tendermint transaction.
     */

  }, {
    key: "getTransaction",
    value: function getTransaction(hash, options) {
      if (!hash) {
        throw new Error('hash is required');
      }

      return this.rpc.call('tx', _objectSpread({
        hash: switchEncoding(hash, 'hex', 'base64')
      }, options)).then(decodeTxResult);
    }
    /**
     * Search for transactions met the query specified.
     * @param {string} query required, query based on tendermint indexed tags, e.g. "tx.height>0".
     * @param {*} options additional options, e.g. {prove: true, page: 2, per_page: 20}
     * @returns {Array} Array of tendermint transactions.
     */

  }, {
    key: "searchTransactions",
    value: function searchTransactions(query, options) {
      if (!query) {
        throw new Error('query is required, example "tx.height>0"');
      }

      return this.rpc.call('tx_search', _objectSpread({
        query: query
      }, options));
    }
    /**
     * Search for events emit by contracts.
     * @param {string} eventName the event name, e.g. "Transferred"
     * @param {string} emitter optional, the contract address, or "system"
     * @param {*} conditions required, string or object literal.
     * string example: "tx.height>0 AND someIndexedField CONTAINS 'kkk'".
     * Object example: {fromBlock: 0, toBlock: 100, someIndexedField: "xxx"}.
     * Note that conditions are combined using AND, no support for OR.
     * @param {*} options additional options, e.g. {prove: true, page: 2, per_page: 20}
     * @returns {Array} Array of tendermint transactions containing the event.
     */

  }, {
    key: "getPastEvents",
    value: function getPastEvents(eventName, emitter) {
      var conditions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var options = arguments.length > 3 ? arguments[3] : undefined;
      var query = '';

      if (typeof conditions === 'string') {
        query = conditions;
      } else {
        if (!emitter) {
          emitter = '.';
        } else {
          emitter = '|' + emitter + '.';
        }

        query = Object.keys(conditions).reduce(function (arr, key) {
          var value = conditions[key];

          if (key === 'fromBlock') {
            arr.push("tx.height>".concat(value - 1));
          } else if (key === 'toBlock') {
            arr.push("tx.height<".concat(value + 1));
          } else {
            arr.push("".concat(key, "=").concat(value));
          }

          return arr;
        }, ["EventNames CONTAINS '".concat(emitter).concat(eventName, "|'")]).join(' AND ');
      }

      return this.searchTransactions(query, options);
    }
    /**
     * @return {string[]} Get all deployed smart contracts.
     */

  }, {
    key: "getContracts",
    value: function getContracts() {
      return this.rpc.query('contracts');
    }
    /**
     * Get contract metadata.
     * @param {string} contractAddr the contract address.
     * @returns {string[]} methods and fields array.
     */

  }, {
    key: "getMetadata",
    value: function getMetadata(contractAddr) {
      return this.rpc.query('metadata', contractAddr);
    }
    /**
     * Get account info.
     * @param {string} contractAddr  the contract address.
     * @returns {{balance: number, code: string | Buffer, mode: number, deployedBy: string, system: boolean}} Contract metadata.
     */

  }, {
    key: "getAccountInfo",
    value: function getAccountInfo(contractAddr) {
      return this.rpc.query('account_info', contractAddr);
    }
    /**
     * @private
     */

  }, {
    key: "getDebugState",
    value: function getDebugState() {
      return this.rpc.query('state');
    }
    /**
     * Send a transaction and return immediately.
     * @param {{from: string, to: string, value: number, fee: number, data: Object}} tx the transaction object.
     * @param {string} privateKey private key used to sign
     */

  }, {
    key: "sendTransactionAsync",
    value: function sendTransactionAsync(tx, privateKey) {
      return this.rpc.send('broadcast_tx_async', signTxData(tx, privateKey));
    }
    /**
     * Send a transaction and wait until it reach mempool.
     * @param {{from: string, to: string, value: number, fee: number, data: Object}} tx the transaction object.
     * @param {string} privateKey private key used to sign
     */

  }, {
    key: "sendTransactionSync",
    value: function sendTransactionSync(tx, privateKey) {
      return this.rpc.send('broadcast_tx_sync', signTxData(tx, privateKey));
    }
    /**
     * Send a transaction and wait until it is included in a block.
     * @param {{from: string, to: string, value: number, fee: number, data: Object}} tx the transaction object.
     * @param {string} privateKey private key used to sign
     */

  }, {
    key: "sendTransactionCommit",
    value: function sendTransactionCommit(tx, privateKey) {
      return this.rpc.send('broadcast_tx_commit', signTxData(tx, privateKey)).then(decodeTxResult);
    }
    /**
     * Call a readonly (@view) contract method or field.
     * @param {string} contract required, the contract address.
     * @param {string} method required, method or field name.
     * @param {Array} params method params, if any.
     * @param {*} options optional options, e.g. {from: 'xxx'}
     */

  }, {
    key: "callReadonlyContractMethod",
    value: function callReadonlyContractMethod(contract, method) {
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      return this.rpc.query('invokeView', {
        address: contract,
        name: method,
        params: params,
        options: options
      });
    }
    /**
     * Call a pure (@pure) contract method or field.
     * @param {string} contract required, the contract address.
     * @param {string} method required, method or field name.
     * @param {Array} params method params, if any.
     * @param {*} options optional options, e.g. {from: 'xxx'}
     */

  }, {
    key: "callPureContractMethod",
    value: function callPureContractMethod(contract, method) {
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      return this.rpc.query('invokePure', {
        address: contract,
        name: method,
        params: params,
        options: options
      });
    } // shorthand for transfer, deploy, write, read contract goes here

    /**
       * Subscribes by event (for WebSocket only)
       *
       * @method subscribe
       *
       * @param {MessageEvent} EventName
       */

  }, {
    key: "subscribe",
    value: function subscribe(eventName) {
      var _this = this;

      var conditions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var callback = arguments.length > 2 ? arguments[2] : undefined;
      if (!this.isWebSocket) throw new Error('subscribe for WebSocket only');
      var systemEvent = ['NewBlock', 'NewBlockHeader', 'Tx', 'RoundState', 'NewRound', 'CompleteProposal', 'Vote', 'ValidatorSetUpdates', 'ProposalString'];
      var isSystemEvent = true;
      var nonSystemEventName;
      var space = '';

      if (systemEvent.indexOf(eventName) < 0) {
        isSystemEvent = false;
        nonSystemEventName = eventName;
        this.countSubscribeEvent += 1;
        eventName = 'Tx';
      }

      for (var i = 0; i < this.countSubscribeEvent; i++) {
        space = space + ' ';
      }

      var query = '';

      if (typeof conditions === 'string') {
        query = conditions;
      } else {
        if (typeof conditions === 'function' && typeof callback === 'undefined') {
          callback = conditions;
          conditions = {};
        }

        query = Object.keys(conditions).reduce(function (arr, key) {
          var value = conditions[key];

          if (key === 'fromBlock') {
            arr.push("tx.height>".concat(value - 1));
          } else if (key === 'toBlock') {
            arr.push("tx.height<".concat(value + 1));
          } else {
            arr.push("".concat(key, "=").concat(value));
          }

          return arr;
        }, ["tm.event = ".concat(space, "'").concat(eventName, "'")]).join(' AND ');
      }

      return this.rpc.call('subscribe', {
        'query': query
      }).then(function (result) {
        _this.subscriptions[result.id] = {
          id: result.id,
          subscribeMethod: nonSystemEventName || eventName,
          query: query // console.log('this.subscriptions',this.subscriptions);

        };

        _this.rpc.registerEventListener('onMessage', function (message) {
          var jsonMsg = JSON.parse(message);

          if (result.id && jsonMsg.id.indexOf(result.id) >= 0) {
            if (isSystemEvent) {
              return callback(message);
            } else {
              var events = decodeEventData(jsonMsg.result);
              events.forEach(function (event) {
                if (event.eventName && nonSystemEventName === event.eventName) {
                  var res = {};
                  res.jsonrpc = jsonMsg.jsonrpc;
                  res.id = jsonMsg.id;
                  res.result = event;
                  res.result.query = _this.subscriptions[result.id].query;
                  return callback(JSON.stringify(res), null, 2);
                }
              });
            }
          }
        });

        return result;
      });
    }
    /**
     * Unsubscribes by event (for WebSocket only)
     *
     * @method unsubscribe
     *
     * @param {SubscriptionId} subscriptionId
     */

  }, {
    key: "unsubscribe",
    value: function unsubscribe(subscriptionId) {
      var _this2 = this;

      if (!this.isWebSocket) throw new Error('unsubscribe for WebSocket only');

      if (typeof this.subscriptions[subscriptionId] !== 'undefined') {
        return this.rpc.call('unsubscribe', {
          'query': this.subscriptions[subscriptionId].query
        }).then(function (res) {
          delete _this2.subscriptions[subscriptionId];
          return res;
        });
      }

      return Promise.reject(new Error("Error: Subscription with ID ".concat(subscriptionId, " does not exist.")));
    }
  }, {
    key: "onMessage",
    value: function onMessage(callback) {
      if (!this.isWebSocket) throw new Error('onMessage for WebSocket only');
      this.rpc.registerEventListener('onMessage', callback);
    }
  }, {
    key: "onResponse",
    value: function onResponse(callback) {
      if (!this.isWebSocket) throw new Error('onResponse for WebSocket only');
      this.rpc.registerEventListener('onResponse', callback);
    }
  }, {
    key: "onError",
    value: function onError(callback) {
      if (!this.isWebSocket) throw new Error('onError for WebSocket only');
      this.rpc.registerEventListener('onError', callback);
    }
  }, {
    key: "onClose",
    value: function onClose(callback) {
      if (!this.isWebSocket) throw new Error('onClose for WebSocket only');
      this.rpc.registerEventListener('onClose', callback);
    }
  }, {
    key: "contract",
    value: function contract(address, privateKey) {
      return new Contract(this, address, privateKey);
    }
  }, {
    key: "deploy",
    value: function deploy(mode, src, privateKey) {
      var _this3 = this;

      var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      var tx = this._serializeData(mode, src, privateKey, params, options);

      return this.sendTransactionCommit(tx, privateKey).then(function (res) {
        return _this3.getTransaction(res.hash).then(function (result) {
          if (result.tx_result.code) {
            var err = new Error(result.tx_result.log);
            Object.assign(err, result);
            throw err;
          }

          var data = decodeTX(result.tx); // console.log("data1",data);

          return {
            hash: result.hash,
            height: result.height,
            address: result.tx_result.data,
            data: {
              from: data.from,
              to: result.tx_result.data,
              value: data.value,
              fee: data.fee
            }
          };
        });
      });
    }
  }, {
    key: "_serializeData",
    value: function _serializeData(mode, src, privateKey, params, options) {
      var formData = {};
      var txData = {
        op: TxOp.DEPLOY_CONTRACT,
        mode: mode,
        params: params
      };

      if (mode === ContractMode.JS_DECORATED || mode === ContractMode.JS_RAW) {
        txData.src = switchEncoding(src, 'utf8', 'base64');
      } else {
        txData.src = src;
      }

      formData.from = ecc.toPublicKey(privateKey);
      formData.value = options.value || 0;
      formData.fee = options.fee || 0;
      formData.data = txData;
      return formData;
    }
  }]);

  return IceTeaWeb3;
}();

/***/ }),

/***/ "./src/providers/BaseProvider.js":
/*!***************************************!*\
  !*** ./src/providers/BaseProvider.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(/*! ../utils */ "./src/utils.js"),
    switchEncoding = _require.switchEncoding,
    encodeTX = _require.encodeTX,
    tryParseJson = _require.tryParseJson;

var BaseProvider =
/*#__PURE__*/
function () {
  function BaseProvider() {
    _classCallCheck(this, BaseProvider);
  }

  _createClass(BaseProvider, [{
    key: "sanitizeParams",
    value: function sanitizeParams(params) {
      params = params || {};
      Object.keys(params).forEach(function (k) {
        var v = params[k];

        if (typeof v === 'number') {
          params[k] = String(v);
        }
      });
      return params;
    }
  }, {
    key: "_call",
    value: function _call(method, params) {} // call a jsonrpc, normally to query blockchain (block, tx, validator, consensus, etc.) data

  }, {
    key: "call",
    value: function call(method, params) {
      return this._call(method, params).then(function (resp) {
        if (resp.error) {
          var err = new Error(resp.error.message);
          Object.assign(err, resp.error);
          throw err;
        }

        if (resp.id) resp.result.id = resp.id;
        return resp.result;
      });
    } // query application state (read)

  }, {
    key: "query",
    value: function query(path, data, options) {
      var params = _objectSpread({
        path: path
      }, options);

      if (data) {
        if (typeof data !== 'string') {
          data = JSON.stringify(data);
        }

        params.data = switchEncoding(data, 'utf8', 'hex');
      }

      return this._call('abci_query', params).then(function (resp) {
        if (resp.error) {
          var err = new Error(resp.error.message);
          Object.assign(err, resp.error);
          throw err;
        } // decode query data embeded in info


        var r = resp.result;

        if (r && r.response && r.response.info) {
          r = tryParseJson(r.response.info);
        }

        return r;
      });
    } // send a transaction (write)

  }, {
    key: "send",
    value: function send(method, tx) {
      return this.call(method, {
        // for jsonrpc, encode in 'base64'
        // for query string (REST), encode in 'hex' (or 'utf8' inside quotes)
        tx: encodeTX(tx, 'base64')
      }).then(function (result) {
        if (result.code) {
          var err = new Error(result.log);
          Object.assign(err, result);
          throw err;
        }

        return result;
      });
    }
  }]);

  return BaseProvider;
}();

module.exports = BaseProvider;

/***/ }),

/***/ "./src/providers/HttpProvider.js":
/*!***************************************!*\
  !*** ./src/providers/HttpProvider.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BaseProvider = __webpack_require__(/*! ./BaseProvider */ "./src/providers/BaseProvider.js");

var _fetch = typeof fetch !== 'undefined' ? fetch : __webpack_require__(/*! node-fetch */ "node-fetch");

var HttpProvider =
/*#__PURE__*/
function (_BaseProvider) {
  _inherits(HttpProvider, _BaseProvider);

  function HttpProvider(endpoint) {
    var _this;

    _classCallCheck(this, HttpProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HttpProvider).call(this));
    _this.endpoint = endpoint;
    return _this;
  }

  _createClass(HttpProvider, [{
    key: "_call",
    value: function _call(method, params) {
      var json = {
        jsonrpc: '2.0',
        id: Date.now(),
        method: method,
        params: this.sanitizeParams(params)
      };
      return _fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(json)
      }).then(function (resp) {
        return resp.json();
      });
    }
  }, {
    key: "sanitizeParams",
    value: function sanitizeParams(params) {
      return _get(_getPrototypeOf(HttpProvider.prototype), "sanitizeParams", this).call(this, params);
    }
  }]);

  return HttpProvider;
}(BaseProvider);

module.exports = HttpProvider;

/***/ }),

/***/ "./src/providers/WebSocketProvider.js":
/*!********************************************!*\
  !*** ./src/providers/WebSocketProvider.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var BaseProvider = __webpack_require__(/*! ./BaseProvider */ "./src/providers/BaseProvider.js");

var WebSocketAsPromised = __webpack_require__(/*! websocket-as-promised */ "./node_modules/websocket-as-promised/dist/index.js");

var W3CWebSocket = (typeof WebSocket === "undefined" ? "undefined" : _typeof(WebSocket)) !== undefined ? WebSocket : __webpack_require__(/*! websocket */ "websocket").w3cwebsocket;

var WebSocketProvider =
/*#__PURE__*/
function (_BaseProvider) {
  _inherits(WebSocketProvider, _BaseProvider);

  function WebSocketProvider(endpoint, options) {
    var _this;

    _classCallCheck(this, WebSocketProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WebSocketProvider).call(this));
    _this.endpoint = endpoint;
    _this.options = options || {
      createWebSocket: function createWebSocket(url) {
        return new W3CWebSocket(url);
      },
      packMessage: function packMessage(data) {
        return JSON.stringify(data);
      },
      unpackMessage: function unpackMessage(message) {
        return JSON.parse(message);
      },
      attachRequestId: function attachRequestId(data, requestId) {
        return Object.assign({
          id: requestId
        }, data);
      },
      extractRequestId: function extractRequestId(data) {
        return data.id;
      } // timeout: 10000,

    };
    _this.wsp = new WebSocketAsPromised(_this.endpoint, _this.options);
    return _this;
  }

  _createClass(WebSocketProvider, [{
    key: "close",
    value: function close() {
      this.wsp.close();
    }
  }, {
    key: "registerEventListener",
    value: function registerEventListener(event, callback) {
      this.wsp[event].addListener(callback);
    }
  }, {
    key: "_call",
    value: function _call(method, params) {
      var _this2 = this;

      var json = {
        jsonrpc: '2.0',
        method: method,
        params: this.sanitizeParams(params)
      };

      if (!this.wsp.isOpened) {
        return this.wsp.open().then(function () {
          return _this2.wsp.sendRequest(json);
        });
      }

      return this.wsp.sendRequest(json);
    }
  }, {
    key: "sanitizeParams",
    value: function sanitizeParams(params) {
      return _get(_getPrototypeOf(WebSocketProvider.prototype), "sanitizeParams", this).call(this, params);
    }
  }]);

  return WebSocketProvider;
}(BaseProvider);

module.exports = WebSocketProvider;

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var _this = this;

var _require = __webpack_require__(/*! icetea-common */ "./node_modules/icetea-common/dist/browser.js"),
    codec = _require.codec;

exports.replaceAll = function (text, search, replacement) {
  return text.split(search).join(replacement);
};

exports.tryParseJson = function (p) {
  try {
    return JSON.parse(p);
  } catch (e) {
    // console.log("WARN: ", e);
    return p;
  }
};

exports.tryStringifyJson = function (p) {
  try {
    return JSON.stringify(p);
  } catch (e) {
    // console.log("WARN: ", e);
    return p;
  }
};

exports.encodeTX = function (data) {
  var enc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'base64';
  return codec.encode(data).toString(enc);
};

exports.toBuffer = function (text, enc) {
  return Buffer.from(text, enc);
};

exports.switchEncoding = function (str, from, to) {
  return Buffer.from(str, from).toString(to);
};

exports.decodeTX = function (data) {
  var enc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'base64';
  return codec.decode(exports.toBuffer(data, enc));
};

exports.decodeTags = function (tx) {
  var keepEvents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var EMPTY_RESULT = {};
  var b64Tags = tx;

  if (tx.data && tx.data.value && tx.data.value.TxResult.result.tags) {
    b64Tags = tx.data.value.TxResult.result.tags; // For subscribe
  } else if (tx.tx_result && tx.tx_result.tags) {
    b64Tags = tx.tx_result.tags;
  } else if (tx.deliver_tx && tx.deliver_tx.tags) {
    b64Tags = tx.deliver_tx.tags;
  }

  if (!b64Tags.length) {
    return EMPTY_RESULT;
  }

  var tags = {}; // decode tags

  b64Tags.forEach(function (t) {
    var key = _this.switchEncoding(t.key, 'base64', 'utf8');

    var value = _this.switchEncoding(t.value, 'base64', 'utf8');

    tags[key] = _this.tryParseJson(value);
  });

  if (!keepEvents && tags.EventNames) {
    // remove event-related tags
    var events = tags.EventNames.split('|');
    events.forEach(function (e) {
      if (e) {
        var eventName = e.split('.')[1];
        Object.keys(tags).forEach(function (key) {
          if (key.indexOf(eventName) === 0) {
            delete tags[key];
          }
        });
        delete tags[e];
      }
    });
    delete tags.EventNames;
  }

  return tags;
};

exports.decodeTxResult = function (result) {
  if (!result) return result;
  var name = result.tx_result ? 'tx_result' : 'deliver_tx';

  if (result[name] && result[name].data) {
    result[name].data = _this.tryParseJson(_this.switchEncoding(result[name].data, 'base64', 'utf8'));
  }

  return result;
};

exports.decodeEventData = function (tx) {
  var EMPTY_RESULT = [];

  var tags = _this.decodeTags(tx, true);

  if (!tags.EventNames) {
    return EMPTY_RESULT;
  }

  var events = tags.EventNames.split('|');

  if (!events.length) {
    return EMPTY_RESULT;
  }

  var result = events.reduce(function (r, e) {
    if (e) {
      var parts = e.split('.');
      var emitter = parts[0];
      var eventName = parts[1];
      var eventData = Object.keys(tags).reduce(function (data, key) {
        var prefix = eventName + '.';

        if (key.startsWith(prefix)) {
          var name = key.substr(prefix.length);
          var value = tags[key];
          data[name] = value;
        } else if (key === eventName) {
          Object.assign(data, tags[key]);
        }

        return data;
      }, {});
      r.push({
        emitter: emitter,
        eventName: eventName,
        eventData: eventData
      });
    }

    return r;
  }, []);
  return result;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "node-fetch":
/*!************************!*\
  !*** external "fetch" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = fetch;

/***/ }),

/***/ "websocket":
/*!****************************!*\
  !*** external "WebSocket" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = WebSocket;

/***/ })

/******/ });
});
//# sourceMappingURL=browser.js.map