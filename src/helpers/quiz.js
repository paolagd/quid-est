export function shuffle(things) {
  const shuffledArray = [...things];
  let n = 10;
  //Makes sure the array has enough results to slice
  if (shuffledArray.length < 10) {
    n = shuffledArray.length;
  } 
  return shuffledArray.sort(() => Math.random() - 0.5).slice(0, n);
}
