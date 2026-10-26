/**
 * ARKON - Robolution
 * Interactividad y Lógica de Navegación
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Menú Hamburguesa ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('open');
        });
    }

    // --- 2. Interactividad del Robot ---
    const robot = document.getElementById('robot');

    const activateRobot = () => {
        if (!robot) return;

        // Añadimos la clase que dispara la animación CSS (ojos y reactor)
        robot.classList.add('active');

        // Volvemos al estado normal tras 2 segundos
        setTimeout(() => {
            robot.classList.remove('active');
        }, 2000);
    };

    if (robot) {
        // Activación por clic
        robot.addEventListener('click', activateRobot);

        // Activación por teclado (Enter o Espacio cuando el robot tiene el foco)
        robot.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                activateRobot();
            }
        });
    }

    // --- 3. Validación simple del formulario de contacto ---
    const form = document.getElementById('decision-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Tu decisión ha sido registrada. ARKON analizará tu perfil. El nuevo orden no olvida.');
            form.reset();
        });
    }
});
