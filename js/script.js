$(window).scroll(function() {    
	var scroll = $(window).scrollTop();

	if (scroll > 5) {
        $(".menu").addClass("active"); // you don't need to add a "." in before your class name
      } else {
      	$(".menu").removeClass("active");
      }
    });