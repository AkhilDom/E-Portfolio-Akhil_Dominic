$(".image").hover(
    function(){
        $(this).css("border","2px solid white").css("font-size","30px");
    },
    function(){
        $(this).css("border","none").css("font-size","20px");
    }
);


$("document").ready(function(){
    
    $(".btn").css('color','blue');
 
    $(".btn").hover(
        function(){
            $(this).css("border","2px solid white").css("font-size","30px");
        },
        function(){
            $(this).css("border","none").css("font-size","20px");
        }
      
    );
});