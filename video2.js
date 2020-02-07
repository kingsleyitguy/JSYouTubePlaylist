    /**
     * Put your video IDs in this array
     */
    var videoIDs = [
        'XpaexY7JaKw',
        'fcTsMirQoG0',
        'B0DrWAUsNSc'
    ];

    var player, currentVideoId = 0;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('video', {
            height: '390',
            width: '640',
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }

    function onPlayerReady(event) {
        event.target.loadVideoById(videoIDs[currentVideoId]);
    }

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
            currentVideoId++;
            if (currentVideoId < videoIDs.length) {
                player.loadVideoById(videoIDs[currentVideoId]);
            }
        }
    }

    $('#next').on('click', function () {
        player.nextVideo()
    });
    
    $('#prev').on('click', function () {
        player.previousVideo()
    });