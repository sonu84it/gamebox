// Simple click sound effect for fun
document.querySelectorAll('.card img').forEach(img => {
    img.addEventListener('click', () => {
        const audio = new Audio('data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAgLsAAAB3AQACABAATEFNRTMuOThVDAAAAAAAAAAAAAA//8A');
        audio.play();
    });
});
