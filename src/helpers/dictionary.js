export function difficultyStyle(currentDifficulty){
  if (currentDifficulty === "Easy")
    return "btn dropdown-toggle btn-success" ;
  else if (currentDifficulty === "Medium")
   return "btn dropdown-toggle btn-warning";
  else if (currentDifficulty === "Hard")
    return "btn dropdown-toggle btn-danger";
};
 
export const languageIcons = {
  en: "🇬🇧",
  es: "🇪🇸",
  fr: "🇫🇷",
  hi: "🇮🇳",
  pt: "🇵🇹",
  zh: "🇨🇳",
};