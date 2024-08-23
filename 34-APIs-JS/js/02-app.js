// Intersection Observer

// API nativa que permite identificar cunado un elemento está visible en el navegador

document.addEventListener('DOMContentLoaded', () => {
    //Aplicar scroll infinito o el lazy loading
    const observer = new IntersectionObserver( entries => {
        if(entries[0].isIntersecting) {
            console.log('Ya se ve');
        } else {
            console.log('No se ve')
        }
    });

    observer.observe(document.querySelector('.premium'));
});

