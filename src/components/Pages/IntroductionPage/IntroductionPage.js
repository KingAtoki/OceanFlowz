import React, { useEffect, useState } from "react";
import {
  INTRODUCTION_TEXT,
  INTRODUCTION_HEADER,
  ENDING,
  COMPANY_SIGNATURE,
} from "../../../messages";
import { speakIntro, pauseSpeaking } from "../../../utils/speakIntro";
import pauseSpeakingIcon from "../../../assets/pause-speaking-icon.png";
import speakingIcon from "../../../assets/speaking-icon.png";
import "./IntroductionPage.css";

export const IntroductionPage = ({ currentPage }) => {
  const [paused, setPaused] = useState(true);

  const onIntroPage = () =>
    document
      ?.getElementsByClassName("slick-active")[1]
      ?.innerText?.includes("How about being part of the largest");

  return (
    <div
      className="table-of-contents"
      style={{ width: "85%", padding: "15px", overflow: "auto" }}
    >
      <h1 className="introduction-page-header">
        <span>{INTRODUCTION_HEADER}</span>
        <img
          className="introduction-page-header_image"
          src={paused ? pauseSpeakingIcon : speakingIcon}
          alt="pause-speaking"
          onClick={() => {
            paused && onIntroPage() ? speakIntro() : pauseSpeaking();
            setPaused(!paused);
          }}
        />
      </h1>
      <div>
        <p>{INTRODUCTION_TEXT}</p>
        <p className="introduction-page-ending">{ENDING}</p>
        <p className="introduction-page-signature">{COMPANY_SIGNATURE}</p>
      </div>
    </div>
  );
};
