import React, { Component } from "react";
import "./dashboard-card.css";

class CardBig extends Component {
  render() {
    return (
      <div id={this.props.LargeCard} className="large-card-container">
        <span className={" " + this.props.cssClass} />
        <div id={this.props.LargeCardSocial} className="social-name">
          <img src={this.props.imgsrc} alt="" />
          <p>{this.props.username}</p>
        </div>
        <div className="follower-number">
          <p>{this.props.followernumber}</p>
          <p>{this.props.follower}</p>
        </div>
        <div className="count-number">
          <img src={this.props.imgsrc1} alt="" />
          <p>{this.props.today}</p>
        </div>
      </div>
    );
  }
}

export default CardBig;
