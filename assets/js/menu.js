document.querySelectorAll('.mega-menu-link > a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const submenu = this.nextElementSibling;
        if (submenu && submenu.classList.contains('sub-menu')) {
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        }
    });
});
