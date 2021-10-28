export function shuffle(things) { 
  const shuffled = [...things];
  return shuffled.sort(() => Math.random() - 0.5).slice(0, 10); 
}
