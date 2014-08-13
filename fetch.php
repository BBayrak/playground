<?php

mysqli_report(MYSQLI_REPORT_OFF); //Turn off irritating default messages

$mann = $_GET['mann'];
$frau = $_GET['frau'];
$tag = $_GET['tag'];
$abend = $_GET['abend'];
$fruehlingsommer = $_GET['fruehlingsommer'];
$herbstwinter = $_GET['herbstwinter'];
$orientalisch = $_GET['orientalisch'];
$holzig = $_GET['holzig'];
$fruchtig = $_GET['fruchtig'];
$frisch = $_GET['frisch'];
$wuerzig = $_GET['wuerzig'];
$suess = $_GET['suess'];
$blumig = $_GET['blumig'];
$aquatisch = $_GET['aquatisch'];
$zitrus = $_GET['zitrus'];


$con = mysqli_connect("127.0.0.1","benutzer","");
if (!$con) {
	die('Could not connect: ' . mysqli_error($con));
}

if(!mysqli_select_db($con,"asperias"))
	printf("Error: %s\n", mysqli_error($con));

$sql = "SELECT * FROM `table 1` WHERE"; 
$sql .= " `mann` LIKE " .$mann;
$sql .=	" AND `frau` LIKE ".$frau;
$sql .=	" AND `tag` LIKE ".$tag;
$sql .=	" AND `abend` LIKE ".$abend;
$sql .=	" AND `fruehlingsommer` LIKE ".$fruehlingsommer;
$sql .=	" AND `herbstwinter` LIKE ".$herbstwinter;
$sql .=	" AND `orientalisch` LIKE ".$orientalisch;
$sql .=	" AND `holzig` LIKE ".$holzig;
$sql .=	" AND `fruchtig` LIKE ".$fruchtig;
$sql .=	" AND `frisch` LIKE ".$frisch;
$sql .=	" AND `wuerzig` LIKE ".$wuerzig;
$sql .=	" AND `suess` LIKE ".$suess;
$sql .=	" AND `blumig` LIKE ".$blumig;
$sql .=	" AND `aquatisch` LIKE ".$aquatisch;
$sql .=	" AND `zitrus` LIKE ".$zitrus;

//echo($sql);
$result = mysqli_query($con,$sql);
if (!$result) {
	printf("Error: %s\n", mysqli_error($con));
	exit();
}

$display_string = '<div class="owl-carousel">';

while($row = mysqli_fetch_array($result)) {
	$display_string .= '<div class="item">';
	$display_string .=       '<img src="img/3772347-Pien-Flasche-2.jpg"';
	$display_string .=                'class="img-responsive" alt="Generic placeholder thumbnail">';
	$display_string .='      <p><button type="button" class="btn btn-default" >'.$row['code'].' '. $row['model'] .' '. $row['marke'] .'</button></p>';
	$display_string .=	'</div>';
}

$display_string .=	'</div>';

mysqli_close($con);

echo $display_string;
?>