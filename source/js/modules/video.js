const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

document.getElementById('to-play').addEventListener('click', function () {
  player = new YT.Player('player', {
    playerVars: {
      'autoplay': 0,
      'controls': 0,
      'playsinline': 1,
    },
    videoId: '9TZXsZItgdw',
    events: {
      'onReady': onPlayerReady,
    },
  });
  document.querySelector('.gym__video-button').classList.add('video-plays');
  document.querySelector('.gym__video-rpeview').classList.add('video-plays');
});

function onPlayerReady(event) {
  event.target.playVideo();
}
