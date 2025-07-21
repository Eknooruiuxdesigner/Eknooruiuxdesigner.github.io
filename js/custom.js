jQuery(function () {

  document.getElementById("copyrightYear").textContent = new Date().getFullYear();
  setTimeout(function () {
    jQuery(".loader_wraper").fadeOut(500); // Hide loader with fade effect
    // jQuery("#content").fadeIn(500); // Show content
  }, 100);


  jQuery('.header-elem-center').addClass('closeSlide');
  jQuery('#openMenu').click(function () {
    jQuery('.header-elem-center').addClass('openSlide');
    jQuery('body, html').addClass('overflow-hidden');
    jQuery('.header-elem-center').removeClass('closeSlide');

  });

  jQuery('#closeMenu').click(function () {
    jQuery('.header-elem-center').addClass('closeSlide')
    jQuery('.header-elem-center').removeClass('openSlide')
    jQuery('body, html').removeClass('overflow-hidden')
  });


  // scroll click
  let haderHeight = jQuery('header.site-header').outerHeight();
  // Back to top
  var amountScrolled = 200;
  var amountScrolledNav = 25;

  jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > amountScrolled) {
      jQuery('button.back-to-top').addClass('show');
    } else {
      jQuery('button.back-to-top').removeClass('show');
    }
  });

  jQuery('button.back-to-top').click(function () {
    jQuery('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  // slick slider
  jQuery('#certifySlider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    margin: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: jQuery('.custom-prev'),
    nextArrow: jQuery('.custom-next'),
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      },
      breakpoint: 991,
      settings: {
        slidesToShow: 3
      },
      breakpoint: 767,
      settings: {
        slidesToShow: 2
      },
      breakpoint: 479,
      settings: {
        slidesToShow: 1
      }
    }]
  });
});

  lightbox.option({
      'resizeDuration': 100,
      'maxWidth': 1500,
      'disableScrolling': true,
      'fitImagesInViewport': false,
      'positionFromTop': 50,
    })

    // Disable body scroll when lightbox opens
document.addEventListener('lightbox:opened', () => {
  document.body.classList.add('lb-disable-scroll');
});

// Re-enable scroll when closed
document.addEventListener('lightbox:closed', () => {
  document.body.classList.remove('lb-disable-scroll');
});

 document.querySelectorAll('.fullscreen-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const fullImageUrl = this.getAttribute('href');

      const container = document.createElement('div');
      container.classList.add('fullscreen-container');

      const fullImg = document.createElement('img');
      fullImg.src = fullImageUrl;
      fullImg.alt = "Full Image";

      container.appendChild(fullImg);
      document.body.appendChild(container);

      // Go fullscreen
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
      } else if (container.msRequestFullscreen) {
        container.msRequestFullscreen();
      }

      // Close on click or exit fullscreen
      container.addEventListener('click', () => {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        }
        container.remove();
      });

      document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
          container.remove();
        }
      });
    });
  });