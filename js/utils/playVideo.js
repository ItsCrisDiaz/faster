const VIDEO_PLAYER = document.querySelectorAll(".video-container");

const videoPlayFunction = function (element) {
  let fasterVideo = element.querySelector("video");
  let playVideoButton = element.querySelector(".play-button, .play-icon");
  playVideoButton.toggleAttribute("hidden");
  fasterVideo.loop = true;
  fasterVideo.play();
};

const videoPlay = function () {
  VIDEO_PLAYER.forEach((element) => {
    element.addEventListener("click", function (e) {
      if (e.target && e.target.matches(".play-button, .play-icon")) {
        videoPlayFunction(element);
      }
    });
  });
};

export default videoPlay;
