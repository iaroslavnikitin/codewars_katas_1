function highAndLow(numbers) {
  let arr = numbers.split(' ').map(Number);
  return (`${Math.max.apply(Math, arr)} ${Math.min.apply(Math, arr)}`);
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6") === "542 -214");
