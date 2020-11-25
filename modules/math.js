const isPrime = (n) => {
  let prime = true
  for(let i = 0; i < n; i++) {
    if(n % i == 0 && i != 1 && i != n)
      prime = false
  }

  return prime
}

const contagem = (numero) => numero

const quickSort = (array) => {
  if(array.length <= 1)
    return array

  let left = []
  let right = []
  let subarray = []
  let pivo = array.pop()

  for(let i = 0; i < array.length; i++) {
    if(array[i] <= pivo)
      left.push(array[i])
    else
      right.push(array[i])
  }

  return subarray.concat(quickSort(left), pivo, quickSort(right))
}

const fibonacci = (n) => {
  let prenultimo = null
  let ultimo = null
  let final = []
  for(let i = 0; i < n; i++) {
    if(prenultimo == null) {
      prenultimo = i
      final.push(prenultimo)
    } else if(ultimo == null) {
      ultimo = i
      final.push(ultimo)
    } else {
      let soma = prenultimo + ultimo
      prenultimo = ultimo
      ultimo = soma
      final.push(soma)
    }
  }

  return final
}

module.exports = {
  isPrime,
  contagem,
  quickSort,
  fibonacci
}