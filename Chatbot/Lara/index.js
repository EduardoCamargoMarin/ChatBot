//Safira alem das principais tarefas de responder questionamento simples, também indica assuntos pertinentes sobre o site

//armazenamento das perguntas feitas ao chatbot

function question() {

    const botMessage = [
        'qual o seu nome',
        'qual a sua função',
        'qual a sua funcao',
        'vagas de emprego',
        'vagas',
        'novidades',
        'me conte as novidades',
        'limpar',
    ]

    let inputQuestion = document.getElementById('question').value
    let outputQuestion = document.getElementById('outputValue')

    let btnOption01 = document.getElementById('option01')
    let btnOption02 = document.getElementById('option02')
    let btnOption03 = document.getElementById('option03')

    let answer = document.getElementById('outputAnswer')

    outputQuestion.innerText = `${inputQuestion}?`

    if(inputQuestion === botMessage[0]) {
        outputQuestion.innerText = `${inputQuestion}?`
        answer.innerText =  'Sou a Lara'
        let btnAction = document.createElement('button')
        btnAction.innerHTML = 'Novidades'

        btnAction.addEventListener('click', ()=> {
            btnOption02.innerHTML = 'Essas são as novidades'
            btnOption03.innerHTML = 'Gostou?'
        })
        
        btnOption01.appendChild(btnAction) // faz aparecer o elemento criado no js

    }
    if(inputQuestion === botMessage[1] || inputQuestion === botMessage[2]) {
        
        outputQuestion.innerText = `${inputQuestion}?`
        answer.innerText =  'Sou uma ChatBot de teste para fins de auxiliar o usuário.' 

    }
    if(inputQuestion === botMessage[3] || inputQuestion === botMessage[4]) {
        outputQuestion.innerText = `Possuem ${inputQuestion}?`
        answer.innerText =  'Atualmente estamos contratando para as seguintes vagas..... '
        let btnAction = document.createElement('button')
        btnAction.innerHTML = 'Saiba mais'
        
        btnOption02.appendChild(btnAction) 
    }
    if(inputQuestion === botMessage[5] || inputQuestion === botMessage[6]) {
        outputQuestion.innerText = ` ${inputQuestion}?`
        answer.innerText =  'Recebemos uma nova proposta de implantação de sistema para melhoria de processos ..... '  //usar randomização
        let btnAction = document.createElement('button')

        btnAction.innerHTML = 'Veja esse item aqui também'
        
        btnOption01.appendChild(btnAction)
    }
    if(inputQuestion === botMessage[7]) {
        outputQuestion.innerText = ''
        answer.innerText = ''
    }
}



//força o input ser lowerCase
function changeToLowerCase() {
    let input = document.getElementById('question')
    input.value = input.value.toLowerCase()
    }