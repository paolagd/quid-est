import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEBshVIipxOycgm2NC14UPgXtspvBhrn0",
  authDomain: "another-react-firebase.firebaseapp.com",
  projectId: "another-react-firebase",
  storageBucket: "another-react-firebase.appspot.com",
  messagingSenderId: "376944110891",
  appId: "1:376944110891:web:f4d46e6307579ebc4aa96e"
};

const app = initializeApp(firebaseConfig);

console.log(app.options);