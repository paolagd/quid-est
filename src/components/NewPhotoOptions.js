import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../utils/firebase";
import SideBar from "./SideBar/SideBar";
import TopBar from "./TopBar";
import { uploadImage } from "../utils/firebase";

import './NewPhotoOptions.css';

function NewPhotoOptions() {
  const [user, loading, error] = useAuthState(auth);
  const [imageURL, setImageURL] = useState("");
  const history = useHistory();
  const fileInput = useRef(null);

  useEffect(() => {
    if (loading) return;
    if (error) console.log(error);
    if (!user) history.replace("/login");
  }, [user, loading, error, history]);

  const fileChange = async (files) => {
    if (files[0]) {
      console.log(files[0].name);
      const downloadURL = await uploadImage(user.uid, files[0]);
      console.log(downloadURL);
      // setImageURL(downloadURL);

      history.push({
        pathname: '/results',
        language: 'es',
        imgUrl: downloadURL
      })
    }
  }

  // TODO: when imageURL changes, I want to redirect to
  // <PhotoResults imgUrl={imageURL} language={"es"} // Or whatever language from elsewhere
  // useEffect(() => {
  //   if (imageURL) {
      
  //   }
  // }, [imageURL])

  // TODO: Fix CSS so the buttons on ln30-33 are at the top.
  return (
    <div id="wrapper">
      <SideBar/>
      <div className="d-flex flex-column" id="content-wrapper">
        <div id="content">
          <TopBar user={user} logout={logout} />
        </div>

        <input className="file-input"
          type="file"
          capture='camera'
          accept=".png, .jpg"
          onChange={(e) => fileChange(e.target.files)}
          ref={fileInput}
        />

        <div className="m-5">
            <div className="text-center m-3"><button className="btn btn-primary btn-lg border rounded-0 " onClick={() => fileInput.current.click()} type="button" style={{width: "300px"}}>Upload Photo</button></div>
            <div className="text-center m-3"><button className="btn btn-success btn-lg border rounded-0 " type="button" style={{width: "300px"}}>Take New Photo</button></div>
            <div className="text-center m-3"><button className="btn btn-warning btn-lg border rounded-0 " type="button" style={{width: "300px"}}>Photo by URL</button></div>
            <div className="text-center m-3"><button className="btn btn-danger btn-lg border rounded-0 " type="button" style={{width: "300px"}}>Back</button></div>
        </div>
      </div>
    </div>
  );
}
export default NewPhotoOptions;
