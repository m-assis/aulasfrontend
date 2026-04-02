//1. Contador de 1 a 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//2. Soma de 1 a 100
let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += i; // É o mesmo que: soma = soma + i
}
console.log(`A soma de todos os números de 1 a 100 é igual a: ${soma}`);

//3. Tabuada Personalizada
let numeroTabuada = 7;
console.log(`--- Tabuada do ${numeroTabuada} ---`);

for (let i = 1; i <= 10; i++) {
    console.log(`${numeroTabuada} x ${i} = ${numeroTabuada * i}`);
}

//4. Contagem Regressiva
let contador = 10;
while (contador >= 0) {
    console.log(contador);
    contador--;
}
console.log("Contagem finalizada!");

//5. Receber números até digitar 0
let numeroDigitado;
let totalDigitados = 0;

// Simulação manual (em um sistema real, isso viria de um input)
let simulacaoDeEntradas = [5, 10, 3, 0]; 
let index = 0;

do {
    numeroDigitado = simulacaoDeEntradas[index];
    if (numeroDigitado !== 0) {
        totalDigitados++;
    }
    index++;
} while (numeroDigitado !== 0);

console.log(`Total de números digitados (exceto zero): ${totalDigitados}`);

6. Jogo do Número Secreto
const numeroSecreto = 42;
let tentativas = [10, 42, 5]; // Simulando 3 palpites

for (let i = 0; i < 3; i++) {
    console.log(`Tentativa ${i + 1}: Chute foi ${tentativas[i]}`);
    if (tentativas[i] === numeroSecreto) {
        console.log("Acertou!");
        break; // Para o laço se acertar antes da 3ª tentativa
    } else {
        console.log("Tente novamente");
    }
}

//7. Idade ao Longo dos Anos
let anoNascimento = 1993; // Exemplo baseado na sua idade (33 em 2026)
let anoAtual = 2026;

for (let ano = anoNascimento; ano <= anoAtual; ano++) {
    let idadeNoAno = ano - anoNascimento;
    console.log(`No ano ${ano}, você tinha/terá ${idadeNoAno} anos.`);
}

//8. Listando Números Pares
console.log("Números pares entre 1 e 50:");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//9. Múltiplos de 3 entre 1 e 100
let contadorMultiplos = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        contadorMultiplos++;
    }
}
console.log(`Existem ${contadorMultiplos} números múltiplos de 3 entre 1 e 100.`);

//10. Menu com Repetição
let opcao;
let entradasMenu = [1, 2, 3]; // Simulando a escolha do usuário
let i = 0;

do {
    opcao = entradasMenu[i];
    
    switch (opcao) {
        case 1:
            console.log("Ação: Exibindo Saldo...");
            break;
        case 2:
            console.log("Ação: Realizando Depósito...");
            break;
        case 3:
            console.log("Saindo do sistema...");
            break;
    }
    i++;
} while (opcao !== 3);