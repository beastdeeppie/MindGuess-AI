let questions = [
    "Are you feeling lucky today? 🍀 (yes/no)",
    "If you could have a superpower, would it be invisibility or mind control? 🦸‍♂️",
    "Do you trust AI... or do you think I’m watching you? 👀🤖",
    "Red pill 💊 or Blue pill 💊? Choose wisely...",
    "Are you ready for the truth? Or should I keep guessing? 😈"
];

function sendInput() {
    let userInput = document.getElementById("user-input").value;
    let outputDiv = document.getElementById("game-output");
    
    outputDiv.innerHTML += `<p>💀 You: ${userInput}</p>`;
    
    if (Math.random() > 0.3) {
        let question = questions[Math.floor(Math.random() * questions.length)];
        outputDiv.innerHTML += `<p>🕶️ DARK AI: ${question}</p>`;
    } else {
        let responses = ["a secret code 🔐", "a deep web mystery 🌑", "a lost hacker’s soul 💀", "an encrypted database 📂", "a digital ghost 👻"];
        let guess = responses[Math.floor(Math.random() * responses.length)];
        outputDiv.innerHTML += `<p>🕶️ DARK AI: I decrypted your mind... You're thinking about ${guess}!</p>`;
    }
    
    document.getElementById("user-input").value = "";
}

