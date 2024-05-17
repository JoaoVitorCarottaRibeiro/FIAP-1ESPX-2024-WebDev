// adiciona um elemento no final do array
const pessoas = ["joao", "vitor", "carotta"]
pessoas.push("ribeiro")

//Remove o último elemento do array
pessoas.pop()

//Adiciona um elemento no inicio do array
pessoas.unshift("ribeiro")

//Remove o primeiro elemento do array
pessoas.shift()

//Atualiza (substitui) o elemento/valor do array
pessoas[1] = "ribeiro"
console.log(pessoas)

//for somente para arrays e roda o nome das pessoas dentro do array
pessoas.forEach(
    function rodaArray(usuario){
        console.log(usuario)
    }
)

//adiciona uma string ao usuario
pessoas.forEach(
    function rodaArray(usuario){
        console.log(usuario + "tri campeão mundial")
    }
)

//Deixa todos os caracteres minúsculos
pessoas.forEach(
    function rodaArray(usuario){
        console.log(usuario.toLocaleLowerCase())
    }
)

//Mesma coisa que o anterior, porém em apenas uma linha de código
pessoas.forEach(usuario => console.log(usuario.toLocaleLowerCase()))

//Função que não recebe nome
pessoas.forEach(
    (usuario) => {
        console.log(usuario.toLocaleLowerCase())
    }
)

// O map te devolve um novo array (como se ele te devolvesse uma cópia do seu array original)
function modificarArray(){
    return pessoas.map(usuario => usuario.toLocaleLowerCase())
}
console.log(modificarArray());

//Array para dobrar os valores do array
const numeros = [10, 20, 30];
function multiplicar(){
    return numeros.map(novosnumeros => novosnumeros * 2)
}
console.log(multiplicar())

//Array para deixar os valores em caixa alta
const palavras = ["salve", "o", "tricolor", "paulista"]
function caixaAlta(){
    return palavras.map(palavraCA => palavraCA.toLocaleUpperCase())
}
console.log(caixaAlta())

//Objetos são simbolizados pelas chaves e são as características de um elemento
const filmes = [{
    nome: "ToyStory",
    diretor: "Pelé",
    ano: 2005
},{
    nome: "Vingadores",
    diretor: "Gordão da XJ",
    ano: 2019
},{
    nome: "Coringa",
    diretor: "Bruce Wane",
    ano: 2018
}]

//Acessando a informação desejda, precisamos do filme com o "."
console.log(filmes[0].nome) //Nesse caso vai pegar o nome do filme no índice 0

//Array com todos os filmes usando o map
const filmesmodificados = 
filmes.map(filme => filme.nome)
console.log(filmesmodificados)

//Array com especificação usando o filter
const filmesModificados =
filmes.filter(filme => filme.ano > 2000)
console.log(filmesModificados)