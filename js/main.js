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

    // Función para mostrar notificaciones personalizadas
    function showNotification(message, isError = false) {
        // Crear el elemento de notificación
        const notification = document.createElement('div');
        notification.className = 'notification';
        
        // Crear el contenido de la notificación
        notification.innerHTML = `
            <div class="notification__icon">
                ${isError 
                    ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>'
                    : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>'
                }
            </div>
            <p class="notification__message">${message}</p>
            <button class="notification__close">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        `;
        
        // Agregar la notificación al DOM
        document.body.appendChild(notification);
        
        // Mostrar la notificación con animación
        setTimeout(() => notification.classList.add('show'), 10);
        
        // Configurar el botón de cerrar
        const closeButton = notification.querySelector('.notification__close');
        closeButton.addEventListener('click', () => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto-cerrar después de 5 segundos
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.classList.remove('show');
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    // Función para manejar el envío del formulario
    function handleSubmit(e) {
        e.preventDefault();
        
        // Obtener los valores del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        try {
            // Construir el cuerpo del correo
            const body = `Nombre: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMensaje:%0D%0A${message}`;
            const subject = `Contacto desde la web - ${name}`;
            
            // Abrir directamente en Gmail
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=samuelimpresiones2025@gmail.com&su=${encodeURIComponent(subject)}&body=${body}`;
            window.open(gmailUrl, '_blank');
            
            // Mostrar mensaje de confirmación
            showNotification('¡Gracias por tu mensaje! Se abrirá tu cliente de correo para enviar los detalles.');
            
            // Limpiar el formulario
            document.getElementById('contactForm').reset();
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            showNotification('Hubo un error al intentar abrir tu cliente de correo. Por favor, intenta nuevamente.', true);
        }
    }

    // Agregar el event listener al formulario
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleSubmit);
    }
});