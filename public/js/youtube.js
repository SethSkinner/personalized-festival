$(document).ready(() => {
  //seth1
   const API_KEY = "AIzaSyB8RKx81I_wLM5TZa2jNR6Jd8j04yYypsI";
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

var YouTubePlayer = {
  current: 0,
  player: null,
  /**
   * Tracks ids here...
   */
  videos: [
      'cpbbuaIA3Ds',
  'OtcdGkGusU0'
  ],
  currentlyPlaying:function(){
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
function onYouTubeIframeAPIReady() {
  YouTubePlayer.player = new YT.Player('youtube', {
      height: '350',
      width: '425',
      events: {
          'onReady': YouTubePlayer.onReady,
          'onStateChange': YouTubePlayer.onStateChange
      }
  });
}
var YouTubePlayer = {
  current: 0,
  player: null,
  /**
   * Tracks ids here...
   */
  videos: [
      'cpbbuaIA3Ds',
  'OtcdGkGusU0'
  ],
  currentlyPlaying:function(){
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
function onYouTubeIframeAPIReady() {
  YouTubePlayer.player = new YT.Player('youtube', {
      height: '350',
      width: '425',
      events: {
          'onReady': YouTubePlayer.onReady,
          'onStateChange': YouTubePlayer.onStateChange
      }
  });
}