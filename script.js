document.addEventListener("DOMContentLoaded", function() {
    // Placeholder: Ana sayfa için başlangıçta yapılacak işlemler
    console.log("MyChatHub'a Hoşgeldiniz!");

    // Eğer giriş yapılmışsa, kullanıcı adı göstermek için ekle
    let userLoggedIn = false; // Bunu dinamik hale getirebilirsin (localStorage, cookie vs.)
    if(userLoggedIn) {
        document.querySelector('.welcome-section h1').textContent = "Hoşgeldin, Kullanıcı!";
    }
});
