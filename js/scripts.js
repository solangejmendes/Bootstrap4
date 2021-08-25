/* Tooltip script*/
/*$(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });*/

/* JS script for play and pause buttons*/
/*$(document).ready(function(){
        $("#mycarousel").carousel( { interval: 2000 } );
        $("#carousel-pause").click(function(){
            $("#mycarousel").carousel('pause');
        });
        $("#carousel-play").click(function(){
            $("#mycarousel").carousel('cycle');
        });
    });*/

/* JS script for play and pause with one button*/
    $("#carouselButton").click(function() {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        } else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    }); 


/* JS script for open the login modal*/
    $(document).ready(function() {
        $("#loginid").click(function() {
            $("#loginModal").modal('toggle');
        });
    }); 


/* JS script for open the table reservation modal*/
    $(document).ready(function() {
        $("#Reservebtn").click(function() {
            $("#ReserveModal").modal('toggle');
        });
    }); 


/*$("#loginid").click(function(){
            $('#loginModal').modal('show')
        });
    $("#Reservebtn").click(function(){
            $('#ReserveModal').modal('show')
        });*/