import React, { Component } from "react";
//import PropTypes from "prop-types";
import "./banner.scss";
import bannerImg from "../../Images/banner.png";
import Typer from "../typer/Typer";
class Banner extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="banner">
        <div className="banner__overly">
          <div className="banner__info">
            <h1 className="banner__info__title">Discover My Amazing Art Space !</h1>
            <div className="banner__info__body">
              <Typer startTag={`I build `} dataText={[
                "Amazing Web Interface",
                "Creative Mobile Application"
              ]}
                typeSpeed={100} deleteSpeed={50} />
            </div>
            <div className="banner__info__btn">
              <button>Explore Now</button>
              <button>Hire Me</button>
            </div>
          </div>
          <div className="banner__image">
            <img src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
