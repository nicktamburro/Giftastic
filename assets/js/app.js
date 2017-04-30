$(document).ready(function(){

    $("button").on('click', function() {
        var buttonWord = $(this).data('name');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + buttonWord + "&api_key=dc6zaTOxFJmzC";
        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .done(function(response) {


                console.log(response)

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var gifDiv = $('<div/>');

                    var rating =$('<div/>');

                    rating.text(results[i].rating);

                    var gif = $('<img/>');

                    gif.addClass('myImg')

                    gif.attr('src', results[i].images.fixed_height.url);

                    gif.attr('data-still', results[i].images.fixed_height_still.url)

                    gif.attr('data-animate', results[i].images.fixed_height.url)

                    gif.attr('data-state', 'still');

                    gifDiv.append(rating);

                    gifDiv.append(gif);

                    gifDiv.prependTo($('#gifs-here'));
                }

                $('.myImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });
    });

    var buttons = [''];

    function renderButtons() {
        $("#buttons-view").empty();
        for (var i = 0; i < buttons.length; i++){

          $("#buttons-view").append("<button>"+ buttons[i]);
//loops through and adds a button for each array item
        } 
      }//renderButtonsEND


        $('#add-button').on('click', function(event){
            event.preventDefault();
            var theButton = $("#button-input").val();

            buttons.push(theButton);
         $("#button-input").val("");


          //gif.attr('data-name',image).html(image);
            
            $("#buttons-view").append("<button>" + theButton);
            $("button").addClass("btn btn-info").attr("data-name");


            queryURL = "https://api.giphy.com/v1/gifs/search?q=" + theButton + "&api_key=dc6zaTOxFJmzC&limit=10";
                console.log(theButton);
            $.ajax({
            url: queryURL,
            method: 'GET'
            })

            .done(function(response) {

            var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var gifDiv = $('<div/>');

                    var rating =$('<p/>');

                    rating.text(results[i].rating);

                    var gif = $('<img/>');

                    gif.addClass('myImg')

                    gif.attr('src', results[i].images.fixed_height_still.url);

                    gif.attr('data-still', results[i].images.fixed_height_still.url)

                    gif.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    gifDiv.append(rating);

                    gifDiv.append(gif);

                    gifDiv.prependTo($('#gifs-here'));
                }

            //    $('.myImg').on('click', function() {
            
            $(document).on("click", ".myImg", function(){
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                  }
                    })      
                });
            });

            $("#button-input").val("");
            //return false;
        })
  //$(document).on("click", "button", renderButtons());
    //put the ajax inside a function, Giphy here, 
//});

//$(document).on("click" function(){

//}