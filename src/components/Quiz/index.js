import { useState } from "react";
import { getUserDictionary, auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Question from "./Question";
import Results from "./Results";
import "./Quiz.css";

const TOTAL_QUESTIONS = 3;

export default function Quiz() {
  const [onLoading, setOnLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [answer, setAnswer] = useState("");
  const [quizOver, setQuizOver] = useState(true);
  const [score, setScore] = useState(0);
  const [user, loading, error] = useAuthState(auth);

  //Resets quiz and retrieves user dictionary items for the questions
  const getThings = async () => {
    setOnLoading(true);
    setQuizOver(false);
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

  /*
    Verifies that the current answer matches the translation for the word shown to the user
    Returns null if no answer has been provided
  */
  const checkAnswer = () => {
    if (!answer) {
      alert("Please add an answer");
      return;
    }

    if (!quizOver) {
      //Reviews if the answer is correct
      const correct =
        questions[number].translatedWord.toLowerCase() === answer.toLowerCase();
      if (correct) {
        setScore((prev) => prev + 1);
      }

      const answerObject = {
        question: questions[number].sourceWord,
        answer,
        correct,
        correctAnswer: questions[number].translatedWord,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }

    return true;
  };

  //Verifies provided answer and moves to the next question
  const nextQuestion = () => {
    if (checkAnswer()) {
      const nextQuestion = number + 1;
      setAnswer("");
      setNumber(nextQuestion);
    }
  };

  //Verifies provided answer and finishes the quiz
  const reviewResults = () => {
    if (checkAnswer()) {
      setAnswer("");
      setQuizOver(true);
    }
  };

  return (
    <div className="container-fluid">
      
        <h3 className="text-dark mb-0">Quiz!</h3>
        {(quizOver || userAnswers.length === TOTAL_QUESTIONS) && (
          <button onClick={() => getThings()}>START QUIZ</button>
        )}

        {quizOver && <p>Score: {score} </p>}

        {onLoading && <p>Loading questions ... </p>}

        {!quizOver && !onLoading && (
        <div className="question-container">
          <Question
            questionNumber={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].sourceWord}
            imageURL={questions[number].downloadURL}
            callback={checkAnswer}
            answer={answer}
            setAnswer={setAnswer}
          />
          { number < TOTAL_QUESTIONS - 1 && (
            <button className="control" onClick={nextQuestion}>Next</button>
          )}
          {number === TOTAL_QUESTIONS - 1 && (
            <button className="control" onClick={reviewResults}>Review Results</button>
          )}
        </div>
        )}
        {/* {!quizOver && !onLoading && number < TOTAL_QUESTIONS - 1 && (
          <button onClick={nextQuestion}>Next</button>
        )}  
        {!quizOver && !onLoading && number === TOTAL_QUESTIONS - 1 && (
          <button onClick={reviewResults}>Review Results</button>
        )}*/}

        {quizOver && userAnswers.length > 0 && (
          <Results userAnswers={userAnswers} questions={questions} />
        )}
     
    </div>
  );
}
