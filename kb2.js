var currentAudio = null;

// Play sound on button click
document.querySelectorAll(".b1").forEach(function (button) {
  button.addEventListener("click", function () {
    var key = this.classList[2]; // e.g., 'h', 'b', 'd'
    makeSound(key);
  });
});

// Listen to physical keyboard
document.addEventListener("keypress", function (event) {
  makeSound(event.key.toLowerCase());
});

// Listen to mobile on-screen keyboard using input
document.getElementById("hiddenInput").addEventListener("input", function () {
  const val = this.value.toLowerCase();
  makeSound(val);
  this.value = ""; // clear input for next key
});

function makeSound(key) {
  // Stop previous sound
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  switch (key) {
    case "h":
      currentAudio = new Audio("New folder/bar-bar-din-ye-aaye-tum-jio-hazaro-saal_1.mp3");
      break;
    case "b":
      currentAudio = new Audio("New folder/tum-mile-tum-mile-1.mp3");
      break;
    case "d":
      currentAudio = new Audio("New folder/Tera Birthday Aaya Hai 1.mp3");
      break;
    case "a":
      currentAudio = new Audio("New folder/audiokb.mp3");
      break;
    case "k":
      currentAudio = new Audio("New folder/hum-dono-yun-mile.mp3");
      break;
    default:
      return;
  }

  currentAudio.play();
}

// Re-focus input when page loads
document.addEventListener("click", function () {
  input.focus(); // After user taps anywhere
});
