import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Dashboard.css";
function Dashboard() {
  const [name, setName] = useState("");
  const history = useHistory();
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