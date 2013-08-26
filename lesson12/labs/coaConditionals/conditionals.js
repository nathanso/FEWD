	// this is a single line comment
	/*
	 * this is a multi-line comment
	 */

	 //Prompt the user for their name and last name. 

var name = prompt ("What is your name (not including last Name)?")
var lastname = prompt ("What is your last name?")


	//Create a new variable called full name and store the users full name.
	
var fullname = name + " " + lastname	
	
	//Print the full name to the console.

console.log (fullname);

	//Prompt the user for their age.
	
var age = prompt ("What is your age?");

	//Add 10 to the age and print the output to the console.
	
console.log (10 + parseInt(age));	
	
	//Verify that the user is over 18 and print if they are a minor or adult to the console.
age = 10 + parseInt(age);

if (age >= 18){
	console.log ("Adult");
}
else {
	console.log ("Minor");
}
	
	//Verify if the first name is "General" and the last name is NOT "Assembly"

if (name == "General" && lastname != "Assembly"){
	console.log ("True");
}else {
	console.log ("False");	
}