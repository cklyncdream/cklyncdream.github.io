document.addEventListener("DOMContentLoaded", function() {
    console.log("MyChatHub'a Hoşgeldiniz!");

    // Eğer giriş yapılmışsa, kullanıcı adı göstermek için ekle
    let userLoggedIn = false; // Bunu dinamik hale getirebilirsin (localStorage, cookie vs.)
    if(userLoggedIn) {
        document.querySelector('.welcome-section h1').textContent = "Hoşgeldin, Kullanıcı!";
    }
});

function addAnnouncement() {
    var announcementText = document.getElementById('new-announcement').value;
    if (announcementText.trim() !== "") {
        var newAnnouncement = document.createElement("div");
        newAnnouncement.classList.add("announcement-item");
        newAnnouncement.innerHTML = `<p><strong>Yeni Duyuru:</strong> ${announcementText}</p>`;
        
        var announcementList = document.getElementById('announcement-list');
        announcementList.appendChild(newAnnouncement);
        
        // Duyuru metnini temizle
        document.getElementById('new-announcement').value = "";
    } else {
        alert("Duyuru boş olamaz!");
    }
}
