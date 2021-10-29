export default function DictionaryItem(props) {
  const { imageURL, sourceWord, translatedWord, language } = props;
 
  const languageIcons = {
    en: '🇬🇧',
    es: '🇪🇸',
    fr: '🇫🇷',
    hi: '🇮🇳',
    pt: '🇵🇹',
    zh: '🇨🇳'
  };

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4">
      <div className="bg-white rounded shadow-sm">
        <img
          src={imageURL}
          alt=""
          className="img-fluid card-img-top"
        />
        <div className="p-3">
          <h5 className="text-dark dashboard-traslation">{translatedWord}</h5>
          <p className="small text-muted mb-0">
            {sourceWord}
          </p> 
          <hr/>
          <p>{languageIcons.en} to {languageIcons[language]}</p>
        </div>
      </div>
    </div>
  );
}
