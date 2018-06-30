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

const getArea = (poly: string): any => {
  const areaMethods = {
    circle: (radius: number): number => Math.PI * radius * radius,
    rectangular: (width: number, height: number): number => width * height,
    trapezoid: (upper: number, bottom: number, height: number): number => (upper + bottom) * height / 2,
  };
  return (areaMethods as any)[poly];
};
const _pipe = (f: any, g: any) => (...args: any[]) => g(f(...args));
const pipe = (...fns: void[]) => fns.reduce(_pipe);

const isOverZero = (length: number): boolean => length > 0;

const getCircleArea = (radius: number): number => Math.PI * radius * radius;

const getRectangularArea = (width: number, height: number): number => width * height;
const getTrapezoidArea = (upper: number, bottom: number, height: number): number => (upper + bottom) * height / 2;

console.log(getCircleArea(10));
// typeScript의 경우 이경우 컴파일 Error가 난다. 음수인 경우만 체크해주면 된다.
// console.log(getCircleArea("10"));
// console.log(getCircleArea());
console.log(getCircleArea(-1));

// pipe(isOverZero,getCircleArea)
