$(document).ready(function() {

	$("#navbutton").click(function() {
		$("#topnav").slideToggle();
	});

	$('.slider').slick({
	  dots: true,
	  infinite: true,
	  accessability: true
	});

	$('.example').slick();

	$(function(){
  		$.scrollIt();
	});
	
})
