const terminalLines = [
  "import os",
  "def hack(): pass",
  "echo 'Initializing system...'",
  "Connecting to server...",
  "root@hackme:~$ sudo su",
  "Access granted.",
  "mkdir /root/secret",
  "echo 'Injecting payload...'",
  "System compromised.",
  "Running diagnostic checks..."
];

const terminalDiv = document.getElementById("terminal-content");
const logoScreen = document.getElementById("logo-screen");
const passwordScreen = document.getElementById("password-screen");
const captchaScreen = document.getElementById("captcha-screen");
const mainSite = document.getElementById("main-site");

let line = 0;

function showNextLine() {
  if (line < terminalLines.length) {
    terminalDiv.innerHTML += terminalLines[line] + "\n";
    terminalDiv.scrollTop = terminalDiv.scrollHeight;
    line++;
    setTimeout(showNextLine, 100);
  } else {
    setTimeout(() => {
      document.getElementById("terminal").classList.add("hidden");
      logoScreen.classList.remove("hidden");
      setTimeout(() => {
        logoScreen.classList.add("hidden");
        passwordScreen.classList.remove("hidden");
      }, 3000);
    }, 1000);
  }
}

function checkPassword() {
  const input = document.getElementById("password-input").value;
  if (input === "DreamSoft") {
    passwordScreen.classList.add("hidden");
    captchaScreen.classList.remove("hidden");
  } else {
    document.getElementById("password-error").innerText = "Hatalı şifre!";
  }
}

function solveCaptcha() {
  captchaScreen.classList.add("hidden");
  mainSite.classList.remove("hidden");
}

function handleEnter(e) {
  if (e.key === "Enter") {
    const input = document.getElementById("chat-input");
    const msgBox = document.getElementById("messages");
    msgBox.innerHTML += `<div>> ${input.value}</div>`;
    input.value = "";
    msgBox.scrollTop = msgBox.scrollHeight;
  }
}

window.onload = showNextLine;
