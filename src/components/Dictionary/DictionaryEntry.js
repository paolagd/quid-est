import { useState, useEffect } from "react";
import { updateWordDifficulty } from "../../utils/firebase";
import { difficultyStyle, languageIcons} from "../../helpers/dictionary";
import "./DictionaryEntry.css";

function DictionaryEntry(props) {
  const {
    deleteThis,
    difficultyFlag,
    sourceWord,
    translatedWord,
    languageTo,
    downloadURL,
    documentID,
  } = props;

  const [wordDifficulty, setWordDifficulty] = useState(difficultyFlag);
  const [dropdownClass, setDropdownClass] = useState("btn dropdown-toggle");
 
  const changeDifficulty = (e) => {
    setWordDifficulty(e.target.value); 
    updateWordDifficulty(documentID, e.target.value);
  };

  useEffect(() => {
    const style = difficultyStyle(wordDifficulty);
    setDropdownClass(style);
  }, [wordDifficulty]);
 
  return (
    <div className="col">
      <div className="card dictionary-card">
        <img
          src={downloadURL || "placeholder.jpg"}
          className="card-img-top img-fluid entry-image"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{sourceWord}</h5>
          <h5 className="card-text">{translatedWord}</h5>
        </div>
        <div className="card-footer">
          <p className="card-text">{languageIcons[languageTo]}</p>
          <select
            value={wordDifficulty}
            className={dropdownClass}
            onChange={(e) => changeDifficulty(e)}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <p className="card-text">
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={deleteThis}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DictionaryEntry;
