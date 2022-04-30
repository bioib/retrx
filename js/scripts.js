/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

    // Scroll
    function scrollTo(element) {
      document.querySelector(element).scrollIntoView({behavior: "smooth"})
    }
    
    const ctaBtn = document.getElementById("ctaBtn");

    $('#headerBtn').on('click', function(e) {
      $('html, body').animate({
        scrollTop: $(window).height()
      }, 600)
    })

    $('#ctaBtn').on('click', function(e) {
      $('html, body').animate({
        scrollTop: $(window).height() + $(this).parents('section').outerHeight()
      }, 600)
      // console.log($(this).parents('section').outerHeight())
    })

    $('.nav-link').on('click', function(e) {
      // console.log($(this).attr('href'))
      $('html, body').animate({
        scrollTop: $(window).height() + $($(this).attr('href')).outerHeight()
      })
    })

    const a = document.getElementsByClassName("nav-link");

    // console.log(Array(a[4].getAttribute('href')))

    for(const b of a) {
      b.addEventListener('click', function(e) {
        e.preventDefault();
        scrollTo(b.getAttribute('href'))
      })
    }

    


});
