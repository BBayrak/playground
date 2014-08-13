$( document ).ready(function() {

	
	
	var mann='%'; 
	var frau='%'; 
	var tag ='%';
	var abend ='%';
	var fruehlingsommer='%';
	var herbstwinter ='%';
	var orientalisch='%';
	var holzig='%';
	var fruchtig ='%';
	var frisch='%';
	var wuerzig ='%';
	var suess ='%';
	var blumig ='%';
	var aquatisch ='%';
	var zitrus='%';
	 
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
		mann='%';
		frau='%';
		var gender=$(this).attr("id");
		switch(gender){
		case "m":
			mann=1;
			break;
		case "f":
			frau=1;
			break;		
		}
		$wizard.steps( "next" );
		setMarker($(this));
	});

	$(".next-step2").on("click", function(){
		orientalisch='%';
		holzig='%';
		fruchtig='%';
		frisch='%';
		var nuance= $(this).attr("id");
		switch(nuance){
		case "orientalisch":
			orientalisch =1;
			$wizard.steps( "next" );
			break;
		case "holzig":
			holzig=1;
			wuerzig=1;
			$wizard.steps( "nextnext" );
			break;
		case "fruchtig":
			fruchtig=1;
			$wizard.steps( "next" );
			break;
		case "frisch":
			frisch=1;
			$wizard.steps( "next" );
			break;
		}
		
		setMarker($(this));
		hideAll();
		$('#wizard').find("."+$(this).attr("id")).show();		
	});
	
	$(".next-step3").on("click", function(){	
		wuerzig='%';
		suess='%';
		blumig='%';
		aquatisch='%';
		zitrus='%';
		var effect=$(this).attr("id");
		switch(effect){
		case "wuerzig":
			wuerig=1;
			break;
		case "suess":
			suess=1;
			break;
		case "blumig":
			blumig=1;
			break;
		case "aquatisch":
			aquatisch=1;
			break;
		case "zitrus":
			zitrus=1;
			break;
		}
		$wizard.steps( "next" );
		setMarker($(this));				
	});
	
	$(".next-step4").on("click", function(){
		fruehlingsommer='%';
		herbstwinter='%';
		var jahreszeit = $(this).attr("id");
		switch(jahreszeit){
		case "fruehlingsommer":
			fruehlingsommer=1;
			break;
		case "herbstwinter":
			herbstwinter=1;
			break;
		}	
		$wizard.steps( "next" );		
		setMarker($(this));
	});
	
	$(".next-step5").on("click", function(){
		tag='%';
		abend='%';
		var zeit=$(this).attr("id");
		switch(zeit){
		case "tag":
			tag=1;
			break;
		case "abend":
			abend=1;
			break;
		}				
		$wizard.steps( "next" );		
		setMarker($(this));
	});
	
	$(".next-step6").on("click", function(){
		location.reload();
	});
	
	//onenter load database data
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

	      $(".owl-carousel").owlCarousel({
	    	  
	    	  autoPlay: 3000, //Set AutoPlay to 3 seconds
	    	  margin:10,
	    	  items : 3.5,
	    	  /*itemsDesktop : [1199,3.5],
	    	  itemsDesktopSmall : [979,3.5]*/
	    	   
	    	  });

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
	 queryString += "mann='"+mann+"'"; 
	 queryString += "&frau='"+frau+"'";
	 queryString += "&tag='"+tag+"'";
	 queryString += "&abend='"+abend+"'";
	 queryString += "&fruehlingsommer='"+fruehlingsommer+"'";
	 queryString += "&herbstwinter='"+ herbstwinter+"'";
	 queryString += "&orientalisch='"+orientalisch+"'";
	 queryString += "&holzig='"+holzig+"'";
	 queryString += "&fruchtig='"+ fruchtig+"'";
	 queryString += "&frisch='"+frisch+"'";
	 queryString += "&wuerzig='"+ wuerzig+"'";
	 queryString += "&suess='"+ suess+"'";
	 queryString += "&blumig='"+ blumig+"'";
	 queryString += "&aquatisch='"+ aquatisch+"'";
	 queryString += "&zitrus='"+zitrus+"'";
	 ajaxRequest.open("GET", "fetch.php" + 
	                              queryString, true);
	 ajaxRequest.send(null); 
	}
	
	$(".content").niceScroll({cursorcolor:"#bbb"});
   
	
	
	 $("#owl-demo").owlCarousel({
		 
		 autoPlay: 3000, //Set AutoPlay to 3 seconds
		  
		 items : 4,
		 itemsDesktop : [1199,3],
		 itemsDesktopSmall : [979,3]
		  
		 });
	 
	/*

	function startTime() {
	    t = setTimeout(function(){startTime()}, 1000);
		$("body").removeClass("bg1 bg2 bg3 bg4 bg5 bg6");
		$("body").addClass("bg"+Math.floor(Math.random() * 2) );
	}


	startTime();*/
});





