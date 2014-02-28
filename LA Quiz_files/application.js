// JavaScript Document

	//each question is an object (includes question, answers, correct) and they're all stored in an array
    var questions = new Array ();
	var questionIndex = 0;
	
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
	questions [4] = new questionObject ("Which museum in L.A. is known for its lamp posts?", ["MOCA", "LACMA", "Norton Simon", "Bowers"], 1);


$(document).ready(function(e) {
	
	
	
	generateQuestions();
	generateAnswers();
	enter();

	

function generateQuestions (){
	$('#question').append('<h1>' + questions[questionIndex].question + '</h1>');
	
}

function generateAnswers () {
	var answerList = questions[questionIndex].answers;
	for (var i = 0; i<answerList.length; i++){
		$('#answers').append("<li><input type='radio' class='radio' name='answers' value="+ i +">" + answerList[i] +"</li>")
	}
	$('#next').append('<p>Next</p>').hide().fadeIn('slow');
}
	
function evaluation(){
	var selected = $('input[name=answers]:checked').val();
	var correct = questions[questionIndex].correct;
	if(selected==correct){
		$('#result').append('<h3>'+"Correct"+'</h3>');
	}else{
		$('#result').append('<h4>'+"Wrong"+'</h4>');
	}
}

function enter(){
	$('.radio').click(function(e) {
        if ($("input[type=radio]").is(':checked')){
			evaluation();
		}
    })
}

$('#next').click(function(e) {
		$('#question').empty();
		$('#answers').empty();
		$('#next').empty();
		$('#result').empty();
		questionIndex++;
		generateQuestions();
		generateAnswers();
		enter();
	});


})