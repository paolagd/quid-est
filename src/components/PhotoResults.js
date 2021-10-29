import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout, db } from "../utils/firebase";
import SideBar from "./SideBar/SideBar";
import TopBar from "./TopBar";
import { classify, loadModel, parsePercent, mlBurst } from "../utils/ts-classify";
import { translate } from "../utils/translate";
import { doc, setDoc } from "firebase/firestore";

import './PhotoResults.css';

function PhotoResults(props) {
  const [user, loading, error] = useAuthState(auth);
  const [model, setModel] = useState(null);
  const [savedFirstResult, setSavedFirstResult] = useState(false);
  const [predictions, setPredictions] = useState([]);
  const [translation1, setTranslation1] = useState('');
  const [translation2, setTranslation2] = useState('');
  const [translation3, setTranslation3] = useState('');
  const [sourceWord, setSourceWord] = useState(null);
  const [translatedWord, setTranslatedWord] = useState(null);
  const [saveVisible, setSaveVisible] = useState(false);
  const history = useHistory();
  const imgRef = useRef();
  const imgUrl = props.location.imgUrl;
  const language = props.location.language;
  const documentId = props.location.documentId;


  const selectFirstTranslation = () => {
    setSourceWord(predictions[0].className);
    setTranslatedWord(translation1);
  };

  const selectSecondTranslation = () => {
    setSourceWord(predictions[1].className);
    setTranslatedWord(translation2);
  };

  const selectThirdTranslation = () => {
    setSourceWord(predictions[2].className);
    setTranslatedWord(translation3);
  };

  // TODO: Display some kind of confirmation after this is called.
  const saveSelectionsToFirestore = () => {
    console.log(`Saving sourceWord: ${sourceWord} and translatedWord: ${translatedWord} to document with id: ${documentId}.`);
    const docRef = doc(db, 'things', documentId);
    setDoc(docRef, { sourceWord, translatedWord, languageTo: language }, { merge: true });
  }

  const clickedSaveSelections = () => {
    // alert(`Saved!\n${sourceWord} = ${translatedWord}`);
    setSaveVisible(true);
    saveSelectionsToFirestore();
  }

  useEffect(() => {
    if (loading) return;
    if (error) console.log(error);
    if (!user) history.replace("/login");
  }, [user, loading, error, history]);

  
  // when component loads, get the predictions from the tensorflow mobilenet model
  useEffect(async () => {
    console.log(`img`, imgRef.current);
    let preds = [];
    preds = await mlBurst(imgRef.current);
    console.log("preds", preds);
    setPredictions(preds);
  }, []);

  // after the predictions are obtained, translate them
  useEffect(() => {
    console.log(`predictions`, predictions);
    if (predictions.length > 0) {
      translate(predictions[0].className, language || 'es', setTranslation1);
      translate(predictions[1].className, language || 'es', setTranslation2);
      translate(predictions[2].className, language || 'es', setTranslation3);
    }
  }, [predictions]);

  // Once the first translation loads, select it automatically.
  useEffect(() => {
    if (translation1 !== '') {
      selectFirstTranslation();
    }
  },[translation1]);

  // The first time a translation is selected (above), save that default value to DB.
  useEffect(() => {
    if(translatedWord !== null && !savedFirstResult) {
      setSavedFirstResult(true);
      saveSelectionsToFirestore();
    }
  },[translatedWord]);

  // Show the "Saved!" message for 1.5 sec after saving:
  useEffect(() => {
    if (saveVisible) {
      setTimeout(() => {
        setSaveVisible(false)
      }, 1500);
    };
  }, [saveVisible]);

  return (
    <div id="content">
      <div className="container-fluid">
        <div className="row mb-3">
          <div className="col-lg-4">
            <div className="card mb-3">
              <div className="card-body text-center shadow">
                <img className="mb-3 mt-4" src={imgUrl || "placeholder.jpg"} crossOrigin="anonymous" ref={imgRef} height="auto" width="100%" />
              </div>
            </div>
            <div className="card shadow mb-4"></div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col">
                <div className="card shadow mb-3">
                  <div className="card-header py-3">
                    <h2 className="text-primary m-0 fw-bold">What is it?</h2>
                  </div>
                  <div className="card-body classify-results">
                    <div className="row">
                      <button type="button" className="btn btn-outline-primary translation-button shadow-none" onClick={selectFirstTranslation}>
                        <div className="col">
                          {predictions[0] && predictions[0].className}<br />
                          <small>{predictions[0] && parsePercent(predictions[0].probability)}% confidence</small>
                        </div>
                        <div className="col">
                          <h6>{translation1 || "loading..."}</h6>
                        </div>
                      </button>
                    </div>
                    <div className="row">
                      <button type="button" className="btn btn-outline-primary translation-button shadow-none" onClick={selectSecondTranslation}>
                        <div className="col">
                          {predictions[1] && predictions[1].className}<br />
                          <small>{predictions[1] && parsePercent(predictions[1].probability)}% confidence</small>
                        </div>
                        <div className="col">
                          <h6>{translation2 || "loading..."}</h6>
                        </div>
                      </button>
                    </div>
                    <div className="row">
                      <button type="button" className="btn btn-outline-primary translation-button shadow-none" onClick={selectThirdTranslation}>
                        <div className="col">
                          {predictions[2] && predictions[2].className}<br />
                          <small>{predictions[2] && parsePercent(predictions[2].probability)}% confidence</small>
                        </div>
                        <div className="col">
                          <h6>{translation3 || "loading..."}</h6>
                        </div>
                      </button>
                    </div>
                    <br />
                    <div className="mb-3 save-container">
                      <button className="btn btn-primary btn-sm" type="button" onClick={clickedSaveSelections} >Save to Dictionary</button>
                      {saveVisible && <p className="saved-confirmation-alert">Saved! {sourceWord} = {translatedWord}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card shadow mb-5"></div>
      </div>
    </div>
  );
}
export default PhotoResults;
