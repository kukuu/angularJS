// JavaScript source code

//tests.js
test("Cookie Test", function () {

    if (document.querySelector && window.localStorage && window.addEventListener) {
        ok(document.cookie = "pass=1");
    }
    else {
        ok(document.cookie = "pass=0");
    }
});
