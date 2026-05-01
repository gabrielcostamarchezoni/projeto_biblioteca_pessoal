console.log("Biblioteca iniciando...");
const titulos: string[] = [];
const autores: string[] = [];
const anos: number[] = [];
const editora: string[] = [];
const genero: string[] = [];
const paginas: number[] = [];
const lido: boolean[] = [];
const avaliacoes: number[] = [];

titulos.push('O Senhor dos Anéis','Fortaleza Digital','Anjos e Demônios','O Código Da Vinci','O Inferno','A Mala de Hanna');
autores.push('J.R.R. Tolkien','Dan Brown','Dan Brown','Dan Brown','Dan Brown','Karen Levine');
anos.push(1954,1998,2000,2003,2013,2016);
paginas.push(1216,384,736,592,480,320);
editora.push('HarperCollins','Arqueiro','Arqueiro','Arqueiro','Arqueiro','Intrínseca');
genero.push('Fantasia','Ficção Científica','Ficção Científica','Ficção Científica','Ficção Científica','Biografia');
lido.push(false,true,true,true,true,true);
avaliacoes.push(0,4,4,3,4,5);

function exibirBiblioteca(): void {
    console.log("Biblioteca Pessoal:");
    titulos.forEach((titulo, index) => {
        const status = lido[index]
            ? `LIDO (${avaliacoes[index]}/5)`
            : "PENDENTE";
        console.log(`${index + 1}. "${titulo}" - ${autores[index]} (${anos[index]}) - ${paginas[index]} pag - ${status}`);
    });
}

exibirBiblioteca();

function adicionarLivro(titulo: string, autor: string, ano: number, paginasLivro: number): void {
    if (ano <= 0 || paginasLivro <= 0) {
        console.log("Ano e páginas devem ser maiores que zero.");
        return;
    }
    titulos.push(titulo);
    autores.push(autor);
    anos.push(ano);
    paginas.push(paginasLivro);
    editora.push(""); // ou um parâmetro extra
    genero.push("");
    lido.push(false);
    avaliacoes.push(0);
    console.log(`Livro "${titulo}" adicionado à biblioteca.`);
}

function removerLivro(index: number): void {
    if (index >= 0 && index < titulos.length) {
        const removedTitle = titulos[index];
        titulos.splice(index, 1);
        autores.splice(index, 1);
        anos.splice(index, 1);
        paginas.splice(index, 1);
        editora.splice(index, 1);
        genero.splice(index, 1);
        lido.splice(index, 1);
        avaliacoes.splice(index, 1);
        console.log(`Livro "${removedTitle}" removido da biblioteca.`);
    } else {
        console.log("Índice inválido.");
    }
}   

adicionarLivro("Harry Potter", "J.K. Rowling", 1997, 400);
exibirBiblioteca();
removerLivro(6);
exibirBiblioteca();

function buscarPorTitulo(termo: string): number[] {
    return titulos.reduce((indices: number[], titulo, i) => {
        if (titulo.toLowerCase().includes(termo.toLowerCase())) {
            indices.push(i);
        }
        return indices;
    }, []);
}

function listarPorAutor(autor: string): string[] {
    return titulos.filter((_, i) =>
        (autores[i] ?? '').toLowerCase() === autor.toLowerCase()
    ).map((titulo) => titulo);
}

console.log("Busca por 'código':", buscarPorTitulo("código"));
console.log("Livros de Dan Brown:", listarPorAutor("Dan Brown"));





