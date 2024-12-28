document.addEventListener('DOMContentLoaded', function () {
    const navToggleBtn = document.querySelector('[data-nav-toggle-btn]');
    const navbarList = document.querySelector('.navbar-list');
  
    navToggleBtn.addEventListener('click', function () {
      navbarList.classList.toggle('active');
    });
  });
  