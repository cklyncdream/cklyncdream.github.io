// Bu kısım, butonlara tıklama ile sayfa içeriğini yönlendirecek.
document.querySelectorAll('nav ul li a').forEach((link) => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const section = document.querySelector(link.getAttribute('href'));
        window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
    });
});
