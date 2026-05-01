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