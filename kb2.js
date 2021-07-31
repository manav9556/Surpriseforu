var numberOfDrumButtons = document.querySelectorAll(".b1").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".b1")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    

  });

document.addEventListener("keypress", function(event) {

  makeSound(event.key);



});
function makeSound(key) {

  switch (key) {
    case "h":
      var tom1 = new Audio("New folder/bar-bar-din-ye-aaye-tum-jio-hazaro-saal_1.mp3");
      tom1.play();
      break;

    case "b":
        
      var tom2 = new Audio("New folder/tum-mile-tum-mile-1.mp3");
      tom2.play();
      break;

    case "d":
       
      var tom3 = new Audio('New folder/Tera Birthday Aaya Hai 1.mp3');
      tom3.play();
      break;

    case "k":
      
      var tom4= new Audio('New folder/hum-dono-yun-mile.mp3');
      tom4.play();
      break;
    default: console.log(key);

  }
}

// var bt1=document.querySelector(".b1").addEventListener("click", function(){
//   var buttonInnerHTML = this.innerHTML;
// makeSound1(buttonInnerHTML);
// pauseVid(buttonInnerHTML)
// });
// function makeSound1()
// {
//   var audio = new Audio("New folder/tum jiyo hazaro saal .mp3");
// audio.play(); 

// }
// document.querySelector(".b2").addEventListener("click", function(){
//   var buttonInnerHTML2 = this.innerHTML;
// makeSound(buttonInnerHTML2);
//  makeSound1()==false

// });
// function makeSound()
// {
//   var audio = new Audio("New folder/Tum Mile - Tum Mile 128 Kbps.mp3");
// audio.play(); 
}
// 