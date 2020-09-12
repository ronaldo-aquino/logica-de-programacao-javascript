// Operadores de comparação sempre vão retornar um valor booleano true / false

// Operador maior que
// Compara se x é maior que y
console.log("10 é maior que 5?", 10 > 5); // true

const comparacaoMaior = 10 > 5;
console.log("10 é maior que 5?", comparacaoMaior); // true

// Operador maior igual
// Compara se x é maior ou igual y
console.log("10 é maior ou igual a 5?", 10 >= 5); // true

const comparacaoMaiorIgual = 10 >= 5;
console.log("10 é maior ou igual a 5?", comparacaoMaiorIgual); // true

// Operador menor que
// Compara se x é menor que y
console.log("10 é menor que 5?", 10 < 5); // false

const comparacaoMenor = 10 < 5;
console.log("10 é menor que 5?", comparacaoMenor); // false

// Operador menor igual
// Compara se x é menor ou igual que y
console.log("10 é menor ou igual a 5?", 10 <= 5); // false

const comparacaoMenorIgual = 10 <= 5;
console.log("10 é menor ou igual a 5?", comparacaoMenorIgual); // false

// Operador de igualdade
// Compara se x é igual a y, mas não compara o tipo de dado
console.log("10 é igual a 10?", 10 == 10); // true
console.log("10 é igual a 10 string?", 10 == "10"); // true

const comparacaoIgualdade = 10 == "10";
console.log("10 é igual a 10 string?", comparacaoIgualdade); // true

// Operador de igualdade restrita
// Compara se x é igual a y, mas também compara o tipo de dado
console.log("10 é igual a 10?", 10 === 10); // true
console.log("10 é igual a 10 string", 10 === "10"); // false

const comparacaoIgualdadeRestrita = 10 === "10";
console.log("10 é igual a 10 string?", comparacaoIgualdadeRestrita); // fasle

// Operador de diferente
// Compara se x é diferente a y, mas não compara o tipo de dado
console.log("10 é diferente de 10?", 10 != 10); // false
console.log("10 é diferente de 10 string?", 10 != "10"); // false

const comparacaoDiferente = 10 != "10";
console.log("10 é diferente de 10 string?", comparacaoDiferente); // false

// Operador de igualdade restrita
// Compara se x é diferente a y, mas também compara o tipo de dado
console.log("10 é diferente de 10?", 10 !== 10); // false
console.log("10 é diferente de 10 string?", 10 !== "10"); // true

const comparacaoDiferenteRestrito = 10 !== "10";
console.log("10 é diferente de 10 string?", comparacaoDiferenteRestrito); // true
