$(document).ready(function(){
	var background = document.getElementById("background");
	$(window).scroll(function(){
        if($(this).scrollTop()<1000){
		  background.style.top = $(this).scrollTop()/8*-1+"px";
        }else{
		  background.style.top = -20+"px";
        }
	})
    $(function() {
        $('body').removeClass('fade-out');
    });
    
})