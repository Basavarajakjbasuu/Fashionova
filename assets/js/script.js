'use strict';

//model variables
const modal = document.querySelector('[data-modal]')
const modalCloseBtn = document.querySelector("[data-modal-close]");
const modalCloseOverlay = document.querySelector("[data-modal-overlay]");
// close function

const modalCloseFunc = function() {
  modal.classList.add('closed')
}


modalCloseBtn.addEventListener('click', modalCloseFunc)
modalCloseOverlay.addEventListener('click', modalCloseFunc)


// Notification toast variables
const notificationToast = document.querySelector('[data-toast]')
const toastCloseBtn = document.querySelector('[data-toast-close]');

// Adding eventListener close
toastCloseBtn.addEventListener('click', function () {
  console.log('u clicked');
  notificationToast.classList.add('closed')
})


// Mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.getElementById('data-mobile-menu-close-btn');
const overlay = document.querySelector('[data-overlay]');

for(let i=0; i<mobileMenuOpenBtn.length; i++) {

  //  mobile menu option
  const mobileMenuCloseFunc = function() {
    mobileMenu[i].classList.remove('active')
    overlay.classList.remove('active')
  }

  mobileMenuOpenBtn[i].addEventListener('click' , function() {
    console.log('menu clicked');
     mobileMenu[i].classList.add('active');
			overlay.classList.add('active');
  })

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc)
}

// Accordian Variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for(let i=0; i<accordionBtn.length; i++) {
  accordionBtn[i].addEventListener('click', function () {
    console.log('+CLICKED');
    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for(let i=0; i<accordion.length; i++) {
      if(clickedBtn) break;

      if(accordion[i].classList.contains('active')) {
        accordion[i].classList.remove('active')
        accordionBtn[i].classList.remove('active')
      }
    }

    this.nextElementSibling.classList.toggle('active');
		this.classList.toggle('active');

  })
}

