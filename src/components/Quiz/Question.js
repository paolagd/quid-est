import "./Quiz.css";

export default function Question(props) {
  const {
    question,
    answer,
    setAnswer,
    questionNumber,
    totalQuestions,
    imageURL,
    score
  } = props;

  return (
    <section className="question-card">
      <div className="question-info">
        <div className="info">
          <div className="tag pink">
            {questionNumber} / {totalQuestions}
          </div>
          <p>Question</p>
        </div>
        <div className="info">
          <div className="tag orange">{score} / {totalQuestions}</div><p>Score</p>
        </div>
      </div>
      <div className="question">
        <img src={imageURL} alt="questionimage" />

        <div className="card shadow mb-3">
          <div className="card-header py-3">
            <h4 className="text-primary m-0 fw-bold">{question}</h4>
          </div>

          <div className="card-body">
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label className="form-label" >
                    <strong>What's the translation?</strong>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <div>
    //   <p>
    //     Question: {questionNumber} / {totalQuestions}
    //   </p>
    //   <img src={imageURL}/>
    //   <p>{question}</p>
    //   <p>Your answer: </p>
    //   <input value={answer} onChange={(e) => setAnswer(e.target.value)}></input>
    // </div>
  );
}
