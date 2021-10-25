import axios from 'axios';

export function translate(query, language, cb) {
  const response = axios
    .post(
      'https://translation.googleapis.com/language/translate/v2',
      {},
      {
        params: {
          q: query,
          target: language,
          key: process.env.REACT_APP_TRANSLATE_API_KEY
        }
      }
    )
    .then((response) => {
      console.log(response.data.data.translations[0].translatedText);
      cb(response.data.data.translations[0].translatedText);
    })
    .catch((err) => {
      console.log('rest api error', err);
    });

}
  