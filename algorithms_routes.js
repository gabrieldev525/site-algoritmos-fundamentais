const math = require('./modules/math')

const ALGORITHM_ROUTES = {
  primo: {
    form_type: 'number',
    input_count: 1,
    title: 'Número primo',
    url: '/primo',
    algorithm: math.isPrime,
    format_result: (result) => result ? 'O número é primo' : 'O número não é primo'
  },
  contagem: {
    form_type: 'number',
    input_count: 1,
    title: 'Contagem',
    url: '/contagem',
    algorithm: math.counter
  },
  ordenacao: {
    form_type: 'number_list',
    title: 'Ordenação',
    url: '/ordenacao',
    algorithm: math.quickSort,
    format_result: (result) => result.join(', ')
  },
  fibonacci: {
    form_type: 'number',
    input_count: 1,
    title: 'Fibonacci',
    url: '/fibonacci',
    algorithm: math.fibonacci,
    format_result: (result) => result.join(', ')
  },
  somatorio: {
    form_type: 'number_list',
    title: 'Somatório',
    url: '/somatorio',
    algorithm: math.somatorio,
    format_result: (result) => `O resultado do somatório é: ${result}`
  }
}

module.exports.ALGORITHM_ROUTES = ALGORITHM_ROUTES