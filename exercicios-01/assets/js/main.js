const form = document.getElementById("form");

const calcularImc = (e) => {
    e.preventDefault();
    const pesoInput = document.getElementById("peso");
    const alturaInput = document.getElementById("altura");

    const peso = Number(pesoInput.value);
    const altura = Number(alturaInput.value);

    if (!peso) {
        setResultado("Peso Inválido", false);
        return;
    }

    if (!altura) {
        setResultado("Altura Inválida", false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc =  getNivelImc(imc)
    
    const msg = `Seu IMC é ${imc} (${nivelImc})`

    setResultado(msg, true)

    pesoInput.value = '';
    alturaInput.value = '';

};

const getNivelImc = (imc) => {
    const nivel = [
        "Abaixo do peso",
        "Peso normal",
        "Sobrepeso",
        "Obesidade grau 1",
        "Obesidade grau 2",
        "Obesidade grau 3",
    ];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    
    return nivel[0];
};

const getImc = (peso, altura) => {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
};

const criaP = () => {
    const p = document.createElement("p");
    return p;
};

const setResultado = (msg, isValid) => {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
};

form.addEventListener("submit", calcularImc);
