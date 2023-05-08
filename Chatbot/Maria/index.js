// Mensagens predefinidas do chatbot
const botMessages = ['Olá! Eu sou o Chatbot. Como posso ajudar?']
  

  const chatBody = document.getElementById('chat-body')
  const chatInput = document.getElementById('chat-input')
  
  // Exibe a mensagem no chat-body
  function displayMessage(message, sender) {

    const div = document.createElement('div')

    div.innerText = message
    div.classList.add('chat-message')

    if (sender === 'bot') {
      div.classList.add('received')
    } 
    else {
      div.classList.add('sent')
    }

    chatBody.appendChild(div) // aparece a mensagem na tela
    chatBody.scrollTop = chatBody.scrollHeight // condição para fazer o scroll
  }
  
  // envio da mensagem
  function sendMessage() {

    const message = chatInput.value

    displayMessage(message, 'user')
    chatInput.value = ''
  
    // Tempo de resposta do chatbot
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * botMessages.length)
      const botMessage = botMessages[randomIndex]
      displayMessage(botMessage, 'bot')
    }, 1000)



  }
  
  // Exibe a primeira mensagem do chatbot assim que a página é carregada
  displayMessage(botMessages[0], 'bot')
  