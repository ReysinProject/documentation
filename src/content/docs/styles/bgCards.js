const cards = document.querySelectorAll('.custom-card');

const rootStyles = getComputedStyle(document.documentElement);
const orangeSecondary = rootStyles.getPropertyValue('--orange-secondary').trim();
const purpleSecondary = rootStyles.getPropertyValue('--purple-secondary').trim();
const greenSecondary = rootStyles.getPropertyValue('--green-secondary').trim();
const pinkSecondary = rootStyles.getPropertyValue('--pink-secondary').trim();


function getGradientColor(index) {
    switch (index % 4) {
        case 0: // Index 0 et 4
            return orangeSecondary;
        case 1: // Index 1 et 5
            return purpleSecondary;
        case 2: // Index 2 et 6
            return greenSecondary;
        case 3: // Index 3 et 7
            return pinkSecondary;
    }
}


cards.forEach((card, index) => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const gradientColor = getGradientColor(index);

        card.style.background = `radial-gradient(circle at ${x}px ${y}px, ${gradientColor}, transparent 70%)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.background = 'none';
    });
});
