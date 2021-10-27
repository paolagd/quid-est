import React, { useEffect } from "react";
import { useHistory } from "react-router-dom"; 
import { useAuthState } from "react-firebase-hooks/auth"; 
import { auth } from "../utils/firebase";   

import "./Dashboard.css";

function Dashboard() {

  const [user, loading, error] = useAuthState(auth); 
  const history = useHistory();

  useEffect(() => {
    if (loading) return;
    if (error) console.log(error);
    if (!user) history.replace("/login");
  }, [user, loading, error, history]);

  return (
    <div className="container-fluid">
      <div className="d-sm-flex justify-content-between align-items-center mb-4">
        <h3 className="text-dark mb-0">Dashboard</h3>
        
      </div>
    </div>
  );
}
export default Dashboard;

//  {/* <div className="dashboard">
//         <div className="dashboard__container">
//           Logged in as
//           <div>{user?.email}</div>
//           <button className="dashboard__btn" onClick={logoutUser}>
//             Logout
//           </button>
//         </div>
//         <ImageHolder />
//       </div> */}
