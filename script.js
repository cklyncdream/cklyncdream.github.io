fetch("updates.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("updates-container");
    data.forEach(update => {
      const div = document.createElement("div");
      div.className = "update";
      div.innerHTML = `
        <h3>${update.title}</h3>
        <small>${update.date}</small>
        <p>${update.content}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Güncellemeler yüklenemedi:", error);
  });
