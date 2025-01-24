document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.bg-images-container img');
    let currentImageIndex = 0;

    function switchImage() {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    }

    // Change image every 5 seconds
    setInterval(switchImage, 5000);
});
