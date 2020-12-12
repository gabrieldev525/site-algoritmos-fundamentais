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