import React from "react";
import { POS_AVA_NOTE, POS_AVA_HEADER } from "../../../messages";

export const PositionsAvailable = ({ positions }) => {
  return (
    <div className="table-of-contents" style={{ height: "350px", overflow: "auto" }}>
      <h1>{POS_AVA_HEADER}</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
        {positions.map(position => (
          <div key={position} className="table-of-contents_item" style={{ justifyContent: "center" }} onClick={() => console.log("clicked")}>
            <span>{position}</span>
          </div>
        ))}
        <p>{POS_AVA_NOTE}</p>
      </div>
    </div>
  );
};