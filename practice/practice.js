$(document).ready(function() {
    $('.answer').hide(); 
  
    $('.question').on('click', function() {
      $(this).next('.answer').slideToggle(); 
    });
  });
  
// $(document).ready(function () {
//   $('.answer').hide();

//   $('.question').on('click', function () {
//     $('.answer').slideUp(); // hide all
//     $(this).next('.answer').slideDown(); // show only one
//   });
// });
