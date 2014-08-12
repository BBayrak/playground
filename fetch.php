<?php


$mann = $_GET['mann'];
$frau = $_GET['frau'];/*
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
*/
mysqli_report(MYSQLI_REPORT_OFF); //Turn off irritating default messages


$con = mysqli_connect("127.0.0.1","benutzer","");
if (!$con) {
	die('Could not connect: ' . mysqli_error($con));
}

if(!mysqli_select_db($con,"asperias"))
	printf("Error: %s\n", mysqli_error($con));

//$sql="SELECT * FROM asperias.perfumes";// WHERE id=".$id;

$sql = "SELECT * FROM `perfumes` WHERE" . 
	    " `mann` = " .$mann.
		" AND `frau` = ".$frau;/*.
		" AND `tag` = ".$tag.
		" AND `abend` = ".$abend.
		" AND `fruehlingsommer` = ".$fruehlingsommer.
		" AND `herbstwinter` =".$herbstwinter.
		" AND `orientalisch` = ".$orientalisch.
		" AND `holzig` = ".$holzig.
		" AND `fruchtig` = ".$fruchtig.
		" AND `frisch` = ".$frisch.
		" AND `wuerzig` = ".$wuerzig.
		" AND `suess` = ".$suess.
		" AND `blumig` = ".$blumig.
		" AND `aquatisch` = ".$aquatisch.
		" AND `zitrus` = ".$zitrus;*/

printf($sql);
$result = mysqli_query($con,$sql);
if (!$result) {
	printf("Error: %s\n", mysqli_error($con));
	exit();
}



$display_string = '';

while($row = mysqli_fetch_array($result)) {
	$display_string .= '<div class="col-xs-6 col-sm-6 placeholder">';
	$display_string .=       '<img src="img/3772347-Pien-Flasche-2.jpg"';
	$display_string .=                'class="img-responsive" alt="Generic placeholder thumbnail">';
	$display_string .='      <p><button type="button" class="btn btn-default btn-block" >'.$row['code'].' '. $row['model'] .' '. $row['marke'] .'</button></p>';
	$display_string .=	'</div>';

}

mysqli_close($con);

echo $display_string;
?>