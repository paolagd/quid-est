import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../utils/firebase";
import SideBar from "./SideBar/SideBar";
import TopBar from "./TopBar";
import ImageHolder from "./ImageHolder";

function NewPhotoOptions() {
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) return;
    if (error) console.log(error);
    if (!user) history.replace("/login");
  }, [user, loading, error, history]);

  // TODO: Fix CSS so the buttons on ln30-33 are at the top.
  return (
    <div id="wrapper">
      <SideBar/>
      <div className="d-flex flex-column" id="content-wrapper">
        <div id="content">
          <TopBar user={user} logout={logout} />
        </div>


        <div className="m-5">
            <div className="text-center m-3"><button className="btn btn-primary btn-lg border rounded-0 " type="button" style={{width: "300px"}}>Upload Photo</button></div>
            <div className="text-center m-3"><button className="btn btn-success btn-lg border rounded-0 " type="button" style={{width: "300px"}}>Take New Photo</button></div>
            <div className="text-center m-3"><button className="btn btn-warning btn-lg border rounded-0 " type="button" style={{width: "300px"}}>Photo by URL</button></div>
            <div className="text-center m-3"><button className="btn btn-danger btn-lg border rounded-0 " type="button" style={{width: "300px"}}>Back</button></div>
        </div>
      </div>
    </div>
  );
}
export default NewPhotoOptions;
