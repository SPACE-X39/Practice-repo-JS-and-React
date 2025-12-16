function sendMessage() {
    var userInput = document.getElementById("userInput");
    var message = userInput.value;
    if (message.trim() === "") return;

    var chatBox = document.getElementById("chatBox");
    var userMessageElement = document.createElement("div");
    userMessageElement.className = "message user";
    userMessageElement.textContent = "You: " + message;
    chatBox.appendChild(userMessageElement);
    userInput.value = "";

    // Simulate bot response (replace with actual bot logic)
    setTimeout(function() {
        var botMessage = getBotResponse(message);
        var botMessageElement = document.createElement("div");
        botMessageElement.className = "message bot";
        botMessageElement.textContent = "Bot: " + botMessage;
        chatBox.appendChild(botMessageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
}

function getBotResponse(userMessage) {
    // Here you can implement your bot logic, such as language translation, NLP, etc.
    // For this simple example, let's just echo back the user's message
    return userMessage;
}
