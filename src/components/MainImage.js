import React, { useState, useEffect, useRef } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory } from 'react-router-dom';
import { auth, uploadImage } from '../utils/firebase';
import './MainImage.css';

function MainImage() {
  const [imageURL, setImageURL] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  const fileInput = useRef(null);

  useEffect(() => {
    if (loading) return;
    if (error) console.log(error);
    if (!user) history.replace('/login');
  }, [user, loading, error, history]);

  const fileChange = async (files) => {
    console.log(files[0].name);
    const downloadURL = await uploadImage(user.uid, files[0]);
    console.log(downloadURL);
    setImageURL(downloadURL);
  }

  return (
    <div className="wrapper">
      <h2>Image</h2>
      <img className="image"
        src={imageURL || "placeholder.jpg"}
        alt="image"
      />
      <input className="file-input"
        type="file"
        accept=".png, .jpg"
        onChange={(e) => fileChange(e.target.files)}
        ref={fileInput}
      />
      <button
        className="upload-image-button"
        onClick={() => fileInput.current.click()}
      >
        Upload Image
      </button>
    </div>
  );
}

export default MainImage
