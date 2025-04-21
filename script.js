const terminalLines = [
  "import os",
  "echo 'Starting system...'",
  "Accessing root...",
  "Checking ports...",
  "Initializing Dream Soft",
  "System online...",
  "Launching...",
];

let terminalIndex = 0;
const terminal = document.getElementById("terminal-content");

function typeTerminal() {
  if (terminalIndex < terminalLines.length) {
    terminal.innerHTML += terminalLines[terminalIndex] + "\n";
    terminal.scrollTop = terminal.scrollHeight;
    terminalIndex++;
    setTimeout(typeTerminal, 200);
  } else {
    document.getElementById("terminal").classList.add("hidden");
    document.getElementById("logo-screen").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("logo-screen").classList.add("hidden");
      document.getElementById("password-screen").classList.remove("hidden");
    }, 2500);
  }
}

function checkPassword() {
  const input = document.getElementById("password-input").value;
  if (input === "DreamSoft") {
    document.getElementById("password-screen").classList.add("hidden");
    document.getElementById("captcha-screen").classList.remove("hidden");
  } else {
    document.getElementById("password-error").innerText = "⚠️ Hatalı şifre!";
  }
}

function verifyCaptcha() {
  const checkbox = document.getElementById("robot-check");
  if (checkbox.checked) {
    document.getElementById("captcha-screen").classList.add("hidden");
    document.getElementById("main-site").classList.remove("hidden");
  } else {
    alert("Lütfen robot olmadığınızı doğrulayın.");
  }
}

function handleEnter(event) {
  if (event.key === "Enter") {
    const input = document.getElementById("chat-input");
    const msg = input.value.trim();
    if (msg) {
      const messages = document.getElementById("messages");
      messages.innerHTML += `<div>> ${msg}</div>`;
      input.value = "";
      messages.scrollTop = messages.scrollHeight;
    }
  }
}

window.onload = typeTerminal;
