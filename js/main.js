$( document ).ready(function() {

	
	var $wizard = $("#wizard");
	
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
	
	
	
//	$(".btn").button();
	
	$(".next-step1").on("click", function(){
		$wizard.steps( "next" );
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
		hideAll();
		$('#wizard').find("."+$(this).attr("id")).show();		
	});
	
	$(".next-step3").on("click", function(){		
		$('#effect').val($(this).attr("id"));
		$wizard.steps( "next" );
				
	});
	
	$(".next-step4").on("click", function(){
		$('#jahr').val($(this).attr("id"));	
		$wizard.steps( "next" );
	});
	
	$(".next-step5").on("click", function(){
		$('#zeit').val($(this).attr("id"));			
		/* HIER DIE LISTE FÜR NÄCHSTE SEITE VORBEREITEN UNF FÜLLEN
		 * */
		getList();
		$wizard.steps( "next" );
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
	
	
	function getList(){


		$.getJSON( "duftliste.json", function( data ) {
			var items = [];
			$.each( data, function( key, val ) {

				var snippet = '<div class="col-xs-4 col-sm-3 placeholder">'+
				'<img src="img/3772347-Pien-Flasche-2.jpg"'+
					'class="img-responsive" alt="Generic placeholder thumbnail">'+
				'<p><button type="button" class="btn btn-default btn-block" >'+ key +'</button></p>'+
				'</div>';
				
				$("#empfehlungen").first().append(snippet);
				
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





