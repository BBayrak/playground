$( document ).ready(function() {

	var gender="";
	var nuance="";
	var dhtml="";


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
		$(this).find(".glyphicon").animate({"opacity": "1"});
	});

	$("#genderM").on("click", function(){
		gender="m";
		$('#gender').val(gender);
	});

	$("#genderF").on("click", function(){
		gender="f";
		$('#gender').val(gender);
	})	

	$("#orientalisch").on("click", function(){
		nuance="orientalisch";
		$('#nuance').val(nuance);
		hideAll();
		$('#wizard').find(".orientalisch").show();
		
	});
	
	$("#holzig").on("click", function(){
		nuance="holzig";
		$('#nuance').val(nuance);
		hideAll();
		$('#wizard').find(".holzig").show();
	});
	
	$("#fruchtig_floral").on("click", function(){
		nuance="fruchtig_floral";
		$('#nuance').val(nuance);
		hideAll();
		$('#wizard').find(".fruchtig").show();
	});
	
	$("#frisch").on("click", function(){
		nuance="frisch";
		
		$('#nuance').val(nuance);
		hideAll();
		$('#wizard').find(".frisch").show();
	});
	
	
	function hideAll(){
		$('#wizard').find(".fruchtig").hide();
		$('#wizard').find(".frisch").hide();
		$('#wizard').find(".holzig").hide();
		$('#wizard').find(".orientalisch").hide();
	}
	

	/*

	function startTime() {
	    t = setTimeout(function(){startTime()}, 1000);
		$("body").removeClass("bg1 bg2 bg3 bg4 bg5 bg6");
		$("body").addClass("bg"+Math.floor(Math.random() * 2) );
	}


	startTime();*/
});





