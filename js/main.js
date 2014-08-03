$( document ).ready(function() {

	var gender="";
	var nuance="";


	$("#wizard").steps({transitionEffect: "slideLeft"});


	$('.btn').button()



	$(".thumbnail").on("mouseenter", function(){
		$(this).css({"opacity": "0.8","cursor":"pointer"});
	}).on("mouseleave", function(){
		$(this).css({"opacity": "1","cursor":"default"});
	}).on("click", function(){
		var wp = $(this).closest(".wizardPage");
		wp.find(".glyphicon").remove();
		var sign = $("<span class='glyphicon glyphicon-ok-circle glyphicon-2x'></span>");
		$(this).find(".caption").last().append(sign);
		$(this).find(".glyphicon").animate({"opacity": "1"}, "fast");
	});

	$("#genderM").on("click", function(){
		gender="m";
		$('#gender').val(gender);
	});

	$("#genderF").on("click", function(){
		gender="f";
		$('#gender').val(gender);
	})	


	/*

	function startTime() {
	    t = setTimeout(function(){startTime()}, 1000);
		$("body").removeClass("bg1 bg2 bg3 bg4 bg5 bg6");
		$("body").addClass("bg"+Math.floor(Math.random() * 2) );
	}


	startTime();*/
});





