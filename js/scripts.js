/*!
* Start Bootstrap - Agency v7.0.4 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

let sliderContainer = document.getElementById('slider-container');
let sliderScrollWidth = sliderContainer.scrollWidth - sliderContainer.clientWidth;


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

    //autoscroll
    let toRight = true;
    self.setInterval(() => {
        if (toRight) {
            if (sliderContainer.scrollLeft === sliderScrollWidth) {
                toRight = false;
            }
        }
        else {
            if (sliderContainer.scrollLeft === 0) {
                toRight = true;
            }
        }

        if (toRight){
            sliderContainer.scrollTo(sliderContainer.scrollLeft + 1, 0);
        }
        else {
            sliderContainer.scrollTo(sliderContainer.scrollLeft - 1, 0);
        }

        
      }, 15);

});

window.onresize = () => {
    sliderContainer = document.getElementById('slider-container');
    sliderScrollWidth = sliderContainer.scrollWidth - sliderContainer.clientWidth;
}