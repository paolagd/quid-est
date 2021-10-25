import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc, setDoc, doc,
} from "firebase/firestore";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
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
    console.log("user registered", user);
    // Add a user document with a generated ID.
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name,
      email
    });
    console.log("Document written with ID: ", user.uid);
  } catch (error) {
    console.log("error while adding document for new user: ", error.message);
  }
}

const loginWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("user logged in: ", user);
  } catch (error) {
    console.log("error during login: ", error.message);
  }
}

const logout = async () => {
  try {
    await signOut(auth);
    console.log("user has been logged out");
  } catch (error) {
    console.log("error during logout: ", error.message);
  }
}

const loginWithGoogle = () => {
  console.log("TODO: this functionality is not yet implemented");
}

const resetPassword = (email) => {
  try {
    console.log("TODO: this functionality is not yet implemented");
  } catch (error) {
    console.log("error while sending password reset email: ", error.message);
  }
}

export {
  auth,
  db,
  register,
  loginWithEmail,
  logout,
  loginWithGoogle,
  resetPassword,
}