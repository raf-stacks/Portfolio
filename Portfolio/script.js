document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.project-slide');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    let currentIndex = 0;

    // Safety fallback validation check
    if (slides.length === 0) return;

    function updateCarousel(index) {
        // Remove active flags from current state
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Target and bind new focus node
        slides[index].classList.add('active');
    }

    nextBtn.addEventListener('click', () => {
        // Loops back to index 0 smoothly if reaching the end boundary
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        // Loops around to the last index position if falling behind index 0
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel(currentIndex);
    });
});