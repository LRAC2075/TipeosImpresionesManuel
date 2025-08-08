document.addEventListener('DOMContentLoaded', () => {

    /* ==================== MENÚ MÓVIL (HAMBURGUESA) ==================== */
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');

    // Función para mostrar el menú
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    // Función para ocultar el menú
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }
    
    // Ocultar menú al hacer clic en un enlace (para navegación en la misma página)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    });

    /* ==================== ANIMACIÓN DE SCROLL CON INTERSECTION OBSERVER ==================== */
    // Selecciona todos los elementos que deben animarse
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null, // El viewport
        rootMargin: '0px',
        threshold: 0.1 // El elemento se considera visible cuando el 10% está en pantalla
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento está intersectando (visible)
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Deja de observar el elemento una vez que ha sido animado para no repetir la animación
                observer.unobserve(entry.target);
            }
        });
    };

    // Crear el observador
    const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);

    // Observar cada elemento
    animatedElements.forEach(el => {
        scrollObserver.observe(el);
    });

    /* ==================== LÓGICA: ACORDEÓN DE PREGUNTAS FRECUENTES (FAQ) ==================== */
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq__question');

        question.addEventListener('click', () => {
            // Comprobar si el item actual ya está activo
            const isActive = item.classList.contains('active');
            
            // Opcional: Descomentar las siguientes líneas para cerrar los demás items al abrir uno nuevo.
            // faqItems.forEach(otherItem => {
            //     if (otherItem !== item) {
            //        otherItem.classList.remove('active');
            //     }
            // });

            // Abrir o cerrar el item actual
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });

    /* ==================== LÓGICA: CARRUSEL DE SERVICIOS (SWIPER) - CORREGIDO ==================== */
    const servicesCarousel = new Swiper('.services-carousel', {
        // Opciones de Swiper
        loop: true,
        centeredSlides: true, // ESTA ES LA OPCIÓN CLAVE PARA CENTRAR LA TARJETA ACTIVA
        
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        
        // Paginación (los puntos inferiores)
        pagination: {
            el: '.swiper-pagination', // Apunta al elemento dentro del nuevo contenedor
            clickable: true,
        },

        // Botones de navegación (flechas)
        navigation: {
            nextEl: '.swiper-button-next', // Apunta al elemento dentro del nuevo contenedor
            prevEl: '.swiper-button-prev',
        },

        // Diseño responsivo (cuántos slides se ven)
        slidesPerView: 1.2, // Mostramos 1 y un poco de la siguiente para indicar que es deslizable
        spaceBetween: 20,
        breakpoints: {
            // Cuando la ventana es >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
                centeredSlides: false, // Desactivamos el centrado cuando hay más de 1 slide visible
            },
            // Cuando la ventana es >= 1024px
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
                centeredSlides: false,
            }
        }
    });

});document.addEventListener('DOMContentLoaded', () => {

    /* ==================== MENÚ MÓVIL (HAMBURGUESA) ==================== */
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');

    // Función para mostrar el menú
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    // Función para ocultar el menú
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }
    
    // Ocultar menú al hacer clic en un enlace (para navegación en la misma página)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    });

    /* ==================== ANIMACIÓN DE SCROLL CON INTERSECTION OBSERVER ==================== */
    // Selecciona todos los elementos que deben animarse
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null, // El viewport
        rootMargin: '0px',
        threshold: 0.1 // El elemento se considera visible cuando el 10% está en pantalla
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento está intersectando (visible)
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Deja de observar el elemento una vez que ha sido animado para no repetir la animación
                observer.unobserve(entry.target);
            }
        });
    };

    // Crear el observador
    const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);

    // Observar cada elemento
    animatedElements.forEach(el => {
        scrollObserver.observe(el);
    });

    /* ==================== LÓGICA: ACORDEÓN DE PREGUNTAS FRECUENTES (FAQ) ==================== */
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq__question');

        question.addEventListener('click', () => {
            // Comprobar si el item actual ya está activo
            const isActive = item.classList.contains('active');
            
            // Opcional: Descomentar las siguientes líneas para cerrar los demás items al abrir uno nuevo.
            // faqItems.forEach(otherItem => {
            //     if (otherItem !== item) {
            //        otherItem.classList.remove('active');
            //     }
            // });

            // Abrir o cerrar el item actual
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });

    /* ==================== LÓGICA: CARRUSEL DE SERVICIOS (SWIPER) - CORREGIDO ==================== */
    const servicesCarousel = new Swiper('.services-carousel', {
        // Opciones de Swiper
        loop: true,
        centeredSlides: true, // ESTA ES LA OPCIÓN CLAVE PARA CENTRAR LA TARJETA ACTIVA
        
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        
        // Paginación (los puntos inferiores)
        pagination: {
            el: '.swiper-pagination', // Apunta al elemento dentro del nuevo contenedor
            clickable: true,
        },

        // Botones de navegación (flechas)
        navigation: {
            nextEl: '.swiper-button-next', // Apunta al elemento dentro del nuevo contenedor
            prevEl: '.swiper-button-prev',
        },

        // Diseño responsivo (cuántos slides se ven)
        slidesPerView: 1.2, // Mostramos 1 y un poco de la siguiente para indicar que es deslizable
        spaceBetween: 20,
        breakpoints: {
            // Cuando la ventana es >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
                centeredSlides: false, // Desactivamos el centrado cuando hay más de 1 slide visible
            },
            // Cuando la ventana es >= 1024px
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
                centeredSlides: false,
            }
        }
    });

});