import { useState } from "react";
import { getUserDictionary, auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Question from "./Question";

const TOTAL_QUESTIONS = 3;

export default function Quiz() {
  const [onLoading, setOnLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const [gameOver, setGameOver] = useState(true);
  const [score, setScore] = useState(0);

  console.log(questions);

  //Resets quiz and retrieves user dictionary items for the questions
  const getThings = async () => {
    setOnLoading(true);
    setGameOver(false);
    //fetching user dictionary items
    const things = await getUserDictionary(user.uid);
    //TODO:Add difficulty and limit if needed and sort array
    //TODO: proper error handling
    setQuestions(things);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setOnLoading(false);
  };

  const checkAnswer = (e) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      console.log(answer);
      //Review if the answer is correct
      const correct = questions[number].translatedWord === answer;
      if (correct) {
        setScore((prev) => prev + 1);
      }

      const answerObject = {
        question: questions[number].sourceWord,
        answer,
        correct,
        correctAnswer: questions[number].translatedWord,
      };
      console.log(answerObject);
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <div>
      <h1> Quiz!</h1>
      {(gameOver || userAnswers.length === TOTAL_QUESTIONS) && (
        <button onClick={() => getThings()}>Start</button>
      )}
      {gameOver && <p>Score:</p>}
      {onLoading && <p>Loading questions ... </p>}
      {!gameOver && !onLoading && (
        <Question
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].sourceWord}
          imageURL={questions[number].downloadURL}
          userAnswers={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}
      {!gameOver && !onLoading && number !== TOTAL_QUESTIONS - 1 && (
        <button onClick={nextQuestion}>Next</button>
      )}
    </div>
  );
}
