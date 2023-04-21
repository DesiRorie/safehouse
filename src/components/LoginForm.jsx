import React, { useContext } from "react";
import { LoginContext } from "../App";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const { handleLogin, baduser } = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };
  return (
    <div className="loginForm">
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="inputField1">Enter your username</label>
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          id="inputField1"
          name="inputField1"
          placeholder=" "
          autoComplete="username"
          value={username}
        ></input>

        <label htmlFor="inputField2">Enter your password</label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          type="password"
          id="inputField2"
          name="inputField2"
          autoComplete="current-password"
          placeholder=""
        ></input>
        {baduser ? (
          <p style={{ color: "red" }}>Invalid username or password</p>
        ) : (
          ""
        )}
        <Link to="/forgot" target="_blank" className="links">
          Forgot username or password
        </Link>
        <button>Sign in</button>
      </form>
    </div>
  );
};

export default LoginForm;
