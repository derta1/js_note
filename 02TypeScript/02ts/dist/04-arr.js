"use strict";
function sum(...args) {
    return args.reduce((pre, cur) => pre + cur);
}
