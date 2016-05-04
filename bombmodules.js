var numBatteries=0;
var serialNumLastDigit="Unset";
var parallel="Unset";
var serialNumVowel="Unset";
var strikes=0;



function sWires1(output){
	// finds output area
	var out=document.getElementById("output");
	out.innerHTML="";
	
	// creates label for wire prompt
	var label=document.createElement("LABEL");
	label.setAttribute("for", "wirenum");
	label.innerHTML="How many Wires?"

	out.appendChild(label);

	for (var i = 3; i <= 6; i++) {
		var radio=document.createElement("INPUT");
		radio.setAttribute("type","radio");
		radio.setAttribute("name","wirenum");
		radio.setAttribute("value",i);
		radio.add
		out.appendChild(radio);
		out.innerHTML+=i+"  ";
	};

	// $("input[type='radio']").on("click",sWires2('output'));

	//enter button
	var enter=document.createElement("Button");
	enter.innerHTML="Enter";
	enter.setAttribute("value","Enter");
	enter.setAttribute("onclick","sWires2('output')");
	out.appendChild(enter);
	out.innerHTML+="<br>";
	// $(".out").
}
function sWires2(output){
	var out= document.getElementById("output");

	var wirenum= document.getElementsByName('wirenum');

	if(wirenum[0].checked){
		// 3 wires
		var wires=3;
		sWiresPrompt(output,wires);

	}else if(wirenum[1].checked){
		// 4 Wires
		var wires=4;;
		sWiresPrompt(output,wires);

	}else if(wirenum[2].checked){
		// 5 wires
		var wires=5;
		sWiresPrompt(output,wires);

	}else if(wirenum[3].checked){
		// 6 wires
		var wires=6;
		sWiresPrompt(output,wires);

	}else{
		
	}
}
function sWiresPrompt(output,wires){
	var out= document.getElementById("output");
	var colors=["red","white","blue","yellow","black"];

	$(".q2").remove();

	for (var i = 0; i < wires; i++) {
			var label=document.createElement("LABEL");
			label.setAttribute("for", "Wire "+(i+1));
			label.setAttribute("class", "q2");
			label.innerHTML="Wire "+(i+1);

			out.appendChild(label);

			var dropdown=document.createElement("SELECT");
			dropdown.setAttribute("class", "q2");
			dropdown.id="wirecolors"+(i+1);

			for (var j = 0; j < colors.length; j++) {
				var option=document.createElement("OPTION");
				option.innerHTML=colors[j];
				dropdown.add(option);
			};
			out.appendChild(dropdown);
			out.innerHTML+="<br class='q2'>";

	};
	
	$("label.q2block").css("display","block");

	var enter=document.createElement("Button");
	enter.innerHTML="Enter";
	enter.setAttribute("value","Enter");
	enter.setAttribute("class", "q2");
	enter.setAttribute("onclick","sWires3('output',"+wires+")");
	out.appendChild(enter);
}
function sWires3(output,wires){
	var out= document.getElementById("output");
	var wirecolors=[];
	for (var i = 1; i <= wires; i++) {
		wirecolors.push(document.getElementById("wirecolors"+i).value);
	};
	$(".answer").remove();

	//3 Wires Logic
	if(wires==3){
		if(wirecolors[0]!="red" && wirecolors[1]!="red" && wirecolors[2]!="red"){
			$("<p class='answer'>Cut the second wire!</p>").appendTo("#output");
			return;
		}
		if(wirecolors[wirecolors.length-1]=="white"){
			$("<p class='answer'>Cut the last wire!</p>").appendTo("#output");
			return;
		}

		var numblue=0;
		for (var i = wirecolors.length - 1; i >= 0; i--) {
			if(wirecolors[i]=="blue"){
				numblue++;
			}
		};
		if(numblue>=2){
			$("<p class='answer'>Cut the last BLUE wire!</p>").appendTo("#output");
			return;
		}
		$("<p class='answer'>Cut the last wire!</p>").appendTo("#output");
		return;

	//4 Wires Logic
	}else if(wires==4){
		var numred=0;
		for (var i = wirecolors.length - 1; i >= 0; i--) {
			if(wirecolors[i]=="red"){
				numred++;
			}
		};
		if(numred>=2){
			if(serialNumLastDigit=="Unset"){
				getSerialNumEven();
			}
			if(serialNumLastDigit=="Odd"){
				$("<p class='answer'>Cut the last RED wire!</p>").appendTo("#output");
				return;
			}
		}
		if(wirecolors[wirecolors.length-1]=="yellow" && numred==0){
			$("<p class='answer'>Cut the first wire!</p>").appendTo("#output");
			return;
		}

		var numblue=0;
		for (var i = wirecolors.length - 1; i >= 0; i--) {
			if(wirecolors[i]=="blue"){
				numblue++;
			}
		};
		if(numblue==1){
			$("<p class='answer'>Cut the first wire!</p>").appendTo("#output");
			return;
		}
		var numyellow=0;
		for (var i = wirecolors.length - 1; i >= 0; i--) {
			if(wirecolors[i]=="yellow"){
				numyellow++;
			}
		};
		if(numyellow>1){
			$("<p class='answer'>Cut the last wire!</p>").appendTo("#output");
			return;
		}
		$("<p class='answer'>Cut the second wire!</p>").appendTo("#output");
	//5 Wires Logic
	}else if(wires==5){
		if(wirecolors[wirecolors.length-1]=="black"){
			if(serialNumLastDigit=="Unset"){
				getSerialNumEven();
			}
			if(serialNumLastDigit=="Odd"){
				$("<p class='answer'>Cut the fourth wire!</p>").appendTo("#output");
				return;
			}
		}

	//6 Wires Logic
	}else if(wires==6){
		var numyellow=0;
		for (var i = wirecolors.length - 1; i >= 0; i--) {
			if(wirecolors[i]=="yellow"){
				numyellow++;
			}
		};
		if(numyellow==0){
			if(serialNumLastDigit=="Unset"){
				getSerialNumEven();
			}
			if(serialNumLastDigit=="Odd"){
				$("<p class='answer'>Cut the third wire!</p>").appendTo("#output");
				return;
			}
		}
		if(numyellow==1){
			var numwhite=0;
			for (var i = wirecolors.length - 1; i >= 0; i--) {
			if(wirecolors[i]=="white"){
				numwhite++;
				if(numwhite>=2){
					$("<p class='answer'>Cut the fourth wire!</p>").appendTo("#output");
					return;
				}
			}
		};
		}	
		var numred=0;
		for (var i = wirecolors.length - 1; i >= 0; i--) {
			if(wirecolors[i]=="red"){
				numred++;
			}
		};
		if(numred==0){
			$("<p class='answer'>Cut the last wire!</p>").appendTo("#output");
			return;
		}
		$("<p class='answer'>Cut the fourth wire!</p>").appendTo("#output");
		return;
	}else{
		console.log("Something fucked up in sWires3");
	}
}
function button(output){
	var out=document.getElementById("output");
	out.innerHTML="";
	var colors=["red","white","blue","yellow","black"];
	var buttonText=["Abort","Detonate","Hold","Other"];
	
	//Renders the color label and dropdown
	var label=document.createElement("LABEL");
	label.setAttribute("for", "buttonColor");
	label.innerHTML="Button Color:";
	out.appendChild(label);

	var colorDropdown=document.createElement("SELECT");
	colorDropdown.id="buttonColor";
	for (var j = 0; j < colors.length; j++) {
		var option=document.createElement("OPTION");
		option.innerHTML=colors[j]
		colorDropdown.add(option);
	};
	out.appendChild(colorDropdown);
	out.innerHTML+="<br>";

	//Renders the Button text label and dropdown
	var label=document.createElement("LABEL");
	label.setAttribute("for", "buttonText");
	label.innerHTML="Button Text:";
	out.appendChild(label);

	var textDropdown=document.createElement("SELECT");
	textDropdown.id="buttonText";
	for (var j = 0; j < buttonText.length; j++) {
		var option=document.createElement("OPTION");
		option.innerHTML=buttonText[j];
		textDropdown.add(option);
	};
	out.appendChild(textDropdown);
	out.innerHTML+="<br>";

	//enter button
	var enter=document.createElement("Button");
	enter.innerHTML="Enter";
	enter.setAttribute("value","Enter");
	enter.setAttribute("onclick","button2('output')");
	out.appendChild(enter);
	out.innerHTML+="<br>";
}
function button2(output){
	var color=document.getElementById("buttonColor");
	var text=document.getElementById("buttonText");
	
	if(color=="blue" && text=="Abort"){
		holdButton(output);
		return;
	}
	if(numBatteries==0){
			getnumBatteries();
		}
	if(numBatteries>1 && text=='Detonate'){
		$("<p class='answer'>Press and immediately Release!</p>").appendTo("#output");
		return;
	}
	if(color=="white"){
		if(window.confirm("Is there a lit indicator with\n\nCAR?\n\nPress OK for yes, and cancel for no")){
			holdButton(output);
			return;
		}
	}
	if(numBatteries>2){
		if(window.confirm("Is there a lit indicator with\n\nFRK?\n\nPress OK for yes, and cancel for no")){
			$("<p class='answer'>Press and immediately Release!</p>").appendTo("#output");
			return;
		}
	}
	if(color=="red" && text=="Hold"){
		$("<p class='answer'>Press and immediately Release!</p>").appendTo("#output");
		return;
	}
	holdButton(output);
}
function holdButton(output){
	var out=document.getElementById("output");
	out.innerHTML+="Hold down the button, and indicate the color of the strip:"
	
	var stripColor=["white","blue","yellow","other"];


	//Renders the strip color label and dropdown
	var label=document.createElement("LABEL");
	label.setAttribute("for", "buttonText");
	label.innerHTML="Strip Color:";
	out.appendChild(label);

	var stripColorDropdown=document.createElement("SELECT");
	stripColorDropdown.id="stripColor";
	for (var j = 0; j < stripColor.length; j++) {
		var option=document.createElement("OPTION");
		option.innerHTML=stripColor[j];
		stripColorDropdown.add(option);
	};
	out.appendChild(stripColorDropdown);
	out.innerHTML+="<br>";

	//enter button
	var enter=document.createElement("Button");
	enter.innerHTML="Enter";
	enter.setAttribute("value","Enter");
	enter.setAttribute("onclick","holdButton2('"+output+"')");
	out.appendChild(enter);
	out.innerHTML+="<br>";
}
function holdButton2(output){
	$(".answer").remove();
	var out=document.getElementById("output");
	var stripColor=document.getElementById("stripColor");
	switch(stripColor.value){
		case "blue":
			out.innerHTML+="<p class='answer'>Hold until a </p><strong class='answer'>4</strong><p class='answer'> is present on timer.</p>";
			break;
		case "white":
			out.innerHTML+="<p class='answer'>Hold until a </p><strong class='answer'>1</strong><p class='answer'> is present on timer.</p>";
			break;
		case "yellow":
			out.innerHTML+="<p class='answer'>Hold until a </p><strong class='answer'>5</strong><p class='answer'> is present on timer.</p>";
			break;
		case "other":
			out.innerHTML+="<p class='answer'>Hold until a </p><strong class='answer'>1</strong><p class='answer'> is present on timer.</p>"
			break;
	}
}
function keypad(output){
	var out=document.getElementById("output");
	// $.ajax({url: "keypaddisplay.php", success: function(result){
 //        $("#output").html(result);
 //    }});
 //    return false;

    var xmlHttp = new XMLHttpRequest();
            
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {           
            out.innerHTML = xmlHttp.responseText;

            $("#keypads").bind("mousedown", function(e) {
  				e.metaKey = true;
			}).selectable({
			    stop: function() {

			    	var selected=[];

        			var result = $( "#keypadoutput" ).empty();
        			$( ".ui-selected", this ).each(function() {
            			var id = $( this ).attr('id');
            			selected.push(id);
            		});
            		// $("#keypadoutput").append(selected);

            		if(selected.length==4){


					var keypadset1=["symbol1.png","symbol2.png","symbol3.png","symbol4.png","symbol5.png","symbol6.png","symbol7.png"];
					var keypadset2=["symbol7.png","symbol1.png","symbol8.png","symbol9.png","symbol10.png","symbol6.png","symbol11.png"];
					var keypadset3=["symbol12.png","symbol13.png","symbol9.png","symbol14.png","symbol15.png","symbol3.png","symbol10.png"];
					var keypadset4=["symbol17.png","symbol18.png","symbol19.png","symbol5.png","symbol14.png","symbol11.png","symbol20.png"];
					var keypadset5=["symbol21.png","symbol20.png","symbol19.png","symbol22.png","symbol18.png","symbol23.png","symbol24.png"];
					var keypadset6=["symbol17.png","symbol7.png","symbol25.png","symbol26.png","symbol21.png","symbol27.png","symbol28.png"];
					
					if(isSubset(keypadset1,selected)){
						findOrder(selected,keypadset1);


					}else if(isSubset(keypadset2,selected)){
						findOrder(selected,keypadset2);
						

					}else if(isSubset(keypadset3,selected)){
						findOrder(selected,keypadset3);

					}else if (isSubset(keypadset4,selected)){
						findOrder(selected,keypadset4);

					}else if(isSubset(keypadset5,selected)){
						findOrder(selected,keypadset5);

					}else if(isSubset(keypadset6,selected)){
						findOrder(selected,keypadset6);

					}else{
						$("#keypadoutput").append("<strong>No match found</strong>");
						$("#keypadoutput").css("width","300px")
					}
					$("#keypadoutput").css("border","solid 5px #BA4423")


				}else{
					$("#keypadoutput").css("border","")
				}
            	}
            })
		}
    };

    out.innerHTML="<h1>Loading...</h1>";
    // When a new AJAX request is made, show the loading icon
    
    xmlHttp.open("GET", "display.php?action=keypad", true);
    xmlHttp.send();
	
}
function Simonsays(output){
	var out=document.getElementById("output");
	out.innerHTML="";

	if(serialNumVowel=="Unset"){
		getSerialNumVowel();
	}

	var colors=["red","blue","yellow","green"];

	if(!window.confirm("Do you have "+ strikes+ " strikes? Click OK for yes and cancel to set new number of strikes.")){
		getnumStrikes();
	}

	for(i=0;i<=4;i++){


		var label=document.createElement("LABEL");	
		label.setAttribute("for", "Color "+(i+1));		
		label.innerHTML="Color "+(i+1);	
		out.appendChild(label);	
		var dropdown=document.createElement("SELECT");	
		dropdown.setAttribute("class", "simonAnswer");	
		dropdown.id="Color"+(i+1)+"Select";
		dropdown.setAttribute("onchange","refreshSimonResponses()")
		for (j = 0; j < colors.length; j++) {
			var option=document.createElement("OPTION");
			option.innerHTML=colors[j];
			dropdown.add(option);
		};
		out.appendChild(dropdown);
		var response=document.createElement("P");
		response.setAttribute("id","simonResponse"+(i+1));
		response.innerHTML="Test "+(i+1);
		out.appendChild(response);
		out.innerHTML+="<br>";

		if(serialNumVowel=="Yes"){

		}else if(serialNumVowel=="No"){

		}else{
			out.innerHTML="Serial Number is not one of the set values";
		}
	}
}
function refreshSimonResponses(){
	
}
function WhosOnFirst(output){
	var out=document.getElementById("output");
}
function memory(output){
	var out=document.getElementById("output");
}
function morse(output){
	var out=document.getElementById("output");
}
function cwires(output){
	var out=document.getElementById("output");
	
	var prompts=document.createElement("DIV");

	out.appendChild(prompts);

	//Red
	prompts.innerHTML="<label>Red on Wire:";
	var radio=document.createElement("INPUT");
	radio.setAttribute("type","radio");
	radio.setAttribute("name","red");
	radio.setAttribute("value",1);
	prompts.appendChild(radio);
	prompts.innerHTML+="Yes";

	var radio=document.createElement("INPUT");
	radio.setAttribute("type","radio");
	radio.setAttribute("name","red");
	radio.setAttribute("value",0);
	prompts.appendChild(radio);
	prompts.innerHTML+="No<br>";

	//White
	prompts.innerHTML+="<label>White on Wire:";
	var radio=document.createElement("INPUT");
	radio.setAttribute("type","radio");
	radio.setAttribute("name","white");
	radio.setAttribute("value",1);
	prompts.appendChild(radio);
	prompts.innerHTML+="Yes";

	var radio=document.createElement("INPUT");
	radio.setAttribute("type","radio");
	radio.setAttribute("name","white");
	radio.setAttribute("value",0);
	prompts.appendChild(radio);
	prompts.innerHTML+="No<br>";

	//Star
	prompts.innerHTML+="<label>Star:";
	var radio=document.createElement("INPUT");
	radio.setAttribute("type","radio");
	radio.setAttribute("name","Star");
	radio.setAttribute("value",1);
	prompts.appendChild(radio);
	prompts.innerHTML+="Yes";

	var radio=document.createElement("INPUT");
	radio.setAttribute("type","radio");
	radio.setAttribute("name","Star");
	radio.setAttribute("value",0);
	prompts.appendChild(radio);
	prompts.innerHTML+="No<br>";

	//Led
	prompts.innerHTML+="<label>Led:";
	var radio=document.createElement("INPUT");
	radio.setAttribute("type","radio");
	radio.setAttribute("name","Led");
	radio.setAttribute("value",1);
	prompts.appendChild(radio);
	prompts.innerHTML+="Yes";

	var radio=document.createElement("INPUT");
	radio.setAttribute("type","radio");
	radio.setAttribute("name","Led");
	radio.setAttribute("value",0);
	prompts.appendChild(radio);
	prompts.innerHTML+="No<br>";
}
function WireSequences(output){
	var out=document.getElementById("output");
}
function maze(output){
	var out=document.getElementById("output");
}
function password(output){
	var out=document.getElementById("output");
}
function knobOpen(output){
	var out=document.getElementById("output");

	window.open("knob.html", "_blank", "width=500, height=500");

}
function knobRun(output){
	var out=document.getElementById("output");

	$("#knoblights").bind("mousedown", function(e) {
  		e.metaKey = true;
	}).selectable({

		stop: function(){
			var lights=[];
			$( ".ui-selected", this ).each(function() {
          		lights.push(this.id);
       		});
       		var up1=["l3","l5","l6","l7","l8","l9","l10","l12"];
       		var up2=["l1","l3","l5","l8","l9","l11","l12"];
       		if(compareArrays(lights,up1) || compareArrays(lights,up2)){
       			out.innerHTML="<h1>Up!<h1>";
       			return;
       		}
       		var down1=["l2","l3","l6","l7","l8","l9","l10","l12"];
       		var down2=["l1","l3","l5","l8","l12"];
       		if(compareArrays(lights,down1) || compareArrays(lights,down2)){
       			out.innerHTML="<h1>Down!<h1>";
       			return;
       		}
       		var left1=["l5","l7","l10","l11","l12"];
       		var left2=["l5","l10","l11"];
       		if(compareArrays(lights,left1) || compareArrays(lights,left2)){
       			out.innerHTML="<h1>Left!<h1>";
       			return;
       		}
       		var right1=["l1","l3","l4","l5","l6","l7","l8","l9","l11"];
       		var right2=["l1","l3","l4","l7","l8","l9","l11"];
       		if(compareArrays(lights,right1) || compareArrays(lights,right2)){
       			out.innerHTML="<h1>Right!<h1>";
       			return;
       		}
       		out.innerHTML="<h1>Invalid Entry</h1>";
		}
	});


}

// Allows changes to global variables
function getSerialNumEven(){
	if(window.confirm("Is the last digit of the serial number even? Click OK for yes.")){
		serialNumLastDigit="Even";
	}else{
		serialNumLastDigit="Odd";
	}
	displayBombValues();
}
function getParallel(){
	if(window.confirm("Is there a parallel port on the bomb? Click OK for yes.")){
		parallel="Yes";
	}else{
		parallel="No";
	}
	displayBombValues();
}
function getnumBatteries(){
	numBatteries=prompt("How many batteries are there?")
	displayBombValues();
}
function getSerialNumVowel(){
	if(window.confirm("Is there a vowel in the serial number? Click OK for yes.")){
		serialNumVowel="Yes";
	}else{
		serialNumVowel="No";
	}
	displayBombValues();
}
function addStrike(){
	strikes++;
	displayBombValues();
}
function getnumStrikes(){
	strikes=prompt("How many strikes?");
	while(strikes>=3 || strikes <0 || strikes==null){
		strikes=prompt("Invalid number of strikes. How many strikes?");
	}
	displayBombValues();
}
function displayBombValues(){
	var lastdigitDisplay= document.getElementById("serialNumLastDigit");
	var batteriesDisplay= document.getElementById("numBatteries");
	var parallelDisplay= document.getElementById("parallel");
	var serialVowelDisplay= document.getElementById("serialNumVowel");
	var strikesDisplay= document.getElementById("strikes");

	if(strikes>=3){
		alert("3 strikes, you're out!");
		clearBombValues();
		var out=document.getElementById("output");
		out.innerHTML="";
	}else{
		lastdigitDisplay.innerHTML=serialNumLastDigit;
		batteriesDisplay.innerHTML=numBatteries;
		parallelDisplay.innerHTML=parallel;
		serialVowelDisplay.innerHTML=serialNumVowel;
		strikesDisplay.innerHTML=strikes;
	}
}
function clearBombValues(){
	serialNumLastDigit="Unset";
	numBatteries=0;
	parallel="Unset";
	serialNumVowel="Unset";
	strikes=0;
	displayBombValues();
}

function compareArrays(array1,array2){
	if(!array1){
		return false;
	}
	if(!array2){
		return false;
	}
	if(array1.length!=array2.length){
		return false;
	}
	for (var i = 0, l=array1.length; i < l; i++) {
        if (array1[i]!=array2[i]){
            return false;       
        }             
 	}
    return true;
}

function isSubset(array1, sub) {
	var sup=array1.slice();
    sup.sort();
    var i, j;
    for (i=0,j=0; i<sup.length && j<sub.length;) {
        if (sup[i] < sub[j]) {
            ++i;
        } else if (sup[i] == sub[j]) {
            ++i; ++j;
        } else {
            // sub[j] not in sup, so sub not subbag
            return false;
        }
    }
    // make sure there are no elements left in sub
    return j == sub.length;
}

function findOrder(array1,sub){
	var order=[];
	for (var i = 0; i < sub.length; i++) {
		for (var j = 0; j < array1.length; j++) {
			if(sub[i]==array1[j]){
				order.push(array1[j]);
			}
		};
	};
	for (var i = 0; i < 4; i++) {
		$("#keypadoutput").append("<img src='bombpics/keypad/" + order[i] + "'></img>");
		$("#keypadoutput").css("width","400px")
	}
}