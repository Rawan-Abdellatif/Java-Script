// $ -alias
// jQuery
// const $elementfromDOM =$('.someclass');

// $elementfromDOM.hide()
// let $variableName=targetElement; 

//select an item 
let $title = $("#headertitle")
console.log($title)

$("#headertitle").on("click",()=>{
    $("#headertitle").hide()

})
$("#description").on("click",()=>{
    $("#description").show()
    
})
// $(".lorem").on("mouseenter",function(){
//     $(".lorem").text("This is text you can read!")
//     $(".lorem").css('font-style', 'italic');
//     }).on("mouseleave", ()=>{
//     $(".lorem").text("The mouse left");
//     $(".lorem").css({
//          color: "red",
//          "background-color": "grey"
    
//         }    )
// })
$(".lorem").on("mouseover",function(){
        $(".lorem").text("This is text you can read!")
        $(".lorem").addClass("newClass");
        }).on("mouseout", ()=>{
        $(".lorem").text("The mouse left");
        $(".lorem").removeClass("newClass")
    })

$("#fadebtn").on("click",()=>{
    $("#fadecontext").fadeIn(5000);
    // $("#fadecontext").fadeOut(2000); 
    // $("#fadecontext").fadeToggle('fast'); 
    // $("#fadecontext").slideToggle('fast'); 

})

// $("div").siblings().children.css(
//        "color","red"
//     )
    
$("div").siblings().on("click",(event)=>{
    $(event.currentTarget).cs("color","purple");
    console.log($(event.currentTarget))
})
    
// $(document).ready(function() {
//     let selectedRating = 0;
  
//     $(".rating span").on("mouseenter", function() {
//       let hoverValue = $(this).data("value");
//       // Highlight all stars up to the hovered one
//       $(".rating span").each(function() {
//         if ($(this).data("value") <= hoverValue) {
//           $(this).addClass("hovered");
//         } else {
//           $(this).removeClass("hovered");
//         }
//       });
//     });
  
//     $(".rating span").on("mouseleave", function() {
//       // Remove hover highlight when not hovering
//       $(".rating span").removeClass("hovered");
  
//       // Restore the selected rating highlight
//       highlightStars(selectedRating);
//     });
  
//     $(".rating span").on("click", function() {
//       selectedRating = $(this).data("value");
//       $("#rating-value").text("Selected Rating: " + selectedRating);
//       highlightStars(selectedRating);
//     });
  
//     function highlightStars(rating) {
//       $(".rating span").each(function() {
//         if ($(this).data("value") <= rating) {
//           $(this).addClass("selected");
//         } else {
//           $(this).removeClass("selected");
//         }
//       });
//     }
//   });
  