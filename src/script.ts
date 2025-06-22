document.addEventListener("loadedmetadata", (event) => {
    const videoContainer = document.getElementById("movie_player");
    const videoPlayer = event.target;

    if (!videoContainer || !videoPlayer || !(videoPlayer instanceof HTMLVideoElement)) return;

    const hasAd = videoContainer.classList.contains("ad-showing");

    if (!hasAd) return;

    videoPlayer.currentTime = videoPlayer.duration - 0.1;
    videoPlayer.play();
}, {capture: true});

