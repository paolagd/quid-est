import { useState, useEffect } from "react";
import { getUserDictionary, auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Question from "./Question";
import Results from "./Results";
import { shuffle } from "../../helpers/quiz";
import { useHistory } from "react-router-dom";
import "./Quiz.css";

const TOTAL_QUESTIONS = 4;

export default function Quiz() {
  const [onLoading, setOnLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [answer, setAnswer] = useState("");
  const [quizOver, setQuizOver] = useState(true);
  const [score, setScore] = useState(0);
  const [quizDifficulty, setQuizDifficulty] = useState("All"); 
  const [user, loading, error] = useAuthState(auth);

  const history = useHistory();

  useEffect(() => {
    if (loading) return;
    if (error) console.log(error);
    if (!user) history.replace('/login');
  }, [user, loading, error, history]);
 
  //Resets quiz and retrieves user dictionary items for the questions
  const getThings = async () => {
    setOnLoading(true);
    setQuizOver(false);
    //fetching user dictionary items
    const things = await getUserDictionary(user.uid, quizDifficulty);

    if (things.length < TOTAL_QUESTIONS) {
      alert(
        `You need to have at least ${TOTAL_QUESTIONS} items in your dictionary for the selected level.`
      );
      setQuizOver(true);
      setOnLoading(false);
      return;
    } 

    setQuestions(shuffle(things));
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

  const clearQuiz = () => {
    setOnLoading(false);
    setQuestions([]);
    setQuestions([]);
    setNumber(0);
    setUserAnswers([]);
    setAnswer("");
    setQuizOver(true);
    setScore(0);
  };

  return (
    <div className="container-fluid main-quiz-container">
      <div className="header">
        {quizOver && userAnswers.length < TOTAL_QUESTIONS && (
          <>
            <h4>What are quizzes for?</h4>
            <hr />
            <h6>
              A quiz is just an opportunity to review again some of the words
              you have searched in the past.
            </h6>
            <h6>
              Do not panic! We will keep it simple and you can come back to is
              as many times as you need.
            </h6>
            <hr />
            <h5>Select difficulty level:</h5>
            <select
              value={quizDifficulty}
              className="btn dropdown-toggle"
              onChange={(e) => setQuizDifficulty(e.target.value)}
            >
              <option value="All">All levels</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
            <hr />
            <button
              className="btn btn-primary d-block btn-user w-100"
              onClick={() => getThings()}
            >
              QUIZ ME!
            </button>
          </>
        )}

        {!quizOver && <h3>You can do this!</h3>}
      </div>
 
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
            score={score}
            languageTo = {questions[number].languageTo}
          />
          {number < TOTAL_QUESTIONS - 1 && (
            <button className="control" onClick={nextQuestion}>
              Next
            </button>
          )}
          {number === TOTAL_QUESTIONS - 1 && (
            <button className="control results" onClick={reviewResults}>
              Review Results
            </button>
          )}
        </div>
      )}

      {quizOver && userAnswers.length > 0 && (
        <Results
          userAnswers={userAnswers}
          questions={questions}
          score={score}
          totalQuestions={TOTAL_QUESTIONS}
          tryAgain={clearQuiz}
        />
      )}
    </div>
  );
}
