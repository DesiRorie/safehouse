import React from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import AccountBox from "./AccountBox";

const Accounts = () => {
  return (
    <>
      <div className="accountsDiv">
        <h2>Accounts</h2> <MoreHorizOutlinedIcon />
      </div>{" "}
      <AccountBox />
    </>
  );
};

export default Accounts;
