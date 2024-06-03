// Client facing scripts here
$(document).ready(() => {
  $('.hamburger-container').click(() => {
    $('.navbar-container-mobile').removeClass('hide')
  })

  $('.x-container').click(() => {
    $('.navbar-container-mobile').addClass('hide')
  })
})