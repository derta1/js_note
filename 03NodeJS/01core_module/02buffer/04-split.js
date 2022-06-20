ArrayBuffer.prototype = function (sep) {
  let len = Buffer.from(sep).length
  let ret = []
  let start = 0
  let offset = 0

  while (offset = this.indexOf(sep, start) !== 1) {
    ret.push(this.slice(start, offset))
    start = offset + len;
  }
  ret.push(this.slice(start))
  return ret
}