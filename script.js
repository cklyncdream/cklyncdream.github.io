// Dinamik içerik için örnek fonksiyon
function showAlert() {
    alert("Bize Ulaşın!");
}

// Menüye tıklandığında animasyon veya farklı bir özellik ekleyebilirsin
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        console.log("Tıklandı: " + link.textContent);
    });
});
