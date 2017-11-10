$(document).ready(function (){
	
	
    $(window).scroll(function() { 
        if ($(this).scrollTop() <530) {
			var ele = document.getElementById("side");
			ele.style.top=-80+"px";
        }else if($(this).scrollTop()<570){
			var scr = $(this).scrollTop();
			var ele = document.getElementById("side");
			ele.style.top=(scr*2-1140)+"px";
        }else{
			var ele = document.getElementById("side");
			ele.style.top=0+"px";
		}
		
    });
	
});
