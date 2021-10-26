import { useEffect, useState } from "react";
import { things } from "../../data/quizExample";
import { getUserDictionary, auth } from "../../utils/firebase"
import { useAuthState } from "react-firebase-hooks/auth"; 

export default function Quiz() {
  const [quiz, setQuiz] = useState([]);

  const [user, loading, error] = useAuthState(auth);
  // voy a user el mismo quiz, y le voy a agregar un answer: key, y un correct: true

  //Evaluate quiz function

  //evaluate question

  const getThings = async () =>{
    const things = await getUserDictionary(user.uid);
    setQuiz(things); 
  }

  useEffect(()=>{ 
    getThings();
  }, []) 
    
  
  return <div>Quiz Component</div>;
}
