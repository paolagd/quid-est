export default function Question(props) {
  const {
    question,
    answer,
    userAnswer,
    callback,
    questionNumber,
    totalQuestions,
  } = props;

  return (
    <div>
      <p>
        Question: {questionNumber} / {totalQuestions}
      </p>
      <p>{question}</p>
      <p>Your answer: </p>
      <input value={userAnswer}></input>
      <button onClick={callback}></button>
    </div>
  );
}
