const gcd = (...numbers: number[]): number => {
  const min = Math.min(...numbers);
  let maxDivisors = 1;
  for(let i = min; i >= 2; i--){
    if([...numbers].every((v:number):boolean => v % i === 0)) {
      maxDivisors = i;
      break;
    } else {
      continue;
    }
  }
  return maxDivisors;
};



console.log(gcd(4,8,12))