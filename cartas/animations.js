// Animação para as letras dos nomes na página inicial
document.addEventListener('DOMContentLoaded', function() {
    const vtuberNames = document.querySelectorAll('.vtuber-name span');
    
    vtuberNames.forEach((letter, index) => {
        // Atraso escalonado para cada letra
        letter.style.transitionDelay = `${index * 0.05}s`;
    });
    
    // Efeito de brilho aleatório nas estrelas
    const stars = document.querySelectorAll('.stars');
    setInterval(() => {
        stars.forEach(star => {
            star.style.opacity = Math.random() * 0.5 + 0.5;
        });
    }, 1000);
});

// Efeito de parallax para as cartas
document.addEventListener('mousemove', function(e) {
    const cards = document.querySelectorAll('.magic-card');
    cards.forEach(card => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
});
