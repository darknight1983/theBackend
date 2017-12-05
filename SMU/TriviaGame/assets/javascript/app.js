


$(function() {



 $('body').css({'background-image': 'url(assets/images/background.jpg)'});

  const gameQuestions = [
    {
      'question': 'What color is the sky?',
       'answers': ['red', 'blue', 'purple', 'space gray'],
       'correctAnwser': 'blue'
    },
    {
      'question': 'Whats Kanye West best album?',
       'answers': ['Dark Twisted Fantasy', 'College Dropout', 'Graduation', 'Yeezus'],
       'correctAnwser': 'Graduation'
    },
    {
      'question': 'What color is the sky?',
       'answers': ['red', 'blue', 'purple', 'space gray'],
       'correctAnwser': 'red'
    },
    {
      'question': 'What color is the sky?',
       'answers': ['red', 'blue', 'purple', 'space gray'],
       'correctAnwser': 'purple'
    },
    {
      'question': 'What color is the sky?',
       'answers': ['red', 'blue', 'purple', 'space gray'],
       'correctAnwser': 'blue'
    },
    {
      'question': 'What color is the sky?',
       'answers': ['red', 'blue', 'purple', 'space gray'],
       'correctAnwser': 'space gray'
    }
  ]

  const $startButton = $('.start-button');
  const $gameContent = $('.game-content');
  const $questionBox = $('#question-box')
  let nextQuestion = 0;
  let rightAnswer = 0;
  let wrongAnwser = 0;

  function moveToNext() {
    $(document).on('click', '.answerChoice', function() {
      let answer = $(this).html();
      if (answer === gameQuestions[nextQuestion].correctAnwser) {
        rightAnswer++
        $questionBox.html('');

      } else {
        wrongAnwser++
        $questionBox.html('');

      }
      nextQuestion++
      createTriviaQuestion()
    })
    // Listen to see if an answer has been selected.
    // If anwser selected, store reference to selected anwser.
    // Increment the counter
    // Render the next question
  }

  function createTriviaQuestion() {
    let triviaContainer = $('<div id="triviaContainer">');
    let triviaQues = $('<div id="triviaQues">' + gameQuestions[nextQuestion].question + '</div>');
    triviaContainer.append(triviaQues);

    gameQuestions[nextQuestion].answers.forEach((choice) => {
      let answerChoice = $('<div class="answerChoice">' + choice + '</div>');
      triviaContainer.append(answerChoice);
      $questionBox.append(triviaContainer)
    })
  }

  moveToNext();

  // Consider hard coding the image into the page for better performance


  // DOM elements below


  $startButton.on('click', () => {
    console.log("You are clicking here");
    $startButton.hide() // For hiding the start button when user clicks to start the game.
    createTriviaQuestion();





 })

})
