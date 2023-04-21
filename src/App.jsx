import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import { createContext, useState } from "react";
import ForgotPage from "./components/ForgotPage";
import HomePage from "./components/HomePage";
export const LoginContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [baduser, setBadUser] = useState(false);
  const [showUserName, setUserName] = useState("");

  const handleLogin = (username, password) => {
    if (
      username.length > 0 &&
      /[a-zA-Z]/.test(username) &&
      password.length > 0
    ) {
      setIsLoggedIn(true);
      setUserName(username);
    } else {
      setBadUser(true);
    }
  };

  // const handleLogin = (username, password) => {
  //   if (username.length > 0 && password.length > 0) {
  //     setIsLoggedIn(true);
  //     setUserName(username);
  //   } else {
  //     setBadUser(true);
  //   }
  // };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <LoginContext.Provider
      value={{ showUserName, baduser, handleLogin, handleLogout }}
    >
      <div className="App">
        {/* {!isLoggedIn ? (
          <Login />
        ) : (
          <Routes>
            <Route element={<ForgotPage />} path="/forgot" />
          </Routes>
        )} */}

        <Routes>
          <Route path="/forgot" element={<ForgotPage />} />
          {!isLoggedIn ? (
            <Route element={<Login />} path="/" />
          ) : (
            <Route path="/" element={<HomePage />} />
          )}
        </Routes>
      </div>
    </LoginContext.Provider>
  );
}

export default App;
