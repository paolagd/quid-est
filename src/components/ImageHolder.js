import * as mobilenet from "@tensorflow-models/mobilenet";
import '@tensorflow/tfjs-backend-webgl';

import { useState, useEffect, useRef } from 'react';

function ImageHolder() {
  const [model, setModel] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [results, setResults] = useState([]);
  const [formVal, setFormVal] = useState('');
  const [predictions, setPredictions] = useState([]);

  const imgRef = useRef();

  const loadModel = async () => {
    const loadedModel = await mobilenet.load();
    setModel(loadedModel);
  }

  const classify = async () => {
    const predictions = await model.classify(imgRef.current);
    const parsedPredictions = [];
    for (const entry of predictions) {
      const pred = {
        name: entry.className,
        probability: entry.probability
      };
      parsedPredictions.push(pred);
    }
    setPredictions(parsedPredictions);
    console.log(predictions);
    console.log(parsedPredictions);
  }

  const uploadImage = event => {
    const { files } = event.target;
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setImageURL(url);
    } else {
      setImageURL(null);
    }
  }

  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await mobilenet.load();
      setModel(loadedModel);
    }
    loadModel();

  },[])

  return (
    <div className="imageHolder">
      <p>
        Image:
      </p>
      <div className='inputHolder'>
        <input type='file' accept='image/*' capture='camera' className='uploadInput' onChange={uploadImage}/>
      </div>
      <div className="renderedImage">
        {imageURL && <img src={imageURL} alt="Upload Preview" crossOrigin="anonymous" ref={imgRef} />}
      </div>
      {imageURL && <button className='button' onClick={classify}>Classify Image</button>}
    </div>
  )

}

export default ImageHolder;