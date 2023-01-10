const startButton =document.getElementById("start-btn");
const questionConEl = document.getElementById("question-con")
const questionEl = document.getElementById("question");
const answerButtonsEl = createButtons()
var shuffledQuestions, currentQuestionIndex;

const startingMinutes = 0.5;
let timeLeft = startingMinutes * 60;
const countdownEl = document.getElementById("countdown-timer");


function countdown(){
    let minutes = Math.floor(timeLeft/60);
    let seconds = timeLeft % 60;
    
    setInterval(function(){
      const timeUp = minutes===0 && seconds===0;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    if(timeUp){
      clearInterval(countdown)
    }
    countdownEl.innerHTML = minutes+ ":" + seconds
      timeLeft--;
    
    },1000) 
  };

startButton.addEventListener("click",startGame);
startButton.addEventListener("click",countdown);


function startGame(){
 

  document.getElementById("start-btn").style.display="none";
  questionConEl.classList.remove("hide")
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0
  setNextQuestion()
  
}
function createButtons(){

}
function setNextQuestion(){
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
  questionEl.innerText = questions.title

}

var questions =[
  {
    title:' Is JavaScript a case-sensitive language?',
    choices: ['A - true','B - false' ],
    answer: 'A - true' 
  },
  {
    title:' Which of the following type of variable is visible everywhere in your JavaScript code?',
    choices: ['A - global variable','B - local variable','C - Both of the above.','D - None of the above.'],
    answer:'A - global variable'
  },
  {
    title:' Which built-in method combines the text of two strings and returns a new string?',
    choices:[ 'A - append()',

      'B - concat()',
      
      'C - attach()',
      
      'D - None of the above.'],
    answer:'B - concat()'
  },
  {
    title: 'All user-defined objects and built-in objects are descendants of an object called Object?',
    choices:[ 'A - true',

      'B - false' ],
    answer: 'A - true'
  },
  {
    title: ' Which of the following function of Number object defines how many total digits to display of a number?',
    choices: [ 'A - toExponential()',

      'B - toFixed()',
      
      'C - toLocaleString()',
      
      'D - toPrecision()'],
    answer: 'D - toPrecision()'
  },
  {
    title: ' Which of the following is correct about callbacks?',
    choices:[ 'A - A callback is a plain JavaScript function passed to some method as an argument or option.',

      'B - Some callbacks are just events, called to give the user a chance to react when a certain state is triggered.',
      
      'C - Both of the above.',
      
      'D - None of the above'],
    answer: 'C - Both of the above.'
  },
  {
    title: ' Which built-in method sorts the elements of an array?',
    choices: [
      'A - changeOrder(order)',

      'B - order()',

      'C - sort()',

      'D - None of the above.'
    ],
    answer: 'C - sort()'
  },
  {
    title: ' Which of the following function of Boolean object returns a string containing the source of the Boolean object?',
    choices:[
      'A - toSource()',

      'B - valueOf()',

      'C - toString()',

      'D - None of the above.'
    ],
    answer: 'A - toSource()'
  },
  {
    title: ' Which of the following function of String object is used to find a match between a regular expression and a string, and to replace the matched substring with a new substring?',
    choices: [
      'A - concat()',

      'B - match()',

      'C - replace()',

      'D - search()'
    ],
    answer: 'C - replace()'
  },
  {
    title: ' Which of the following function of String object returns the calling string value converted to lower case?',
    choices:[
      'A - toLocaleLowerCase()',

      'B - toLowerCase()',
      
      'C - toString()',
      
      'D - substring()'
    ],
    answer:  'B - toLowerCase()'
  }
]