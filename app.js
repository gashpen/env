var riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это несъедобное', 'это не фрукт'],
    tries: 3,
    checkAnswer(guessedAnswer) {
        riddle.tries-- 
       if(guessedAnswer === this.correctAnswer){
        alert("Правильно");
       } else if (riddle.tries === 2) {
        alert(riddle.hints[0])
       } else if (riddle.tries === 1) {
        alert(riddle.hints[1])
       } else if (riddle.tries === 0){
       alert("Неправильно")
       }
    },
}

window.onload = function() {
    document.getElementById('riddle').innerText = riddle.question;
}

function check() {
    var input = document.getElementsByTagName('input')[0];

    var guessedAnswer = input.value;

    if (guessedAnswer != null) {
        riddle.checkAnswer(guessedAnswer) 
    }
}

const supporter1 = {
    club: 'Milan',
    
    chant() {
      setTimeout(() => console.log("Forza " + this.club), 1000);
    }
}

const supporter2 = {
    club: 'Inter'
}

supporter2.chant = supporter1.chant.bind(supporter2,"Forza" + this.club)

supporter2.chant()
