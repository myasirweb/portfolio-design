$(document).ready(function(){

// for the Navbar to appear on scroll///

    $(window).scroll(function(){

        if(this.scrollY > 200){

            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }        

    });
            var typed = new Typed(".typing-hero",{
                strings:[
                    "Designer", "Animator", "Developer", "Freelancer"
                ],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true

            });

            var typed = new Typed(".typing-about",{
                strings:[
                    "Designer", "Animator", "Developer", "Freelancer"
                ],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true

            });

            // owl port styling Animation
            
           $('.carousel').owlCarousel({
            
            margin: 20,
            loop: true,
            navigation: true,
            autoplay: true,
            autoplayTimeout: 1000,
            autoplayHoverPause: true,

            responsive: {
                0:{
                    items: 1,
                    nav: false,
                },
                600: {
                    items: 2,
                    nav: false,
                
                },
                1000: {
                    items: 3,
                    nav: false,
                }
            }

           });

});
