$(() => {
  // Step 1: Target 
  // Step 2: Event Listener
  // Step 3: Effect (CRUD HTML and/or CSS)
  const str = '<p>Hello how are you? </p>'
  const newStr = (item) => {
    return `<p>This is a new ${item}</p>`
  }
  $('.btn').click(() => {
    $('.results').append(newStr('value'))
    $('.results').append(newStr('chicken wing'))
    $('.results').append(newStr('apple pie'))
  })
})