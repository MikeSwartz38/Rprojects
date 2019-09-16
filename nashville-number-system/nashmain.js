//Major keys as an array of arrays
const musicKeyArray = [
  ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#m7b5'],
  ['Bb', 'Cm', 'Dm', 'Eb', 'F', 'Gm', 'Am7b5'],
  ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#m7b5'],
  ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bm7b5'],
  ['Db', 'Ebm', 'Fm', 'Gb', 'Ab', 'Bbm', 'Cm7b5'],
  ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#m7b5'],
  ['Eb', 'Fm', 'Gm', 'Ab', 'Bb', 'Cm', 'Dm7b5'],
  ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#m7b5'],
  ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'Em7b5'],
  ['Gb', 'Abm', 'Bbm', 'B', 'C#', 'D#m', 'Fm7b5'],
  ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#m7b5'],
  ['Ab', 'Bbm', 'Cm', 'Db', 'Eb', 'Fm', 'Gm7b5'],
];

const generate = document.getElementById('generate');
const submit = document.getElementById('submit');
const currentKey = document.getElementById('key');
const complete = document.getElementById('complete');
const $answers = $('.notes input');
const $randomParts = $('.qboxes .random-parts');

const wrongColor = 'rgb(245, 114, 114)';
const correctColor =  'rgb(162, 226, 162)';

//Generate random key and random numbers after clicking "Generate":
generate.onclick = () => {
  //Generate random key:
  const randomNum= Math.floor(Math.random() * 12);
  const randomKey = musicKeyArray[randomNum][0];
  currentKey.innerHTML = randomKey;

  //Generate 4 unique random numbers:
  const shuffle = (o) => {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };

  const sevenNums = [1,2,3,4,5,6,7];
  let randomArray = shuffle(sevenNums);

  random1.innerHTML = randomArray[1];
  random2.innerHTML = randomArray[2];
  random3.innerHTML = randomArray[3];
  random4.innerHTML = randomArray[4];

  resetAnswers($answers);

}

//Validate answer against randomly generated items when you click "Submit":
submit.onclick = () => {
  validateAnswers($answers);

  if (hasWrongAnswer($answers)) {

  complete.style.display = "block";
  complete.innerHTML = "Try again..."
  complete.style.backgroundColor = wrongColor;

  } else {
  complete.style.display = "block";
  complete.innerHTML = "You Win!";
  complete.style.backgroundColor = correctColor;
  }
}

//Show the answer in the notes boxes when you click the "Answer" button:
reveal.onclick = () => {

  answer1.value = getAnswerArray()[random1.innerHTML-1];
  answer2.value = getAnswerArray()[random2.innerHTML-1];
  answer3.value = getAnswerArray()[random3.innerHTML-1];
  answer4.value = getAnswerArray()[random4.innerHTML-1];

  gameOver($answers);

}

function checkAnswer(answerInput, randomBox) {
  if (getAnswerArray()[randomBox.innerHTML-1] === answerInput.value) {
    answerInput.style.backgroundColor = correctColor;
  } else {
    answerInput.style.backgroundColor = wrongColor;
  }
}

function gameOver ($answers) {
  $answers.toArray().forEach(function(answer) {
      answer.style.backgroundColor = correctColor;
      answer.disabled = true;
  });

}

function getAnswerArray() {
  let answerArray = [];
  for (let i=0; i < musicKeyArray.length; i++) {
    if (currentKey.innerHTML === musicKeyArray[i][0]) {
      answerArray = musicKeyArray[i];
    }
  }
    return answerArray;
}

function hasWrongAnswer($answers) {
  var hasWrongAnswer = false;
  $answers.toArray().forEach(function(answer) {
    if(answer.style.backgroundColor ===  wrongColor) {
      hasWrongAnswer = true;
    }
  });
  return hasWrongAnswer;
}

function resetAnswers ($answers) {
  $answers.toArray().forEach(function (answer) {
    answer.value = '';
    answer.style.backgroundColor = '';
    answer.disabled = false;
  });
  // Reset style
  complete.style.display = "none";
}

function validateAnswers($answers) {
  for(var i = 0; i < $answers.length; i++) {
    checkAnswer($answers[i], $randomParts[i])
  }
}
