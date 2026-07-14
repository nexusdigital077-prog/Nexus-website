document.addEventListener('DOMContentLoaded', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Mobile nav toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Scroll-reveal for fade-in elements
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px', threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Count-up stats (hero stat strip)
    const countEls = document.querySelectorAll('[data-count-to]');
    if (countEls.length) {
        const statObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                obs.unobserve(el);
                const target = parseFloat(el.dataset.countTo);
                const prefix = el.dataset.prefix || '';
                const suffix = el.dataset.suffix || '';

                if (prefersReducedMotion) {
                    el.textContent = `${prefix}${target}${suffix}`;
                    return;
                }

                const duration = 1200;
                const start = performance.now();
                function tick(now) {
                    const progress = Math.min((now - start) / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const value = Math.round(target * eased);
                    el.textContent = `${prefix}${value}${suffix}`;
                    if (progress < 1) requestAnimationFrame(tick);
                }
                requestAnimationFrame(tick);
            });
        }, { threshold: 0.4 });
        countEls.forEach(el => statObserver.observe(el));
    }

    // Subtle parallax on hero blobs (guarded — not every page has them)
    const blobs = document.querySelectorAll('.blob');
    if (blobs.length >= 2 && !prefersReducedMotion) {
        window.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            if(blobs[0]) blobs[0].style.transform = `translate(${x * 30}px, ${y * 30}px)`;
            if(blobs[1]) blobs[1].style.transform = `translate(${x * -30}px, ${y * -30}px)`;
            if(blobs[2]) blobs[2].style.transform = `translate(${x * 45}px, ${y * -20}px)`;
        });
    }

    // 3D Tilt Effect for cards
    if (!prefersReducedMotion) {
        const tiltCards = document.querySelectorAll('.cert-card, .badge-card, .coverage-card, .contact-info, .benefits-grid');
        tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                card.style.transition = 'none';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                card.style.transition = 'transform 0.5s ease';
            });
        });
    }
});
