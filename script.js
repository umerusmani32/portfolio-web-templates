$(document).ready(function () {
    // Smooth scrolling
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 1000);
    });
  
    // Navbar background change on scroll
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('scrolled');
      } else {
        $('.navbar').removeClass('scrolled');
      }
    });
  
    // Animate elements on scroll
    $(window).scroll(function () {
      $('.animate__animated').each(function () {
        const elementPosition = $(this).offset().top;
        const scrollPosition = $(window).scrollTop() + $(window).height();
        if (elementPosition < scrollPosition) {
          $(this).addClass('animate__fadeInUp');
        }
      });
    });
  });