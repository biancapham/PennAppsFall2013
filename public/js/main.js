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

$(document).ready(function() {

$("#create").click(function() {
    $.ajax({  
                type: "POST",  
                url: "create",  
                data: {title: $("#title").val(), image: $("#image").val(), 
                date: $("#date").val(), description: $("#description").val()},  
                success: function() {} 
            }); 
    console.log("hello");
    $.magnificPopup.close();
    return false;
})

    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });
});
