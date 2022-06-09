function powersOfTwo(num) {
    return Number.isInteger(Math.log(num) / Math.log(2)) ? 'true' : 'false';
}

let res= powersOfTwo(67);
console.log(res);