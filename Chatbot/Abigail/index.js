
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

    let inputQuestion = document.getElementById('questions').value
    let outputQuestion = document.getElementById('outputValue')
    let containerSent = document.getElementById('containerSent')
    let containerReceived = document.getElementById('containerReceived')


    let answer = document.getElementById('outputAnswer')

    outputQuestion.innerText = `${inputQuestion}`

    if(inputQuestion === botMessage[0]) {
        answer.innerText =  'Sou a Abigail'

        containerSent.style.backgroundColor = '#151515'
        containerSent.style.border = '1px solid #CFB776'
        containerReceived.style.backgroundColor = '#0e0e0e'
        containerReceived.style.border = '1px solid #CFB776'
        outputQuestion.innerText = `${inputQuestion}`

    }
    if(inputQuestion === botMessage[1] || inputQuestion === botMessage[2]) {
        containerSent.style.backgroundColor = '#151515'
        containerSent.style.border = '1px solid #CFB776'
        containerReceived.style.backgroundColor = '#0e0e0e'
        containerReceived.style.border = '1px solid #CFB776'
        
        outputQuestion.innerText = `${inputQuestion}?`
        answer.innerText =  'Sou uma ChatBot de teste para fins de auxiliar o usuário.' 

    }
    if(inputQuestion === botMessage[3] || inputQuestion === botMessage[4]) {
        containerSent.style.backgroundColor = '#151515'
        containerSent.style.border = '1px solid #CFB776'
        containerReceived.style.backgroundColor = '#0e0e0e'
        containerReceived.style.border = '1px solid #CFB776'

        outputQuestion.innerText = `Possuem ${inputQuestion}?`
        answer.innerText =  'Atualmente estamos contratando para as seguintes vagas..... '
    }
    if(inputQuestion === botMessage[5] || inputQuestion === botMessage[6]) {
        containerSent.style.backgroundColor = '#151515'
        containerSent.style.border = '1px solid #CFB776'
        containerReceived.style.backgroundColor = '#0e0e0e'
        containerReceived.style.border = '1px solid #CFB776'

        outputQuestion.innerText = ` ${inputQuestion}?`
        answer.innerText =  'Recebemos uma nova proposta de implantação de sistema para melhoria de processos ..... '  //usar randomização
    }
    if(inputQuestion === botMessage[7]) {
        containerSent.style.backgroundColor = ''
        containerSent.style.border = ''
        containerReceived.style.backgroundColor = ''
        containerReceived.style.border = ''
        outputQuestion.innerText = ''
        answer.innerText = ''
    }
    if(inputQuestion !== botMessage[0] && inputQuestion !== botMessage[2] && inputQuestion !== botMessage[3] && inputQuestion !== botMessage[4] && inputQuestion !== botMessage[5] && inputQuestion !== botMessage[6] && inputQuestion !== botMessage[7] ) {
        outputQuestion.innerText = ` ${inputQuestion}`
        answer.innerText =  'Desculpa, mas não entendi o que você falou'
        containerSent.style.backgroundColor = '#151515'
        containerSent.style.border = '1px solid #CFB776'
        containerReceived.style.backgroundColor = '#0e0e0e'
        containerReceived.style.border = '1px solid #CFB776'
    }
}

function selectMessage() {
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

    let select = document.getElementById('options')
    let selectedOption = select.value
    let answer = document.getElementById('outputAnswer')

    let outputOption = document.getElementById('outputValue')
    
    if(selectedOption === 'op1') {
        outputOption = `${botMessage[0]}`
        answer.innerText = 'Sou Abigail'
    }


}



//força o input ser lowerCase
function changeToLowerCase() {
    let input = document.getElementById('questions')
    input.value = input.value.toLowerCase()
    }