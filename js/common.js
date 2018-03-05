$(document).ready(function() {
	$(".first-row").click(function() {
		$(".nav-item").removeClass("active")
		$(".first-row").eq($(this).index()).addClass("active");
	})
	$(".second-row").click(function() {
		$(".nav-item").removeClass("active")
		$(".second-row").eq($(this).index()).addClass("active");
	})
})