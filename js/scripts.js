  
    <!-- Tooltip script-->
    <!--<script>
        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();
        });
    </script>-->
    
    <!-- JS sxcript for play and pause buttons-->
    <!--<script>
        $(document).ready(function(){
            $("#mycarousel").carousel( { interval: 2000 } );
            $("#carousel-pause").click(function(){
                $("#mycarousel").carousel('pause');
            });
            $("#carousel-play").click(function(){
                $("#mycarousel").carousel('cycle');
            });
        });
    </script>-->

    <!-- JS script for play and pause with one button-->
    <script>-->
            $("#carouselButton").click(function(){
            if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                $("#mycarousel").carousel('pause');
                $("#carouselButton").children("span").removeClass('fa-pause');
                $("#carouselButton").children("span").addClass('fa-play');
            }
            else if ($("#carouselButton").children("span").hasClass('fa-play')){
                $("#mycarousel").carousel('cycle');
                $("#carouselButton").children("span").removeClass('fa-play');
                $("#carouselButton").children("span").addClass('fa-pause');                    
            }
        });
    </script>-->


    <!-- JS script for open the login modal-->
    <script>
        $(document).ready(function(){
            $("#loginid").click(function(){
                $("#loginModal").modal('toggle');
            });
        });
    </script>

    <!-- JS script for open the table reservation modal-->
    <script>
        $(document).ready(function(){
            $("#Reservebtn").click(function(){
                $("#ReserveModal").modal('toggle');
            });
        });
    </script>
    
    <!--<script>
        $("#loginid").click(function(){
                $('#loginModal').modal('show')
            });
        $("#Reservebtn").click(function(){
                $('#ReserveModal').modal('show')
            });
    </script>-->