document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const sidebar = document.getElementById('sidebar');
    const rightNav = document.getElementById('right-nav');

    function checkScreenWidth() {
        if (window.innerWidth <= 768) {
            rightNav.style.display = 'none';
        } else {
            rightNav.style.display = 'flex';
        }
    }

    hamburgerMenu.addEventListener('click', function(event) {
        sidebar.style.width = '250px';
        event.stopPropagation(); // Prevents the event from bubbling up to the document
    });

    document.addEventListener('click', function(event) {
        if (sidebar.style.width === '250px') {
            sidebar.style.width = '0';
        }
    });

    sidebar.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents the event from bubbling up to the document
    });

    window.addEventListener('resize', checkScreenWidth);

    checkScreenWidth();
});
