import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../utils/firebase";
import SideBar from "./SideBar/SideBar";
import TopBar from "./TopBar";
import { classify, loadModel, parsePercent } from "../utils/ts-classify";
import { translate } from "../utils/translate";

function PhotoResults(props) {
  const [user, loading, error] = useAuthState(auth);
  const [model, setModel] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [translation1, setTranslation1] = useState('');
  const [translation2, setTranslation2] = useState('');
  const [translation3, setTranslation3] = useState('');
  const history = useHistory();
  const imgRef = useRef();
  const imgUrl = props.imgUrl;
  const language = props.language;

  useEffect(() => {
    if (loading) return;
    if (error) console.log(error);
    if (!user) history.replace("/login");
  }, [user, loading, error, history]);

  useEffect(() => {
    loadModel(setModel);
  }, []);

  useEffect(() => {
    classify(model, setPredictions, imgRef)
  }, [model]);

  useEffect(() => {
    if (predictions.length > 0) {
      translate(predictions[0].className, language || 'es', setTranslation1);
      translate(predictions[1].className, language || 'es', setTranslation2);
      translate(predictions[2].className, language || 'es', setTranslation3);
    }
  }, [predictions])

  return (
    <div id="wrapper">
      <SideBar/>
      <div className="d-flex flex-column" id="content-wrapper">
        <div id="content">
          <TopBar user={user} logout={logout} />
        </div>

        <div id="content">
          <div className="container-fluid">
            <div className="row mb-3">
              <div className="col-lg-4">
                <div className="card mb-3">
                  <div className="card-body text-center shadow">
                    <img className="mb-3 mt-4" src={imgUrl || "placeholder.jpg"} ref={imgRef} height="auto" width="100%"/>
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
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <h2>{predictions[0] && predictions[0].className}</h2><small>{predictions[0] && parsePercent(predictions[0].probability)}% confidence</small>
                          </div>
                          <div className="col">
                            <h2>{translation1 || "loading..."}</h2>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <h2>{predictions[1] && predictions[1].className}</h2><small>{predictions[1] && parsePercent(predictions[1].probability)}% confidence</small>
                          </div>
                          <div className="col">
                            <h2>{translation2 || "loading..."}</h2>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <h2>{predictions[2] && predictions[2].className}</h2><small>{predictions[2] && parsePercent(predictions[2].probability)}% confidence</small>
                          </div>
                          <div className="col">
                            <h2>{translation3 || "loading..."}</h2><small></small>
                          </div>
                        </div>
                        <div className="mb-3"><button className="btn btn-primary btn-sm" type="submit">Save to Dictionary</button></div>
                      </div>
                    </div>
                    <div className="card shadow"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow mb-5"></div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
export default PhotoResults;
