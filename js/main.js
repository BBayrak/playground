$( document ).ready(function() {
	
	var gender="null";
	
	

	$("#wizard").steps({transitionEffect: "slideLeft"});

	$('.btn').button()

	$("#genderM").on("click", function(){
		gender="m";
		$('#gender').val(gender);
	})
	.on("mouseenter",function(){
		$(this).closest("")
	})
	;

	$("#genderF").on("click", function(){
		gender="f";
		$('#gender').val(gender);
	});
	
/*	var bgArray = ['fotolia_35867557.jpg',
	          	'fotolia_44944823.jpg',
	        	'fotolia_45779873.jpg',
	        	'fotolia_50986002.jpg',
	        	'fotolia_56582519.jpg'];
	        	*/

 /*
	
	function startTime() {
	    t = setTimeout(function(){startTime()}, 1000);
		$("body").removeClass("bg1 bg2 bg3 bg4 bg5 bg6");
		$("body").addClass("bg"+Math.floor(Math.random() * 2) );
	}

	
	startTime();*/
});





