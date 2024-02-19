console.log("RUnning")

const inputSubmitButton = document.getElementById("chat-input-submit");
const dialog_box = document.getElementById("dialog-box");

const chatbot = document.getElementById("chatbot");
const chatCircle = document.getElementById("chat-circle");

const settingsButton = document.getElementById("settings-button");
const settingsMenu = document.getElementById("settings-menu");

const chatBody = document.getElementById("chat-body");
const chatInput = document.getElementById("chat-input");

const quickReplies = document.getElementById("quick-replies");

quickReplies.addEventListener("click", (e) => {
    if (e.target.className == "quick-reply") {
        createMessage("user", e.target.textContent);
    }
}
);


function isBlank(str) {
    return !str.trim();
  }

  function setStateOfSettingsMenu() {
    if (settingsMenu.classList.contains("visible")) {
        settingsMenu.classList.remove("visible")
    }else {
        settingsMenu.classList.add("visible")
    }
  }


function ChatInput(e) {

    if (!isBlank(e.target.value) > 0 && inputSubmitButton.classList.contains("invisible")) {
        inputSubmitButton.classList.replace("invisible", "visible")
    } else if (isBlank(e.target.value)) {
        inputSubmitButton.classList.replace("visible", "invisible")

    }
}

function ChatInputEnterKey(e) {
    if (e.key == "Enter" && !e.shiftKey) {
        e.preventDefault();

        createMessage("user", e.target.value);

        chatInput.value = "";
    }
}

function createMessage(entity, message ) {

    const messageDiv = document.createElement("div");

    messageDiv.className = `temp-message ${entity}-message`;

    messageDiv.textContent = message;
    
    chatBody.appendChild(messageDiv);
    
    chatBody.scrollTop = chatBody.scrollHeight;
    
    setTimeout(function() {
        messageDiv.classList.replace("temp-message", "message");
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 300);
    

    entity == "user" ? getResponse(message) : null;
    
    return messageDiv;
}

function getResponse(message) {
    let messageDiv;
    const botMessage = "Bot Reply to: " + message;

    setTimeout(function() {
         messageDiv = createMessage("bot", "...");
    }, 700);


    setTimeout(function() {
        chatBody.removeChild(messageDiv);
        createMessage("bot", botMessage); 
      }, 3000);

      
}


function CloseChat(event) {
    console.log(event)
    dialog_box.classList.add("expanded");
}

function CloseDialog(event) {
    dialog_box.classList.remove("expanded");
}

function MinimizeChat(e) {
    chatbot.classList.add("minimized");
    chatCircle.classList.remove("invisible");
}

function OpenChatbot(e) {
    chatbot.classList.remove("minimized");
    chatCircle.classList.add("invisible");
}