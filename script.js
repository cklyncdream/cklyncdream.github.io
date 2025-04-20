// Menüye tıklama efekti
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// Formu kontrol etme (sadece bir örnek)
document.querySelector('form').addEventListener('submit', (e) => {
    const inputs = document.querySelectorAll('input, textarea');
    let valid = true;
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.style.borderColor = 'red';
            valid = false;
        } else {
            input.style.borderColor = '#ccc';
        }
    });

    if (!valid) {
        e.preventDefault(); // Formun gönderilmesini engelle
        alert('Lütfen tüm alanları doldurun!');
    }
});
