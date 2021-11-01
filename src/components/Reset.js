import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Reset.css";
import { resetPassword } from "../utils/firebase";

function Reset() {
  const [email, setEmail] = useState("");

  const resetUserPassword = (e) => {
    e.preventDefault();
    resetPassword(email);
    setEmail("");
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-9 col-lg-12 col-xl-10">
          <div className="card shadow-lg o-hidden border-0 my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-flex">
                  <div
                    className="flex-grow-1 bg-password-image"
                    style={{
                      backgroundImage: "url( assets/img/translation2.jpg )",
                    }}
                  ></div>
                </div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h4 className="text-dark mb-2">Forgot Your Password?</h4>
                      <br />
                    </div>
                    <form className="user">
                      <div className="mb-3">
                        <input
                          className="form-control form-control-user"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="E-mail Address"
                        />
                      </div>
                      <button
                        className="btn btn-primary d-block btn-user w-100"
                        type="submit"
                        onClick={(e) => resetUserPassword(e)}
                      >
                        Reset Password
                      </button>
                    </form>
                    <div className="text-center">
                      <hr />
                      <Link to="/register">Register</Link>
                    </div>
                    <div className="text-center">
                      <Link className="small" to="/login">
                        Already have an account? Login!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Reset;
