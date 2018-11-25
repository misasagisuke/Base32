Base32.js
====

Encode and decode BASE32 in JavaScript.

## Sample
https://rwadada.github.io/base32/test.html

## Usage
 Load library
 ```html
<script src="https://rwadada.github.io/base32/Base32.js"></script>
 ```
 Encode
 ```javascript
 var passphrase = 'hogehoge';
 var base32_str = base32_encode(passphrase);
 ```
 Decode
 ```javascript
 var passphrase = base32_decode(base32_str);
```

## Licence

[MIT](https://github.com/rwadada/base32/blob/master/LICENSE)

## Author

[rwadada](https://github.com/rwadada)
