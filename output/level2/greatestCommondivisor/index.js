"use strict";
var gcd = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var min = Math.min.apply(Math, numbers);
    var maxDivisors = 1;
    var _loop_1 = function (i) {
        if (numbers.slice().every(function (v) { return v % i === 0; })) {
            maxDivisors = i;
            return "break";
        }
        else {
            return "continue";
        }
    };
    for (var i = min; i >= 2; i--) {
        var state_1 = _loop_1(i);
        if (state_1 === "break")
            break;
    }
    return maxDivisors;
};
console.log(gcd(4, 8, 12));
