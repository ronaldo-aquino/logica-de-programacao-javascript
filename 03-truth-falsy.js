// Valores truth: Se tudo for verdadeiro, vai retornar o último elemento
console.log("Luiz" && "Maria"); // Maria
console.log(0 || false || null || "Ronaldo Aquino" || true); // Ronaldo Aquino

// Valores falsy: Se tiver um valor falsy, para toda operação e retorna o elemento falsy
console.log("Luiz" && "Maria" && 0 && 5); // 0

// Se o usuário selecionar uma cor a cor escolhida vai ser exibida, caso contrário vai ser exibido a cor padrão preto.
const corUsuario = "red";
const corPadrao = corUsuario || "preto";
console.log(corPadrao);
