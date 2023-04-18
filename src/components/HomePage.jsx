import React from "react";
import Navbar from "./Navbar";
import GreetingDate from "./GreetingDate";
import HomePageFooter from "./HomePageFooter";
import HomePageChoices from "./HomePageChoices";
import Accounts from "./Accounts";

const HomePage = () => {
  return (
    <div className="homePageDiv">
      <Navbar />
      <GreetingDate />
      <HomePageFooter />
      <HomePageChoices />
      <Accounts />
    </div>
  );
};

export default HomePage;
