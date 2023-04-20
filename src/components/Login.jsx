import React, { useEffect } from "react";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LoginForm from "./LoginForm";

const Login = () => {
  useEffect(() => {
    alert("this project is still under construction continue...");
  }, []);
  return (
    <>
      <div className="loginDiv">
        <h1>SAFEHOUSE</h1>
        <MonetizationOnIcon />
      </div>
      <LoginForm />
    </>
  );
};

export default Login;
