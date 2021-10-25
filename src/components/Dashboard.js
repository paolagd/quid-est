import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth'
import "./Dashboard.css";
import { auth, logout } from "../utils/firebase";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  const logoutUser = () => {
    logout();
  }

  useEffect(() => {
    if (loading) return;
    if (error) console.log(error);
    if (!user) history.replace('/login');
  }, [user, loading, error, history]);

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        Logged in as
        <div>{user?.email}</div>
        <button className="dashboard__btn" onClick={logoutUser}>
          Logout
        </button>
      </div>
    </div>
  );
}
export default Dashboard;