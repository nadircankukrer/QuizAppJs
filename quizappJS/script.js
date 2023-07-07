const quizData = [
    {
        question: "Türkiye'nin cumhurbaşkanı kimdir?",
        a: "Nadircan Kükrer",
        b: "Muhammed Ali Clay",
        c: "Recep Tayyip Erdoğan",
        d: "Muharrem İnce",
        correct: "c"
    }, {
        question: "Fatih Sultan Mehmet'ten sonra Osmanlı Devleti'nde tahta hangi padişah geçmiştir?",
        a: "Hazreti Ömer",
        b: "Yavuz Sultan Selim",
        c: "II. Selim",
        d: "II. Bayezid",
        correct: "d"
    }, {
        question: "İlk halife kimdir?",
        a: "İmparator Neron",
        b: "Hz. Ebu Bekir",
        c: "Kanuni Sultan Süleyman",
        d: "Hz. Şaban",
        correct: "b"
    }, {
        question: "En yakın plakumat şu koridorun başında olsa ne yapıyoruz?",
        a: "Kendisini dövüyoruz",
        b: "Yokmuş gibi davranıyoruz",
        c: "Hızla kaçıyoruz",
        d: "Hiçbiri",
        correct: "a"
    }, {
        question: "İstiklal Marşı'nın yazarı kimdir?",
        a: "Mehmet Ali Erbil",
        b: "İsmet İnönü",
        c: "Mustafa Kemal Atatürk",
        d: "Mehmet Akif Ersoy",
        correct: "d"
    }

]

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function getSelected() {
     let answer = undefined

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false
    })
}


submitBtn.addEventListener("click", () => {

    const answer = getSelected()

    console.log(answer)

    if (answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        

        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2> SINAV SONUCU <br> ${score * 20 }  <h2/> <button onclick = "location.reload()"> Tekrar dene </button>` 

        }
    }
})