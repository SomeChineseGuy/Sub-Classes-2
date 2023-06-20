// console.log(document)

// const boxOne = document.getElementById('box-one')

// boxOne.addEventListener('click', () => {
//   console.log('Fire');
//   // Create a new P Tag
//   const pTag = document.createElement("p");
//   // Create the Text in the P tag
//   const node = document.createTextNode("This new text");
//   // Place the node into my ptag
//   pTag.appendChild(node);
//   // Find the Results
//   const results = document.getElementById('results');
//   // Place the P tag into the results
//   results.appendChild(pTag);
// })


$(document).ready(function() {
  // step one: Target
  // step two: Add event listener
  // step three: Effect
  $('#box-container .box-two').on('click', () => {
    $('#results').append("<p>This is new text</p>");
  });

  $('.box-one').on('click', () => {
    $('.box-two').slideUp();
  })


});