let nav = $("#nav");
$(function(){
    
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        
        let elementId = $(this).data('scroll');    
        let elementOffset = $(elementId).offset().top;
        
        nav.removeClass("show");
        $("html, body").animate({
            scrollTop: elementOffset- 50
        }, 700);       
        

    });
    
    
    $("#navToggle").on("click", function(event){
        event.preventDefault();
        
        nav.toggleClass("show");
        console.log("sdf");
    });
    
});