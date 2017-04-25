var buttons = ["Riverrun", "Past", "Eve", "and", "Adam's", "from", "swerve", "of", "shore", "to", "bend", 
"of", "bay"];

function renderButtons() {


        $("#buttons-view").empty();
        
        for (var i = 0; i < buttons.length; i++){

          $("#buttons-view").append("<button>"+ buttons[i]);
        }

        
      }

      $("#add-button").on("click", function(event) {
      
        event.preventDefault();
    
       var theButton = $("#button-input").val();

       console.log(theButton);


       buttons.push(theButton);

        //$("#add-movie").
     
        renderButtons();
      });


      renderButtons();