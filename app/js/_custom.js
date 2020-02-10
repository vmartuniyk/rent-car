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
    
    let carSlider = $("#carSlider");
    
    carSlider.slick({
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
      loop: true,
      dots: true,
      arrows: false,
          responsive: [
            {
              breakpoint: 990,
              settings: {
                loop: true,
                dots: true,
                arrows: false,
                slidesToShow: 2
              }
            },
               {
              breakpoint: 768,
              settings: {
                loop: true,
                dots: true,
                arrows: false,
                slidesToShow: 1
              }
            }
   
          ]
    });
    
    let teamSlider = $("#team__slider");
    
    teamSlider.slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      loop: true,
      dots: true,
      arrows: false,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                loop: true,
                dots: true,
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
   
          ]
        
    });
});
