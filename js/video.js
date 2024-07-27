var videoUrls = ["https://jx.iqfk.top/api/sjsp.php?video=1", "https://jx.iqfk.top/api/sjsp.php?video=2", "https://jx.iqfk.top/api/sjsp.php?video=3"];
var currentVideoIndex = 0;
var videoPlayers = document.getElementsByClassName('videoPlayer');

function togglePlayPause() {
    for (var i = 0; i < videoPlayers.length; i++) {
        var videoPlayer = videoPlayers[i];
        if (videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
    }
}

function playNextVideo() {
    for (var i = 0; i < videoPlayers.length; i++) {
        var videoPlayer = videoPlayers[i];
        if (currentVideoIndex < videoUrls.length - 1) {
            currentVideoIndex++;
            videoPlayer.src = videoUrls[currentVideoIndex];
            videoPlayer.load();
            videoPlayer.play();
        } else {
            currentVideoIndex = 0;
            videoPlayer.src = videoUrls[currentVideoIndex];
            videoPlayer.load();
            videoPlayer.play();
        }
    }
}

for (var i = 0; i < videoPlayers.length; i++) {
    videoPlayers[i].src = videoUrls[currentVideoIndex];
    videoPlayers[i].load();
}
// var myvideo = document.getElementById("bg-video");
// myvideo.addEventListener("click", function () {
//     if (myvideo.muted == true) {
//         myvideo.play();
//         myvideo.muted = false;
//     } else {
//         myvideo.muted = true;
//     }
// });