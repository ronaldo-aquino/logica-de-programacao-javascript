/*

    Entre 0 - 11 - Bom dia
    Entre 12 - 17 - Boa tarde
    Entre 18 - 23 - Boa noite

*/

const hora = 13;

if (hora <= 11) {
    console.log("Bom dia!");
} else if (hora <= 17) {
    console.log("Boa tarde!");
} else if (hora <= 23) {
    console.log("Boa noite");
} else {
    console.log("Hora invalida");
}

/*

    Crie um algorítimo que tenha uma variável chamada tenhoGranda e coloque no
     console.log que você só vai sair de casa caso a variável tenhoGranha seja verdadeira

*/

const tenhoGrana = true;

if(tenhoGrana) {
    console.log('Vou sair de casa!')
} else {
    console.log('Não vou sair de casa!')
}

/*************************/
/*************************/

/*

    // Se (numero >= 0 && numero <=5) ocorrer, faça isso {código}
    // Se não faça isso {código}

*/

const numero = 12

if(1 === 1) {
    console.log('LITERAL')
}

if ( numero >= 0 && numero <= 5) {
    console.log('O número  está entre 0 e 5.')
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8')
} else if (numero >= 9 && numero <= 11) {
    console.log('O número está entre 9 e 11')
} else {
    console.log('O número não está entre 0 e 11')
}
