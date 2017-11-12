$(document).ready(function (){
    var sideOpened = false;
    var smallScreen = false;
    var allow = false;
    
    function show(){
        $("#buttons").animate({left: "-20px"});
    }    
    function hide(){
        $("#buttons").animate({left: "-320px"});
    }
    
    $(document.body).on("click",function(){
        if(smallScreen&&sideOpened&&allow){
            hide();
            allow=false;
            sideOpened = false;
        }
    })
    
    $("#listHolder").click(function(){
        allow = false;
        if(sideOpened){
            hide();
            sideOpened = false;
            allow=false;
            
        }else{
            show();
            sideOpened = true;
            setTimeout(function(){
                allow = true;
            },100);
        }
        smallScreen = true;
    })
    $("#d1","#n1").click(function(){
        $("html,body").animate({
          scrollTop: $("#thingsOut").offset().top-60 + "px"
        },1000);
        if(smallScreen){
            hide();
            sideOpened = false;
            allow = false;
        }
    })
    $("#d2").click(function(){
        $("html,body").animate({
            scrollTop: $("#loveOut").offset().top-60 + "px"
        },1000);
        if(smallScreen){
            hide();
            sideOpened = false;;
            allow = false;
        }
    })
    $("#d3").click(function(){
        $("html,body").animate({
            scrollTop: $("#musicOut").offset().top-60 + "px"
        },1000);
        if(smallScreen){
            hide();
            sideOpened = false;;
            allow = false;
        }
    })
    $("#d4").click(function(){
        $("html,body").animate({
            scrollTop: $("#who").offset().top-60 + "px"
        },1000);
        if(smallScreen){
            hide();
            sideOpened = false;;
            allow = false;
        }
    })
	$("#d5").click(function(){
        $("html,body").animate({
            scrollTop: $("#more").offset().top-60 + "px"
        },1000);
        if(smallScreen){
            hide();
            sideOpened = false;;
            allow = false;
        }
    })
});