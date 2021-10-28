import { React } from 'react';

import './AlternateDictionaryEntry.css';

function AlternateDictionaryEntry(props) {

  return(
    <tr>
        <td><img class="rounded-circle me-2" width="90" height="90" src={props.downloadURL || "placeholder.jpg"}/></td>
        <td>{props.sourceWord}</td>
        <td>{props.translatedWord}</td>
        <td>{props.languageTo}</td>
        <td>{props.difficultyFlag}</td>
        <td><button type="button" className="btn btn-danger btn-sm">Delete</button></td>
    </tr>
  )
}

export default AlternateDictionaryEntry;
