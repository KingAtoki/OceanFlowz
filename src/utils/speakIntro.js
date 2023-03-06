import { INTRODUCTION_HEADER, INTRODUCTION_TEXT } from "../messages";

const message = INTRODUCTION_HEADER + INTRODUCTION_TEXT;
const msg = new SpeechSynthesisUtterance();
msg.lang = "en-GB";
msg.text = message;

export const speakIntro = () => {
  window.speechSynthesis.speak(msg);
  window.speechSynthesis.resume(msg);
};

export const pauseSpeaking = () => {
  return window.speechSynthesis.pause(msg);
};
