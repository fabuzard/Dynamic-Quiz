// Define quiz data
const gameQuizQuestions = [
    { question: "What is the name of the game character who eats dots?", answers: ["Pac-Man", "Mario", "Sonic"], correctAnswer: "Pac-Man" },
    { question: "In which game do you build structures and fight zombies?", answers: ["Minecraft", "Fortnite", "PUBG"], correctAnswer: "Minecraft" },
    { question: "Which character is known for wearing a red hat and jumping on pipes?", answers: ["Mario", "Luigi", "Donkey Kong"], correctAnswer: "Mario" },
    { question: "Which game features the character Master Chief?", answers: ["Halo", "Call of Duty", "Gears of War"], correctAnswer: "Halo" },
    { question: "What is the name of the island in Animal Crossing?", answers: ["Tortimer Island", "Wisp Island", "Your Island"], correctAnswer: "Your Island" }
];


const popCultureQuizQuestions = [
    { question: "Who starred in the movie 'Titanic'?", answers: ["Leonardo DiCaprio", "Brad Pitt", "Tom Cruise"], correctAnswer: "Leonardo DiCaprio" },
    { question: "What is the name of the wizarding school in Harry Potter?", answers: ["Hogwarts", "Beauxbatons", "Durmstrang"], correctAnswer: "Hogwarts" },
    { question: "Which movie features the line 'May the Force be with you'?", answers: ["Star Wars", "The Matrix", "Avatar"], correctAnswer: "Star Wars" },
    { question: "Who is known as the 'Queen of Pop'?", answers: ["Madonna", "Beyoncé", "Lady Gaga"], correctAnswer: "Madonna" },
    { question: "Which actor played Jack Sparrow in 'Pirates of the Caribbean'?", answers: ["Johnny Depp", "Orlando Bloom", "Hugh Jackman"], correctAnswer: "Johnny Depp" }
];

// Set initial variables
let currentQuizType = '';
let currentQuestionIndex = 0;
let selectedQuestions = [];
let correctAnswer= 0;
let totalQuestions = 5;

// Start button event listeners
document.getElementById('game-quiz-btn').addEventListener('click', () => {
    currentQuizType = 'game';
    selectedQuestions = gameQuizQuestions;
    startQuiz();
});

document.getElementById('pop-culture-btn').addEventListener('click', () => {
    currentQuizType = 'pop-culture';
    selectedQuestions = popCultureQuizQuestions;
    startQuiz();
});

// Function to start the quiz
function startQuiz() {
    document.getElementById('start-menu').style.display = 'none';
    document.getElementById('quiz-area').style.display = 'block';
    showQuestion();
}

// Function to display questions
function showQuestion() {
    const question = selectedQuestions[currentQuestionIndex];
    document.getElementById('quiz-title').textContent = currentQuizType === 'game' ? 'Game Quiz' : 'Pop Culture Quiz';
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <p>${question.question}</p>
        <ul>
            ${question.answers.map((answer,index) => ` <label>
    <input type="radio" name="answer" value="${answer}" id="answer-${index}">
    ${answer}
  </label>`).join('')}
        </ul>
    `;
}

// Handle next question
document.getElementById('next-btn').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
    } else {
        alert('Quiz Completed!');
        // Optionally reset or show results
    }
});
