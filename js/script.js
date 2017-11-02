// "use scrict";

$(document).ready(function() {




    document.querySelector('#modal_form_mobile').onclick = function() {
        var c = this.getBoundingClientRect();
        console.log('top:' + c.top + ' left: ' + c.left +'');
    };

    function popupFunc() {

        $(".popup").click(function(){
            $("body main .sliderContainer__slides li div .popup .popuptext").toggleClass("show");
        });
    };

    popupFunc();


    // Big slider //


    var width = $(".sliderContainer").width();

    $(".sliderContainer__slides>li").width(width);
    $(".sliderContainer__slides").width(width * $(".sliderContainer__slides>li").length);

    $(".sliderContainer__slides").css("left", -width);
    $(".sliderContainer__slides>li:last-child").prependTo('.sliderContainer__slides');

    function nextSlide() {
        $(".sliderContainer__slides").stop(true, true).animate({
            "margin-left": -width
        }, 800, function() {
            $(".sliderContainer__slides>li:first-child").appendTo('.sliderContainer__slides');
            $(".sliderContainer__slides").css("margin-left", 0);

        });
    }


    function prevSlide() {
        $(".sliderContainer__slides").stop(true, true).animate({
            "margin-left": width
        }, 800, function() {
            $(".sliderContainer__slides>li:last-child").prependTo('.sliderContainer__slides');
            $(".sliderContainer__slides").css("margin-left", 0);
        });
    }

    $(".sliderContainer__buttons_next").click(nextSlide);
    $(".sliderContainer__buttons_prev").click(prevSlide);



// End of big slider //
// small slider with 3 images

// delete margin betwen in small slider betwen images

    function myFunction() {
        var x = document.getElementById("demo");
        console.log(x);

        if (window.matchMedia("(max-width: 785px)").matches) {
            // console.log("<785");
            $(".smallsliderContainer__slides>li").width(smallwidth/3);

            } else {
            $(".smallsliderContainer__slides>li").width(smallwidth/3 - 4);
            // console.log(">785");
        }
    }

//End of deleting margin

    var smallwidth = $(".smallsliderContainer").width();

    $(".smallsliderContainer__slides").width(smallwidth * $(".smallsliderContainer__slides>li").length);

    $(".smallsliderContainer__slides").css("left", -smallwidth);
    $(".smallsliderContainer__slides>li:last-child").prependTo('.smallsliderContainer__slides');

    function smallnextSlide() {
        $(".smallsliderContainer__slides").stop(true, true).animate({
            "margin-left": -smallwidth
        }, 800, function() {
            $(".smallsliderContainer__slides>li:nth-child(3)").appendTo('.smallsliderContainer__slides');
            $(".smallsliderContainer__slides>li:nth-child(2)").appendTo('.smallsliderContainer__slides');
            $(".smallsliderContainer__slides>li:nth-child(1)").appendTo('.smallsliderContainer__slides');
            $(".smallsliderContainer__slides").css("margin-left", 0);

        });
    }

    function smallprevSlide() {
        $(".smallsliderContainer__slides").stop(true, true).animate({
            "margin-left": smallwidth
        }, 800, function() {
            $(".smallsliderContainer__slides>li:nth-child(9)").prependTo('.smallsliderContainer__slides');
            $(".smallsliderContainer__slides>li:nth-child(8)").prependTo('.smallsliderContainer__slides');
            $(".smallsliderContainer__slides>li:nth-child(7)").prependTo('.smallsliderContainer__slides');
            $(".smallsliderContainer__slides").css("margin-left", 0);
        });

    }

    $(".smallsliderContainer__buttons_next,.buttonsToClickNext").click(smallnextSlide);
    $(".smallsliderContainer__buttons_prev,.buttonsToClickPrev").click(smallprevSlide);

    myFunction();

    // modal desktop


    $('.modal').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#modal_form')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('#modal_close,.close').click( function(){
        $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });

    //End of modal desktop
    // modal mobile


    $('.modal_mobile').click( function(event){

        event.preventDefault();
        $('#overlay_mobile').fadeIn(400,
            function(){
                $('#modal_form_mobile')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });

    });


    $('#modal_close_mobile,.close_mobile').click( function(){
        $('#modal_form_mobile')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay_mobile').fadeOut(400);
                }
            );
    });


    //End of modal mobile


//     $("#popUP").on("click", "a", function (event) {
//         event.preventDefault();
//         var id = $(this).attr('href')
//             , top = $(id).offset().top;
//         $('body,html').animate({
//             scrollTop: top
//         }, 1000); // время, за которое будет осуществлена прокрутка.
// });
//



});