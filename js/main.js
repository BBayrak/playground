$( document ).ready(function() {

	var gender="";
	var nuance="";
	var effect="";
	 
	var $wizard = $("#wizard");
	

	$wizard.steps
	({
		  /* Appearance */
	    headerTag: "h1",
	    bodyTag: "div",
	    contentContainerTag: "div",
	    actionContainerTag: "div",
	    stepsContainerTag: "div",
	    cssClass: "wizard",
	    stepsOrientation: $.fn.steps.stepsOrientation.horizontal,

	    /* Templates */
	    titleTemplate: '<span class="number">#index#.</span> #title#',
	    loadingTemplate: '<span class="spinner"></span> #text#',

	    /* Behaviour */
	    autoFocus: false,
	    enableAllSteps: false,
	    enableKeyNavigation: true,
	    enablePagination: true,
	    suppressPaginationOnFocus: true,
	    enableContentCache: true,
	    enableCancelButton: true,
	    enableFinishButton: true,
	    preloadContent: false,
	    showFinishButtonAlways: false,
	    forceMoveForward: false,
	    saveState: false,
	    startIndex: 0,

	    /* Transition Effects */
	    transitionEffect: $.fn.steps.transitionEffect.slideLeft ,
	    transitionEffectSpeed: 200,



	});

//	$("#wizard").steps({transitionEffect: "slideLeft"});

/*
	
	$("a[id$=step]").on("click", function (e)
			{
			    e.preventDefault();
			    $wizard.steps( $(this).attr("id").split("-")[0] );
			});
*/	
	
	$('.btn').button()


	$("#filters").on("click", ".featured", function(){
		$(".tour").filter(".featured").addClass("highlight");
	});
	
	
	$("article").on("mouseenter", function(){
		$(this).css({"opacity": "0.8","cursor":"pointer"});
	}).on("mouseleave", function(){
		$(this).css({"opacity": "1","cursor":"default"});
	}).on("click", function(){		
		var wp = $(this).closest(".wizardPage");
		wp.find(".glyphicon").remove();
		var sign = $("<span class='glyphicon glyphicon-ok-circle glyphicon-2x'></span>");
		$(this).children(".caption").append(sign);
		$(this).find(".glyphicon").animate({"opacity": "1"});		
		var btn= $(this).closest(".btn");
		$wizard.steps( btn.attr("id").split("-")[0] );		
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
	
	$("#blumig-orientalisch").on("click", function(){
		effect="blumig-orientalisch";		
		$('#effect').val(effect);
	});
	
	$("#sanft-orientalisch").on("click", function(){
		effect="sanft-orientalisch";		
		$('#effect').val(effect);
	});
	
	
	$("#orientalisch2").on("click", function(){
		effect="orientalisch";	
		$('#effect').val(effect);
	});
	
	$("#holzig-orientalisch").on("click", function(){
		effect="holzig-orientalisch";		
		$('#effect').val(effect);
	});
	

	
	
	$(".content").niceScroll({cursorcolor:"#bbb"});

	/*

	function startTime() {
	    t = setTimeout(function(){startTime()}, 1000);
		$("body").removeClass("bg1 bg2 bg3 bg4 bg5 bg6");
		$("body").addClass("bg"+Math.floor(Math.random() * 2) );
	}


	startTime();*/
});





