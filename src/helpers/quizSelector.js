export function parseQuizResults(userAnswers, questions) { 
  const parsedResults = [];
  //userAnswers and questions arrays will be the same length
  for (let i = 0; i < userAnswers.length; i++) {
    const result = {
      ...questions[i],
      userAnswer: userAnswers[i].answer,
      correct: userAnswers[i].correct,
    };
    parsedResults.push(result);
  } 

  return parsedResults;
}
