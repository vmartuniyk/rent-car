document.addEventListener("DOMContentLoaded", function() {

	// Custom JS
    let nav = $("#nav");
    let header__phone = $("#header__phone");
    let navToggle = $("#navToggle");
    navToggle.on("click",function(event){
       event.preventDefault();
       nav.toggleClass("show");
       header__phone.toggleClass("show");
   });
    
    //Portfolio slider
    
    let serviceSlider = $("#service__slider");
    
    serviceSlider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false
    });
    
     let portfolioSlider = $("#porfolio_slider");
    
    portfolioSlider.slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      arrows: false
    });
});
