import React from "react";
import { INTRODUCTION_TEXT, INTRODUCTION_HEADER, ENDING, COMPANY_SIGNATURE } from "../../../messages";
import { pauseSpeaking } from "../../../utils/speakIntro";
import pauseSpeakingIcon from "../../../assets/pause-speaking-icon.png";
import "./IntroductionPage.css";

export const IntroductionPage = () => (
  <div className="table-of-contents" style={{ height: "350px", width: "80%", padding: "15px", overflow: "auto" }}>
    <h1 className="introduction-page-header">
      <span>{INTRODUCTION_HEADER}</span>
      <img className="introduction-page-header_image" src={pauseSpeakingIcon} alt="pause-speaking" onClick={() => pauseSpeaking()} />
    </h1>
    <div>
      <p>{INTRODUCTION_TEXT}</p>
      <p className="introduction-page-ending">{ENDING}</p>
      <p className="introduction-page-signature">{COMPANY_SIGNATURE}</p>
    </div>
  </div>
);
