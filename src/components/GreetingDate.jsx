import React, { useEffect, useState } from "react";

const GreetingDate = () => {
  const [greeting, setGreeting] = useState();
  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" });
  const day = today.getDate();
  const year = today.getFullYear();
  const time = today.getHours();

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
      <h1>{greeting}</h1>
      <p>{fullDate}</p>
    </div>
  );
};

export default GreetingDate;
