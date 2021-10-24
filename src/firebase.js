import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";


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
const db = getFirestore(app);
const auth = getAuth();

console.log("app", app.options);
console.log("db", db);
console.log("auth", auth);

const register = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("user", user);
    // Add a user document with a generated ID.
    const docRef = await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      email
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.log(error.message);
  }
}

export {
  auth,
  db,
  register,
}