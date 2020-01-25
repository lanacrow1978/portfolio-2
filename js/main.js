//language menu


$(document).ready(function(){


$("#language").on('click', function(event){
 event.stopPropagation();
 $(".dropdown-content").toggle();

});


$(document).on('click', function(event){
event.stopPropagation();
$(".dropdown-content").hide();      

});

});


// main menu

function openNav() {
  document.getElementById("mySidenav").style.width = "50.5%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}




//form validation

$(document).ready(function(){
        
        
        $('#contactform').validate({
            submitHandler: function(form) {
                
                var form=$('#contactform').serialize();
                var url=$('#contactform').attr('action');
                
                $('#overlay').fadeIn(1800);
                
                $.ajax({
                    type: 'post',
                    url: url,
                    data: form,
                    
                    success: function(responce){
                       $('#contactform').trigger("reset"); 
                        $('#overlay').fadeOut(1800);
                    }
                })
                
            }
        });
    });
 


/*back-home button on dorothy design and cv pages*/

$(document).ready(function() {
    
    var offset=100; //where the button appears
    var duration=500; //how long the scrolltop effect lasts
   
    $(window).scroll(function(){
    
       if($(this).scrollTop()>offset) {
           $('.home-button').fadeIn(duration);
       } else {
           $('.home-button').fadeOut(duration);
       }
    });
    
});


/*back to top button on the main page*/

$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
         
    //Click event scroll to top button jquery
     
    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},600);
        return false;
    });

});


// fading in portfolio section on scroll

$(document).ready(function(){
var $fadein = $(".fadein");

$fadein.waypoint(function(direction){
    if (direction == 'down'){
    $fadein.addClass('fadein-waypoint');
        } else {
      $fadein.removeClass('fadein-waypoint');      
        }
}, {offset: '50%'});
});

// jumping skill icons

$(document).ready(function(){
var $move = $(".movement");

$move.waypoint(function(direction){
    if (direction == 'down'){
    $move.addClass('movement-waypoint');
        } else {
      $move.removeClass('movement-waypoint');      
        }
}, {offset: '60%'});
});

//sliding in the tech skills diagram

$(document).ready(function(){

var $slideInLeft = $(".slidein-left");

$slideInLeft.waypoint(function(direction){
    if (direction == 'down'){
    $slideInLeft.addClass('diagram-animate-left');
        } else {
      $slideInLeft.removeClass('diagram-animate-left');      
        }
}, {offset: '50%'});



// sliding in the languages diagram

var $slideInRight = $(".slidein-right");

$slideInRight.waypoint(function(direction){
    if (direction == 'down'){
    $slideInRight.addClass('diagram-animate-right');
        } else {
      $slideInRight.removeClass('diagram-animate-right');      
        }
}, {offset: '50%'});

});











    


