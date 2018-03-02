$(document).ready(function() {

	$(".nav__logo--wrap").css('max-width', $(window).width());
	$(window).resize(function(){
		$(".nav__logo--wrap").css('max-width', $(window).width());
	});
	
	$(".first-row").click(function() {
		$(".nav-item").removeClass("active")
		$(".first-row").eq($(this).index()).addClass("active");
	})
	$(".second-row").click(function() {
		$(".nav-item").removeClass("active")
		$(".second-row").eq($(this).index()).addClass("active");
	})
})