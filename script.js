function sendInput() {
    let userInput = document.getElementById("user-input").value;
    fetch('/guess', {
        method: 'POST',
        body: JSON.stringify({ "user_input": userInput }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("game-output").innerHTML += "<p>" + data.response + "</p>";
    });
}
