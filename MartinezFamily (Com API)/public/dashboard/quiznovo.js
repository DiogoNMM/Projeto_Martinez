// Classes
class Quiz{
    constructor(questions){
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex(){
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded(){
        return this.questionIndex === this.questions.lenght;
    }

}

//  Perguntas
class Question{
    constructor(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice){
        return this.answer === choice;
    }
}


// Criar questão
function displayQuestion(){
    if (quiz.isEnded()) {
        showScores();
    }else{
        // Mostrar a questão
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // Mostrar alternativas
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();

    }
};

// Escolha function
function guess(id, guess){
    let button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        displayQuestion();
    }
};

// Mostrar o progresso do quiz
function showProgress(){
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = `Questão ${currentQuestionNumber} de ${quiz.questions.length}`;
}

//  Mostrar os pontos
function showScores(){ 
    let quizEndHTML = `<h1>Quiz Completo</h1>
        <h2 id="score">Seus pontos: ${quiz.score} de ${quiz.questions.length}</h2>
        <div class="quiz-repeat">
        <a href="quiz novo.html">Faça o quiz novamente</a>
        </div>`;
        let quizElement = document.getElementById("quiz");
        quizElement.innerHTML = quizEndHTML;
};

// Criar questões do quiz
let questions =[
    new Question(
        "O baião de dois é típico de qual estado brasileiro?", [
            "São paulo","Ceará","Rio De Janeiro", "Amapá"
        ], "Ceará"
    ),
    new Question(
        "Qual a cidade com o maior número de pizzarias no Brasil?", [
            "São paulo","Belo Horizonte","Jacareí", "Caxias do Sul"
        ], "São Paulo"
    ),
    new Question(
        "O arroz carreteiro é comum em qual estado brasileiro?", [
            "Paraná","Sergipe","Minas Gerais", "Rio Grande Do Sul"
        ], "Rio Grande Do Sul"
    ),
    new Question(
        "O feijão é por baixo ou por cima do arroz?", [
            "Por cima","Por baixo","Ao lado do arroz", "Misturar tudo"
        ], "Por baixo"
    ),
];

let quiz = new Quiz(questions);

// Mostrar a pergunta
displayQuestion();