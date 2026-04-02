//1. Verificação de maioridade

let idade = 34; 
let ehMaiorDeIdade = idade >= 18;

console.log(ehMaiorDeIdade);

// 2. Situação do aluno

let nota1 = 8.0;
let nota2 = 6.5;

let media = (nota1 + nota2) / 2;

let aprovado = media >= 7;

console.log(`Média do aluno: ${media}`);
console.log(`O aluno foi aprovado? ${aprovado}`);

//3. Simulação de troco

let valorCompra = 35.90;
let valorPago = 50;

let troco = valorPago - valorCompra;

console.log(`Valor da compra: R$ ${valorCompra}`);
console.log(`Valor pago: R$ ${valorPago}`);
console.log(`O troco a ser devolvido é: R$ ${troco.toFixed(2)}`);

//4. Validação de senha
let senhaDigitada1 = "minhaSenha123";
let senhaDigitada2 = "minhaSenha123";

let senhasSaoIguais = senhaDigitada1 === senhaDigitada2;

console.log(`As senhas coincidem? ${senhasSaoIguais}`);

//5. Controle de faltas
let totalAulas = 80;
let faltas = 22;

let limiteFaltas = totalAulas * 0.25;

let ultrapassouLimite = faltas > limiteFaltas;

console.log(`Total de aulas: ${totalAulas}`);
let limiteFaltas = totalAulas * 0.25;
console.log(`Limite de faltas (25%): ${limiteFaltas}`);
console.log(`O aluno ultrapassou o limite de faltas? ${ultrapassouLimite}`);

//6. Verificação de login

let temLogin = true;
let temSenha = true;

let podeAcessar = temLogin && temSenha;

console.log(`Usuário tem login? ${temLogin}`);
console.log(`Usuário tem senha? ${temSenha}`);
console.log(`Acesso liberado (Ambos são verdadeiros)? ${podeAcessar}`);

//7. Valor negado
let disponivel = true;

let indisponivel = !disponivel;

console.log(`O produto está disponível? ${disponivel}`);
console.log(`Invertendo a lógica (Indisponível): ${indisponivel}`);

//8. Condições compostas
let num1 = 10;
let num2 = 10;

// 1. Verificamos se o primeiro é par (resto da divisão por 2 é zero)
// 2. Verificamos se o segundo é par
// 3. Verificamos se eles são iguais
let condicaoFinal = (num1 % 2 === 0) && (num2 % 2 === 0) && (num1 === num2);

console.log(`Números escolhidos: ${num1} e ${num2}`);
console.log(`Os dois são pares E são iguais? ${condicaoFinal}`);

//9. Calculadora de porcentagem
let valorBase = 120;
let percentual = 0.15; // 15% expresso em decimal

// Calculamos o resultado multiplicando o valor pelo percentual
let resultado = valorBase * percentual;

console.log(`15% de ${valorBase} é igual a ${resultado}.`);

//10. Ordem de operações
let resultado = 2 + 3 * 5;

console.log(`O resultado de 2 + 3 * 5 é: ${resultado}`);