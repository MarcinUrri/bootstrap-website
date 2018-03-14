const mainNav = $('.navbar-expand-lg');
const link = $('a');
const brand = $('.navbar-brand');



// A $( document ).ready() block.
$(document).ready(function() {
  $(window).scroll(function(){
    if ($(window).scrollTop() > 150) {
      mainNav.addClass('scrollNav')
      link.addClass('scrollNavLink')
      brand.addClass('custom-brand')
    }else{
      mainNav.removeClass('scrollNav')
      link.removeClass('scrollNavLink')
      brand.removeClass('custom-brand')
    }
  });
});
