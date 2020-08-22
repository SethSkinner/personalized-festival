$(document).ready(() => {
  //production key
  const API_KEY = 'AIzaSyDJ590q81TkArxpANKfHeVTa7l2xf0NnJU';
  //seth1
  //const API_KEY = "AIzaSyB8RKx81I_wLM5TZa2jNR6Jd8j04yYypsI";
  //Thomas1
  // const API_KEY = "AIzaSyBqnUPy6o1c-V4MGOw_1GcCueLKFJOSo5s";
  //Thomas2
  // const API_KEY = "AIzaSyALxc9zxI-pJp33r-9awOLo4AWY3wYydrQ";
  //Maria
  //const API_KEY = "AIzaSyC6dPvMs2eQxvcoGDRFHvgAhlQx0TqUNCA";

  // eslint-disable-next-line prettier/prettier
  $("#form1").submit((event) => {
    event.preventDefault();

    const search = $("#search").val();
    videoSearch(API_KEY, search, 1);
  });

  // const songInput = $("#search");

  // function handleSongFormSubmit() {
  //   // Don't do anything if the name fields hasn't been filled out
  //   if (!songInput.val()) {
  //     return;
  //   }
  //   // Calling the upsertAuthor function and passing in the value of the name input
  //   upsertSong({
  //     name: songInput.val().trim(),
  //     videoId: data.items[0].id.videoId
  //   });
  // }

  // A function for creating a song.
  function upsertSong(songData) {
    console.log(songData);
    $.post("/api/songs", songData);
  }
  
  
  function videoSearch(API_KEY, search, maxResults) {
    $.get(
      "https://www.googleapis.com/youtube/v3/search?key=" +
        API_KEY +
        "&type=video&part=snippet&maxResults=" +
        maxResults +
        "&q=" +
        search,
      // eslint-disable-next-line prettier/prettier
      (data) => {
        console.log(data);
        console.log(data.items[0].id.videoId);
        upsertSong({
          videoId: data.items[0].id.videoId,
          // eslint-disable-next-line prettier/prettier
          name: data.items[0].snippet.title,
        });
      }
    );
  }
  
}); 
 $.get("/api/song/videoId").then((data) => {
    console.log('hello')
    console.log(data);
    videoId =  data[0].videoId;
    videoId2 = data[1].videoId;
    videoId3 = data[2].videoId;
    videoId4 = data[3].videoId;
    videoId5 = data[4].videoId;
    videoId6 = data[5].videoId;
    videoId7 = data[6].videoId;
    videoId8 = data[7].videoId;
    videoId9 = data[8].videoId;

var YouTubePlayer = {
    current: 0,
    player: null,
    /**
     * Tracks ids here...
     */
    videos: [
        videoId,
        videoId2,
        videoId3,
    ],
    currentlyPlaying:function(){
        console.log(videoId);
        console.info('Current Track id', YouTubePlayer.videos[YouTubePlayer.current]);
        return YouTubePlayer.videos[YouTubePlayer.current];
    },
    playNext: function () {
        YouTubePlayer.increaseTrack()
        debugger
        if (YouTubePlayer.player) {
            YouTubePlayer.player.loadVideoById(YouTubePlayer.currentlyPlaying());
        } else {
            alert('Please Wait! Player is loading');
        }
    },
    playPrevious: function () {
        YouTubePlayer.decreaseTrack()
        if (YouTubePlayer.player) {
            YouTubePlayer.player.loadVideoById(YouTubePlayer.currentlyPlaying());
        } else {
            alert('Please Wait! Player is loading');
        }
  
    },
    increaseTrack: function () {
        YouTubePlayer.current = YouTubePlayer.current + 1;
        if (YouTubePlayer.current >= YouTubePlayer.videos.length) {
            YouTubePlayer.current = 0;
        }
    },
    decreaseTrack: function () {
        YouTubePlayer.current = Math.max(YouTubePlayer.current - 1, 0);
    },
    onReady: function (event) {
        event.target.loadVideoById(YouTubePlayer.currentlyPlaying());
    },
    onStateChange: function (event) {
        if (event.data == YT.PlayerState.ENDED) {
            YouTubePlayer.playNext();
        }
    }
  }
  var YouTubePlayer2 = {
    current2: 0,
    player2: null,
    /**
     * Tracks ids here...
     */
    videos2: [
        videoId4,
        videoId5,
        videoId6,
    ],
    currentlyPlaying2:function(){
        console.info('Current2 Track id', YouTubePlayer2.videos2[YouTubePlayer2.current2]);
        return YouTubePlayer2.videos2[YouTubePlayer2.current2];
    },
    playNext2: function () {
        YouTubePlayer2.increaseTrack2()
        debugger
        if (YouTubePlayer2.player2) {
            YouTubePlayer2.player2.loadVideoById(YouTubePlayer2.currentlyPlaying2());
        } else {
            alert('Please Wait! Player2 is loading');
        }
    },
    playPrevious2: function () {
        YouTubePlayer2.decreaseTrack2()
        if (YouTubePlayer2.player2) {
            YouTubePlayer2.player2.loadVideoById(YouTubePlayer2.currentlyPlaying2());
        } else {
            alert('Please Wait! Player2 is loading');
        }
  
    },
    increaseTrack2: function () {
        YouTubePlayer2.current2 = YouTubePlayer2.current2 + 1;
        if (YouTubePlayer2.current2 >= YouTubePlayer2.videos2.length) {
            YouTubePlayer2.current2 = 0;
        }
    },
    decreaseTrack2: function () {
        YouTubePlayer2.current2 = Math.max(YouTubePlayer2.current2 - 1, 0);
    },
    onReady2: function (event) {
        event.target.loadVideoById(YouTubePlayer2.currentlyPlaying2());
    },
    onStateChange2: function (event) {
        if (event.data == YT.PlayerState.ENDED) {
            YouTubePlayer2.playNext2();
        }
    }
  }
  
  var YouTubePlayer3 = {
    current3: 0,
    player3: null,
    /**
     * Tracks ids here...
     */
    videos3: [
        videoId7,
        videoId8,
        videoId9,
    ],
    currentlyPlaying3:function(){
        console.info('Current3 Track id', YouTubePlayer3.videos3[YouTubePlayer3.current3]);
        return YouTubePlayer3.videos3[YouTubePlayer3.current3];
    },
    playNext3: function () {
        YouTubePlayer3.increaseTrack3()
        debugger
        if (YouTubePlayer3.player3) {
            YouTubePlayer3.player3.loadVideoById(YouTubePlayer3.currentlyPlaying3());
        } else {
            alert('Please Wait! Player3 is loading');
        }
    },
    playPrevious3: function () {
        YouTubePlayer3.decreaseTrack3()
        if (YouTubePlayer3.player3) {
            YouTubePlayer3.player3.loadVideoById(YouTubePlayer3.currentlyPlaying3());
        } else {
            alert('Please Wait! Player3 is loading');
        }
  
    },
    increaseTrack3: function () {
        YouTubePlayer3.current3 = YouTubePlayer3.current3 + 1;
        if (YouTubePlayer3.current3 >= YouTubePlayer3.videos3.length) {
            YouTubePlayer3.current3 = 0;
        }
    },
    decreaseTrack3: function () {
        YouTubePlayer3.current3 = Math.max(YouTubePlayer3.current3 - 1, 0);
    },
    onReady3: function (event) {
        event.target.loadVideoById(YouTubePlayer3.currentlyPlaying3());
        YoutubePlayer3.pauseVideo();
    },
    onStateChange3: function (event) {
        if (event.data == YT.PlayerState.ENDED) {
            YouTubePlayer3.playNext3();
        }
    }
  }
  function onYouTubeIframeAPIReady() {
    YouTubePlayer.player = new YT.Player('youtube1', {
        height: '350',
        width: '425',
        events: {
            'onReady': YouTubePlayer.onReady,
            'onStateChange': YouTubePlayer.onStateChange
        }
    });
    YouTubePlayer2.player2 = new YT.Player('youtube2', {
      height: '350',
      width: '425',
      events: {
          'onReady': YouTubePlayer2.onReady2,
          'onStateChange': YouTubePlayer2.onStateChange2
      }
  });
  YouTubePlayer3.player3 = new YT.Player('youtube3', {
    height: '350',
    width: '425',
    events: {
        'onReady': YouTubePlayer3.onReady3,
        'onStateChange': YouTubePlayer3.onStateChange3
    }
  });
  };
  onYouTubeIframeAPIReady();
});