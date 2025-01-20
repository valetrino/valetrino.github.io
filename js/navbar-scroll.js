document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll('.nav-link');
    var navCollapse = document.getElementById('navbarCollapse');
    var navbar = document.getElementById("navbar");
    var lastScrollTop = 0;
    var scrollTimeout;

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.getComputedStyle(navCollapse).display !== 'none') {
          navCollapse.classList.remove('show');
        }
      });
    });

    window.addEventListener("scroll", function () {
      clearTimeout(scrollTimeout);
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        navbar.classList.remove("show");
        navbar.classList.add("hide");
      } else {
        navbar.classList.remove("hide");
        navbar.classList.add("show");
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

      scrollTimeout = setTimeout(function () {
        navbar.classList.remove("hide");
        navbar.classList.add("show");
      }, 200);
    }, false);
  });