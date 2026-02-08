document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Navigation ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });
    }

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });

    // --- Image Carousel ---
    const slideContainer = document.querySelector('.carousel-slide');
    const slides = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');
    
    // Only initialize if carousel exists
    if (slideContainer && slides.length > 0) {
        let counter = 0;
        const size = slides[0].clientWidth;

        // Ensure resizing works
        window.addEventListener('resize', () => {
             // Optional: reset on resize to avoid alignment issues
             slideContainer.style.transition = "none";
             slideContainer.style.transform = `translateX(${-counter * slides[0].clientWidth}px)`;
        });

        nextBtn.addEventListener('click', () => {
            if (counter >= slides.length - 1) {
                counter = 0; // Loop back to start
            } else {
                counter++;
            }
            slideContainer.style.transition = "transform 0.5s ease-in-out";
            slideContainer.style.transform = `translateX(${-counter * 100}%)`;
        });

        prevBtn.addEventListener('click', () => {
            if (counter <= 0) {
                counter = slides.length - 1; // Loop to end
            } else {
                counter--;
            }
            slideContainer.style.transition = "transform 0.5s ease-in-out";
            slideContainer.style.transform = `translateX(${-counter * 100}%)`;
        });
    }
});