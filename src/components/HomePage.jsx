import React from "react";
import Navbar from "./Navbar";
import GreetingDate from "./GreetingDate";
import HomePageFooter from "./HomePageFooter";
import HomePageChoices from "./HomePageChoices";

const HomePage = () => {
  return (
    <div className="homePageDiv">
      <Navbar />
      <GreetingDate />
      <HomePageFooter />
      <HomePageChoices />
    </div>
  );
};

export default HomePage;
