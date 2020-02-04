var tag = document.createElement('script'); 
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;
      var ctr = 0;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('video', {
          height: '390',
          width: '640',
          videoId: 'zmr2I8caF0c',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      function onPlayerReady(event) {
        event.target.playVideo();
      }

      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          //setTimeout(stopVideo, 6000);
          done = true;
        }
        if (event.data == YT.PlayerState.ENDED && done) {
           console.log("load another video");
           player.loadPlaylist(["XpaexY7JaKw","fcTsMirQoG0","B0DrWAUsNSc"],ctr);
           ctr++;          
        }

      }
      function stopVideo() {
        player.stopVideo();
      }