/**
 * Blueberry Boost - Static Site JavaScript
 * Minimal, vanilla JavaScript for interactivity
 */

// Open YouTube video in a new tab
function openYouTube() {
    window.open('https://www.youtube.com/watch?v=EX2a_csSPVY&t=1s', '_blank', 'noopener,noreferrer');
}

// Smooth scroll behavior for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scroll to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation to elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards and article sections
    document.querySelectorAll('.feature-card, .article-section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(10px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Track button clicks for analytics (if needed)
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // You can add analytics tracking here
            console.log('CTA Button clicked');
        });
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Escape key to close any modals (if added in future)
    if (e.key === 'Escape') {
        // Handle escape key
    }
});

// Prevent layout shift from scrollbar
function preventLayoutShift() {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
        document.documentElement.style.scrollbarGutter = 'stable';
    }
}

preventLayoutShift();
window.addEventListener('resize', preventLayoutShift);
