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

  console.log(questions); 
  //Retrieves data from the db
  // [
      //   7knUSBZ59NPzY3QXd07H: 
      //     {userID: "UeoamYyQBARP544c1iypdke6gzP2", downloadURL: "https://firebasestorage.googleapis.com/v0/b/fir-pr…=media&token=1d7ae25e-e110-4c30-b1d7-809345827346"}
      //   QmwpWKVsH9t7WvCWJxkq: 
      //     {translatedWord: "casa", languageTo: "es", downloadURL: "https://firebasestorage.googleapis.com/v0/b/fir-pr…=media&token=fb31b448-d74a-4f84-8297-09618e9e8fb9", sourceWord: "house", difficultyFlag: 1, …}
      // ]

  const getThings = async () => {
    const things = await getUserDictionary(user.uid); 
    setQuestions(things); 
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
