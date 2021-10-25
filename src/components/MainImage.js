import React from 'react'
import './MainImage.css';

function MainImage() {

  const fileChange = (files) => {
    console.log(files);
  }

  return (
    <div className="wrapper">
      <h2>Image</h2>
      <img className="image"
        src="placeholder.jpg"
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
