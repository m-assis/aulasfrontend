//1. Boas-vindas personalizadas

let nome = "Mike Assis"
console.log(`Olá, ${nome}! Seja bem-vindo(a) ao curso de JavaScript!`);

//2. Cálculo de idade

let anoAtual = 2026;
let anoNascimento = 1992; 
let idade = anoAtual - anoNascimento;

console.log(`Você tem ${idade} anos.`);

//3. Mensagem de localização
let cidade = "Taboão da Serra";
let estado = "São Paulo";
let pais = "Brasil";

console.log(`Você está em ${cidade} - ${estado}, ${pais}.`);

//4. Tipo da variável

let temCarteira = true;

console.log(typeof temCarteira);

//5. Simulação bancária simples:
let saldo = 0;
saldo = saldo + 200;
saldo = saldo - 50;

console.log(`Operações realizadas com sucesso! Seu saldo final é de R$ ${saldo}.`);

//6. Média de notas:
let matematica = 8.5;
let portugues = 9.0;
let ciencias = 7.5;

let mediaFinal = (matematica + portugues + ciencias) / 3;

console.log(`Suas notas foram: Matemática (${matematica}), Português (${portugues}) e Ciências (${ciencias}).`);
console.log(`Sua média final é: ${mediaFinal.toFixed(1)}`);

// 7. Reajuste de salário:

let salario = 3000;
let aumento = salario * 0.10;
let novoSalario = salario + aumento;

console.log(`Parabéns pelo seu excelente desempenho! Você recebeu um aumento de 10% (R$ ${aumento}).`);
console.log(`Seu novo salário agora é de R$ ${novoSalario}.`);

//8. Contador de cliques:
let cliques = 0;
cliques = cliques + 1;
cliques++;
cliques++;

console.log(`Botão clicado! O total de cliques agora é: ${cliques}`);

//9. Constantes não podem ser alteradas
const PI = 3.14;

PI = 3.14159;

console.log(PI);

// 10. Concatenando tipos diferentes
let mensagem = "O ano atual é ";
let numero = 2026;

let resultado = mensagem + numero;

console.log(resultado);
console.log(typeof resultado);

