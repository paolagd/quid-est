import { parseQuizResults } from "../../helpers/quizSelector";

export default function Results(props) {
  const { userAnswers, questions } = props;

  const parsedResults = parseQuizResults(userAnswers, questions);
 

  const results = parsedResults.map((result) => {

    return (<tr>
      <td>{result.sourceWord}</td>
      <td>{result.userAnswer}</td>
      <td>{result.translatedWord} </td>
      <td>{result.difficultyFlag} </td>
    </tr>)
   
  });

  return (<table>
    <tr>
      <th>Word</th>
      <th>User's Answer</th>
      <th>Correct answer</th>
      <th>difficulty</th>
    </tr> 
    {results}
  </table>);
}
