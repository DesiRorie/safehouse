import React, { useState } from "react";
import { LoginContext } from "../App";
import { useContext } from "react";

const AccountPage = () => {
  const { checkingBalance, setCheckingBalance } = useContext(LoginContext);
  const [billPaid, setBillPaid] = useState(false);
  const [billPrice, setBillPrice] = useState(
    Math.round(Math.random() * 1000 + 1).toFixed(2)
  );
  const payBills = () => {
    console.log(checkingBalance);

    if (billPrice > checkingBalance) {
      return; // alert("insuffeciet funds");
    } else {
      setCheckingBalance(checkingBalance - billPrice);
      setBillPaid(true);
    }
  };
  return (
    <div className="accountPage">
      <h1>Total Checking(...1912)</h1>
      <div className="checkingDiv">
        <div className="checkingDivInfo">
          <span>
            $
            {checkingBalance.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
          <span id="availableBalance">Available balance</span>
        </div>
        <h3>Account details</h3>
        <div>
          <div className="balanceDiv">
            <span id="availableBalance1">Available balance</span>
            <span id="availableBalance2">
              ${checkingBalance.toLocaleString()}
            </span>
          </div>
          <div className="balanceDiv">
            <span id="availableBalance1">Present balance</span>
            <span id="availableBalance2">
              ${checkingBalance.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
      {!billPaid && (
        <div className="accountPageBillContainer">
          <div className="accountPageBill">
            <h4 style={{ textAlign: "center" }}>Car Payment</h4>
          </div>{" "}
          <div className="balanceDiv">
            <span> Balance Due:</span>

            <span style={{ fontWeight: "bold" }} id="availableBalance2">
              ${billPrice}
            </span>
          </div>
          <button onClick={payBills}>Pay Bill</button>
        </div>
      )}
    </div>
  );
};

export default AccountPage;
