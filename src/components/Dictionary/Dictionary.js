import { React, useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory } from 'react-router-dom';
import { auth, db, deleteItem } from '../../utils/firebase';
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import DictionaryEntry from './DictionaryEntry';

import './Dictionary.css';

function Dictionary() {
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  const [allEntries, setAllEntries] = useState([]);
  const thingsRef = collection(db, "things");

  useEffect(() => {
    if (loading) return;
    if (error) console.log(error);
    if (!user) history.replace('/login');
  }, [user, loading, error, history]);

  const getHistory = async () => {
    const q = query(thingsRef, where("userID", "==", user.uid), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);

    const allDocs = []
    querySnapshot.forEach((doc) => { 
      allDocs.push(
        <DictionaryEntry
          key={doc.id}
          documentID={doc.id}
          uid={user.uid}
          deleteThis={() => deleteThis(user.uid, doc.id)}
          {...doc.data()}
        />
      )
    });

    setAllEntries(allDocs);
  };

  const deleteThis = async (uid, documentID) => {
    await deleteItem(uid, documentID);
    await getHistory();
  }

  useEffect(async () => {
    if (user) {
      console.log("This is user.uid:");
      console.log(user.uid);
      await getHistory();
    }
  }, [user]);

  return (
    <div className="container-fluid">
      <h1 className="text-dark mb-4">My Dictionary</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4 dictionar-entry-row">
        {allEntries}

      </div>
    </div>


  )
}

export default Dictionary;
