![Desafio técnico | Javascript Software Developer](https://user-images.githubusercontent.com/61591316/75612456-78f83b00-5b1b-11ea-9bf8-211c6f6f6bf1.png)

# Como rodar os testes do desafio

```sh
# Instala as dependências do projeto
npm install

# Para rodar os testes para todos os desafios
npm run test:all

# Para rodar o teste para um desafio específico
npm run test:challenge:1
```

# Racional dos desafios

Optei sempre por manter a imutabilidade do código, mesmo que pra isso, custasse um pouco mais da performance de execução.

# Racional de cada exercício do desafio

## Challenge 1

Literalmente segui a própria descrição do desafio usando recursão, sem grandes segredos aqui

## Challenge 2

Aqui também não teve muitos segredos, porém optei por montar a lista de relatórios e dela extrair os ids, tudo via objeto.

## Challenge 3

Nesse challenge, chamei as funções de execução nos moldes de uma requisição à API mesmo (apesar de minha mão ter coçado pra ter feito async/await)

## Challenge 4

Aqui isolei a lógica de pegar a medida em uma função que recebe a dimensão (`width` ou `height`) e obtem o valor correspondente e, caso não exista, retorna 0. Nesse caso, se houver + de uma dimensão, pega a primeira válida. Se não tiver uma dimensão específica, retorna 0.

## Challenge 5

Aqui teve um pulo do gato interessante, pois não precisei quebrar a lista de elementos nos grupos para obter a página desejada. Bastou pegar o número da página que eu quero subtraído de 1 (em virtude dos arrays de JS começarem em 0) e multiplicar pela quantidade de elementos na página, assim eu chegava na posição exata do primeiro elemento da página que eu queria, bastando pegar o subarray partindo dessa posição e indo até ela somado da quantidade de elementos por página (essa solução engloba a última página, que nem sempre está com todos os elementos)

PS.: Aqui eu tive um problema, pois os testes não passavam por erro do Jest, em conjunto com diferenças entre a função do challenge e a chamada da função no teste. Alterei o challenge pra não usar mais a lista de posts, bem como corrigi os testes mudando as chamadas do Jest (e aproveitei pra adicionar mais alguns).

## Challenge 6

Aqui não teve muito como fugir, foi necessário construir "todas" as combinações para descobrir quais delas atendem o valor esperado. Para isso, a ideia é partir de um elemento do array base e começar a construir novos arrays, via recursão, cada vez maiores. Se a soma de todos os elementos desse maior que o elemento esperado, paro a recursão e descarto o array. Se a soma for exatamente igual, retorno como uma lista válida e salvo no resultado final. Se a soma for menor, cresço esse array com + 1 elemento, sendo esse novo elemento cada um dos elementos bases do array, o que gera uma complexidade O(2^n) no fim do processamento. Para refinar, filtrei os elementos repetidos do Array usando uma estratégia de Set, adaptada para lidar com array de arrays (link do Stackoverflow no challenge).
