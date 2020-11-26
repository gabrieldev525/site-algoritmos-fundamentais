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
    algorithm: math.counter,
    format_result: (result) => `Existem ${result} números de 1 até ${result}`
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
    algorithm: math.sum,
    format_result: (result) => `O resultado do somatório é: ${result}`
  },
  mdc: {
    form_type: 'number',
    input_count: 2,
    title: 'Máximo Divisor Comum',
    url:'/mdc',
    algorithm: math.mdc,
    format_result: (result) => `O resultado do MDC é: ${result}`
  }

}

module.exports.ALGORITHM_ROUTES = ALGORITHM_ROUTES