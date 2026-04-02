//1, 2, 3 e 4. Manipulação de Objeto Pessoal

// 1. Criando o objeto
let meuPerfil = {
    nome: "Mikheas Rafael",
    idade: 32,
    profissao: "Customer Success & Developer"
};

// 2. Acessando propriedades
console.log(`Nome original: ${meuPerfil.nome}`);

// 3. Atualizando valores
meuPerfil.idade = 33; // Parabéns pelos 33!

// 4. Adicionando nova propriedade
meuPerfil.cidade = "São Paulo";

console.log("Objeto atualizado:", meuPerfil);

//5. Função com Objeto
function montarFrase(pessoa) {
    return `${pessoa.nome} tem ${pessoa.idade} anos e atua como ${pessoa.profissao}.`;
}

console.log(montarFrase(meuPerfil));

//6 e 7. Lista de Pessoas e Filtro
// 6. Array com 3 objetos
let listaPessoas = [
    { nome: "Alex", idade: 30 },
    { nome: "Davi", idade: 10 },
    { nome: "Camila", idade: 35 }
];

// 7. Filtrando maiores de idade
console.log("Maiores de 18 anos:");
listaPessoas.forEach(p => {
    if (p.idade >= 18) {
        console.log(`- ${p.nome}`);
    }
});

//8. Objeto com Método

let usuario = {
    nome: "Mike",
    saudacao: function() {
        // Acessando a propriedade diretamente
        console.log(`Olá, ${this.nome}! Bem-vindo ao sistema.`);
    }
};

usuario.saudacao();

//9. Listando propriedades com for...in
console.log("--- Detalhes do Perfil ---");
for (let chave in meuPerfil) {
    console.log(`${chave}: ${meuPerfil[chave]}`);
}

//10. Cálculo de Compra
let produto = {
    nome: "Teclado Mecânico",
    preco: 250.00,
    quantidade: 2
};

let totalCompra = produto.preco * produto.quantidade;
console.log(`Produto: ${produto.nome}`);
console.log(`Total da compra: R$ ${totalCompra.toFixed(2)}`);