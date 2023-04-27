//Crystal é um chatBot simples com funcionalidade de resposder perguntas especificas sem se preocupar com o case sensitive

//entrada de perguntas e validação
function question() {
    let inputQuestion = document.getElementById('question').value

    let outputQuestion = document.getElementById('outputValue')
    let answer = document.getElementById('outputAnswer')

    outputQuestion.innerText = `${inputQuestion}?`

    if(inputQuestion === 'qual o seu nome') {
        outputQuestion.innerText = `${inputQuestion}?`
        answer.innerText =  'Sou a Crystal'  
    }
    if(inputQuestion === 'qual a sua função' || inputQuestion === 'qual a sua funcao') {
        outputQuestion.innerText = `${inputQuestion}?`
        answer.innerText =  'Sou uma ChatBot de teste para fins de auxiliar o usuário.'  
    }
    if(inputQuestion === 'vagas de emprego' || inputQuestion === 'vagas') {
        outputQuestion.innerText = `Possuem ${inputQuestion}?`
        answer.innerText =  'Atualmente estamos contratando para as seguintes vagas..... '  
    }
    if(inputQuestion === 'novidades' || inputQuestion === 'me conte as novidades') {
        outputQuestion.innerText = ` ${inputQuestion}?`
        answer.innerText =  'Recebemos uma nova proposta de implantação de sistema para melhoria de processos ..... '  //usar randomização
    }

    //O codigo pode se expandir conforme a necessidade de cada chatbot, nesse caso é um modelo simples, com uma interface para similar conversa.


//força o input ser lowerCase
function changeToLowerCase() {
let input = document.getElementById('question')
input.value = input.value.toLowerCase()
}}