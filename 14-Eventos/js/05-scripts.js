// Eventos con scroll

// Suceden en la venta global windows

window.addEventListener('scroll', () => {

    const premium = document.querySelector('.premium');const ubicacion = premium.getBoundingClientRect(); // A qué distancia se encuentra un elemento

    ubicacion.top < 784 ? console.log('Elemento ya visible') : console.log('Elemeno NO visible aún'); 


    // const scrolPX = window.scrollY;
    // console.log(scrolPX);
});


 