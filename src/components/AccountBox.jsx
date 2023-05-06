import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../App";

const AccountBox = () => {
  const { checkingBalance, setCheckingBalance } = useContext(LoginContext);

  return (
    <>
      <div className="accountBoxContainer">
        <Link
          to="/accounts"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="accountBoxes">
            <h4>Bank Accounts (1)</h4>
            <div className="accountInfo">
              <p>Checkings(...1912 ) &gt; </p>
              <span style={{ fontWeight: "bold", marginBottom: "10px" }}>
                $
                {checkingBalance.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
              <span style={{ fontWeight: "lighter", color: "#888" }}>
                <i>Available balance</i>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default AccountBox;
