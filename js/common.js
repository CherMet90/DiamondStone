$(document).ready(function() {
  
 //  heightAlignment(".carousel-item");

	// $(window).resize(function(){
	// 	heightAlignment(".carousel-item");
	// });

	$(".first-row").click(function() {
		$(".nav-item").removeClass("active")
		$(".first-row").eq($(this).index()).addClass("active");
	})
	$(".second-row").click(function() {
		$(".nav-item").removeClass("active")
		$(".second-row").eq($(this).index()).addClass("active");
	})

	function heightAlignment (elemsName) {
		$(elemsName).css('height', '');
		var max = $(elemsName).eq(0).height();
		$(elemsName).each(function() {
			if ($(this).height() > max) {
				max = $(this).height();
			};
		});
		$(elemsName).each(function() {
			$(this).css('height', max);
		});
	};
})