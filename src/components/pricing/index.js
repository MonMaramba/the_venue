import React, { Component } from "react";
import MyButton from "../utils/MyButton";
import Zoom from "react-reveal/Zoom";

export default class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Loge", "VIP"],
    desc: [
      "Chuck Norris is the only man to ever defeat a brick wall in a game of tennis.",
      "Chuck Norris uses pepper spray to spice up his steaks",
      "Chuck Norris went to the Virgin Islands, now it's just called The Islands"
    ],
    linkto: ["http://sales/balcony", "http://sales/loge", "http://sales/vip"],
    delay: [400, 0, 600]
  };

  showBoxes = () => {
    return this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <MyButton
                text="Get those tickets!"
                bck="#ffa800"
                color="#ffffff"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  };

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper"> {this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}
