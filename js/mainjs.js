$(document).ready(function(){
	 $(".button-collapse").sideNav();
	 $(".parallax").parallax();
	 $('.slider').slider({full_width: true});
	 $('.datepicker').pickadate({
    				selectMonths: true, // Creates a dropdown to control month
    				selectYears: 15 // Creates a dropdown of 15 years to control year
  });
})


$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});