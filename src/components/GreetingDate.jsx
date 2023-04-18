import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { LoginContext } from "../App";

const GreetingDate = () => {
  const [greeting, setGreeting] = useState();
  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" });
  const day = today.getDate();
  const year = today.getFullYear();
  const time = today.getHours();
  const { showUserName } = useContext(LoginContext);

  useEffect(() => {
    if (time < 12) {
      setGreeting("Good morning");
    } else if (time >= 12 && time < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, [greeting]);

  const fullDate = `${month} ${day}, ${year}`;

  return (
    <div className="greetingDiv">
      <h1>
        {greeting} {showUserName}
      </h1>
      <p>{fullDate}</p>
    </div>
  );
};

export default GreetingDate;
