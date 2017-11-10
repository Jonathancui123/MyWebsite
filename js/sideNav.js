$(document).ready(function (){
    $("#d1").click(function(){
        $("html,body").animate({
          scrollTop: $("#thingsOut").offset().top-60 + "px"
        },1000);
    })
    $("#d2").click(function(){
        $("html,body").animate({
            scrollTop: $("#loveOut").offset().top-60 + "px"
        },1000);
    })
    $("#d3").click(function(){
        $("html,body").animate({
            scrollTop: $("#musicOut").offset().top-60 + "px"
        },1000);
    })
    $("#d4").click(function(){
        $("html,body").animate({
            scrollTop: $("#who").offset().top-60 + "px"
        },1000);
    })
	$("#d5").click(function(){
        $("html,body").animate({
            scrollTop: $("#more").offset().top-60 + "px"
        },1000);
    })
});