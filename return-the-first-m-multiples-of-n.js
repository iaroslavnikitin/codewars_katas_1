function multiples(m, n) {
  let result = [];

  for(let i = 1; i <= m; i++){
    result.push(n * i);
  }
  return result
}

console.log(multiples(3, 5) === [5, 10, 15]);