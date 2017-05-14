$(document).ready(function(){
	/*when the page is loaded, these functions activate*/

	$("#subscribe").click(function(e){
		sendSubscription();
		e.preventDefault();
	});

	function sendSubscription(){
		var email=$("#email").val();
		if (validateEmail(email)==false){
			alert("Please check email!");
		}
		else{
			$("#thankyou").fadeIn();
		}
	}
	
	function validateEmail(email) {
		var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (filter.test(email)) {
			return true;
		}
		return false;
	}

	// counter animation
	$('.count').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 1500,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});
});