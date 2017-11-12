$(document).ready(function (){
    var sideOpened = false;
    var smallScreen = false;
    var allow = false;
    
    function show(){
        $("#buttons").animate({top: "-20px"});
    }    
    function hide(){
        $("#buttons").animate({top: "-370px"});
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
    $("#d1, #n1").click(function(){
        $("html,body").animate({
          scrollTop: $("#thingsOut").offset().top + "px"
        },1000);
        if(smallScreen){
            hide();
            sideOpened = false;
            allow = false;
        }
    })
    $("#d2, #n2, #thingsNav").click(function(){
        $("html,body").animate({
            scrollTop: $("#loveOut").offset().top + "px"
        },1000);
        if(smallScreen){
            hide();
            sideOpened = false;;
            allow = false;
        }
    })
    $("#d3, #n3").click(function(){
        $("html,body").animate({
            scrollTop: $("#musicOut").offset().top + "px"
        },1000);
        if(smallScreen){
            hide();
            sideOpened = false;;
            allow = false;
        }
    })
    $("#d4, #n4").click(function(){
        $("html,body").animate({
            scrollTop: $("#who").offset().top + "px"
        },1000);
        if(smallScreen){
            hide();
            sideOpened = false;;
            allow = false;
        }
    })
	$("#d5, #n5").click(function(){
        $("html,body").animate({
            scrollTop: $("#more").offset().top + "px"
        },1000);
        if(smallScreen){
            hide();
            sideOpened = false;;
            allow = false;
        }
    })
});