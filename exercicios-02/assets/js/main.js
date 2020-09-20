// const h1 = document.querySelector(".container h1");
// const data = new Date();

// const getDayWeekText = (diaSemana) => {
//     let diaSemanaTexto;

//     switch (diaSemana) {
//         case 0:
//             diaSemanaTexto = "Domingo";
//             return diaSemanaTexto;
//         case 1:
//             diaSemanaTexto = "Segunda-feira";
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = "Terça-feira";
//             return diaSemanaTexto;
//         case 3:
//             diaSemanaTexto = "Quarta-feira";
//             return diaSemanaTexto;
//         case 4:
//             diaSemanaTexto = "Quinta-feira";
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = "Sexta-feira";
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = "Sábado";
//             return diaSemanaTexto;

//         default:
//             diaSemanaTexto = "";
//             return diaSemanaTexto;
//     }
// };

// const getNumberMonth = (numberMonth) => {
//     let monthName;

//     switch (numberMonth) {
//         case 0:
//             monthName = "Janeiro";
//             return monthName;
//         case 1:
//             monthName = "Fevereiro";
//             return monthName;
//         case 2:
//             monthName = "Março";
//             return monthName;
//         case 3:
//             monthName = "Abril";
//             return monthName;
//         case 4:
//             monthName = "Maio";
//             return monthName;
//         case 5:
//             monthName = "Junho";
//             return monthName;
//         case 6:
//             monthName = "Julho";
//             return monthName;
//         case 7:
//             monthName = "Agosto";
//             return monthName;
//         case 8:
//             monthName = "Setembro";
//             return monthName;
//         case 9:
//             monthName = "Outubro";
//             return monthName;
//         case 10:
//             monthName = "Novembro";
//             return monthName;
//         case 11:
//             monthName = "Dezembro";
//             return monthName;

//         default:
//             monthName = "";
//             return monthName;
//     }
// };

// const createDate = (data) => {
//     const dayWeek = data.getDay();
//     const numberMonth = data.getMonth();

//     const nameDay = getDayWeekText(dayWeek);
//     const nameMonth = getNumberMonth(numberMonth);
//     return `${nameDay}, ${data.getDay()} de ${nameMonth} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()} horas`;
// };

// h1.innerHTML = createDate(data);

const h1 = document.querySelector(".container h1");
const data = new Date();

h1.innerHTML = data.toLocaleString('pt-BR', {
    dateStyle: 'full',
    timeStyle: 'short'
})