//1. Lista de Nomes
let nomes = ["Mike", "Alex", "Davi", "Camila", "Henrique"];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

//2. Adicionar e Remover Itens
let frutas = ["Maçã", "Banana", "Morango"];
console.log("Antes:", frutas);

frutas.push("Abacaxi"); // Adiciona ao fim
frutas.shift();         // Remove o primeiro

console.log("Depois:", frutas);

//3. Contar Itens do Array
let cidades = ["São Paulo", "Recife", "Curitiba", "Guarulhos"];
console.log(`O array possui ${cidades.length} cidades cadastradas.`);

//4. Somar todos os Números
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let somaTotal = 0;

for (let i = 0; i < numeros.length; i++) {
    somaTotal += numeros[i];
}
console.log(`A soma total dos números é: ${somaTotal}`);

//5. Média de Notas
let notas = [8.5, 7.0, 6.5, 9.0];
let somaNotas = 0;

for (let nota of notas) {
    somaNotas += nota;
}

let media = somaNotas / notas.length;
console.log(`Média: ${media.toFixed(1)} - ${media >= 7 ? "Aprovado" : "Reprovado"}`);

//6. Mensagens com forEach
let usuarios = ["Felipe", "Maria Clara", "Carlos", "Gabi"];

usuarios.forEach(nome => {
    console.log(`Olá, ${nome}!`);
});

//7. Descontos com map
let precos = [100, 250, 50, 120];
let precosComDesconto = precos.map(preco => preco * 0.9);

console.log("Preços originais:", precos);
console.log("Preços com 10% de desconto:", precosComDesconto);

//8. Filtrar Valores Altos
let idades = [15, 22, 17, 33, 12, 45];
let maioresDeIdade = idades.filter(idade => idade >= 18);

console.log("Apenas maiores de 18 anos:", maioresDeIdade);

//9. Simulando Carrinho de Compras
let carrinho = [45.90, 12.50, 100.00, 30.00];
let totalCompra = 0;

for (let valor of carrinho) {
    totalCompra += valor;
}

let valorFinal = totalCompra * 0.8; // Aplicando 20% de desconto
console.log(`Total original: R$ ${totalCompra.toFixed(2)}`);
console.log(`Total com 20% de desconto: R$ ${valorFinal.toFixed(2)}`);

//10. Lista de Tarefas (To-Do List)

let tarefas = ["Estudar Java", "Fazer deploy no GitHub", "Revisar Figma", "Comprar café"];
let concluidas = [true, false, true, false];

// Filtrando apenas as que NÃO foram concluídas (valor false)
let tarefasPendentes = tarefas.filter((tarefa, index) => {
    return !concluidas[index];
});

console.log("Tarefas pendentes:", tarefasPendentes);