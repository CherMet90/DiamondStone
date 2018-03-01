$(document).ready(function() {
	$(".nav-item").click(function() {
		$(".nav-item").removeClass("active").eq($(this).index()).addClass("active");
	})
})