function kontrolEt() {
  const girilen = document.getElementById("sifreInput").value;
  const sonuc = document.getElementById("sonuc");
  const girisKutusu = document.getElementById("girisKutusu");

  if (girilen === "cklync") {
    sonuc.innerHTML = `<div class="animasyon yesil">✔<div>İşlem Tamam!</div></div>`;
    setTimeout(() => {
      document.body.innerHTML = `
        <div class="chat-panel">
          <div class="chat-mesajlar" id="mesajAlani">
            <div>[Sistem] Bağlantı kuruldu. Sohbete başlayabilirsin...</div>
          </div>
          <div class="chat-input">
            <input type="text" id="chatInput" placeholder="Mesajını yaz...">
            <button onclick="mesajGonder()">Gönder</button>
          </div>
        </div>`;
    }, 1500);
  } else {
    sonuc.innerHTML = `<div class="animasyon kirmizi">❌<div>İşlem Başarısız!</div></div>`;
  }
}

function mesajGonder() {
  const input = document.getElementById("chatInput");
  const mesajAlani = document.getElementById("mesajAlani");
  const mesaj = input.value.trim();
  if (mesaj !== "") {
    const yeni = document.createElement("div");
    yeni.textContent = `[Sen] ${mesaj}`;
    mesajAlani.appendChild(yeni);
    mesajAlani.scrollTop = mesajAlani.scrollHeight;
    input.value = "";
  }
}
