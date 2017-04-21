$(document).ready(function() {

	$('#slider').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		sync: "#carousel",
		easing: 'easeInElastic'
	});


	$(function(){
		$('#elastislide').elastislide();
	});


});







