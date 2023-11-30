import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

console.log("Hello world!");

//toTopBtn
$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#totop').fadeIn();
			} else {
				$('#totop').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#totop').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});