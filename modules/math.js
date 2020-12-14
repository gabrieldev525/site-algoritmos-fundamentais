/**
 * Verify if a number is prime
 * @param {number} number - the number to check if it's prime
 */
const isPrime = (number) => {
  let prime = true
  for(let i = 0; i < number; i++) {
    if(number % i == 0 && i != 1 && i != number)
      prime = false
  }

  return prime
}

/**
 * @param {number} number - the number to finish the count
 */
const counter = (number) => Math.abs(number)

/**
 * Sort a list of number
 *
 * @param {array} array - the list of number that will be sorted in asc mode
 */
const quickSort = (array) => {
  if(array.length <= 1)
    return array

  let left = []
  let right = []
  let subarray = []
  let pivo = parseFloat(array.pop())

  for(let i = 0; i < array.length; i++) {
    if(parseFloat(array[i]) <= pivo)
      left.push(parseFloat(array[i]))
    else
      right.push(parseFloat(array[i]))
  }

  return subarray.concat(quickSort(left), pivo, quickSort(right))
}

/**
 *
 * @param {number} n - The number that'll be used to calculate fibonacci
 */
const fibonacci = (n) => {
  let prenultimo = null
  let ultimo = null
  let final = []
  for(let i = 0; i <= n; i++) {
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

/**
 *
 * @param {number} numbers_list - list of numbers to sum
 */
const sum = (numbers_list) => {
  var sum = 0;

  for(let i = 0; i < numbers_list.length; i++) {
      sum += parseFloat(numbers_list[i]);
  }
  return sum;
}

/**
 *
 * @param {number} m - the first number of mdc
 * @param {number} n - the second number of mdc
 */
const mdc = (m, n) => {
  var candidate = 0;
  m = parseInt(m);
  n = parseInt(n);

  candidate = Math.min(m, n);

  while(m % candidate != 0 || n % candidate != 0)
  {
      candidate--;
  }

  return candidate;
}


module.exports = {
  sum,
  isPrime,
  counter,
  quickSort,
  fibonacci,
  mdc
}