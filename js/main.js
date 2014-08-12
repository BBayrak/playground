$( document ).ready(function() {

	
	
	var mann=0; 
	var frau=0; 
	var tag =0;
	var abend =0;
	var fruehlingsommer=0;
	var herbstwinter =0;
	var orientalisch=0;
	var holzig=0;
	var fruchtig =0;
	var frisch=0;
	var wuerzig =0;
	var suess =0;
	var blumig =0;
	var aquatisch =0;
	var zitrus=0;
	 
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
		mann=0;
		frau=0;
		if($(this).attr("id")=="m"){
			mann=1;	
		}
		else{
			frau=1;
		}					
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
		$wizard.steps( "next" );		
		setMarker($(this));
		
		//getList();
	});
	
	$(".next-step6").on("click", function(){
		location.reload();
	});
	
	$("#wizard-t-5").on("click", function(){
		getList();
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
	 var ajaxRequest;  // The variable that makes Ajax possible!
		
	 try{
	   // Opera 8.0+, Firefox, Safari
	   ajaxRequest = new XMLHttpRequest();
	 }catch (e){
	   // Internet Explorer Browsers
	   try{
	      ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
	   }catch (e) {
	      try{
	         ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
	      }catch (e){
	         // Something went wrong
	         alert("Your browser broke!");
	         return false;
	      }
	   }
	 }
	 // Create a function that will receive data 
	 // sent from the server and will update
	 // div section in the same page.
	 ajaxRequest.onreadystatechange = function(){
	   if(ajaxRequest.readyState == 4){
	      var ajaxDisplay = document.getElementById('empfehlung');
	      ajaxDisplay.innerHTML = ajaxRequest.responseText;
	   }
	 }
	 // Now get the value from user and pass it to
	 // server script.
	 /*var age = document.getElementById('age').value;
	 var wpm = document.getElementById('wpm').value;
	 var sex = document.getElementById('sex').value;
	 var queryString = "?age=" + age ;
	 queryString +=  "&wpm=" + wpm + "&sex=" + sex;*/
	 queryString = "?";
	 queryString += "mann="+mann; 
	 queryString += "&frau="+frau;/* 
	 &tag 
	 &abend 
	 &fruehlingsommer
	 &herbstwinter 
	 &orientalisch
	 &holzig
	 &fruchtig 
	 &frisch
	 &wuerzig 
	 &suess 
	 &blumig 
	 &aquatisch 
	 &zitrus*/
	 ajaxRequest.open("GET", "fetch.php" + 
	                              queryString, true);
	 ajaxRequest.send(null); 
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





