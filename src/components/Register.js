import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, register } from "../utils/firebase";
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const history = useHistory();
  const [user, loading, error] = useAuthState(auth);

  const registerUser = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please your information");  
    }else{
      register(name, email, password);
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (error) console.log(error);
    if (user) history.replace("/");
  }, [user, loading, error, history]);

  return (
    <div className="container">
      <div className="card shadow-lg o-hidden border-0 my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-5 d-none d-lg-flex">
              <div
                className="flex-grow-1 bg-register-image"
                style={{
                  backgroundImage: "url( assets/img/dogs/image2.jpeg )",
                }}
              ></div>
            </div>
            <div className="col-lg-7">
              <div className="p-5">
                <div className="text-center">
                  <h4 className="text-dark mb-4">Create an Account</h4>
                </div>
                <form className="user">
                  <div className="mb-3">
                    <input
                      className="form-control form-control-user"
                      type="text"
                      placeholder="Full Name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control form-control-user"
                      type="email"
                      aria-describedby="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control form-control-user"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button
                    className="btn btn-primary d-block btn-user w-100"
                    onClick={registerUser}
                  >
                    Register Account
                  </button>
                  <hr />
                  <a
                    className="btn btn-primary d-block btn-google btn-user w-100 mb-2"
                    role="button" href="/"
                  >
                    <i className="fab fa-google"></i>&nbsp; Register with Google
                  </a>
                  <hr />
                </form>
                <div className="text-center">
                  <a className="small" href="forgot-password.html">
                    Forgot Password?
                  </a>
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
  );
}
export default Register;
 