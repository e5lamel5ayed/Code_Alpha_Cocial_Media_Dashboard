import React, { Component } from "react";
import "./dashboard-card-small.css";

class CardSmall extends Component {
  render() {
    return (
      <div id={this.props.smallCard} className="small-card-container">
        <div className="header">
          <p>{this.props.smallheader}</p>
          <img src={this.props.imgsrc} alt="" />
        </div>
        <div className="body">
          <p className="count-number">{this.props.countnumber}</p>
          <div className="count-status">
            <img src={this.props.imgsrc2} alt="" />
            <p className={this.props.smallColor}>{this.props.percent}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CardSmall;
