import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth' 
import { auth, logout } from "../utils/firebase";
import ImageHolder from "./ImageHolder";
import SideBar from "./SideBar"
import "./Dashboard.css";

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
    <>
    <SideBar></SideBar>
    <div className="dashboard">
      <div className="dashboard__container">
        Logged in as
        <div>{user?.email}</div>
        <button className="dashboard__btn" onClick={logoutUser}>
          Logout
        </button>
      </div>
      <ImageHolder />
    </div>
    </>
  );
}
export default Dashboard;