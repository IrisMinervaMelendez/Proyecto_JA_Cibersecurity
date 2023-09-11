function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav(){
    document.getElementById('mobile-menu').style.width = "0%";
}


document.addEventListener("DOMContentLoaded", function () {
    var videoPlayer = document.getElementById("videoPlayer");
    var myVideo = document.getElementById("myVideo");
    var videoContainer = document.getElementById("videoContainer"); 

    function stopVideo() {
        if (document.fullscreenElement === null || document.exitFullscreen) {
            document.exitFullscreen(); 
        }
        videoPlayer.style.display = "none";
        myVideo.pause();
    }

    function playVideo(file) {
        videoPlayer.style.display = "block";
        myVideo.src = file;
        myVideo.play();
        videoContainer.requestFullscreen(); 
    }

    var playButtons = document.querySelectorAll(".play-btn");
    playButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var videoFile = this.dataset.video;
            playVideo(videoFile);
        });
    });

    document.addEventListener("fullscreenchange", function () {
        if (!document.fullscreenElement) {
            stopVideo();
        }
    });
});
