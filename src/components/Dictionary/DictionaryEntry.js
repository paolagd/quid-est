import { React } from 'react';
import { deleteItem } from '../../utils/firebase';

import './DictionaryEntry.css';

function DictionaryEntry(props) {

  const { uid, documentID } = props;
  const deleteThis = () => {
    deleteItem(uid, documentID);
  }
  return (
    <div className="col">
      <div className="card dictionary-card">
        <img src={props.downloadURL || "placeholder.jpg"} className="card-img-top img-fluid entry-image" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.sourceWord}</h5>
          <h5 className="card-text">{props.translatedWord}</h5>
        </div>
        <div className="card-footer">
          <p className="card-text">
            <small className="text-muted">{props.languageTo}</small>
          </p>
          <p className="card-text">
            <button type="button"
              className="btn btn-danger btn-sm"
              onClick={deleteThis}
            >Delete</button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default DictionaryEntry;
