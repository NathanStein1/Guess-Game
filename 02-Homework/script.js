var timer = document.querySelector(".timer")
var start = document.querySelector("#startButton")
var wins = 0
var loss = 0
var questionbox = document.querySelector("#questionbox")
var questionCardHead = document.querySelector(".questionClass")
var answerCardHead = document.querySelectorAll(".btn")
var btn1 = document.querySelector("#btn1")
var btn2 = document.querySelector("#btn2")
var btn3 = document.querySelector("#btn3")
var btn4 = document.querySelector("#btn4")
var target = btn1, btn2, btn3, btn4
var currentQIndex = 0;


// var currentTime= timeLeft GLOBAL? Nested Functions?
// ---------------------------Code START------------------------------------------
// List of Tasks:
// 1. True and false values attributes to answers
// 2. Drop time on false clicks, this is actually implemented, however, true and false values need to be
// 2.5. The problem might be I don't understand the code of the function displayQuestionAnswer
// 3. Store scores on local storage
// 4. Make new html page to launch to instead of text.content in displayQuestionAnwser function




start.addEventListener("click", startgame);



function time() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft

        if (timeLeft === 0) {
            clearInterval(timeInterval);

        }
        displayQuestionAnswer();
        if (correct == false){
            timeLeft-5
        }
    }, 1000);

}


function startgame() {
    time();
    questionbox.classList.remove('hide');
    displayQuestionAnswer();


}



function displayQuestionAnswer() {
    var question = qandA[currentQIndex];
    if (currentQIndex >= qandA.length) {
        questionCardHead.textContent="NEED TO GO TO NEW PAGE TO DISPLAY RESULTS AND ENTER SHIT"
    }

    questionCardHead.textContent = question.questions

    question.answers.forEach(function (answer, i) {
        answerCardHead[i].textContent = answer.text;
        answerCardHead[i].setAttribute("correct", answer.correct);
    });
}


function checkAnswer() {
    if (target == true); {
        currentQIndex++;
        displayQuestionAnswer();
    }
    //  else {
    //     
    //     loss++;
    //     displayQuestionAnswer();
    // }
};

btn1.addEventListener('click', checkAnswer);
btn2.addEventListener('click', checkAnswer);
btn3.addEventListener('click', checkAnswer);
btn4.addEventListener('click', checkAnswer);



var qandA = [
    {
        questions: 'What is your favorite cheese?',
        answers: [
            { text: "Manchego", correct: true },
            { text: "Gouda", correct: false },
            { text: "PepperJack", correct: false },
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




// ---------------------------------------------------CODE ENDS--------------------------

// ----------------------------------------BABBLE BEGINS--------------------

// function sortQuestions() {
//     randQuestion = qandA.sort(() => Math.random() -.5)
// }

// function nextQuestion() {
//     showQuestion(randomQuest[qandAIndex])
// }
