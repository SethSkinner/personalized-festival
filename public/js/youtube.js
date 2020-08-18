$(document).ready(function(){
    var API_KEY = 'AIzaSyBqnUPy6o1c-V4MGOw_1GcCueLKFJOSo5s'

    $('form').submit(function (event) {
        event.preventDefault()

        var video = ''

        var search = $('#search').val()
        
        videoSearch(API_KEY,search,1)
    })

    function videoSearch(key,search,maxResults) {

$('#videos').empty()

        $.get('https://www.googleapis.com/youtube/v3/search?key='+ API_KEY + '&type=video&part=snippet&maxResults=' + maxResults +
         '&q=' + search,function(data){
            console.log(data)

        })
    }
})