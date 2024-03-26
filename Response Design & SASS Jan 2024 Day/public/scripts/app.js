// Client facing scripts here
$(document).ready(() => {
  $('.hamburger').on('click', () => {
    // $('.menu-container-mobile').slideDown();
    $('.menu-container-mobile').addClass('active');
  })

  $('.x').on('click', () => {
    // $('.menu-container-mobile').slideUp();
    $('.menu-container-mobile').removeClass('active');
  })
})