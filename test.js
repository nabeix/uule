const assert = require("assert");
const {uule} = require("./build");

assert((uule("Shibuya,Tokyo,Japan") === "w+CAIQICITU2hpYnV5YSxUb2t5byxKYXBhbg=="));

console.log("OK");
