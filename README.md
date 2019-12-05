# Punycode Regex [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/punycode-regex/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/punycode-regex)

A regex for matching punycode.

[![NPM Badge](https://nodei.co/npm/punycode-regex.png)](https://npmjs.com/package/punycode-regex)

## Install

```sh
npm install punycode-regex
```

## Usage

```js
const punycodeRegex = require("punycode-regex");

punycodeRegex().test("xn--tiq49xqyj")
//=> true
```

## API

### punycodeRegex()
