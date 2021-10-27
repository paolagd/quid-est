export default function Question(props) {
  const {
    question,
    answer, 
    setAnswer, 
    questionNumber,
    totalQuestions,
    imageURL
  } = props;

  return (
    <div>
      <p>
        Question: {questionNumber} / {totalQuestions}
      </p>
      <img src={imageURL}/>
      <p>{question}</p>
      <p>Your answer: </p>
      <input value={answer} onChange={(e) => setAnswer(e.target.value)}></input>
    </div>
  );
}
