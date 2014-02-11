// JavaScript Document

$(document).ready(function(e) {
	
	//each question is an object (includes question, answers, correct) and they're all stored in an array
    var questions = new Array ();
	
	//making the object
	function questionObject(question, answers, correct){
		this.question = question;
		this.answers = answers;
		this.correct = correct;
}

	//array of questions
	questions [0] = new questionObject ("What does Los Angeles mean in Spanish?", ["The Angels", "The Angles", "The Angry People", "The Ants"], 0);
	questions [1] = new questionObject ("What sport does L.A. not have a team for?", ["basketball","hockey","baseball","football"],3);
	questions [2] = new questionObject ("What is UCLA's mascot?",["The Trojans", "The Bruins", "The Angels", "The Bears"], 1);
	questions [3] = new questionObject ("Which of the following is not a freeway in L.A.?", ["405","10","101","81"], 3);
	questions [4] = new questionObject ("Which museum in L.A. is known for their lamp posts?", ["MOCA", "LACMA", "Norton Simon", "Bowers"], 1);
	
});