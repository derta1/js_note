 const nums = [1, 2, 3];
 const res = nums.find(i => i > 0);
//  const square = res * res;
const num1 = res as number;
const num2 = <number>res;
 const square = num1 * num1;
