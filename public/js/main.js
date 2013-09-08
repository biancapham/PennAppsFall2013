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


// $( document ).ready(function() {
//     $(".circleimage").click(function( event ) {
 
//         alert( "Thanks for visiting!" );
 
//     });
// });



$


$('').find