//1. Verificação de idade para compra de bebida
let idade = 20;

if (idade >= 18) {
    console.log("Pode comprar bebida alcoólica");
} else {
    console.log("Venda proibida para menores de 18 anos");
}

//2. Saudação de acordo com a hora
let horaAtual = 14;

if (horaAtual >= 6 && horaAtual < 12) {
    console.log("Bom dia");
} else if (horaAtual >= 12 && horaAtual < 18) {
    console.log("Boa tarde");
} else {
    console.log("Boa noite");
}

//3. Verificação de número positivo ou negativo
let numeroQualquer = -5;

if (numeroQualquer > 0) {
    console.log("Positivo");
} else if (numeroQualquer < 0) {
    console.log("Negativo");
} else {
    console.log("Igual a zero");
}

//4. Conversão de nota em conceito
let nota = 8.5;

if (nota >= 9) {
    console.log("Conceito A");
} else if (nota >= 8) {
    console.log("Conceito B");
} else if (nota >= 6) {
    console.log("Conceito C");
} else if (nota >= 4) {
    console.log("Conceito D");
} else {
    console.log("Conceito E");
}

//5. Número par ou ímpar com ternário
let numero = 7;
let resultado = (numero % 2 === 0) ? "Par" : "Ímpar";
console.log(resultado);

//6. Menu com switch-case
let opcao = 2;

switch (opcao) {
    case 1:
        console.log("Cadastrar");
        break;
    case 2:
        console.log("Listar");
        break;
    case 3:
        console.log("Sair");
        break;
    default:
        console.log("Opção inválida");
}

//7. Validação de campo obrigatório
let email = "";

if (email === "") {
    console.log("Preencha o campo de e-mail");
} else {
    console.log("E-mail válido");
}

//8. Validação de senha segura
let senha = "123";
let senhaValida = false; // Definido manualmente para teste

if (senhaValida) {
    console.log("Senha válida");
} else {
    console.log("Senha muito curta");
}

//9. Compra com saldo

let saldoDisponivel = 100.00;
let valorCompra = 150.00;

if (saldoDisponivel >= valorCompra) {
    console.log("Compra aprovada");
} else {
    console.log("Saldo insuficiente");
}

//10. Validação de formulário completo
let nome = "Mike";
let emailForm = "mike@assis.com";
let idadeForm = 33;
let formularioValido = true; 

if (formularioValido) {
    console.log("Formulário enviado com sucesso");
} else {
    console.log("Por favor, preencha todos os campos corretamente");
}