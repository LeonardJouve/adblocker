const handle = () => {
    const videoContainer = document.getElementById("movie_player");
    const videoPlayer = document.querySelector("video.video-stream") as HTMLVideoElement;

    if (!videoContainer || !videoPlayer) return;

    const hasAd = videoContainer.classList.contains("ad-showing");

    if (!hasAd) return;

    videoPlayer.currentTime = videoPlayer.duration - 0.1;
    videoPlayer.play();
};

setInterval(handle, 150);
