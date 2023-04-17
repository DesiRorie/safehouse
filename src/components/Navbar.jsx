import React from "react";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
const Navbar = () => {
  return (
    <div className="homeNav">
      <ul>
        <li>
          <ModeCommentOutlinedIcon />
        </li>
        <li>
          <AddCardOutlinedIcon />
        </li>
        <li>
          <AccountCircleOutlinedIcon />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
