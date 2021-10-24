import React, { useState } from "react";
import "./Dashboard.css";
function Dashboard() {
  const [name, setName] = useState("");
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        Logged in as
        <div>{name}</div>
        <button className="dashboard__btn">
          Logout
        </button>
      </div>
    </div>
  );
}
export default Dashboard;