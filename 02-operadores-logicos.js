// Com o operador && todas as expressões precisam ser verdadeiras para retornar true
const expressaoEnd = true && true && true && false && true;
console.log('Expressão &&', expressaoEnd); //false

// Com o operador || se apenas uma uma expressão for verdadeira já retorna true
const expressaoOr = false || false || true || false || false || false
console.log('Expressão ||', expressaoOr) // true

// O operador ! é responsável por fazer uma negação se for true ele retorna false.
const expressaoNao = !true
console.log('Expressão !', expressaoNao) //false