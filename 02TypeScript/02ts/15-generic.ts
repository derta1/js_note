function createNumArray(len:number, val:number):number [] {
  return Array<number>(len).fill(val);
}

function createArray<T>(len:number, val:T):T[] {
  return Array<T>(len).fill(val);
}
console.log(createArray<string>(3, 'John'));