
//Safira alem das principais tarefas de responder questionamento simples, também indica assuntos pertinentes sobre o site

//armazenamento das perguntas feitas ao chatbot



function selectMessage() {
    let outputQuestion = document.getElementById('outputValue')
    let containerSent = document.getElementById('containerSent')
    let containerReceived = document.getElementById('containerReceived')

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

    
    if(selectedOption === 'op1') {
        containerSent.style.backgroundColor = '#151515'
        containerSent.style.border = '1px solid #CFB776'
        containerReceived.style.backgroundColor = '#0e0e0e'
        containerReceived.style.border = '1px solid #CFB776'
        answer.innerText = '...'
        outputQuestion.innerText = `${botMessage[0]}`
        answer.style.animation = 'send .2s linear infinite'

        setTimeout(() => {
            containerReceived.style.backgroundColor = '#0e0e0e'
            containerReceived.style.border = '1px solid #CFB776'
             answer.innerText = 'Sou Claire, veja mais sobre\n\nTe ajudo em algo mais? '
             
             answer.style.animation = 'none'

        }, 1000);            
    }
    if(selectedOption === 'op2') {
        containerSent.style.backgroundColor = '#151515'
        containerSent.style.border = '1px solid #CFB776'
        containerReceived.style.backgroundColor = '#0e0e0e'
        containerReceived.style.border = '1px solid #CFB776'
        answer.innerText = '...'
        outputQuestion.innerText = `${botMessage[1]}`
        answer.style.animation = 'send .2s linear infinite'
       

        setTimeout(() => {
            containerReceived.style.backgroundColor = '#0e0e0e'
            containerReceived.style.border = '1px solid #CFB776'
             answer.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae accusamus debitis tenetur minus modi quas doloremque, obcaecati culpa neque aut corrupti sit voluptatum laudantium eum dolorem quis rem dolor ipsum.'
             answer.style.animation = 'none'
        }, 1000);
    }


}