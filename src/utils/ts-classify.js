/* Returns an array of three prediction objects {name:__, probability:__} from image
 * param1: model: the loaded tensorflow mobilenet model
 * param2: callback: callback function to execute when predictions are returned
 * param3: reference to image from DOM
 */
export async function classify(model, callback, imgRef) {
  const predictions = await model.classify(imgRef.current);
  callback(predictions);
  console.log(predictions);
}
