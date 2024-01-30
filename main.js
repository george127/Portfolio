//---------NavBar----------
let navBarScroll = document.querySelector(".navbar");
        let sticky = navBarScroll.offsetTop;

    window.addEventListener("scroll", () => {
    if(window.pageYOffset > sticky){
        navBarScroll.classList.add("sticky");
    }else{
        navBarScroll.classList.remove("sticky");
    }
})
//---------End NavBar--------

$(function () {
    
    $('.gallery').magnificPopup({
       delegate: '.popimg',
       type: 'image',
       gallery: {
           enabled: true
       }
   });
     $('.gallery').isotope({
     // options
     itemSelector: '.items'
   });

   var $gallery = $('.gallery').isotope({
     // options
   });

   // filter items on button click
   $('.filtering').on( 'click', 'span', function() {

       var filterValue = $(this).attr('data-filter');

       $gallery.isotope({ filter: filterValue });

   });

   $('.filtering').on( 'click', 'span', function() {

    $(this).addClass('active').siblings().removeClass('active');

   });
   }); 

// ========== PopUp ==========
$(document).ready(function() {
    $('.popup-trigger').click(function() {
      $('.popup-background, .popup').fadeIn();
    });

    $('#close-popup').click(function() {
      $('.popup-background, .popup').fadeOut();
    });

    $(document).on('click', function(event) {
      if ($(event.target).hasClass('popup-background')) {
        $('.popup-background, .popup').fadeOut();
      }
    });
  });

// ==========  smooth Scroll ========
const navigation = document.querySelector(".primary - navigation");

const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty(
    "--scroll-padding",
    navigationHeight + "px"
)

