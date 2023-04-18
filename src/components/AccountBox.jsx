import React from "react";

const AccountBox = () => {
  return (
    <div className="accountBoxContainer">
      <div className="accountBoxes">
        <h4>Bank Accounts (1)</h4>
        <div className="accountInfo">
          <p>Checkings(...1912 ) &gt; </p>
          <span style={{ fontWeight: "bold", marginBottom: "10px" }}>
            $1,000
          </span>
          <span style={{ fontWeight: "lighter", color: "#888" }}>
            <i>Available balance</i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AccountBox;
