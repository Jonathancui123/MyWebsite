$(document).ready(function (){
    $("#l1").hide();
    $("#l2").hide();
    $("#l3").hide();
    $("#l4").hide();
    $("#l5").hide();
	
	
    $("#d1").mouseenter(function(){
		
        $("#l1").fadeIn(200);
    })
    $("#d1").mouseleave(function(){
        $("#l1").fadeOut(200);
    })
    
    $("#d2").mouseenter(function(){
        $("#l2").fadeIn(200);
    })
    $("#d2").mouseleave(function(){
        $("#l2").fadeOut(200);
    })
    
    $("#d3").mouseenter(function(){
        $("#l3").fadeIn(200);
    })
    $("#d3").mouseleave(function(){
        $("#l3").fadeOut(200);
    })
    
    $("#d4").mouseenter(function(){
        $("#l4").fadeIn(200);
    })
    $("#d4").mouseleave(function(){
        $("#l4").fadeOut(200);
    })
	
	$("#d5").mouseenter(function(){
        $("#l5").fadeIn(200);
    })
    $("#d5").mouseleave(function(){
        $("#l5").fadeOut(200);
    })
    
});