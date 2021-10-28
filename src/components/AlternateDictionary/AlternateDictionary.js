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
      <h3 class="text-dark mb-4">My Dictionary</h3>
          <div class="card shadow">
              <div class="card-header py-3">
                  <p class="text-primary m-0 fw-bold">Employee Info</p>
              </div>
                <div class="card-body">
                  
                  <div class="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                      <table class="table my-0" id="dataTable">
                          <thead>
                              <tr>
                                  <th>Image</th>
                                  <th>Name</th>
                                  <th>Translation</th>
                                  <th>Language</th>
                                  <th>Difficulty</th>
                                  <th> </th>
                              </tr>
                          </thead>
                          <tbody>
                              {allEntries}
                          </tbody>
                          <tfoot>
                              <tr>
                                  <td><strong>Image</strong></td>
                                  <td><strong>Name</strong></td>
                                  <td><strong>Translation</strong></td>
                                  <td><strong>Language</strong></td>
                                  <td><strong>Difficulty</strong></td>
                                  <td><strong> </strong></td>
                              </tr>
                          </tfoot>
                      </table>
                  </div>
                </div>
            </div>



    </div>

    
  )
}

export default AlternateDictionary;
