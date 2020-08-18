$(document).ready(function(){
    var API_KEY = 'AIzaSyBqnUPy6o1c-V4MGOw_1GcCueLKFJOSo5s'

    $('form').submit(function (event) {
        event.preventDefault()

        var video = ''

        var search = $('#search').val()
        
        videoSearch(API_KEY,search,1)
    })

    function videoSearch(API_KEY,search,maxResults) {

$('#videos').empty()

        $.get('https://www.googleapis.com/youtube/v3/search?key='+ API_KEY + '&type=video&part=snippet&maxResults=' + maxResults +
         '&q=' + search,function(data){
            console.log(data)

            data.items.forEach(item => {
                video = `
                <iframe width='420' height='315' src='http://www.youtube.com/embed/${item.id.videoId}' frameboarder='0' allowfullscreen></iframe>
                `

                $('#videos').append(video)
            })
        })
    }
})