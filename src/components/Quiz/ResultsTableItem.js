export default function ResultsTableItem(props) {
  
  const { downloadURL, translatedWord, languageTo, userAnswer, difficultyFlag, sourceWord } = props;
  return (
    <tr>
      <td>
        <img
          class="rounded-circle me-2"
          width="40"
          height="40"
          src={downloadURL}
        />
      </td>
      <td>{sourceWord}</td>
      <td>{translatedWord}</td>
      <td>{languageTo}</td>
      <td>{userAnswer}</td>
      <td>{difficultyFlag}</td>
    </tr>
  );
  
}
