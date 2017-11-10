$(document).ready(function(){
	var background = document.getElementById("background");
	$(window).scroll(function(){
		background.style.top = $(this).scrollTop()/14*-1+"px";
	})
})