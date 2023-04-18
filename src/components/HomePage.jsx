import React from "react";
import Navbar from "./Navbar";
import GreetingDate from "./GreetingDate";
import HomePageFooter from "./HomePageFooter";
import HomePageChoices from "./HomePageChoices";
import Accounts from "./Accounts";
import OpenAccount from "./OpenAccount";

const HomePage = () => {
  return (
    <div className="homePageDiv">
      <Navbar />
      <GreetingDate />
      <HomePageFooter />
      <HomePageChoices />
      <Accounts />
      <OpenAccount />
    </div>
  );
};

export default HomePage;
