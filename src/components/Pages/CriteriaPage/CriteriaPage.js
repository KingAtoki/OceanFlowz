import React from "react";
import { Card } from "../../Card/Card";
import * as CriteriaMessages from "../../../messages";

import "./CriteriaPage.css";

export const CriteriaPage = () => {
  return (
    <div className="criteria-page">
      <h1>{CriteriaMessages.CRITERIA_HEADER}</h1>
      <h2>{CriteriaMessages.CRITERIA_SUBHEADER}</h2>
      <div className="criteria-page_cards">
        <Card title={`${CriteriaMessages.TWO_YEAR_MEM_HEADER}\n${CriteriaMessages.TWO_YEAR_MEM_PRICE}`} description={CriteriaMessages.TWO_YEAR_MEM_DESCRIPTION} />
        <Card title={`${CriteriaMessages.LIFETIME_MEM_HEADER}\n${CriteriaMessages.LIFETIME_MEM_PRICE}`} description={CriteriaMessages.LIFETIME_MEM_DESCRIPTION} />
        <Card title={`${CriteriaMessages.SALES_REPR_HEADER}\n${CriteriaMessages.SALES_REPR_PRICE}`} description={CriteriaMessages.SALES_REPR_DESCRIPTION} />
      </div>
      <p>{CriteriaMessages.MEM_FEE_NOTE}</p>
      <strong>{CriteriaMessages.MEM_REQS_HEADER}</strong>
      <em>{CriteriaMessages.MEM_REQS}</em>
      <p>
        <strong>
          Send all emails to <a href="mailto:ocnflwzintmem@gmail.com">ocnflwzintmem@gmail.com</a>!!!
        </strong>
      </p>
      <p>
        <strong>
          Send all payments to{" "}
          <a href="https://paypal.me/oceanflowzint?locale.x=en_US" target="_blank" rel="noopener noreferrer">
            PayPal
          </a>{" "}
          or{" "}
          <a href="https://venmo.com/oceanflwzint" target="_blank" rel="noopener noreferrer">
            Venmo
          </a>
          !!!
        </strong>
      </p>
    </div>
  );
};
