import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../utils/firebase";
import SideBar from "./SideBar/SideBar";
import TopBar from "./TopBar";
import ImageHolder from "./ImageHolder";

function PhotoResults() {
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

        <div id="content">
          <div className="container-fluid">
              <div className="row mb-3">
                  <div className="col-lg-4">
                      <div className="card mb-3">
                          <div className="card-body text-center shadow">
                            <img className="rounded-circle mb-3 mt-4" src="assets/img/dogs/image2.jpeg" width="160" height="160"/>
                          </div>
                      </div>
                      <div className="card shadow mb-4"></div>
                  </div>
                  <div className="col-lg-8">
                      <div className="row mb-3 d-none">
                          <div className="col">
                              <div className="card textwhite bg-primary text-white shadow">
                                  <div className="card-body">
                                      <div className="row mb-2">
                                          <div className="col">
                                              <p className="m-0">Peformance</p>
                                              <p className="m-0"><strong>65.2%</strong></p>
                                          </div>
                                          <div className="col-auto"><i className="fas fa-rocket fa-2x"></i></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col">
                              <div className="card textwhite bg-success text-white shadow">
                                  <div className="card-body">
                                      <div className="row mb-2">
                                          <div className="col">
                                              <p className="m-0">Peformance</p>
                                              <p className="m-0"><strong>65.2%</strong></p>
                                          </div>
                                          <div className="col-auto"><i className="fas fa-rocket fa-2x"></i></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col">
                              <div className="card shadow mb-3">
                                  <div className="card-header py-3">
                                      <h1 className="text-primary m-0 fw-bold">What is it?</h1>
                                  </div>
                                  <div className="card-body">
                                      <div className="row">
                                          <div className="col">
                                              <h1>Result 1</h1><small>85% confidence</small>
                                          </div>
                                          <div className="col">
                                              <h1>Translation 1</h1>
                                          </div>
                                      </div>
                                      <div className="row">
                                          <div className="col">
                                              <h1>Result 2</h1><small>10% confidence</small>
                                          </div>
                                          <div className="col">
                                              <h1>Translation 2</h1>
                                          </div>
                                      </div>
                                      <div className="row">
                                          <div className="col">
                                              <h1>Result 3</h1><small>5% confidence</small>
                                          </div>
                                          <div className="col">
                                              <h1>If it is long translation 3</h1><small></small>
                                          </div>
                                      </div>
                                      <div className="mb-3"><button className="btn btn-primary btn-sm" type="submit">Save to Dictionary</button></div>
                                  </div>
                              </div>
                              <div className="card shadow"></div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="card shadow mb-5"></div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
export default PhotoResults;
