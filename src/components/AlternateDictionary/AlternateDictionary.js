import { React, useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory } from 'react-router-dom';
import { auth, db } from '../../utils/firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
import AlternateDictionaryEntry from './AlternateDictionaryEntry';

import './AlternateDictionary.css';

function AlternateDictionary() {
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  const [allEntries, setAllEntries] = useState([]);
  const thingsRef = collection(db, "things");
  
  useEffect(() => {
    if (loading) return;
    if (error) console.log(error);
    if (!user) history.replace('/login');
    
    
  }, [user, loading, error, history]);
  
  useEffect(async() => {
    if (user) {
      console.log("This is user.uid:");
      console.log(user.uid);
      const q = query(thingsRef, where("userID", "==", user.uid));

      const querySnapshot = await getDocs(q);
      const allDocs = []
      querySnapshot.forEach((doc) => {
        // {documentID: doc.id, ...doc.data()});});
        allDocs.push(
          <AlternateDictionaryEntry
            key={doc.id} 
            documentID={doc.id}
            {...doc.data()}
          />
        )
      });
      setAllEntries(allDocs);
    }
  }, [user]);

  return(
    <div className="container-fluid">
      <h1 className="text-dark mb-4">My Dictionary</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4 dictionar-entry-row">
        {allEntries}
        
      </div>
    </div>

    
  )
}

export default AlternateDictionary;
