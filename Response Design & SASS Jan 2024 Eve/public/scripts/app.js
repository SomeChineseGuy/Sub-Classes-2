// Client facing scripts here
$(document).ready(() => {
  $('.hamburger').click(() => {
    // $('.menu-container-mobile').slideDown()
    $('.menu-container-mobile').addClass('active')
  })
  $('.x').click(() => {
    // $('.menu-container-mobile').slideUp()
    $('.menu-container-mobile').removeClass('active')
  })
})