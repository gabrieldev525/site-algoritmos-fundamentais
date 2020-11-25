const isPrime = (n) => {
  let prime = true
  for(let i = 0; i < n; i++) {
    if(n % i == 0 && i != 1 && i != n)
      prime = false
  }

  return prime
}

const contagem = (numero) => numero

module.exports = {
  isPrime,
  contagem
}