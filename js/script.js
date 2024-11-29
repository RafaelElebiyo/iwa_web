const scrollUpButton = document.getElementById('scroll-up');

// Mostrar botón al desplazarse hacia abajo
window.onscroll = function() {
    if (window.scrollY > 200) { // Ajusta la cantidad de desplazamiento según prefieras
        scrollUpButton.style.display = "block";
    } else {
        scrollUpButton.style.display = "none";
    }
};

// Hacer scroll al principio de la página
scrollUpButton.onclick = function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
};