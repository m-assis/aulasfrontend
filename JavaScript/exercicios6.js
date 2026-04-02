//1. Função de Saudação
function saudacao() {
    console.log("Olá! Seja bem-vindo(a)!");
}

saudacao(); // Chamando a função

//2. Função com Parâmetros
function apresentarPessoa(nome, idade) {
    console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);
}

apresentarPessoa("Mike", 33);

//3. Cálculo de IMC
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2); // Retorna com 2 casas decimais
}

let meuIMC = calcularIMC(85, 1.80);
console.log(`O resultado do seu IMC é: ${meuIMC}`);

//4. Verificar Aprovação
function verificarAprovacao(nota) {
    return nota >= 7 ? "Aprovado" : "Reprovado";
}

console.log(`Status do aluno: ${verificarAprovacao(8.5)}`);

//5. Número Par ou Ímpar
function ehPar(numero) {
    return numero % 2 === 0;
}

console.log(ehPar(10)); // true
console.log(ehPar(7));  // false

//6. Função Soma

function somar(n1, n2) {
    return n1 + n2;
}

let resultadoSoma = somar(15, 25);
console.log(`A soma dos números é igual a: ${resultadoSoma}`);

//7. Reutilizando Código (Calculadora de Troco)
function calcularTroco(valorCompra, valorPago) {
    return valorPago - valorCompra;
}

let troco = calcularTroco(45.50, 50.00);
console.log(`O valor do seu troco é R$ ${troco.toFixed(2)}`);

//8. Arrow Function
const somarArrow = (n1, n2) => n1 + n2;

console.log(`Soma com Arrow Function: ${somarArrow(10, 20)}`);

//9. Callback Simples
function executarAcao(acao) {
    acao(); // Executa a função recebida
}

executarAcao(() => console.log("Executando ação!"));

//10. Desafio do Quiz

function fazerPergunta(pergunta, respostaCorreta) {
    let respostaUsuario = "Brasília"; // Simulando a entrada
    
    console.log(`Pergunta: ${pergunta}`);
    if (respostaUsuario === respostaCorreta) {
        console.log("Resultado: Resposta correta! ✅");
    } else {
        console.log("Resultado: Resposta errada! ❌");
    }
}

fazerPergunta("Qual a capital do Brasil?", "Brasília");