import React from "react";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";

const OpenAccount = () => {
  return (
    <div className="openAccountDiv">
      <h4>Open an account</h4>
      <div className="addAccountIcons">
        <div className="iconDivs">
          <p>Credit Cards</p> <AddCardOutlinedIcon />
        </div>
        <div className="iconDivs">
          <p>Checking account</p> <FactCheckOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default OpenAccount;
