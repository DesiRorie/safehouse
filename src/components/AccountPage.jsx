import React from "react";

const AccountPage = () => {
  return (
    <div className="accountPage">
      <h1>Total Checking(...1912)</h1>
      <div className="checkingDiv">
        <div className="checkingDivInfo">
          <span>$1,000</span>
          <span id="availableBalance">Available balance</span>
        </div>
        <h3>Account details</h3>
        <div>
          <div className="balanceDiv">
            <span id="availableBalance1">Available balance</span>
            <span id="availableBalance2">$1,000</span>
          </div>
          <div className="balanceDiv">
            <span id="availableBalance1">Present balance</span>
            <span id="availableBalance2">$1,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
