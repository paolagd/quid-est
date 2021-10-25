import React, { useState } from 'react'
import { uploadImage } from '../utils/firebase';
import './MainImage.css';

function MainImage() {
  const [imageURL, setImageURL] = useState("");

  const fileChange = async (files) => {
    console.log(files[0].name);
    const downloadURL = await uploadImage(files[0]);
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
      />
    </div>
  );
}

export default MainImage
