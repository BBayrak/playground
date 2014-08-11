$( document ).ready(function() {

	
	var $wizard = $("#wizard");
	var marker = '<img src="img/orientalisch.jpg" class="img-responsive myoverlay" alt="Generic placeholder thumbnail">';
	$wizard.steps({
		headerTag : "h2",
		bodyTag : "section",
		transitionEffect : "slideLeft",
			enablePagination: false
	});
	

/*
	
	$("a[id$=step]").on("click", function (e)
			{
			    e.preventDefault();
			    $wizard.steps( $(this).attr("id").split("-")[0] );
			});
*/	
	
	
	//$(".btn").button();
	//$(".checkbox").checkbox();
	
	$(".next-step1").on("click", function(){
		$wizard.steps( "next" );		
		setMarker($(this));
		$('#gender').val($(this).attr("id"));		
	});

	$(".next-step2").on("click", function(){
		
		if($(this).attr("id") == "holzig" )
		{
			$('#effect').val("würzig");
			$wizard.steps( "nextnext" );
		}
		else{
			$wizard.steps( "next" );
			$('#nuance').val($(this).attr("id"));
		}		
		setMarker($(this));
		hideAll();
		$('#wizard').find("."+$(this).attr("id")).show();		
	});
	
	$(".next-step3").on("click", function(){		
		$('#effect').val($(this).attr("id"));
		$wizard.steps( "next" );
		setMarker($(this));
				
	});
	
	$(".next-step4").on("click", function(){
		$('#jahr').val($(this).attr("id"));	
		$wizard.steps( "next" );		
		setMarker($(this));
	});
	
	$(".next-step5").on("click", function(){
		$('#zeit').val($(this).attr("id"));			
		/* HIER DIE LISTE FÜR NÄCHSTE SEITE VORBEREITEN UNF FÜLLEN
		 * */
		getList();
		$wizard.steps( "next" );		
		setMarker($(this));
	});
	
	$(".next-step6").on("click", function(){
		location.reload();
	});
	
	
	
	function hideAll(){
		$('#wizard').find(".fruchtig").hide();
		$('#wizard').find(".frisch").hide();
		$('#wizard').find(".holzig").hide();
		$('#wizard').find(".orientalisch").hide();
	}
	
	function setMarker(that){
	/*
		$(that).closest(".row").find(".myoverlay").remove();
		$(that).closest(".placeholder").find("button").append(marker);
		$(that).closest(".placeholder").find(".myoverlay").animate({"opacity": "0.8"});
		*/
	}
	
	function getList(){


		$.getJSON( "duftliste.json", function( data ) {
			var items = [];
			$.each( data, function( key, val ) {

				var snippet = '<div class="col-xs-4 col-sm-4 placeholder">'+
				'<img src="img/3772347-Pien-Flasche-2.jpg"'+
					'class="img-responsive" alt="Generic placeholder thumbnail">'+
				'<p><button type="button" class="btn btn-default btn-block" >'+ key +'</button></p>'+
				'</div>';
				
				$("#empfehlungen").first().prepend(snippet);
				
			});
			
		});


	}

	
	
	$(".content").niceScroll({cursorcolor:"#bbb"});

	/*

	function startTime() {
	    t = setTimeout(function(){startTime()}, 1000);
		$("body").removeClass("bg1 bg2 bg3 bg4 bg5 bg6");
		$("body").addClass("bg"+Math.floor(Math.random() * 2) );
	}


	startTime();*/
});





