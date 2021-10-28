import { parseQuizResults } from "../../helpers/quizSelector";

export default function Results(props) {
  const { userAnswers, questions, score, totalQuestions } = props;

  const parsedResults = parseQuizResults(userAnswers, questions);
  console.log(parsedResults)
  const results = parsedResults.map((result) => {
    return (
      <tr>
        <td>
          <img
            class="rounded-circle me-2"
            width="40"
            height="40"
            src={result.downloadURL}
          />
        </td>
        <td>{result.sourceWord}</td>
        <td>{result.translatedWord}</td>
        <td>{result.languageTo}</td>
        <td>{result.userAnswer}</td>
        <td>{result.difficultyFlag}</td>
      </tr>
    );
  });

  // return (<table>
  //   <tr>
  //     <th>Word</th>
  //     <th>User's Answer</th>
  //     <th>Correct answer</th>
  //     <th>difficulty</th>
  //   </tr>
  //   {results}
  // </table>);

  return (
    <>
      <div className="header">
        <h3>RESULTS</h3> 
        <h4>Score: {score} / {totalQuestions}</h4>
      </div>
      <hr/>
      <div class="card shadow">
        {/* <div class="card-header py-3">
          <p class="text-primary m-0 fw-bold">Quiz Results</p>
        </div> */}
        <div class="card-body">
          <div
            class="table-responsive table mt-2"
            id="dataTable"
            role="grid"
            aria-describedby="dataTable_info"
          >
            <table class="table my-0" id="dataTable">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Word</th>
                  <th>Correct Translation</th>
                  <th>Lang of Translation</th>
                  <th>Your Answer</th>
                  <th>Difficulty</th>
                </tr>
              </thead>
              <tbody>
                {results}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
