import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth'
import "./Dashboard.css";
import { auth, logout } from "./firebase";
function Dashboard() {
  const logoutUser = () => {
    logout();
  }
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) return;
    if (!user) history.replace('/login');
  }, [user, loading])
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