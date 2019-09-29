import React from "react";
import { DONATE_CTA } from "../../../messages";
import cashAppImg from "../../../assets/cash-app-qr-code.jpeg";

export const PaymentPage = () => {
  return (
    <div className="table-of-contents" style={{ height: "350px", width: "80%", padding: "15px", overflow: "auto" }}>
      <h1>{DONATE_CTA}</h1>
      <div>
        <strong>Donate With Us on CashApp</strong>
        <img src={cashAppImg} alt="cash-app" style={{ margin: "0 auto", height: "250px", width: "250px" }} />
      </div>
    </div>
  );
};
