<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Grand Chaos City</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <!-- 3 Nokta Butonu -->
    <div class="menu-button" onclick="toggleSidebar()">&#8942;</div>

    <!-- Sol Sidebar -->
    <div class="sidebar" id="sidebar">
      <ul>
        <li onclick="showPage('development')">Development Team</li>
        <li onclick="showPage('info')">Game Information</li>
        <li onclick="showPage('announcement')">Game Announcement</li>
      </ul>
    </div>

    <!-- İçerik Alanı -->
    <div class="content" id="content">
      <h1>Grand Chaos City</h1>
      <p class="description">
        Grand Chaos City, özgürlüğün ve kaosun birleştiği yeni nesil açık dünya deneyimidir. 
        GTA 5'in ötesinde, sınırsız detay ve gerçekçilikle donatılmış benzersiz bir şehir hayatı sizi bekliyor.
      </p>

      <div class="gfx-gallery">
        <div class="gfx-item">GFX 1</div>
        <div class="gfx-item">GFX 2</div>
        <div class="gfx-item">GFX 3</div>
      </div>
    </div>
  </div>

<script src="script.js"></script>
</body>
</html>
