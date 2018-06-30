"use strict";
// 도형의 넓이를 구하는 함수를 
// 원의 넓이를 구하는 함수 
// 사각형의 넓이를 구하는 함수 
// 사다리꼴의 넓이를 구하는 함수
// 1. 다음처럼 동작하는 원의 넓이를 계산하는 함수
// // calculateCircle(10) 인경우 정상적인 결과를 출력.
// // calculateCircle("10") 인경우 
// > "숫자형타입만 계산이 가능합니다."
// // calculateCircle() 인경우 
// > "최소 한가지 값이 필요합니다"
// // calculateCircle(-1) 인경우 
// > "반지름은 0보다 커야 합니다"
var getArea = function (poly) {
    var areaMethods = {
        circle: function (radius) { return Math.PI * radius * radius; },
        rectangular: function (width, height) { return width * height; },
        trapezoid: function (upper, bottom, height) { return (upper + bottom) * height / 2; },
    };
    return areaMethods[poly];
};
var isOverZero = function (length) { return length > 0; };
var getCircleArea = function (radius) { return Math.PI * radius * radius; };
var getRectangularArea = function (width, height) { return width * height; };
var getTrapezoidArea = function (upper, bottom, height) { return (upper + bottom) * height / 2; };
console.log(getCircleArea(10));
// typeScript의 경우 이경우 컴파일 Error가 난다. 음수인 경우만 체크해주면 된다.
// console.log(getCircleArea("10"));
// console.log(getCircleArea());
console.log(getCircleArea(-1));
