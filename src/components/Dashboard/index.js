import React, { useEffect } from "react";
import { useHistory } from "react-router-dom"; 
import { useAuthState } from "react-firebase-hooks/auth"; 
import { auth } from "../../utils/firebase";   

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
    <div id="dashboard" className="container-fluid">  
      <div className="bg-light border border-light hero-photography jumbotron"  style={{
              backgroundImage: "url('assets/img/hero-background-photography.jpg')",
            }} >
          <h1 className="hero-title">Qued-est?</h1>
          <p className="hero-subtitle">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
          <p>
            <a className="btn btn-primary btn-lg hero-button" role="button" href="/">Learn more</a>
          </p>
      </div>
             
    </div>
  );
}
export default Dashboard;
 