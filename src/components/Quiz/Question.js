import "./Quiz.css";

export default function Question(props) {
  const {
    question,
    answer,
    setAnswer,
    questionNumber,
    totalQuestions,
    imageURL,
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
          <div className="tag orange">{questionNumber}</div><p>Score</p>
        </div>
      </div>
      <div className="question">
        <img src={imageURL} alt="questionimage" />

        <div class="card shadow mb-3">
          <div class="card-header py-3">
            <p class="text-primary m-0 fw-bold">{question}</p>
          </div>

          <div class="card-body">
            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <label class="form-label" for="username">
                    <strong>What's the translation?</strong>
                  </label>
                  <input
                    class="form-control"
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
