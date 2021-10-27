import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../utils/firebase"; 
import SideBar from "./SideBar/SideBar";
import TopBar from "./TopBar";
import "./Dashboard.css";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  const logoutUser = () => {
    logout();
  };

  useEffect(() => {
    if (loading) return;
    if (error) console.log(error);
    if (!user) history.replace("/login");
  }, [user, loading, error, history]);

  return (
    <div id="wrapper">
      <SideBar/>
      <div className="d-flex flex-column" id="content-wrapper">
        <div id="content">
          <TopBar user={user} logout={logoutUser} />
        </div>
      </div>

      {/* <div className="dashboard">
        <div className="dashboard__container">
          Logged in as
          <div>{user?.email}</div>
          <button className="dashboard__btn" onClick={logoutUser}>
            Logout
          </button>
        </div>
        <ImageHolder />
      </div> */}

    </div>
  );
}
export default Dashboard;
