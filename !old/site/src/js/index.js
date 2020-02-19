import "../scss/style.scss";

var radio = document.createElement("audio"),
  playBtn = document.getElementById("playpause"),
  volumeControl = document.getElementById("volume-control"),
  radioCounter = true;
radio.src = "http://momori.animenfo.com:8000/;stream.nsv&type=mp3";
radio.volume = 0.2;
radio.controls = true;
playBtn.addEventListener("click", function() {
  if (radioCounter) {
    radio.play();
    radioCounter = false;
  } else {
    radio.pause();
    radioCounter = true;
  }
});
volumeControl.addEventListener("change", function() {
  radio.volume = volumeControl.value / 100;
});
