import React, { useState } from "react";
import "./Dashboard.css";
import { logout } from "./firebase";
function Dashboard() {
  const logoutUser = () => {
    logout();
  }
  const [name, setName] = useState("");
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        Logged in as
        <div>{name}</div>
        <button className="dashboard__btn" onClick={logoutUser}>
          Logout
        </button>
      </div>
    </div>
  );
}
export default Dashboard;