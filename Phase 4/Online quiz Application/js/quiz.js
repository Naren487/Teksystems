/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */
var Java = {
	"Quiz": [
		{
			"id": 1,
			"question": "Which of the following option leads to the portability and security of Java?",
			"options": [
				{
					"a": "Bytecode is executed by JVM",
					"b": "The applet makes the Java code secure and portable",
					"c": "Use of exception handling",
					"d": "Dynamic binding between objects"
				}
			],
			"answer": "Bytecode is executed by JVM",
			"score": 0,
			"status": ""
		},
		{
			"id": 2,
			"question": "Which of the following is not a Java features?",
			"options": [
				{
					"a": "Dynamic",
					"b": "Architecture Neutral",
					"c": "Use of pointers",
					"d": "Object-oriented"
				}
			],
			"answer": "Use of pointers",
			"score": 0,
			"status": ""
		},
		{
			"id": 3,
			"question": "_____ is used to find and fix bugs in the Java programs.",
			"options": [
				{
					"a": "JVM",
					"b": "JRE",
					"c": "JDK",
					"d": "JDB"
				}
			],
			"answer": "JDB",
			"score": 0,
			"status": ""
		},
		{
			"id": 4,
			"question": "What is the return type of the hashCode() method in the Object class?",
			"options": [
				{
					"a": "Object",
					"b": "int",
					"c": "long",
					"d": "void"
				}
			],
			"answer": "int",
			"score": 0,
			"status": ""
		},
		{
			"id": 5,
			"question": "Which of the following is a valid long literal?",
			"options": [
				{
					"a": "ABH8097",
					"b": "L990023",
					"c": "904423",
					"d": "0xnf029L"
				}
			],
			"answer": "0xnf029L",
			"score": 0,
			"status": ""
		},
	]
}
var JavaScript = {
	"Quiz": [
		{
			"id": 1,
			"question": "Inside which HTML element do we put the JavaScript?",
			"options": [
				{
					"a": "&lt;script&gt;",
					"b": "&lt;javascript&gt;",
					"c": "&lt;scripting&gt;",
					"d": "&lt;js&gt;"
				}
			],
			"answer": "&lt;script&gt;",
			"score": 0,
			"status": ""
		},
		{
			"id": 2,
			"question": "Where is the correct place to insert a JavaScript?",
			"options": [
				{
					"a": "The &lt;head&gt; section",
					"b": "The &lt;body&gt; section",
					"c": "Both the &lt;head&gt; section and the &lt;body&gt; section are correct"
				}
			],
			"answer": "Both the &lt;head&gt; section and the &lt;body&gt; section are correct",
			"score": 0,
			"status": ""
		},
		{
			"id": 3,
			"question": "What is the correct syntax for referring to an external script called 'xxx.js'?",
			"options": [
				{
					"a": "&ltscript href=&quot;xxx.js&quot;>",
					"b": "&lt;script name=&quot;xxx.js&quot;&gt;",
					"c": "&lt;script src=&quot;xxx.js&quot;&gt;"
				}
			],
			"answer": "&lt;script src=&quot;xxx.js&quot;&gt;",
			"score": 0,
			"status": ""
		},
		{
			"id": 4,
			"question": "The external JavaScript file must contain the &lt;script&gt; tag.",
			"options": [
				{
					"a": "True",
					"b": "False"
				}
			],
			"answer": "False",
			"score": 0,
			"status": ""
		},
		{
			"id": 5,
			"question": "How do you write &quot;Hello World&quot; in an alert box?",
			"options": [
				{
					"a": "alertBox(&quot;Hello World&quot;);",
					"b": "msg(&quot;Hello World&quot;);",
					"c": "alert(&quot;Hello World&quot;);",
					"d": "msgBox(&quot;Hello World&quot;);",
				}
			],
			"answer": "alert(&quot;Hello World&quot;);",
			"score": 0,
			"status": ""
		},

	],

}



var quizApp = function (tempjson) {
	console.log(tempjson);
	this.score = 0;
	this.qno = 1;
	this.currentque = 0;
	var totalque = tempjson.Quiz.length;


	this.displayQuiz = function (cque) {
		this.currentque = cque;
		if (this.currentque < totalque) {
			$("#tque").html(totalque);
			$("#previous").attr("disabled", false);
			$("#next").attr("disabled", false);
			$("#qid").html(tempjson.Quiz[this.currentque].id + '.');


			$("#question").html(tempjson.Quiz[this.currentque].question);
			$("#question-options").html("");
			for (var key in tempjson.Quiz[this.currentque].options[0]) {
				if (tempjson.Quiz[this.currentque].options[0].hasOwnProperty(key)) {

					$("#question-options").append(
						"<div class='form-check option-block'>" +
						"<label class='form-check-label'>" +
						"<input type='radio' class='form-check-input' name='option'   id='q" + key + "' value='" + tempjson.Quiz[this.currentque].options[0][key] + "' required><span id='optionval'>" +
						tempjson.Quiz[this.currentque].options[0][key] +
						"</span></label>"
					);
				}
			}
		}
		if (this.currentque <= 0) {
			$("#previous").attr("disabled", true);
		}
		if (this.currentque >= totalque) {
			$('#next').attr('disabled', true);
			for (var i = 0; i < totalque; i++) {
				this.score = this.score + tempjson.Quiz[i].score;
			}
			var text="";
			for (var i = 0; i < totalque; i++) {
				text += tempjson.Quiz[i].status+"\n"+tempjson.Quiz[i].status+"\n";
			}
			alert("Review the Question you have missed\n" + text);
						return this.showResult(this.score);
		}
	}

	this.showResult = function (scr) {
		$("#result").addClass('result');
		$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
		for (var j = 0; j < totalque; j++) {
			var res;
			if (tempjson.Quiz[j].score == 0) {
				res = '<span class="wrong">' + tempjson.Quiz[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
			} else {
				res = '<span class="correct">' + tempjson.Quiz[j].score + '</span><i class="fa fa-check c-correct"></i>';
			}
			$("#result").append(
				'<div class="result-question"><span>Q ' + tempjson.Quiz[j].id + '</span> &nbsp;' + tempjson.Quiz[j].question + '</div>' +
				'<div><b>Correct answer:</b> &nbsp;' + tempjson.Quiz[j].answer + '</div>' +
				'<div class="last-row"><b>Score:</b> &nbsp;' + res +

				'</div>'

			);

		}
	}

	this.checkAnswer = function (option) {
		var answer = tempjson.Quiz[this.currentque].answer;
		option = option.replace(/\</g, "&lt;")   //for <
		option = option.replace(/\>/g, "&gt;")   //for >
		option = option.replace(/"/g, "&quot;")

		if (option == tempjson.Quiz[this.currentque].answer) {
			if (tempjson.Quiz[this.currentque].score == "") {
				tempjson.Quiz[this.currentque].score = 1;
			}
		} 
		tempjson.Quiz[this.currentque].status = "answered";


	}

	this.changeQuestion = function (cque) {
		this.currentque = this.currentque + cque;
		this.displayQuiz(this.currentque);

	}

}


const urlParams = new URLSearchParams(window.location.search);
const greetingValue = urlParams.get('quiz');
console.log(greetingValue);
if (greetingValue === "js") {

	var jsq = new quizApp(JavaScript);

} else if (greetingValue === "java") {
	var jsq = new quizApp(Java);

}
var selectedopt;
$(document).ready(function () {
	jsq.displayQuiz(0);

	$('#question-options').on('change', 'input[type=radio][name=option]', function (e) {

		//var radio = $(this).find('input:radio');
		$(this).prop("checked", true);
		selectedopt = $(this).val();
	});
});
$('#next').click(function (e) {
	e.preventDefault();
	if (selectedopt) {
		jsq.checkAnswer(selectedopt);
	}
	jsq.changeQuestion(1);
});
$('#previous').click(function (e) {
	e.preventDefault();
	if (selectedopt) {
		jsq.checkAnswer(selectedopt);
	}
	jsq.changeQuestion(-1);
});	