var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtubePlayer', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerStateChange(event) {
  // 비디오가 종료되었을 때
  if (event.data == YT.PlayerState.ENDED) {
    player.seekTo(0); // 비디오의 시작으로 이동
    player.playVideo(); // 비디오 재생
  }
}
