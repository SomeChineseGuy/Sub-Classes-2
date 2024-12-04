const htmlElement = `
  <div> <h1>This is NEW Content</h1></div>
`

$(document).ready(() => {
  // jQuery 3 step method
  // Step one Target
  // Step two Add event listener
  // Step three Add effect - create, read, update, delete HTML/CSS

  // $('.box').on('click', ()=> {
  //   // $('.box').css('background-color', 'white')
  //   // $('.box').append('<p>This is new</p>')
  //   // $('.box h1').text('New Text!')
  //   $('.box').after(htmlElement)
  // })

  $('.box').on('mouseenter', () => {
    $('.results').append('<p class="red"> You just hovered the box! </p>')
  })

  $('.box').on('mouseleave', () => {
    $('.results').prepend('<p>You just Left the box </p>')
  })

  $('.text-area').on('keyup', () => {
    const userInput = $('.text-area').val();
    console.log(userInput)
  })

  $('.url-form').on('submit', (event) => {
    event.preventDefault();
    const userInput = $('.url').val();
    $('.url').val("")

    // Adding new HTML
    // $('.results').append(`<p> ${userInput} </p>`)
    

    // Update classes in HTML
    // $('.box').addClass(userInput)

    // Change the CSS
    $('.box').css("background", userInput)
  })

  $('.box').on('click', () => {
    // $('.menu').addClass('hide')
    // $('.menu').removeClass('hide')
    // $('.menu').toggleClass('hide')
    $('.menu').slideUp()
  })

})