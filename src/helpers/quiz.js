export function shuffle(things) {
  const shuffled = [...things];
  let n = 10;
  //Makes sure the array has enough results to slice
  if (shuffled.length < 10) {
    n = shuffle.length;
  }

  return shuffled.sort(() => Math.random() - 0.5).slice(0, n);
}
