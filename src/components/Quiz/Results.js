import { parseQuizResults } from "../../helpers/quizSelector";
import ResultsTableItem from "./ResultsTableItem";
import "./Results.css";

export default function Results(props) {
  const { userAnswers, questions, score, totalQuestions } = props;

  const parsedResults = parseQuizResults(userAnswers, questions);
  console.log(parsedResults)
  const results = parsedResults.map((result, index) => { 
    return ( 
      <ResultsTableItem key={index} {...result}/>
    );
  });
 
  return (
    <>
      <div className="header">
        <h3>RESULTS</h3> 
        <h4>Score: {score} / {totalQuestions}</h4>
      </div>
      <hr/>
      <div className="card shadow">
        {/* <div className="card-header py-3">
          <p className="text-primary m-0 fw-bold">Quiz Results</p>
        </div> */}
        <div className="card-body">
          <div
            className="table-responsive table mt-2"
            id="dataTable"
            role="grid"
            aria-describedby="dataTable_info"
          >
            <table className="table my-0" id="dataTable">
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
