var timer = document.querySelector(".timer")
var start = document.querySelector("#startButton")
var wins = localStorage.getItem("wins")
var loss = localStorage.getItem("losses")
var questionbox = document.querySelector("#questionbox")
var questionCardHead = document.querySelector(".questionClass")
var answerCardHead = document.querySelectorAll(".btn")






// ---------------------------Code START------------------------------------------




start.addEventListener("click", startgame);



function time() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft

        if (timeLeft === 0) {
            clearInterval(timeInterval);

        }
    }, 1000);

}


function startgame() {
    time();
    questionbox.classList.remove('hide');
    displayQuestionAnswer();


}


// function sortQuestions() {
//     randQuestion = qandA.sort(() => Math.random() -.5)
// }

// function nextQuestion() {
//     showQuestion(randomQuest[qandAIndex])
// }

var currentQIndex = 0;

function displayQuestionAnswer() {
    var question = qandA[currentQIndex];

    questionCardHead.textContent = question.questions

    question.answers.forEach(function (answer, i) {
        answerCardHead[i].textContent = answer.text;
        answerCardHead[i].setAttribute("correct", answer.correct);
    });
}

// THIS CODE BREAKS THE GAME
answerCardHead.addEventListener("click", function () {
    currentQIndex++
    console.log(currentQIndex)
})

// for loop append and create elements for buttons
// OR if question[0], append or text.content btn1, 2, 3, 4 to reflect correct anwser set. Scalablility
// make a bunch of vars for answers, 
// make one var == true
// if (true), update score
// for loop, (i >4,) btn.textcontent = qandA[0].answers

var qandA = [
    {
        questions: 'What is your favorite cheese?',
        answers: [
            { text: "Manchego", correct: true },
            { text: "Sour Cream", correct: false },
            { text: "Onion Mix", correct: false },
            { text: "Cheddar", correct: false },
        ]
    },
    {
        questions: 'What is your favorite color?',
        answers: [
            { text: "Red", correct: true },
            { text: "Yellow", correct: false },
            { text: "Green", correct: false },
            { text: "Blue", correct: false },
        ]
    },
    {
        questions: 'What is your favorite movie?',
        answers: [
            { text: "Cars 2", correct: true },
            { text: "Cars 2", correct: true },
            { text: "Cars 2", correct: true },
            { text: "Cars 2", correct: true },
        ]
    },
    {
        questions: 'What is your favorite animal?',
        answers: [
            { text: "Dog", correct: true },
            { text: "Snake", correct: false },
            { text: "Cat", correct: false },
            { text: "Rhino", correct: false },
        ]
    }
]

