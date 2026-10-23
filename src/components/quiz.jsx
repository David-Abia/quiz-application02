import React, { useState } from 'react'
import Results from './results';

const Quiz = () => {
    const quizQuestions = [
        {
        question: "which year was Nigeria amalgamated?",
        optons: ['A: 1991', 'B: 1940', 'C: 1914', 'D: 1814'],
        answer: 'C: 1914',
        },
         {
        question: "Who stopped the killing of twins in Nigeria?",
        optons: ['A: Queen Elizabeth', 'B: Mary Slessor', 'C: King James', 'D: David Abia'],
        answer: 'B: Mary Slessor',
        },

         {
        question: "Which year did Nigeria gain independence?",
        optons: ['A: 1920', 'B: 1960', 'C: 1966', 'D: 1914'],
        answer:  'B: 1960',
        },

         {
        question: "Who was the first Nigerian head of state in Nigeria",
        optons: ['A: Nnamdi Azikiwe', 'B: Ahmadu bello', 'C: Tafawa Belewa', 'D: Bula Tinubu'],
        answer:  'A: Nnamdi Azikiwe',
        },

        {
        question: "Who was the first prime minister of Nigeria",
        optons: ['A: Nnamdi Azikiwe', 'B: Ahmadu bello', 'C: Tafawa Belewa', 'D: Bula Tinubu'],
        answer:  'C: Tafawa Belewa',
        },
    ]

    const initialValue = [null, null, null, null, null];
    const [userAnswer, setUserAnswer] = useState(initialValue);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const selectedAnswer = userAnswer[currentQuestion];
    const [isFinished, setIsFinished] = useState(false);
    

    const answerFunction = (option) => {
      const newUserAnswer = [...userAnswer];
      newUserAnswer[currentQuestion] = option
      setUserAnswer(newUserAnswer);
      console.log(newUserAnswer);
    }

    const goToNext = () => {
      if(currentQuestion === quizQuestions.length -1) {
setIsFinished(true)
console.log(quizQuestions.length === -1);

      } else {
        setCurrentQuestion(currentQuestion +1);
      }
      
    }

    const goToPrev = () => {
      if(currentQuestion > 0) {
        setCurrentQuestion(currentQuestion -1);
      }
    }

    const restartQuiz = () => {
      setIsFinished(false)
      setCurrentQuestion(0);
      setUserAnswer(initialValue);
      
    }

    if(isFinished) {
 return (
      <Results quizQuestions={quizQuestions} userAnswer={userAnswer} restartQuiz={restartQuiz}/>
    )
    }
   

  return (
    <div>
        <h2>Quiz {currentQuestion +1}</h2>
        <h3>{quizQuestions[currentQuestion].question}</h3>
        {quizQuestions[currentQuestion].optons.map((option) => (
<button className={"option" + (selectedAnswer === option ? " selected" : "" )} onClick={() => answerFunction(option)}>
  {option}
</button>
        ))}

<div className='divbutton'>
  <button onClick={goToPrev} disabled={currentQuestion === 0}>Previous</button>
  <button onClick={goToNext} disabled={!selectedAnswer}>{currentQuestion === quizQuestions.length -1 ? "finish quiz" : "Next"} </button>
</div>
    </div>
  )
}

export default Quiz;