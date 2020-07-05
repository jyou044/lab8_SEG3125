/*
The main.js file.
This file contains the main underlying javascript used in the website functionality. 
The code for this file was inspired by 
https://github.com/carolinebarriere/carolinebarriere.github.io/blob/master/SEG3125-Module2-Grocery/scripts/main.js
*/

//The openInfo function. This function is called when the tab is clicked by the user. 
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}


	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}


	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}