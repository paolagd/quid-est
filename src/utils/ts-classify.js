import * as mobilenet from "@tensorflow-models/mobilenet";
import '@tensorflow/tfjs-backend-webgl';

export async function loadModel(callback) {
  const loadedModel = await mobilenet.load();
  callback(loadedModel);
}

/* Returns an array of three prediction objects {name:__, probability:__} from image
 * param1: model: the loaded tensorflow mobilenet model
 * param2: callback: callback function to execute when predictions are returned
 * param3: reference to image from DOM
 */
export async function classify(model, callback, imgRef) {
  if (model === null) return;
  const predictions = await model.classify(imgRef.current);
  callback(predictions);
  console.log(predictions);
}

export function parsePercent(num) {
  return (num*100).toFixed(2);
}