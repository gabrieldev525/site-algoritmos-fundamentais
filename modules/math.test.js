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