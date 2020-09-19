// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia);

// const data = new Date(2019, 3); // ano, mês, dis, hora, minuto, segundo, milisegundo
// console.log(data.toString());

// const data = new Date("2019-04-20 20:20:59");
// console.log(data.toString());
// console.log('Dia', data.getDate())
// console.log('Mês', data.getMonth())
// console.log('Ano', data.getFullYear())
// console.log('Hora', data.getHours())
// console.log('Minuto', data.getMinutes())
// console.log('Segundo', data.getSeconds())
// console.log('Milisegundo', data.getMilliseconds())
// console.log('Dia da semana', data.getDay())

const zeroaEsquerda = (num) => {
    return num >= 10 ? num : `0${num}`
}

const formataData = (data) => {
    const Dia = zeroaEsquerda(data.getDate());
    const Mês = zeroaEsquerda(data.getMonth() + 1);
    const Ano = zeroaEsquerda(data.getFullYear());
    const Hora = zeroaEsquerda(data.getHours());
    const Minuto = zeroaEsquerda(data.getMinutes());
    const Segundo = zeroaEsquerda(data.getSeconds());

    return `${Dia}/${Mês}/${Ano} ${Hora}:${Minuto}:${Segundo}`;
};

const data = new Date();

const dataBrasil = formataData(data);
console.log(dataBrasil);
