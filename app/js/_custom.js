document.addEventListener("DOMContentLoaded", function() {

	// Custom JS
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    navToggle.on("click",function(event){
       event.preventDefault();
       nav.toggleClass("show");
   });
    
    //Portfolio slider
    
    let portfolioSlider = $("#service__slider");
    
    portfolioSlider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false
    });
});
