import { Button } from "@mui/material";
import React from "react";

const HomePageChoices = () => {
  return (
    <div className="homePageChoices">
      <Button className="homePageChoicesButtons">+ </Button>
      <Button className="homePageChoicesButtons">Send | Zelle®</Button>
      <Button className="homePageChoicesButtons">Deposit checks</Button>
      <Button className="homePageChoicesButtons">Pay bills</Button>
    </div>
  );
};

export default HomePageChoices;
