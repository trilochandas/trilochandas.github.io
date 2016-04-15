$(document).ready( function(){
  // dark or light theme (switching on and off bulb)
	$('.light').click(function(){
		if ( $( "body" ).hasClass( "nightBody" ) ) {
	    $('body').removeClass("nightBody");
	    $('a').removeClass('nightLink');
	    $(this).css("background-position-y", 0 + 'px');
		
		} else {
			$('body').addClass("nightBody");
		    $('a').addClass('nightLink');
		    $(this).css("background-position-y", 81 + 'px');
		}
	});
	// dark theme accordingly to current time 
	if ( new Date().getHours() >= 19) {
		$('body').addClass("nightBody");
	    $('a').addClass('nightLink');
	    $('.light').css("background-position-y", 81 + 'px');
	}
});