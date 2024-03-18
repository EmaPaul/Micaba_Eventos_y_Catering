document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('[aria-controls="mobile-menu"]');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinksMobile = document.querySelectorAll("#mobile-menu .nav-link");
  navLinksMobile.forEach((link) => {
    link.addEventListener("touchstart", function () {
        // Agrega la clase al iniciar el hover
        this.classList.add("nav-link-mobile");
    });
    link.addEventListener("touchend", function () {
        // Quita la clase al finalizar el hover
        this.classList.remove("nav-link-mobile");
    });
});

  menuButton.addEventListener('click', function () {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
      menuButton.setAttribute('aria-expanded', !expanded);

      if (!expanded) {
          mobileMenu.style.display = 'block';
          const maxHeight = mobileMenu.scrollHeight + 'px';
          mobileMenu.style.maxHeight = maxHeight;
      } else {
          mobileMenu.style.maxHeight = '0';
          setTimeout(() => {
              mobileMenu.style.display = 'none';
          }, 300); // Espera a que termine la animación (0.3s)
      }
      window.addEventListener('resize',function(){
        const windowWidth = window.innerWidth;
        if (windowWidth > 768) { // Cambiar el valor según el punto de quiebre del diseño responsive
          mobileMenu.style.display = 'none';
          menuButton.setAttribute('aria-expanded', 'false');
        }
      });
  });
});
