// script.js

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.style.left === '0px') {
    sidebar.style.left = '-250px';
  } else {
    sidebar.style.left = '0px';
  }
}

function showPage(page) {
  const content = document.getElementById('content');

  if (page === 'development') {
    content.innerHTML = `
      <h1>Development Team</h1>
      <p class="description">Grand Chaos City ekibi, alanında uzman geliştiriciler ve sanatçılardan oluşuyor.</p>
    `;
  } else if (page === 'info') {
    content.innerHTML = `
      <h1>Game Information</h1>
      <p class="description">Grand Chaos City, benzersiz bir şehir hayatı deneyimi sunuyor. Açık dünya, gerçekçi fizik motoru ve sınırsız etkileşim!</p>
    `;
  } else if (page === 'announcement') {
    content.innerHTML = `
      <h1>Game Announcements</h1>
      <p class="description">Tüm duyurular ve güncellemeler burada paylaşılacak. Takipte kalın!</p>
    `;
  }
}
