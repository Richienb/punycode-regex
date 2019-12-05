/**
 * A regex for matching punycode.
 * @example
 * ```
 * const punycodeRegex = require("punycode-regex");
 *
 * punycodeRegex().test("xn--tiq49xqyj")
 * //=> true
 * ```
*/
declare function punycodeRegex(): RegExp;

export = punycodeRegex;
