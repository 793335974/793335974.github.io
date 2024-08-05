var videoUrls = 'https://jx.iqfk.top/api/sjsp.php';
var myvideo = document.querySelector('.videoPlayer');
function togglePlayPause(){
    if (myvideo) {
        myvideo.paused ? myvideo.play() : myvideo.pause();
    } else {
        console.error('没有找到具有 videoPlayer 类名的元素');
    }
}
function playNextVideo(){
    if (myvideo) {
        myvideo.src = videoUrls;
        myvideo.load();
        myvideo.play();
    } else {
        console.error('没有找到具有 videoPlayer 类名的元素');
    }
}