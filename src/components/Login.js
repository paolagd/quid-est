import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, loginWithEmail } from "../utils/firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [user, loading, error] = useAuthState(auth);

  const loginUser = (e) => {
    e.preventDefault();
    loginWithEmail(email, password);
    setEmail("");
    setPassword("");
  };

  // const googleLogin = () => {
  //   loginWithGoogle();
  // };

  useEffect(() => {
    if (loading) return;
    if (error) console.log(error);
    if (user) history.replace("/");
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-9 col-lg-12 col-xl-10">
          <div className="card shadow-lg o-hidden border-0 my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-flex">
                  <div
                    className="flex-grow-1 bg-login-image"
                    style={{
                      backgroundImage: "url(assets/img/dictionary.jpg)",
                    }}
                  ></div>
                </div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h4 className="text-dark mb-4">Welcome to Quid-est</h4>
                    </div>
                    <form className="user">
                      <div className="mb-3">
                        <input
                          className="form-control form-control-user"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="E-mail Address"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          className="form-control form-control-user"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                        />
                      </div>
                      <button
                        className="btn btn-primary d-block btn-user w-100"
                        type="submit"
                        onClick={(e) => {
                          loginUser(e);
                        }}
                      >
                        Login
                      </button>
                      <hr />
                      {/* <a
                        className="btn btn-primary d-block btn-google btn-user w-100 mb-2"
                        role="button"
                      >
                        <i className="fab fa-google"></i>&nbsp; Login with Google
                      </a>  */}
                    </form>
                    <div className="text-center">
                      <Link className="small" to="/reset">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="text-center">
                      <Link className="small" to="/register">
                        Create an Account!
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
export default Login;
