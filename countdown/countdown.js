// $(document).ready(function() {

// let countdecrement = 20; //time left or time we start

// function startCounterDownFunc(){
//     if(countdecrement > 0){
//         $("#countdown").text(countdecrement);
//         countdecrement--;
//         setTimeout(startCounterDownFunc, 1000)
//     }else{
//         $("#countdown").text("Time UP!")
//     }

// }



// $("#startCountdown").on("click", function(){
//     startCounterDownFunc()
// })

// })
$(document).ready(function () {
    $("#startCountdown").on("click", function () {
      let timeLeft = 20;
  
      const intervalId = setInterval(function () {
        if (timeLeft > 0) {
          $("#countdown").text(timeLeft);
          timeLeft--;
        } else {
          $("#countdown").text("Time UP!");
          clearInterval(intervalId); // stop the interval
        }
      }, 1000);
    });
  });