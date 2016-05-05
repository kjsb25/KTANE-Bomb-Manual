<?php	
	$action = empty($_GET['action']) ? '' : $_GET['action'];

	if($action=='keypad'){
		displayKeypad();
	}else{
		error("No action chosen");
	}
	exit;

	function displayKeypad(){
		$dir="bombpics/keypad/";
		chdir($dir);
		$cDir=scandir(getcwd());
		echo "<div id='keypads'>";
		foreach ($cDir as $key => $value) {
			$ext = pathinfo($value, PATHINFO_EXTENSION);
			if($ext =='png'){
				echo "<img  id='" . $value . "' src='";
				echo $dir . $value;
				echo "'>\n";
			}
		}
		echo "</div>";
		echo "<div id='keypadoutput'></div>";
	}

?>