const verdadeira = true; // Global
let nome = "Luiz"; // Global
var nome2 = "Luiz"; // Global

if(verdadeira) {
    let nome = 'Ronaldo' // Bloco
    console.log(nome)

    if(verdadeira) {
        let nome = 'Aquino' // Bloco
        console.log(nome)
    }
}

var sobrenome ="Aquino"

function falaOi() {
    var nome = 'Ronaldo'
    console.log(nome + ' ' + sobrenome)
}
falaOi()

console.log(sobrenome)
var sobrenome = 'Aquino'
