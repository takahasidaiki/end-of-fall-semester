let currentQuestion = 0;
let timer = 30;
let timerInterval;

const questions = [
    {
        question: "赤い大きな靴を履いたディズニーキャラクターは誰ですか？",
        options: {
            A: "ミッキーマウス",
            B: "ドナルドダック",
            C: "グーフィー",
            D: "プルート"
        },
        answer: "A"
    },
    {
        question: "シンデレラ城があるディズニーパークはどれですか？",
        options: {
            A: "ディズニーランド・カリフォルニア",
            B: "ディズニーランド・パリ",
            C: "ディズニーワールド・フロリダ",
            D: "東京ディズニーランド"
        },
        answer: "C"
    },
    {
        question: "映画『アナと雪の女王』でエルサの声を担当したのは誰ですか？",
        options: {
            A: "イディナ・メンゼル",
            B: "クリステン・ベル",
            C: "マンディ・ムーア",
            D: "アリアナ・グランデ"
        },
        answer: "A"
    }
];

function loadQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question').innerText = question.question;
    document.getElementById('option1').innerText = question.options.A;
    document.getElementById('option2').innerText = question.options.B;
    document.getElementById('option3').innerText = question.options.C;
    document.getElementById('option4').innerText = question.options.D;
    document.getElementById('question-image').src = "disney_logo.jpg"; // 画像のプレースホルダー
}

function startTimer() {
    timerInterval = setInterval(function() {
        timer--;
        document.getElementById('time').innerText = timer;
        if (timer <= 0) {
            clearInterval(timerInterval);
            alert("時間切れ！");
            nextQuestion();
        }
    }, 1000);
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
        alert("正解！");
    } else {
        alert("不正解！");
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
        timer = 30;  // 次の質問のためにタイマーをリセット
        startTimer();
    } else {
        alert("クイズ完了！");
    }
}

window.onload = function() {
    loadQuestion();
    startTimer();
};
