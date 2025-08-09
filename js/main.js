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
    
    // Ocultar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    });

    /* ==================== ANIMACIÓN DE SCROLL CON INTERSECTION OBSERVER ==================== */
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);
    animatedElements.forEach(el => scrollObserver.observe(el));

    /* ==================== LÓGICA: ACORDEÓN DE PREGUNTAS FRECUENTES (FAQ) ==================== */
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq__question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });

    /* ==================== LÓGICA: CARRUSEL DE SERVICIOS ==================== */
    const servicesCarousel = new Swiper('.services-carousel', {
        loop: true,
        centeredSlides: false,
        speed: 6000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: '.services-carousel .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.services-carousel .swiper-button-next',
            prevEl: '.services-carousel .swiper-button-prev',
        },
        slidesPerView: 1.2,
        spaceBetween: 20,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
                centeredSlides: false,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
                centeredSlides: false,
            }
        }
    });

    /* ==================== LÓGICA: CARRUSEL DE AFICHES PROMOCIONALES ==================== */
    const promotionalCarousel = new Swiper('.promotional-carousel', {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        loopedSlides: 8,
        speed: 800,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            waitForTransition: true
        },
        watchSlidesProgress: true,
        observer: true,
        observeParents: true,
        pagination: false,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 20,
            modifier: 0.6,
            slideShadows: false,
        },
        breakpoints: {
            480: {
                slidesPerView: 1.5,
                spaceBetween: 15,
                coverflowEffect: {
                    depth: 50,
                    modifier: 1,
                }
            },
            768: {
                slidesPerView: 2.2,
                spaceBetween: 20,
                coverflowEffect: {
                    depth: 100,
                    modifier: 1.2,
                }
            },
            1024: {
                slidesPerView: 2.8,
                spaceBetween: 30,
                coverflowEffect: {
                    depth: 150,
                    modifier: 1.5,
                }
            }
        },
        pagination: {
            el: '.promotional-carousel .swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.promotional-carousel .swiper-button-next',
            prevEl: '.promotional-carousel .swiper-button-prev',
        }
    });

    // Optimización de carga de imágenes para el carrusel promocional
    const promotionalImages = document.querySelectorAll('.promotional-carousel .promotional__image');
    promotionalImages.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
    });
});