const questions = [
		{
			question: "What year did Malaysia gain independence?",
			options: ['1957', '1857', '1757', '1963'],
			correctAnswer: '1957'
		},
		{
			question: "What is the highest mountain in the world?",
			options: ['Mount Kinabalu', 'Mount Everest', 'Mount Fuji', 'Mount K2'],
			correctAnswer: 'Mount Everest'
		},
		{
			question: "What is the biggest mammal in the world?",
			options: ['gorilla', 'human', 'elephant', 'whale'],
			correctAnswer: 'whale'
		}
	];

let questionNumber = 0

const questionElement = document.getElementById('question')
const optionsElements = document.querySelectorAll('.option')
const feedbackElement = document.getElementById('feedback')
const nextElement = document.getElementById('next')
const resetElement = document.getElementById('reset')

function displayQuestion() {
	questionElement.textContent = questions[questionNumber].question;
	optionsElements.forEach(
		(option, index) => {
		option.textContent = questions[questionNumber].options[index];
		option.addEventListener('click', checkAnswer);
	})
}


function checkAnswer(event) {
	const selectedOption = event.target.textContent;
	if (selectedOption === questions[questionNumber].correctAnswer){
		feedbackElement.textContent = 'Correct!';
	} else {
		feedbackElement.textContent = 'Wrong!';
	}
}

nextElement.addEventListener('click', () => {
	questionNumber +=1;
	if (questionNumber < questions.length){
		displayQuestion();
	} else {feedbackElement.textContent = "";}	
});


// nextElement.addEventListener('click', () => {
// 	questionNumber +=1;
// 	if (questionNumber < questions.length){
// 		displayQuestion();
// 	} else if (questionNumber > questions.length){
// 		// nextElement.addEventListener('click', () => {questionNumber = 0;});
// 		feedbackElement.textContent = "End of quiz";
// 		nextElement.textContent = "The end";
		
// 	} else {
// 		feedbackElement.textContent = "";}
	
// });


resetElement.addEventListener('click', () => {
	questionNumber = 0;
	displayQuestion();
})

//when question is not answered, dont allow the next question until answered


displayQuestion();