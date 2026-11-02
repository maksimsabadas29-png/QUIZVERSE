const questions = [
    // НАУКА
    {
        category: "science", difficulty: "easy",
        question: "Яка планета найближча до Сонця?",
        answers: ["Венера", "Меркурій", "Марс", "Земля"],
        correct: 1
    },
    {
        category: "science", difficulty: "easy",
        question: "Який газ необхідний людині для дихання?",
        answers: ["Азот", "Вуглекислий газ", "Кисень", "Гелій"],
        correct: 2
    },
    {
        category: "science", difficulty: "medium",
        question: "Який хімічний символ має золото?",
        answers: ["Ag", "Au", "Fe", "Go"],
        correct: 1
    },
    {
        category: "science", difficulty: "hard",
        question: "Яка частинка має від'ємний електричний заряд?",
        answers: ["Протон", "Нейтрон", "Електрон", "Фотон"],
        correct: 2
    },

    // ІСТОРІЯ
    {
        category: "history", difficulty: "easy",
        question: "У якому році Україна проголосила незалежність?",
        answers: ["1989", "1990", "1991", "1992"],
        correct: 2
    },
    {
        category: "history", difficulty: "easy",
        question: "Яке місто було центром Давнього Риму?",
        answers: ["Афіни", "Рим", "Спарта", "Карфаген"],
        correct: 1
    },
    {
        category: "history", difficulty: "medium",
        question: "Хто був першим президентом України?",
        answers: [
            "Леонід Кучма",
            "Віктор Ющенко",
            "Леонід Кравчук",
            "Петро Порошенко"
        ],
        correct: 2
    },
    {
        category: "history", difficulty: "hard",
        question: "Яка цивілізація створила клинопис?",
        answers: ["Єгипетська", "Шумерська", "Римська", "Грецька"],
        correct: 1
    },

    // ГЕОГРАФІЯ
    {
        category: "geography", difficulty: "easy",
        question: "Який океан є найбільшим?",
        answers: ["Атлантичний", "Індійський", "Тихий", "Північний Льодовитий"],
        correct: 2
    },
    {
        category: "geography", difficulty: "easy",
        question: "Яка столиця Франції?",
        answers: ["Рим", "Париж", "Берлін", "Мадрид"],
        correct: 1
    },
    {
        category: "geography", difficulty: "medium",
        question: "Яка найбільша пустеля світу?",
        answers: ["Сахара", "Гобі", "Антарктична", "Калахарі"],
        correct: 2
    },
    {
        category: "geography", difficulty: "hard",
        question: "Яка країна має найбільшу кількість часових поясів?",
        answers: ["США", "Китай", "Франція", "Росія"],
        correct: 2
    },

    // ТЕХНОЛОГІЇ
    {
        category: "technology", difficulty: "easy",
        question: "Що означає скорочення CPU?",
        answers: [
            "Центральний процесор",
            "Комп'ютерна пам'ять",
            "Відеокарта",
            "Операційна система"
        ],
        correct: 0
    },
    {
        category: "technology", difficulty: "easy",
        question: "Яка компанія створила Windows?",
        answers: ["Apple", "Google", "Microsoft", "Samsung"],
        correct: 2
    },
    {
        category: "technology", difficulty: "medium",
        question: "Яка мова використовується для стилізації вебсайтів?",
        answers: ["HTML", "CSS", "SQL", "Python"],
        correct: 1
    },
    {
        category: "technology", difficulty: "hard",
        question: "Що таке двійкова система числення?",
        answers: [
            "Система з 2 цифрами",
            "Система з 8 цифрами",
            "Система з 10 цифрами",
            "Система з 16 цифрами"
        ],
        correct: 0
    },

    // ПРИРОДА
    {
        category: "nature", difficulty: "easy",
        question: "Яка тварина є найбільшою на Землі?",
        answers: ["Африканський слон", "Синій кит", "Жирафа", "Акула"],
        correct: 1
    },
    {
        category: "nature", difficulty: "easy",
        question: "Скільки ніг має павук?",
        answers: ["6", "8", "10", "12"],
        correct: 1
    },
    {
        category: "nature", difficulty: "medium",
        question: "Який процес використовують рослини для створення поживних речовин?",
        answers: ["Фотосинтез", "Випаровування", "Замерзання", "Дифузія"],
        correct: 0
    },
    {
        category: "nature", difficulty: "hard",
        question: "Яка тварина має три серця?",
        answers: ["Дельфін", "Восьминіг", "Крокодил", "Пінгвін"],
        correct: 1
    },

    // ЗАГАЛЬНІ ЗНАННЯ
    {
        category: "general", difficulty: "easy",
        question: "Скільки кольорів традиційно виділяють у веселці?",
        answers: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        category: "general", difficulty: "easy",
        question: "Скільки хвилин має одна година?",
        answers: ["30", "45", "60", "90"],
        correct: 2
    },
    {
        category: "general", difficulty: "medium",
        question: "Яка мова має найбільше носіїв як рідна?",
        answers: ["Англійська", "Іспанська", "Китайська мандаринська", "Арабська"],
        correct: 2
    },
    {
        category: "general", difficulty: "hard",
        question: "Який метал є рідким за кімнатної температури?",
        answers: ["Залізо", "Мідь", "Ртуть", "Алюміній"],
        correct: 2
    }
];

const categoryNames = {
    science: "НАУКА",
    history: "ІСТОРІЯ",
    geography: "ГЕОГРАФІЯ",
    technology: "ТЕХНОЛОГІЇ",
    nature: "ПРИРОДА",
    general: "ЗАГАЛЬНІ ЗНАННЯ"
};

let quizQuestions = [];
let currentQuestion = 0;
let score = 0;
let timeLeft = 20;
let timerInterval = null;
let answered = false;

const $ = (id) => document.getElementById(id);

function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    $(screenId).classList.add("active");
}

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function startQuiz() {
    const category = $("category").value;
    const difficulty = $("difficulty").value;

    quizQuestions = questions.filter(q => {
        const categoryMatch =
            category === "all" || q.category === category;

        const difficultyMatch =
            difficulty === "all" || q.difficulty === difficulty;

        return categoryMatch && difficultyMatch;
    });

    if (quizQuestions.length === 0) {
        alert("Немає запитань для цього вибору!");
        return;
    }

    quizQuestions = shuffle(quizQuestions);

    currentQuestion = 0;
    score = 0;

    $("score").textContent = score;

    showScreen("game");
    loadQuestion();
}

function loadQuestion() {
    clearInterval(timerInterval);

    answered = false;
    timeLeft = 20;

    const q = quizQuestions[currentQuestion];

    $("question").textContent = q.question;
    $("question-category").textContent = categoryNames[q.category];

    $("progress-text").textContent =
        `ЗАПИТАННЯ ${currentQuestion + 1} / ${quizQuestions.length}`;

    $("progress-bar").style.width =
        `${(currentQuestion / quizQuestions.length) * 100}%`;

    $("timer").textContent = `⏱ ${timeLeft}`;

    $("next-btn").disabled = true;

    const answersContainer = $("answers");
    answersContainer.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.className = "answer";
        button.textContent = `${String.fromCharCode(65 + index)}. ${answer}`;

        button.addEventListener("click", () => checkAnswer(index));

        answersContainer.appendChild(button);
    });

    timerInterval = setInterval(() => {
        timeLeft--;

        $("timer").textContent = `⏱ ${timeLeft}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            checkAnswer(-1);
        }
    }, 1000);
}

function checkAnswer(selectedIndex) {
    if (answered) return;

    answered = true;
    clearInterval(timerInterval);

    const q = quizQuestions[currentQuestion];
    const buttons = document.querySelectorAll(".answer");

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === q.correct) {
            button.classList.add("correct");
        }

        if (index === selectedIndex && index !== q.correct) {
            button.classList.add("wrong");
        }
    });

    if (selectedIndex === q.correct) {
        score += 10 + Math.floor(timeLeft / 2);
        $("score").textContent = score;
    }

    $("next-btn").disabled = false;

    $("next-btn").textContent =
        currentQuestion === quizQuestions.length - 1
            ? "РЕЗУЛЬТАТИ →"
            : "НАСТУПНЕ →";
}

function nextQuestion() {
    if (!answered) return;

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    clearInterval(timerInterval);

    const correctCount = Math.round(score); // Балами нагороджуються правильні відповіді

    const bestScore = Number(localStorage.getItem("quizBest") || 0);

    if (score > bestScore) {
        localStorage.setItem("quizBest", score);
    }

    $("final-score").textContent = score;
    $("result-details").textContent =
        `Ти пройшов ${quizQuestions.length} запитань.`;

    const ratio = score / (quizQuestions.length * 20);

    if (ratio >= 0.8) {
        $("result-message").textContent = "Неймовірний результат! 🚀";
    } else if (ratio >= 0.5) {
        $("result-message").textContent = "Дуже добре! 🌟";
    } else {
        $("result-message").textContent = "Гарна спроба! Спробуй ще! 💜";
    }

    $("best-score").textContent =
        localStorage.getItem("quizBest") || 0;

    showScreen("result");
}

$("best-score").textContent =
    localStorage.getItem("quizBest") || 0;

$("question-count").textContent = questions.length;
