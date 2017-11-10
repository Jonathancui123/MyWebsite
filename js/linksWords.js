$(document).ready(function (){
    
    $("#picDesA").fadeOut();
    $("#picDesB").fadeOut();
    $("#picDesC").fadeOut();
    $("#picDesD").fadeOut();
	
	$("#linkedIn").mouseenter(function(){
		
        $("#picDesA").fadeIn(200);
    })
	
	$("#linkedIn").mouseleave(function(){
		
        $("#picDesA").fadeOut(200);
    })
   $("#gitHub").mouseleave(function(){
		
        $("#picDesB").fadeOut(200);
    })
    $("#gitHub").mouseenter(function(){
		
        $("#picDesB").fadeIn(200);
    })
	$("#email").mouseleave(function(){
		
        $("#picDesC").fadeOut(200);
    })
    $("#email").mouseenter(function(){
		
        $("#picDesC").fadeIn(200);
    })
	
	$("#resume").mouseleave(function(){
		
        $("#picDesD").fadeOut(200);
    })
    $("#resume").mouseenter(function(){
		
        $("#picDesD").fadeIn(200);
    })
    
});
    
