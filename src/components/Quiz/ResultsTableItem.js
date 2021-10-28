export default function ResultsTableItem(props) {
  const { downloadURL, translatedWord, languageTo, userAnswer, difficultyFlag, sourceWord, correct } = props;

  const userAnswerTd =  correct ? <td className="green">{userAnswer}</td> : <td className="red">{userAnswer}</td>;

  
  return (
    <tr>
      <td>
        <img
          className="rounded-circle me-2"
          width="40"
          height="40"
          src={downloadURL}
          alt="answer"
        />
      </td>
      <td>{sourceWord}</td>
      <td>{translatedWord}</td>
      <td>{languageTo}</td>
      {userAnswerTd}
      <td>{difficultyFlag}</td>
    </tr>
  );
  
}
