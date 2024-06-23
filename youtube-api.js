/*  Powered by S.O.A.K  */
/*--==========================================
   ____  _____  ______ ___  ___
  |     |  _  ||	    ||   /  /
  |____ | | | ||	___ ||     /
       || |_| ||	    ||     \
   ____||_____||	    ||__|\__\
===========================================*/

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('YTD-player', {
    height: "100%",
    width: "100%",
    videoId: 'xhsN_36OW4w',
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  //event.target.playVideo();
  //if the syntax in line 28 exist, the player will auto plays the video when the page get refreshed
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    //if the stopVideo syntax exist, the player will auto stop the video right after it played 6 seconds
    //setTimeout(stopVideo, 6000);
    done = true;
  }
}
/*
function stopVideo() {
  player.stopVideo();
}
*/