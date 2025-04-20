function goTo(section) {
  document.querySelectorAll('.frame').forEach(div => {
    div.classList.add('hidden');
  });
  document.getElementById(section).classList.remove('hidden');
}
