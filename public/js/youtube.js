$(document).ready(() => {
  const API_KEY = "AIzaSyB8RKx81I_wLM5TZa2jNR6Jd8j04yYypsI";

  $("form").submit((event) => {
    event.preventDefault()

    const search = $('#search').val()

    videoSearch(API_KEY, search, 1);
  });

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
