const App = {
 data() {
   return {
     answerValue: '',
     showResult: false,
     numberQuestion: 0,
     score: 0,
     totalScore: 0,
     // questions берем из файла index.js
     questions: questions,
     // questions: post,
     message: '',
     isDisabled: false
   }
 },
 methods: {
   nextQuestion () {
     if (this.numberQuestion === this.questions.length - 1 ) {
       this.isDisabled = true
       this.totalScore += this.score
       this.endTest()
     } else {
       this.totalScore += this.score
       this.numberQuestion++ 
     }
   },
   calculationScore (score) {
     // присваиваем переменной score очки переданные в методе 
     this.score = score
   },
   endTest () {
     this.showResult = true
     if (this.totalScore === 0) {
       this.message = `и набрали ${this.totalScore} баллов. Выши знания в экономике равны нулю (((`
     } else if (this.totalScore > 0 && this.totalScore < 30) {
       this.message = `и набрали ${this.totalScore} баллов. Выши знания в экономике на достаточно высоком уровне, но еще есть куда расти`
     } else if (this.totalScore >= 30) {
       this.message = `и набрали ${this.totalScore} баллов. Выши знания в экономике превосходны!!!`
     }
   },
   resetDates () {
       this. message = ''
       this.showResult = false
       this.totalScore = 0
       this.numberQuestion = 0
       this.isDisabled = false
   }
 },
 computed: {
   
 }
}

Vue.createApp(App).mount('#app')