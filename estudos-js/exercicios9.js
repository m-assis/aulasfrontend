//1. Destructuring em Objetos
const usuario = {
    nome: "Mike Assis",
    idade: 33,
    email: "mike@assis.dev"
};

const { nome, idade, email } = usuario;
console.log(`Dados extraídos: ${nome}, ${idade} anos, e-mail: ${email}`);

//2. Destructuring em Arrays
const linguagens = ["Java", "React", "TypeScript"];

const [ling1, ling2, ling3] = linguagens;
console.log(`Minha stack atual: ${ling1}, ${ling2} e ${ling3}`);

//3. Rest Operator em Função
function somarTudo(...numeros) {
    let total = 0;
    for (let n of numeros) {
        total += n;
    }
    return total;
}

console.log(`Resultado da soma múltipla: ${somarTudo(10, 20, 30, 40)}`);

//4 e 5. Spread Operator (Arrays e Objetos)
// 4. Combinando Arrays
const frutasVerdes = ["Limão", "Abacate"];
const frutasVermelhas = ["Morango", "Melancia"];
const todasFrutas = [...frutasVerdes, ...frutasVermelhas];
console.log("Salada de frutas:", todasFrutas);

// 5. Combinando Objetos
const dadosPessoais = { nome: "Mikheas" };
const dadosIdade = { idade: 33 };
const perfilCompleto = { ...dadosPessoais, ...dadosIdade, status: "Estudante FIAP" };
console.log("Perfil unificado:", perfilCompleto);

//6. Parâmetro Default
function saudar(nome = "visitante") {
    console.log(`Olá, ${nome}!`);
}

saudar("Alex");
saudar(); // Saída: Olá, visitante!

//7. Trabalhando com Datas
const hoje = new Date();
const dia = hoje.getDate().toString().padStart(2, '0');
const mes = (hoje.getMonth() + 1).toString().padStart(2, '0'); // Meses começam em 0
const ano = hoje.getFullYear();

console.log(`Data formatada: ${dia}/${mes}/${ano}`);


//9 e 10. Função Construtora e Métodos
function Livro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    
    // 10. Método descrever
    this.descrever = function() {
        return `O livro "${this.titulo}" foi escrito por ${this.autor}.`;
    };
}

const livro1 = new Livro("Código Limpo", "Robert C. Martin");
const livro2 = new Livro("Pai Rico, Pai Pobre", "Robert Kiyosaki");

console.log(livro1.descrever());
console.log(livro2.descrever());