function kontrolEt() {
  const girilen = document.getElementById("sifreInput").value;
  const sonuc = document.getElementById("sonuc");

  if (girilen === "cklync") {
    sonuc.innerHTML = `<div class="anim-tik yesil">✔ İşlem tamam!</div>`;
    // 2 saniye sonra ana sisteme geçiş yapılabilir
    setTimeout(() => {
      document.body.innerHTML = "<h1 style='color:white;text-align:center;'>Sohbet sistemine hoş geldin!</h1>";
    }, 2000);
  } else {
    sonuc.innerHTML = `<div class="anim-tik kirmizi">❌ İşlem başarısız!</div>`;
  }
}
