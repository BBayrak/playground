$( document ).ready(function() {
	$( "a" ).click(  function( event ) {
			alert( "The link will no longer take you to jquery.com" );
			event.preventDefault();	
	});
	
	$( "#date" ).datepicker();
	
	$( "#slider" ).slider({
		min:0,
		max: 50,
		step:1,
		value: 50,
		change: function( event, ui ) {
			// getter
			var value = $( "#slider" ).slider( "option", "value" );
		//	alert( "The link will no longer take you to jquery.com "  + value);
			$("#quantity").val(value);
		}
	});
	
	$( "a" ).addClass( "test" );
	});


