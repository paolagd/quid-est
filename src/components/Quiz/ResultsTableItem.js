import { useEffect, useState} from "react";
import { updateWordDifficulty } from "../../utils/firebase";
import { difficultyStyle } from "../../helpers/dictionary";

export default function ResultsTableItem(props) {
  const {
    downloadURL,
    translatedWord,
    languageTo,
    userAnswer,
    difficultyFlag,
    sourceWord,
    correct,
    docId,
  } = props;

  const [wordDifficulty, setWordDifficulty] = useState(difficultyFlag);
  const [dropdownClass, setDropdownClass] = useState("btn dropdown-toggle");

  const userAnswerTd = correct ? (
    <td className="green">{userAnswer}</td>
  ) : (
    <td className="red">{userAnswer}</td>
  );

  const changeDifficulty = (e) => {
    setWordDifficulty(e.target.value);
    updateWordDifficulty(docId, e.target.value);
  };

  useEffect(() => {
    const style = difficultyStyle(wordDifficulty);
    setDropdownClass(style);
  }, [wordDifficulty]); 

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
      <td>
        <select
          value={wordDifficulty}
          className={dropdownClass}
          onChange={(e) => changeDifficulty(e)}
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </td> 
    </tr>
  );
}
