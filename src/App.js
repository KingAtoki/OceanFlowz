import React, { Component } from "react";
import Slider from "react-slick";
import Carousel from "./components/Carousel/Carousel";
import { TitlePage } from "./components/Pages/TitlePage/TitlePage";
import { IntroductionPage } from "./components/Pages/IntroductionPage/IntroductionPage";
import { CriteriaPage } from "./components/Pages/CriteriaPage/CriteriaPage";
import { TableOfContents } from "./components/Pages/TableOfContents/TableOfContents";
import { PositionsAvailable } from "./components/Pages/PositionsAvailablePage/PositionsAvailable";
import { MembersDescription } from "./components/Pages/MembersDescription/MembersDescription";
import { PaymentPage } from "./components/Pages/PaymentPage/PaymentPage";
import { ComingFeaturesPage } from "./components/Pages/ComingFeaturesPage/ComingFeaturesPage";

import { PAGES, IMAGES, POSITIONS } from "./constants";

import "./App.css";

const settings = {
  infinite: true,
  speed: 500,
  height: "500px",
  autoplaySpeed: 2000,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  centerMode: true,
  swipeToSlide: true,
  adaptiveHeight: false,
};

export default class App extends Component {
  state = {
    currentPage: null,
  };

  changePage = index => () => this.setState({ currentPage: index });

  render() {
    const comps = [<TitlePage />, <TableOfContents pages={PAGES} changePage={this.changePage} />, <IntroductionPage />, <CriteriaPage />, <PositionsAvailable positions={POSITIONS} />, <MembersDescription/>, <PaymentPage />, <ComingFeaturesPage />];

    return (
      <div className="App">
        <Slider {...settings}>
          {IMAGES.map(image => {
            return <img className="slider-image" key={image} src={image} alt={image} />;
          })}
        </Slider>
        <Carousel items={comps} currentPage={this.state.currentPage} />
      </div>
    );
  }
}
