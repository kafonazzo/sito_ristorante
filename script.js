document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    let lastScrollTop = 0;

    if (navbar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop && scrollTop > 50) {
                // Scroll verso il basso: nascondi navbar
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scroll verso l’alto: mostra navbar
                navbar.style.transform = 'translateY(0)';
            }

            lastScrollTop = Math.max(scrollTop, 0);
        });
    }

    if (menuToggle && navLinks) {
        // Toggle menu mobile
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });

        // Chiudi menu quando clicchi un link (solo mobile)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
    }
});

// Se vuoi usare una classe "loaded" sul body dopo il load, lascialo:
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});


//mappa
const map = L.map('map').setView([44.42850, 8.74959], 18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([44.42850, 8.74959]).addTo(map)
    .bindPopup('Ferramenta Luxardo<br>Via Carlo Camozzini 51/R, Voltri, Genova')
    .openPopup();

//carosello
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    const slideInterval = 5000; // 5 secondi

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, slideInterval);
});