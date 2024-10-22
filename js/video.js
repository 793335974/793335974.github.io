var videoUrls = 'https://jx.iqfk.top/api/sjsp.php';
var myvideo = document.querySelector('.videoPlayer');
function togglePlayPause() {
    if (myvideo) {
        myvideo.paused ? myvideo.play() : myvideo.pause();
    } else {
        console.error('没有找到具有 videoPlayer 类名的元素');
    }
}
function playNextVideo() {
    if (myvideo) {
        myvideo.src = videoUrls;
        myvideo.load();
        myvideo.play();
    } else {
        console.error('没有找到具有 videoPlayer 类名的元素');
    }
}

const btnmei = document.getElementById('btnmei');
const btnfei = document.getElementById('btnfei');
const btnmuyu = document.getElementById('btnmuyu');
const audio = document.getElementById('audio');

btnmei.addEventListener('click', function () {
    audio.src = './mp3/1.mp3'
    audio.play();

});

btnfei.addEventListener('click', function () {
    audio.src = './mp3/2.aac'
    audio.play();
});
btnmuyu.addEventListener('click', function () {
    btnmuyu.innerHTML = '功德+1'
    audio.src = './mp3/3.mp3'
    audio.play();
});