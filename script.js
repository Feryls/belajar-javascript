function Login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    if (username === "feryls" && password === "2007") {
        errorMessage.style.color = "green";
        errorMessage.textContent = "Login successful!";
    } else {
        errorMessage.style.color = "red";
        errorMessage.textContent = "Invalid username or password. Please try again.";
    }
}
