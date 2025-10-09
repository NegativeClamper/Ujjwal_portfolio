document.addEventListener("DOMContentLoaded", function() {

    // --- Intersection Observer for revealing content on scroll ---
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a staggered delay to each element as it becomes visible
                const delay = (entry.target.dataset.delay || 0) + 'ms';
                entry.target.style.transitionDelay = delay;
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach((el, index) => {
        // You can set a base delay in the dataset if needed, otherwise it uses index
        el.dataset.delay = index * 75;
        revealObserver.observe(el);
    });

});

