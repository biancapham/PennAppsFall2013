// Get the Data from our Database


$.ajax({   
    url: "/api/flyers", 
    success: function( data ) {
        // for everything inside data (every elemetn)

        // for every flyer, add them to the page
        for (var i=0;i<data.flyers.length;i++) {

            $("#events-grid-list").append(
                '<li class="flip-container" ontouchstart="this.classList.toggle(\'hover\');"> \
            <div class="flipper"> \
                <div class="front" style="background-image: url(' + data.flyers[i].image +');"> \
                </div> \
                <div class="back">' +
                    '<h2>' + data.flyers[i].name +'</h2>' +
                    '<h2>' + data.flyers[i].date +'</h2>' +
                    '<p>' + data.flyers[i].description +'</p>' +
                '</div> \
            </div> \
        </li>');

        }
    }
});

$(document).ready(function(){
    $( "#dialog-form" ).hide().dialog({
      autoOpen: false,
      height: 300,
      width: 350,
      modal: true,
      buttons: {
        "Add a Flyer": function() {
            $.ajax({  
                type: "POST",  
                url: "create",  
                data: {title: $("#title").val(), image: $("#image").val(), 
                date: $("#date").val(), description: $("#description").val()},  
                success: function() {

                } 
            });  
        },
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      },
      close: function() {
        allFields.val( "" ).removeClass( "ui-state-error" );
      }
    });
 
    $( "#add" )
      .button()
      .click(function() {
        $( "#dialog-form" ).dialog( "open" );
      });
  });