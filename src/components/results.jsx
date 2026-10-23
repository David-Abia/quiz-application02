import React from 'react'

const Results = ({quizQuestions, userAnswer, restartQuiz}) => {
    
    const getScore = () => {
 let finalScores = 0;
    userAnswer.forEach((answer, index) => {
        if(answer === quizQuestions[index].answer) {
           finalScores++ 
        }
      
    })
return finalScores
    }

    const scores = getScore();
   
  return (
    <div>
        <h2>Quiz Result</h2>
        <p className="scores">Your scores: {scores}/{quizQuestions.length}</p>
        <button className='restart' onClick={restartQuiz}>Restart</button>
    </div>
    
  )
}

export default Results;