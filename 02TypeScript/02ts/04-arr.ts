function sum(...args:number[]):number {
  return args.reduce((pre, cur) => pre + cur);
}