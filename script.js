document.addEventListener("keydown", function (event) {
  playSound(event.key.toUpperCase());
});

document.addEventListener("keyup", function () {
  removePressedClass();
});

document.addEventListener("mousedown", function (event) {
  if (event.target.classList.contains("music")) {
    playSound(event.target.dataset.sound);
    addPressedClass(event.target);
  }
});

document.addEventListener("mouseup", function () {
  removePressedClass();
});

function playSound(sound) {
  var audio = new Audio(sound);
  audio.play();
}

function addPressedClass(element) {
  element.classList.add("pressed");
}

function removePressedClass() {
  var musical = document.querySelectorAll(".music");
  musical.forEach(function (music) {
    music.classList.remove("pressed"); 
  });
}
