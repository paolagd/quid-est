import * as mobilenet from "@tensorflow-models/mobilenet";
import '@tensorflow/tfjs-backend-webgl';

export function parsePercent(num) {
  return (num * 100).toFixed(2);
}

const pred = async (model, img) => {
  // Classify the image.
  const predictions = await model.classify(img);
  console.log(`burst of predictions`, predictions);
  return predictions;
}

const mlBurst = async (img) => {
  // Load the model.
  const model = await mobilenet.load();
  let predictions = await pred(model, img);
  let trials = 0;
  while (predictions[0].probability < 0.1 && trials < 10) {
    predictions = await pred(model, img);
    trials += 1;
  }
  return predictions;
}

export {
  mlBurst
}