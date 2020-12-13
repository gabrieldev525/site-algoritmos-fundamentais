const math = require('./math')

// Unit test to MDC
test('MDC de 5 e 9 é igual a 1', () => {
  expect(math.mdc(5, 9)).toBe(1)
})

test('MDC de 25 e 5 é igual a 5', () => {
  expect(math.mdc(25, 5)).toBe(5)
})

test('MDC com valores passados como string', () => {
  expect(math.mdc('25', '5')).toBe(5)
})

// Unit test to sum
test('O somatorio de 5 e 10 é igual a 15', () =>{
  expect(math.sum([10, 5])).toBe(15)
})

test('O somatório de 5, 10, 15 e 20 é igual a 50', () => {
  expect(math.sum([5, 10, 15, 20])).toBe(50)
})

// Unit test to prime number
test('O número 7 é primo!', () => {
  expect(math.isPrime(7)).toBe(true)
})

test('O número 10 não é primo!', () => {
  expect(math.isPrime(10)).toBe(false)
})

// Unit test to Quick sort
test('Ordenando lista de valores inteiros', () => {
  const unordered_values = [5, 25, 7, 9, 45, -5, 36]
  const ordered_values = [-5, 5, 7, 9, 25, 36, 45]

  expect(math.quickSort(unordered_values)).toStrictEqual(ordered_values)
})

test('Ordenando lista de valores com string e inteiros', () => {
  const unordered_values = [5, '25', 7, 9, '45', '-5', 36]
  const ordered_values = [-5, 5, 7, 9, 25, 36, 45]

  expect(math.quickSort(unordered_values)).toStrictEqual(ordered_values)
})

// Unit test to fibonacci
test('Fibonnaci de 5', () => {
  const expect_result = [0, 1, 1, 2, 3, 5]
  expect(math.fibonacci(5)).toStrictEqual(expect_result)
})

test('Fibonnaci de um número negativo', () => {
  expect(math.fibonacci(-3)).toStrictEqual([])
})

test('Fibonnaci de 15', () => {
  const expect_result = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]
  expect(math.fibonacci(15)).toStrictEqual(expect_result)
})

// Unit test to counter
test('Existem 30 números de 1 a 30!', () => {
  expect(math.counter(30)).toBe(30)
})

test('Contagem de valor passado como string', () => {
  expect(math.counter('50')).toBe(50)
})

test('Contagem de -4 é igual a 4', () => {
  expect(math.counter(-4)).toBe(4)
})