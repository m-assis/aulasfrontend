//1. Verificação de Idade
let idade = 18;

if (idade >= 18) {
    console.log("Pode comprar bebida alcoólica");
} else {
    console.log("Venda proibida para menores de 18 anos");
}

//2. Saudação por Horário
let horaAtual = 13;

if (horaAtual >= 6 && horaAtual < 12) {
    console.log("Bom dia");
} else if (horaAtual >= 12 && horaAtual < 18) {
    console.log("Boa tarde");
} else {
    console.log("Boa noite");
}

//3. Positivo, Negativo ou Zero
let numeroQualquer = 0;

if (numeroQualquer > 0) {
    console.log("Positivo");
} else if (numeroQualquer < 0) {
    console.log("Negativo");
} else {
    console.log("Igual a zero");
}

//4. Conversão de Nota em Conceito
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

//5. Par ou Ímpar (Ternário)
let numero = 10;
console.log(numero % 2 === 0 ? "Par" : "Ímpar");

//6. Menu com Switch-Case
let opcao = 1;

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

//7. Validação de E-mail
let email = "mike@fiap.com.br";

if (email === "") {
    console.log("Preencha o campo de e-mail");
} else {
    console.log("E-mail válido");
}

//8. Validação de Senha
let senha = "123";
let senhaValida = true; // Simulando a verificação prévia

if (senhaValida) {
    console.log("Senha válida");
} else {
    console.log("Senha muito curta");
}

//9. Compra com Saldo
let saldoDisponivel = 500;
let valorCompra = 150;

if (saldoDisponivel >= valorCompra) {
    console.log("Compra aprovada");
} else {
    console.log("Saldo insuficiente");
}

//10. Validação de Formulário
let nome = "Mike";
let emailForm = "contato@mike.dev";
let idadeForm = 33;
let formularioValido = true; 

if (formularioValido) {
    console.log("Formulário enviado com sucesso");
} else {
    console.log("Por favor, preencha todos os campos corretamente");
}