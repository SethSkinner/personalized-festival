$(document).ready(() => {
  const API_KEY = "AIzaSyB8RKx81I_wLM5TZa2jNR6Jd8j04yYypsI";

  $("form").submit((event) => {
    event.preventDefault()

    const search = $('#search').val()
    handleSongFormSubmit();
    videoSearch(API_KEY, search, 1);
  });

  const songInput = $("#search");

  function handleSongFormSubmit() {
    // Don't do anything if the name fields hasn't been filled out
    if (!songInput.val()) {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
    upsertSong({
      name: songInput.val().trim()
    });
  }

  // A function for creating a song.
  function upsertSong(songData) {
    $.post("/api/songs", songData).then(dbSong => {
      res.json(dbSong);
    });
  }

  function videoSearch(API_KEY, search, maxResults) {
    $("#videos").empty();

    $.get("https://www.googleapis.com/youtube/v3/search?key="+ API_KEY + "&type=video&part=snippet&maxResults=" + maxResults +
         "&q=" + search, (data) => {
      console.log(data);
      console.log(data.items[0].id.videoId);

      data.items.forEach(item => {
        video = `
                <iframe width='420' height='315' src='http://www.youtube.com/embed/${item.id.videoId}' frameboarder='0' allowfullscreen></iframe>`;

        $('#videos').append(video)
        });
      })
    }
});
