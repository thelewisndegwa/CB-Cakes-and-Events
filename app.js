const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Toggle body scroll (optional, to prevent scrolling when the menu is open)
        document.body.classList.toggle('no-scroll');
  
        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
  
        // Burger Animation
        burger.classList.toggle('toggle');
    });
  }
  
  // Call the navSlide function to initialize the navigation menu behavior
  navSlide();