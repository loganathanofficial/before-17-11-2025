const userName = localStorage.getItem("userName");
const quizData = [
    {
        question: "What type of platform does Rodeo Digital Pvt Ltd primarily offer?",
        options: {
            option1: "Social media platform",
            option2: "Cloud-based eCommerce software",
            option3: "Video streaming service",
            option4: "Gaming platform"
        },
        answer: "option2"
    },
    {
        question: "Where is the headquarters of Rodeo Digital Pvt Ltd located?",
        options: {
            option1: "Chennai",
            option2: "Mumbai",
            option3: "Bengaluru",
            option4: "Delhi"
        },
        answer: "option3"
    },
    {
        question: "Rodeo Digital Pvt Ltd primarily serves which type of businesses?",
        options: {
            option1: "Large multinational corporations",
            option2: "Small and medium-sized enterprises (SMEs)",
            option3: "Government agencies",
            option4: "Educational institutions"
        },
        answer: "option2"
    },
    {
        question: "What is a key feature of Rodeo Digital's software platform?",
        options: {
            option1: "Advanced supply and demand orchestration",
            option2: "Virtual reality shopping",
            option3: "Online gaming integration",
            option4: "Cryptocurrency payment support"
        },
        answer: "option1"
    },
    {
        question: "Who among the following is a co-founder of Rodeo Digital Pvt Ltd?",
        options: {
            option1: "Sachin Jayapalan",
            option2: "Karthikeyan D",
            option3: "Vinod Velayudham",
            option4: "Gopinath"
        },
        answer: "option2"
    },
    {
        question: "What type of mobile solution does Rodeo Digital provide to retailers?",
        options: {
            option1: "Mobile shopping app with store branding",
            option2: "Mobile game for customer engagement",
            option3: "Mobile payment wallet",
            option4: "Mobile food delivery app"
        },
        answer: "option1"
    },
    {
        question: "Which industry does Rodeo Digital Pvt Ltd primarily operate in?",
        options: {
            option1: "Retail eCommerce software",
            option2: "Banking and finance",
            option3: "Healthcare software",
            option4: "Automotive manufacturing"
        },
        answer: "option1"
    }
];

const questionTitle = document.getElementById("question-title");
const quizForm = document.getElementById("quiz-form");
const nextBtn = document.getElementById("next-btn");
const resultDiv = document.getElementById("result");
const scoreDivision = document.getElementById("scoreDivision");
const sroreText = document.getElementById("sroreText");

scoreDivision.style.display = "none";
let currentQuestionIndex = 0;
let score = 0;

function loadQuestion(index) {
    const q = quizData[index];
    debugger;
    questionTitle.textContent = `${q.question}`;
    Object.keys(q.options).forEach(id => {
        const label = quizForm.querySelector(`label[for=${id}]`);
        label.textContent = q.options[id];
        quizForm.querySelector(`#${id}`).checked = false;
    });
    nextBtn.disabled = true;
    resultDiv.textContent = "";
}

quizForm.addEventListener("change", () => { nextBtn.disabled = false; });

nextBtn.addEventListener("click", () => {
    const selectedOption = quizForm.option.value;
    if (!selectedOption) {
        alert("Please select an option!");
        return;
    }
    if (selectedOption === quizData[currentQuestionIndex].answer) {
        score++;
        resultDiv.style.color = "green";
        resultDiv.textContent = "Correct!";
    } else {
        resultDiv.style.color = "red";
        resultDiv.textContent = "Wrong!";
    }
    nextBtn.disabled = true;


    currentQuestionIndex++;
    if (currentQuestionIndex === quizData.length) {

        setTimeout(() => {
            questionTitle.style.display = "none";
            quizForm.style.display = "none";
            resultDiv.style.display = "none";

            scoreDivision.style.display = "flex";
            document.getElementById("srore").textContent = `${score}/${quizData.length}`;
            sroreText.innerHTML = `Awesome effort ${userName}! Practice makes perfect`;
        }, 1000);
    } else {
        setTimeout(() => {
            loadQuestion(currentQuestionIndex);
            resultDiv.textContent = "";
        }, 400);
    }
});

// initial load
loadQuestion(currentQuestionIndex);
