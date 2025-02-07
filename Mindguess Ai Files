function sendInput() {
    let userInput = document.getElementById("user-input").value;
    
    // Simple AI Guessing Logic
    let responses = ["a cat", "a car", "a spaceship", "a book", "a phone"];
    let guess = responses[Math.floor(Math.random() * responses.length)];
    
    let outputDiv = document.getElementById("game-output");
    outputDiv.innerHTML += `<p>You: ${userInput}</p>`;
    outputDiv.innerHTML += `<p>AI: I guess you are thinking about ${guess}!</p>`;
    
    // Clear input field
    document.getElementById("user-input").value = "";
}
