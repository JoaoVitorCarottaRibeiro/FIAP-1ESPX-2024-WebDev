const btnCriar = document.querySelector('#btnCriar')
// Quando queremos todos os elementos de um array, usamos o querySelectorAll

//Pegando o que o usuário digitou
const inputUsuario = document.querySelector('#inputUsuario')

//Pegando a lista de filmes
const listaFilme = document.querySelector('#listaFilme')

// Fazendo um botão funcionar
// Fazendo com que ele retire o comportamento padrão => (preventDfault())
//Mostrando qual o id onde o usuário clicou => (function.id)
//Mostrando qual o elemento pai => (function.target.parentNode)

btnCriar.addEventListener('click', function(infosDoEvento){
    infosDoEvento.preventDefault();
    
    //adiciona o que o usuario colocou no campo de digitação
    const novoFilme = document.createElement('li')
    novoFilme.innerText = inputUsuario.value;

    listaFilme.append(novoFilme)

    //limpa o campo de digitação
    inputUsuario.value = ""

})

btnCriar.addEventListener('click', function(infosDoEvento){
    infosDoEvento.preventDefault();
    
    //adiciona o que o usuario colocou no campo de digitação + um botão
    const novoFilme = document.createElement('li')
    novoFilme.innerText = inputUsuario.value;

    const btnEditar = document.createElement('button')
    btnEditar.innerText = "Editar"

    novoFilme.append(btnEditar)
    listaFilme.append(novoFilme)

    //limpa o campo de digitação
    inputUsuario.value = ""

})

btnCriar.addEventListener('click', function(infosDoEvento){
    infosDoEvento.preventDefault();
    
    //adiciona o que o usuario colocou no campo de digitação + um botão que muda a cor do texto para vermelho e adiciona um fundo preto
    const novoFilme = document.createElement('li')
    novoFilme.innerText = inputUsuario.value;

    const btnEditar = document.createElement('button')
    btnEditar.innerText = "Editar"
    btnEditar.addEventListener('click', function(){
        novoFilme.style.color = 'red'
        novoFilme.classList.add('fundo-preto')
    })

    novoFilme.append(btnEditar)
    listaFilme.append(novoFilme)

    //limpa o campo de digitação
    inputUsuario.value = ""

})

btnCriar.addEventListener('click', function(infosDoEvento){
    infosDoEvento.preventDefault();
    
    //adiciona o que o usuario colocou no campo de digitação + um botão que muda a cor do texto para vermelho e remove um fundo preto
    const novoFilme = document.createElement('li')
    novoFilme.innerText = inputUsuario.value;

    const btnEditar = document.createElement('button')
    btnEditar.innerText = "Editar"
    btnEditar.addEventListener('click', function(){
        novoFilme.style.color = 'red'
        novoFilme.classList.remove('fundo-preto')
    })

    novoFilme.append(btnEditar)
    listaFilme.append(novoFilme)

    //limpa o campo de digitação
    inputUsuario.value = ""

})
btnCriar.addEventListener('click', function(infosDoEvento){
    infosDoEvento.preventDefault();
    
    //adiciona o que o usuario colocou no campo de digitação + um botão que muda a cor do texto para vermelho e  adiciona e remove um fundo preto assim que clica no botão
    const novoFilme = document.createElement('li')
    novoFilme.innerText = inputUsuario.value;

    const btnEditar = document.createElement('button')
    btnEditar.innerText = "Editar"
    btnEditar.addEventListener('click', function(){
        novoFilme.style.color = 'red'
        novoFilme.classList.toggle('fundo-preto')
    })

    novoFilme.append(btnEditar)
    listaFilme.append(novoFilme)

    //limpa o campo de digitação
    inputUsuario.value = ""

})

btnCriar.addEventListener('click', function(infosDoEvento){
    infosDoEvento.preventDefault();
    
    //adiciona o que o usuario colocou na imagem
    const novoFilme = document.createElement('li')
    novoFilme.innerText = inputUsuario.value;

    const imagem = document.createElement('img')
        imagem.src=""
    })

    novoFilme.append(btnEditar)
    listaFilme.append(novoFilme)

    //limpa o campo de digitação
    inputUsuario.value = ""



