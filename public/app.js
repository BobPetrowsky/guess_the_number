var randomNum = (Math.floor(Math.random() * 100) + 1);
$(function(){

var count = 0;

$("#form").on('submit', function(event)  {
    count += 1;
    event.preventDefault();
    var guess = parseInt($("input:first").val());
  if (guess < 1 || guess > 100) {
    $("span").text("You must guess a number between 1 and 100!")
  }
  else {
    if (guess > randomNum) {
      $( "span" ).text(guess +" is too high!").show();
    }
    if (guess < randomNum) {
      $( "span" ).text(guess +" is too Low!").show();
    }
    if (guess === randomNum) {
      $( "span" ).text("You won in "+ count +" guess(es)!").show();
      alert("restart the game?!?")
      location.reload();
    }
  }
})
})


// event.preventDefault();
//   var guess = parsInt($("#number").value);


// while (guess != randomNum) {
//   if (guess > randomNum) {
//     alert("Too high!");
//   }
//   else {
//     alert("Too Low!")
//   }
// }
