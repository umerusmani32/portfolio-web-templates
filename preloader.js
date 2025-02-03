
    // Preloader Script
    window.addEventListener('load', function () {
        const preloader = document.getElementById('preloader');
        setTimeout(() => {
          preloader.style.opacity = '0';
          setTimeout(() => {
            preloader.style.display = 'none';
          }, 200); // Delay to match the fade-out transition
        }, 1000); // Adjust the time as needed (2 seconds in this case)
      });