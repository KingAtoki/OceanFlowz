import React, { useState } from "react";
import { DONATE_CTA } from "../../../messages";
import cashAppImg from "../../../assets/cash-app-qr-code.jpeg";
import breastCancer from "../../../assets/breast-cancer.jpg";
import cancerTreatment from "../../../assets/cancer-treatment.png";
import humaneSociety from "../../../assets/humane-society.png";
import stJude from "../../../assets/st-jude.jpg";

import Airtable from "airtable";
const base = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_KEY,
}).base("appDGCahAXtLgrWwL");
let events = [];
const getEvents = async () => {
  return await base("Events")
    .select({
      // Selecting the first 3 records in Grid view:
      view: "Grid view",
    })
    .eachPage(
      records => {
        events = [...records];
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      },
    );
};

getEvents();
export const PaymentPage = () => {
  const [eventsShowing, setEventsShowing] = useState(false);
  return eventsShowing ? (
    <div className="table-of-contents" style={{ height: "350px", width: "80%", padding: "15px", overflow: "auto" }}>
      <h1 style={{ position: "relative" }}>
        <span style={{ paddingLeft: "5px" }}>Events</span>
        <span onClick={() => setEventsShowing(false)} style={{ cursor: "pointer", float: "right", fontSize: "10px", position: "absolute", bottom: "0px", right: "0px" }}>
          Donate with Us!
        </span>
      </h1>
      <div>
        {events &&
          events.map(({ fields }) => (
            <div key={Math.random()} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3>{fields.Name}</h3>
              {fields.Attachments && <img src={fields.Attachments[0].url} alt="event-flyer" style={{ margin: "0 auto", height: "100px", width: "100px" }} />}
              <p style={{ margin: "0 auto" }}>{fields.Description}</p>
            </div>
          ))}
      </div>

      <p>
        <strong>
          For information on events please email <a href="mailto:ocnflwzintdon@gmail.com">ocnflwzintdon@gmail.com</a>!!!
        </strong>
      </p>
    </div>
  ) : (
    <div className="table-of-contents" style={{ height: "350px", width: "80%", padding: "15px", overflow: "auto" }}>
      <h1 style={{ position: "relative" }}>
        <span style={{ paddingLeft: "5px" }}>{DONATE_CTA}</span>
        <span onClick={() => setEventsShowing(true)} style={{ cursor: "pointer", float: "right", fontSize: "10px", position: "absolute", bottom: "0px", right: "0px" }}>
          Check out our events!
        </span>
      </h1>

      <div>
        <strong>Donate With Us on CashApp</strong>
        <img src={cashAppImg} alt="cash-app" style={{ margin: "0 auto", height: "250px", width: "250px" }} />
        <div style={{ display: "flex", marginTop: "10px", flexWrap: "wrap" }}>
          <img src={breastCancer} alt="breast-cancer" style={{ margin: "0 auto", height: "100px", width: "150px" }} />
          <img src={cancerTreatment} alt="cancer-treatment" style={{ margin: "0 auto", height: "100px", width: "150px" }} />
          <img src={humaneSociety} alt="humane-society" style={{ margin: "0 auto", height: "100px", width: "150px" }} />
          <img src={stJude} alt="st-jude" style={{ margin: "0 auto", height: "100px", width: "100px" }} />
        </div>
      </div>
      <p>
        <strong>
          Send all emails to <a href="mailto:ocnflwzintdon@gmail.com">ocnflwzintdon@gmail.com</a>!!!
        </strong>
      </p>
    </div>
  );
};
