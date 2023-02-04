$(document).ready(function(){
    $(".btn").on("mouseenter",function(e){
        var parentOffset=$(this).offset(),
        relX=e.pageX-parentOffset.left,
        relY=e.pageY-parentOffset.top;
        $(this).find("span").css({
            top:relX,
            let:relY,
        });
    });
});