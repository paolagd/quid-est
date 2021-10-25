import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, loginWithEmail, loginWithGoogle } from "../utils/firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [user, loading, error] = useAuthState(auth);

  const loginUser = () => {
    loginWithEmail(email, password);
    setEmail("");
    setPassword("");
  }

  const googleLogin = () => {
    loginWithGoogle();
  }

  useEffect(() => {
    if (loading) return;
    if (error) console.log(error);
    if (user) history.replace('/')
  });

  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={loginUser}
        >
          Login
        </button>
        <button
          className="login__btn login__google"
          onClick={googleLogin}
        >
          Login with Google
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Login;