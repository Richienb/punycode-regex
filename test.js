import test from "ava"
import punycodeRegex from "."

test("main", (t) => {
    t.true(punycodeRegex().test("xn--tiq49xqyj"))
    t.true(punycodeRegex().test("XN--TIQ49XQYJ"))
    t.false(punycodeRegex().test("notpunycode"))
})
