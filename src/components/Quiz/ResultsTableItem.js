import { useEffect, useState} from "react";
import { updateWordDifficulty } from "../../utils/firebase";

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
    difficultyStyle(wordDifficulty); 
  }, [wordDifficulty]);

  const difficultyStyle = (currentDifficulty) => {
    if (currentDifficulty === "Easy")
      setDropdownClass("btn dropdown-toggle btn-success");
    else if (currentDifficulty === "Medium")
      setDropdownClass("btn dropdown-toggle btn-warning");
    else if (currentDifficulty === "Hard")
      setDropdownClass("btn dropdown-toggle btn-danger");
  };

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
