function girisYap() {
  const parola = document.getElementById("parola").value;
  const sonuc = document.getElementById("sonuc");
  const basariEkrani = document.getElementById("basariEkrani");

  if (parola === "severus") {
    sonuc.innerHTML = "<span class='basarili'>✔ İşlem Başarılı</span>";
    setTimeout(() => {
      document.querySelector(".giris-ekrani").style.display = "none";
      basariEkrani.style.display = "block";
    }, 1500);
  } else {
    sonuc.innerHTML = "<span class='hatali'>❌ İşlem Başarısız: Parola Hatalı veya Eksik</span>";
  }
}

function menuAc() {
  const menuContent = document.getElementById("menuContent");
  menuContent.style.display = (menuContent.style.display === "block") ? "none" : "block";
}

function ayarlarAc() {
  alert("Ayarlar Sayfası: Profil fotoğrafı, kullanıcı adı değiştirilebilir.");
}

function rollerAc() {
  alert("Roller Sayfası: Kullanıcılar için roller ve emoji atamalarını burada yapabilirsiniz.");
}

function kanallarAc() {
  alert("Kanallar Sayfası: Kanal oluşturma veya kanala girme işlemleri burada yapılabilir.");
}
