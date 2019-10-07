import React from "react";
import Slider from "react-slick";
import { speakIntro, pauseSpeaking } from "../../utils/speakIntro";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  centerMode: true,
  swipeToSlide: true,
  adaptiveHeight: true,
  arrows: false,
  customPaging: i => (
    <div
      style={{
        width: "30px",
        color: "black",
        border: "1px black solid",
        borderRadius: "15px",
      }}
    >
      {i + 1}
    </div>
  ),
};

export default class Carousel extends React.Component {
  state = {
    slideIndex: 1,
  };

  render() {
    const { items } = this.props;
    return (
      <>
        <Slider
          ref={node => (this.slider = node)}
          // Introduce a key instead of checking index of this getting inefficient
          afterChange={index => (index === 2 ? speakIntro() : pauseSpeaking())}
          {...settings}
        >
          {items.map(item => (
            <div key={item}>{item}</div>
          ))}
        </Slider>
        <div className="slider-next-prev">
          <button onClick={() => this.slider.slickPrev()} style={{ background: "none", border: "none", cursor: "pointer" }}>
            <span>back</span>
          </button>
          <button onClick={() => this.slider.slickNext()} style={{ background: "none", border: "none", cursor: "pointer" }}>
            <span>next</span>
          </button>
        </div>
      </>
    );
  }
}
