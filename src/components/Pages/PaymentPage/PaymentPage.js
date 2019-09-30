import React from "react";
import { DONATE_CTA } from "../../../messages";
import cashAppImg from "../../../assets/cash-app-qr-code.jpeg";
import breastCancer from "../../../assets/breast-cancer.jpg";
import cancerTreatment from "../../../assets/cancer-treatment.png";
import humaneSociety from "../../../assets/humane-society.png";
import stJude from "../../../assets/st-jude.jpg";

export const PaymentPage = () => {
  return (
    <div className="table-of-contents" style={{ height: "350px", width: "80%", padding: "15px", overflow: "auto" }}>
      <h1>{DONATE_CTA}</h1>
      <div>
        <strong>Donate With Us on CashApp</strong>
        <img src={cashAppImg} alt="cash-app" style={{ margin: "0 auto", height: "250px", width: "250px" }} />
        <div style={{ display: "flex", marginTop: "10px" }}>
          <img src={breastCancer} alt="breast-cancer" style={{ margin: "0 auto", height: "100px", width: "150px" }} />
          <img src={cancerTreatment} alt="cancer-treatment" style={{ margin: "0 auto", height: "100px", width: "150px" }} />
          <img src={humaneSociety} alt="humane-society" style={{ margin: "0 auto", height: "100px", width: "150px" }} />
          <img src={stJude} alt="st-jude" style={{ margin: "0 auto", height: "100px", width: "100px" }} />
        </div>
      </div>
    </div>
  );
};
