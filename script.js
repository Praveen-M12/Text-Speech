const messageInput = document.getElementById('message-input');
const chatMessages = document.getElementById('chat-messages');
const robotContainer = document.querySelector('.robot-container');

function addMessage(text, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    if (isUser) {
        messageDiv.classList.add('sent');
    } else {
        messageDiv.classList.add('received');
    }
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
function sendMessage() {
    const message = messageInput.value.trim(); // Trim whitespace
    if (message === '') {
        speakMessage("Please enter your content to speak.");
        return;
    }
    addMessage(message, true);
    messageInput.value = '';
    speakMessage(message);
    showRobot();
}

function speakMessage(message) {
    const speechSynthesis = window.speechSynthesis;
    const speechMessage = new SpeechSynthesisUtterance(message);
    speechSynthesis.speak(speechMessage);
}


function showRobot() {
    robotContainer.style.display = 'block';
    setTimeout(() => {
        robotContainer.style.display = 'none';
    }, 2000); // Hide after 2 seconds
}

document.getElementById('send-button').addEventListener('click', sendMessage);

document.getElementById('message-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
