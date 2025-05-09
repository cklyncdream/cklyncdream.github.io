function kontrolEt() {
  const girilen = document.getElementById("sifreInput").value;
  const sonuc = document.getElementById("sonuc");
  const girisKutusu = document.getElementById("girisKutusu");

  if (girilen === "cklync") {
    sonuc.innerHTML = `<div class="animasyon yesil">✔<div>İşlem Tamam!</div></div>`;
    setTimeout(() => {
      girisKutusu.classList.add("fadeOut");
      setTimeout(() => {
        document.body.innerHTML = `
          <div class="ana-sistem">
            <h1>🌟 CKLYNC DREAM PANEL'E HOŞ GELDİN 🌟</h1>
            <p>Komutları / ile yaz, örn: /profil, /oyun, /ckcoin</p>
          </div>`;
      }, 1000);
    }, 1500);
  } else {
    sonuc.innerHTML = `<div class="animasyon kirmizi">❌<div>İşlem Başarısız!</div></div>`;
  }
}
