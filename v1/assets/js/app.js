/* Card Bardiglio
---------------------------------------------------*/
$('#section-bardiglio').on('click', function() {
    $(this).children().toggleClass('open');
});


/* Card Blue
---------------------------------------------------*/
$('#section-blue').on('click', function() {
    $(this).children().toggleClass('open');
});


/* Bianco 
---------------------------------------------------*/
$('#section-bianco').on('click', function() {
    $(this).children().toggleClass('open');
});

///* Mouse 
//---------------------------------------------------*/
//jQuery(document).ready(function(){
//  jQuery('a.cursor_wait').click(function(){
//    jQuery('body').css('cursor', 'wait');
//      jQuery(this).css('cursor', 'wait');
//  });
//});
//


/* Hamburger 
---------------------------------------------------*/
$(document).ready(function(){
    $("#hamburger").click(function(){
        $(".container").addClass("show");
    });
});


/* Hamburger logo
---------------------------------------------------*/
$(document).ready(function(){
    $("#hamburger").click(function(){
        $("#logo").addClass("hide");
    });
});

/* Hamburger hide
---------------------------------------------------*/
$(document).ready(function(){
    $("#hamburger").click(function(){
        $("#hamburger").addClass("hide");
    });
});



/* mouse
---------------------------------------------------*/
$('.mouse').click(function(e){
        	
          
          if(!$(this).hasClass('mouse-close')) {
          	$('.mouse').removeClass('mouse-close');
          	$(this).addClass('mouse-close');
          } else {
          	$('.mouse').removeClass('mouse-close');
          	
          }
 	
         
      });




/* mouse
---------------------------------------------------*/
  function highlightCurrent() {
         const curPage = document.URL;
         const links = document.getElementsByTagName('a');
         for (let link of links) {
           if (link.href == curPage) {
             link.classList.add("current");
           }
         }
       }


       document.onreadystatechange = () => {
         if (document.readyState === 'complete') {
           highlightCurrent()
         }
       };
