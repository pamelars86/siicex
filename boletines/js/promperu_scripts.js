$(document).ready(function(){
   let scroll_link = $('.scroll');
  
    //smooth scrolling -----------------------
    scroll_link.click(function(e){
        e.preventDefault();
        let url = $('body').find($(this).attr('href')).offset().top;
        $('html, body').animate({
          scrollTop : url -70
        },300);
        return false;	
     });
  });