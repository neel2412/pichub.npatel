
             document.addEventListener("DOMContentLoaded", function() {
                 const menuIcon = document.querySelector('.menu-icon');
                 const sidebarMenu = document.getElementById('sidebar-menu');
                 const overlay = document.getElementById('overlay');
     
                 // Toggle sidebar menu
                 menuIcon.addEventListener('click', function() {
                     sidebarMenu.classList.toggle('active');
                     overlay.style.display = 'block';
                 });
     
                 // Close sidebar menu when clicking outside
                 overlay.addEventListener('click', function() {
                     sidebarMenu.classList.remove('active');
                     overlay.style.display = 'none';
                 });
             });


             