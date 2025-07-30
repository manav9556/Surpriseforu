let currentAudio = null;

// Play sound based on key
function makeSound(key) {
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

// Button click → sound
document.querySelectorAll(".b1").forEach(function (button) {
  button.addEventListener("click", function () {
    const key = this.dataset.key; // read data-key="h", "b", etc.
    makeSound(key);
    input.focus(); // refocus after button click
  });
});

// Physical keyboard
document.addEventListener("keypress", function (e) {
  makeSound(e.key.toLowerCase());
});

// Mobile input
const input = document.getElementById("hiddenInput");
input.addEventListener("input", function () {
  makeSound(this.value.toLowerCase());
  this.value = "";
});

// Focus input on any screen tap or touch
function focusInput() {
  if (document.activeElement !== input) {
    input.focus();
  }
}

document.addEventListener("click", focusInput);
document.addEventListener("touchstart", focusInput); // For mobile

// Optional: Focus on load
window.addEventListener("load", () => {
  setTimeout(() => input.focus(), 300);
});
