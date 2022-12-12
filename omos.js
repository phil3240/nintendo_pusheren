const vidContainer = document.querySelector(".video-player");
const vid = document.querySelector(".video-player video");
const btn = document.querySelector(".video-player-button");

function togglePlay() {
  if (vid.paused) {
    vid.play();
    btn.textContent = "Pause";
    vidContainer.classList.add("playing");
  } else {
    vid.pause();
    btn.textContent = "Play";
    vidContainer.classList.remove("playing");
  }
}

function videoEnded() {
  btn.textContent = "Play";
}

btn.addEventListener("click", togglePlay);
vid.addEventListener("ended", videoEnded);
