// ── Navbar scroll effect ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ── Mobile nav ──
const navLinks = document.getElementById('navLinks');
function toggleNav() {
    navLinks.classList.toggle('open');
}
function closeNav() {
    navLinks.classList.remove('open');
}

// ── Ember particles ──
(function createEmbers() {
    const container = document.getElementById('embers');
    const colors = ['#D4A017','#F0C040','#8B1A1A','#A8673B','#F7E096'];
    for (let i = 0; i < 28; i++) {
        const el = document.createElement('div');
        el.className = 'ember';
        const size = Math.random() * 4 + 1.5;
        el.style.cssText = `
            width:${size}px;
            height:${size}px;
            left:${Math.random() * 100}%;
            bottom:${Math.random() * -10}%;
            background:${colors[Math.floor(Math.random()*colors.length)]};
            animation-duration:${Math.random() * 8 + 6}s;
            animation-delay:${Math.random() * 8}s;
            box-shadow: 0 0 ${size*2}px ${colors[Math.floor(Math.random()*colors.length)]};
        `;
        container.appendChild(el);
    }
})();

// ── Scroll reveal ──
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
            entry.target.style.transitionDelay = (idx % 4) * 0.1 + 's';
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Smooth scroll ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ── Contact form ──
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Terkirim ✓';
    btn.style.background = 'linear-gradient(135deg,#6B3A1F,#A8673B)';
    setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        this.reset();
    }, 3000);
});