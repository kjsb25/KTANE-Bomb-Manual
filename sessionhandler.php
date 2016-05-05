<?php

	if(!session_start()) {
		error();
		exit;
	}

	$action = empty($_POST['action']) ? '' : $_POST['action'];
	if ($action == 'login') {
		login();
	} elseif($action=='logout'){
		logout();
	}elseif($action=='checkUser'){
		checkUser();
	}else{
		error("No action chosen");
	}
	exit;

	function login(){
		$loggedIn = empty($_SESSION['loggedin']) ? false : $_SESSION['loggedin'];
		if ($loggedIn) {
			header("Location: bomb_manual.html");
			exit;
		}
		$username = empty($_POST['username']) ? '' : $_POST['username'];
		$password = empty($_POST['password']) ? '' : $_POST['password'];
		if ($username == "test" && $password == "pass") {
			$_SESSION['username'] = $username;
			$_SESSION['loggedin']=true;
			header("Location: bomb_manual.html");
			exit;
		} else {
			error('Error: Invalid username or password');
			require "bomb_login.html";
		}	
	}	

	function logout(){
		if(!session_start()) {
			header("Location: error.php");
			exit;
		}
		$_SESSION=array();
		session_destroy();

		header("Location: bomb_login.html");
		exit;
	}

	function checkUser(){
		if(!session_start()) {
			header("Location: error.php");
			exit;
		}
	
		$loggedIn = empty($_SESSION['loggedin']) ? false : $_SESSION['loggedin'];
		if (!$loggedIn) {
			echo "false";
			exit;
		}else{
			echo "true";
		}
	}

	function error($error){
		echo "<h2>".$error."</h2>";
	}
?>