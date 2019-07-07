import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../utils/MyButton";

export default class Discount extends Component {
  state = {
    discountStart: 0,
    disccountEnd: 45
  };

  porcentage = () => {
    if (this.state.discountStart < this.state.disccountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.porcentage()}>
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before September 17, 2019</h3>
              <p>
                When the Boogeyman goes to sleep every night, he checks his
                closet for Chuck Norris. The chief export of Chuck Norris is
                Pain.
              </p>

              <MyButton
                text="Get those tickets!"
                bck="#ffa800"
                color="#ffffff"
                link="http://google.com"
              />

              <div />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}
