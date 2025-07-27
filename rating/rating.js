$(document).ready(function() {
    let selectedRating = 0;


$(".rating span").on("mouseenter", (event)=>{
      // console.log($(event.target).data('value'));

// for each rating add a class to change the color 
  $(".rating span").each(function(index) {
    let value = $(event.target).data("value");
      $(this).toggleClass("hover", index < value)


  })



  //when mouse leave/out - remove class 
$(".rating span").on("mouseleave", function(){
     $(".rating span").removeClass("hover")

  }) 
  // when a star is clicked - set the selectRating to the data
  $(".rating span").on("click", function () {
    selectedRating = $(this).data("value");

    // Optional: show selected value in a text element
    $("#rating-value").text("Selected Rating: " + selectedRating);

    // Update the selected state visually
    $(".rating span").each(function () {

      $(this).toggleClass("selected", $(this).data("value") <= selectedRating);
    });

})

})
  })


  //   $(".rating span").on("mouseenter", function() {
  //     let hoverValue = $(this).data("value");
  //     // Highlight all stars up to the hovered one
  //     $(".rating span").each(function() {
  //       if ($(this).data("value") <= hoverValue) {
  //         $(this).addClass("hovered");
  //       } else {
  //         $(this).removeClass("hovered");
  //       }
  //     });
  //   });
  
  //   $(".rating span").on("mouseleave", function() {
  //     // Remove hover highlight when not hovering
  //     $(".rating span").removeClass("hovered");
  
  //     // Restore the selected rating highlight
  //     highlightStars(selectedRating);
  //   });
  
  //   $(".rating span").on("click", function() {
  //     selectedRating = $(this).data("value");
  //     $("#rating-value").text("Selected Rating: " + selectedRating);
  //     highlightStars(selectedRating);
  //   });
  
  //   function highlightStars(rating) {
  //     $(".rating span").each(function() {
  //       if ($(this).data("value") <= rating) {
  //         $(this).addClass("selected");
  //       } else {
  //         $(this).removeClass("selected");
  //       }
  //     });
  //   }
  // });