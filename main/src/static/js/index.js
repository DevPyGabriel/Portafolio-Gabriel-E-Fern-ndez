// filepath: c:\Users\marateca\Downloads\tailwind\build\index.html
// Script para manejar el subrayado activo en el navbar
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const links = navbar.querySelectorAll('a');
    // Por defecto, activa "Inicio"
    let activeLink = document.getElementById('default-active');
    setActiveUnderline(activeLink);

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            setActiveUnderline(this);
        });
    });

    function setActiveUnderline(link) {
        links.forEach(a => {
            const underline = a.querySelector('span');
            underline.classList.remove('w-full');
            underline.classList.add('w-0');
        });
        const underline = link.querySelector('span');
        underline.classList.remove('w-0');
        underline.classList.add('w-full');
        activeLink = link;
    }
});

// ^ legacy version
