import { useState } from "react";
import { getUserDictionary, auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Question from "./Question";

const TOTAL_QUESTIONS = 10;

export default function Quiz() {
  const [onLoading, setOnLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const [gameOver, setGameOver] = useState(true);
  const [score, setScore] = useState(0);

  console.log(questions); 
  //Retrieves data from the db (3) [{…}, {…}, {…}]
  // [ 
      // QmwpWKVsH9t7WvCWJxkq: 
      //     {translatedWord: "casa", languageTo: "es", downloadURL: "https://firebasestorage.googleapis.com/v0/b/fir-pr…=media&token=fb31b448-d74a-4f84-8297-09618e9e8fb9", sourceWord: "house", difficultyFlag: 1, userID}
      // ]

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
 
  const checkAnswer = () => {};

  const nextQuestion = () => {};

  return (
    <div>
      <h1> Quiz!</h1>
      <button onClick={() => getThings()}>Start</button>
      <p>Score:</p>
      <p>Loading questions ... </p>
      <Question
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        
        userAnswers={userAnswers ? userAnswers[number] : undefined}
      />
      <button onClick={nextQuestion}>Next</button>
    </div>
  );
}
