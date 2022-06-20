function memorize(func) {
  let cache = {};
  return (...args) => {
    const args_str = JSON.stringify(args);
    cache[args_str] = cache[args_str] || func(...args);

    return cache[args_str];
  }
}
let log = memorize(a => {
  console.log(a);
  return a;
});
log(1)
log(1)