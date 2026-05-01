Biblioteca Pessoal

Projeto Integrador da disciplina de Linguagem de Programação — desenvolvido em TypeScript, consolida os conceitos estudados até a Aula 06.
Sobre o projeto
Aplicação de console que gerencia uma coleção de livros pessoais utilizando arrays paralelos como estrutura de dados. Cada livro é representado por índices sincronizados entre os arrays titulos, autores, anos, paginas, lido e avaliacoes.

Funcionalidades:
Exibir todos os livros da biblioteca
Adicionar novos livros
Remover livros pelo título
Buscar livros por título ou autor
Marcar livros como lidos com avaliação de 1 a 5
Listar livros lidos e pendentes separadamente
Estatísticas: média de avaliações, percentual de lidos e total de páginas lidas
Classificar livros por década de publicação

Usei:
TypeScript
Node.js

Como executar
Pré-requisitos: Node.js instalado na máquina.
bash# Clone o repositório
git clone https://github.com/gabrielcostamarchezoni/projeto_biblioteca_pessoal.git

# Entre na pasta
cd biblioteca-pessoal

# Instale as dependências
npm install

# Execute o projeto
npm run dev
Estrutura do projeto
biblioteca-pessoal/
src/
index.ts
dist/
.gitignore
package.json
tsconfig.json
README.md

Conceitos aplicados:
Arrays paralelos e manipulação com forEach, map, filter e reduce
Funções decompostas e reutilizáveis
Tipagem estática com TypeScript (modo strict)
Versionamento com Git e GitHub