// JavaScript Document

	//each question is an object (includes question, answers, correct) and they're all stored in an array
    var questions = new Array ();
	var questionIndex = 0;
	
	//variable for the score and question number
	var score = 0;
	var questionNumber = 1
	
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
	questions [5] = new questionObject ("The Rose Parade takes place in which L.A. suburb?", ["Santa Monica", "Beverly Hills", "Pasadena", "Hollywood"], 2);
	questions [6] = new questionObject ("Which movie takes place in L.A?", ["The Departed", "The Bourne Legacy", "Crash", "Love Actually"], 2);
	questions [7] = new questionObject ("Which is no longer an ethnic neighborhood in L.A.", ["Little Ethiopia","Thai Town", "Little Tokyo", "Little Italy"], 3);
	questions [8] = new questionObject ("The Hollywood Bowl is an amphitheater for what kind of events?", ["sport","music", "film", "eating"], 1);
	questions [9] = new questionObject ("Which term is used to refer to people from L.A.?", ["Angelenos", "L.A.-ers", "Lakers", "Angelos"], 0);
	
$(document).ready(function(e) {
		
	console.log(score);
	generateQuestions();
	generateAnswers();
	$('#questionNumber').append(' '+'<p>'+ questionNumber +'</p>');
	$('#score').append(' '+'<p>'+ score +'</p>');
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
	
function numberCorrect(){
	$('#score p').remove();
	score++;
	$('#score').append(' '+'<p>'+ score + '/10</p>');
}

function questionOrder(){
	$('#questionNumber p').remove();
	questionNumber++;
	$('#questionNumber').append(' '+'<p>' + questionNumber + '</p>');
}

function evaluation(){
	var selected = $('input[name=answers]:checked').val();
	var correct = questions[questionIndex].correct;
	if(selected==correct){
		$('#result').append('<h3>'+"Correct"+'</h3>');
		numberCorrect();
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
	if (questionIndex<9){
		$('#next').empty();
		$('#result').empty();
		$('#question').empty();
		$('#answers').empty();
		$('#result').empty();
		questionIndex++;
		generateQuestions();
		generateAnswers();
		questionOrder();
		enter();
	}else{
		$('#next').remove();
		$('#score').remove();
		$('#questionNumber').remove();
		$('#question').remove();
		$('#answers').remove();
		$('#result').remove();
	}
	})


})