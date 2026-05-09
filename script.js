document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Reveal on Scroll Animation ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    document.querySelectorAll('.reveal').forEach(element => {
        revealObserver.observe(element);
    });

    // --- 2. Scroll Indicator ---
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const indicator = document.getElementById('scrollIndicator');
        if (indicator) {
            indicator.style.width = scrolled + '%';
        }
    });

    // --- 3. Scroll Down Prompt ---
    const scrollPrompt = document.getElementById('scrollPrompt');
    if (scrollPrompt) {
        scrollPrompt.addEventListener('click', () => {
            const productsSection = document.getElementById('products-section');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

});