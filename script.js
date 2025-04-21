const terminal = document.getElementById("terminal");

const commands = [
  "import os",
  "from time import sleep",
  "def hack(): pass",
  "echo 'Initializing system...'",
  "Connecting to server...",
  "root@hackme:~$ sudo su",
  "Access granted.",
  "mkdir /root/secret",
  "chmod 777 /root/secret",
  "rm -rf /*",
  "echo 'System compromised.'",
  "echo 'Injecting payload...'",
  "echo 'Bypassing firewall...'",
  "echo 'Connecting to remote server...'",
  "echo 'Accessing global network...'",
  "echo 'Running diagnostic checks...'"
];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeLine(line, delay = 30) {
  for (let char of line) {
    terminal.innerHTML += char;
    window.scrollTo(0, document.body.scrollHeight);
    await sleep(delay);
  }
  terminal.innerHTML += '\n';
}

async function startTerminal() {
  await typeLine("Sisteme bağlanılıyor...");
  await typeLine("Dosyalar yükleniyor...");
  await typeLine("Güvenlik protokolleri atlanıyor...\n");

  for (let cmd of commands) {
    await typeLine(cmd, 10);
  }

  await typeLine("\nİşlem Başarılı");

  await sleep(1000);
  await fadeOutScreen();
}

async function fadeOutScreen() {
  document.body.style.transition = "opacity 1s ease-out";
  document.body.style.opacity = 0;

  await sleep(1000);
  showDreamSoft();
}

function showDreamSoft() {
  document.body.innerHTML = "";
  document.body.style.backgroundColor = "black";
  document.body.style.opacity = 1;

  const title = document.createElement("div");
  title.style.color = "lime";
  title.style.fontSize = "60px";
  title.style.textAlign = "center";
  title.style.marginTop = "30vh";
  title.innerText = "";

  const subtext = document.createElement("div");
  subtext.style.color = "white";
  subtext.style.fontSize = "20px";
  subtext.style.textAlign = "center";
  subtext.innerText = "";

  document.body.appendChild(title);
  document.body.appendChild(subtext);

  let text = "Dream Soft";
  let sub = "By. Severus Salvadore Rexuexuel</>";

  let i = 0;
  let j = 0;

  let typeTitle = setInterval(() => {
    title.innerText += text[i++];
    if (i === text.length) {
      clearInterval(typeTitle);
      setTimeout(() => {
        let typeSub = setInterval(() => {
          subtext.innerText += sub[j++];
          if (j === sub.length) clearInterval(typeSub);
        }, 100);
      }, 500);
    }
  }, 100);
}

window.onload = startTerminal;
