import React, { Component } from "react";
import "./dashboard-nav.css";
import "./dashboard-card.css";
import "./dashboard-card-small.css";
import CountUp from "react-countup"; 

class Navbar extends Component {
  toggleSwitch = () => {
    var body = document.querySelector("body");
    var titleHeader = document.querySelector(".title p");
    var largeCard1 = document.querySelector("#largeCard1");
    var largeCardSocialName1 = document.querySelector(
      "#largeCard1 .social-name p"
    );
    var largeCardFollower1 = document.querySelector(
      "#largeCard1 .follower-number p"
    );
    var largeCardSocialName2 = document.querySelector(
      "#largeCard2 .social-name p"
    );
    var largeCardFollower2 = document.querySelector(
      "#largeCard2 .follower-number p"
    );
    var largeCardSocialName3 = document.querySelector(
      "#largeCard3 .social-name p"
    );
    var largeCardFollower3 = document.querySelector(
      "#largeCard3 .follower-number p"
    );
    var largeCardSocialName4 = document.querySelector(
      "#largeCard4 .social-name p"
    );
    var largeCardFollower4 = document.querySelector(
      "#largeCard4 .follower-number p"
    );
    var largeCard2 = document.querySelector("#largeCard2");
    var largeCard3 = document.querySelector("#largeCard3");
    var largeCard4 = document.querySelector("#largeCard4");
    var smallCard1 = document.querySelector(".section1 #smallCard1");
    var smallCard1Header = document.querySelector(
      ".section1 #smallCard1 .header p"
    );
    var smallCard1Body = document.querySelector(
      ".section1 #smallCard1 .body p"
    );
    var smallCard2 = document.querySelector(".section1 #smallCard2");
    var smallCard2Header = document.querySelector(
      ".section1 #smallCard2 .header p"
    );
    var smallCard2Body = document.querySelector(
      ".section1 #smallCard2 .body p"
    );
    var smallCard3 = document.querySelector(".section1 #smallCard3");
    var smallCard3Header = document.querySelector(
      ".section1 #smallCard3 .header p"
    );
    var smallCard3Body = document.querySelector(
      ".section1 #smallCard3 .body p"
    );
    var smallCard4 = document.querySelector(".section1 #smallCard4");
    var smallCard4Header = document.querySelector(
      ".section1 #smallCard4 .header p"
    );
    var smallCard4Body = document.querySelector(
      ".section1 #smallCard4 .body p"
    );

    var smallCard1s = document.querySelector(".section2 #smallCard1");
    var smallCard1Headers = document.querySelector(
      ".section2 #smallCard1 .header p"
    );
    var smallCard1Bodys = document.querySelector(
      ".section2 #smallCard1 .body p"
    );
    var smallCard2s = document.querySelector(".section2 #smallCard2");
    var smallCard2Headers = document.querySelector(
      ".section2 #smallCard2 .header p"
    );
    var smallCard2Bodys = document.querySelector(
      ".section2 #smallCard2 .body p"
    );
    var smallCard3s = document.querySelector(".section2 #smallCard3");
    var smallCard3Headers = document.querySelector(
      ".section2 #smallCard3 .header p"
    );
    var smallCard3Bodys = document.querySelector(
      ".section2 #smallCard3 .body p"
    );
    var smallCard4s = document.querySelector(".section2 #smallCard4");
    var smallCard4Headers = document.querySelector(
      ".section2 #smallCard4 .header p"
    );
    var smallCard4Bodys = document.querySelector(
      ".section2 #smallCard4 .body p"
    );

    body.classList.toggle("dark-theme-body");
    titleHeader.classList.toggle("dark-theme-text");
    largeCard1.classList.toggle("dark-theme-card");
    largeCardSocialName1.classList.toggle("dark-theme-text-gray");
    largeCardFollower1.classList.toggle("dark-theme-text");
    largeCard2.classList.toggle("dark-theme-card");
    largeCardSocialName2.classList.toggle("dark-theme-text-gray");
    largeCardFollower2.classList.toggle("dark-theme-text");
    largeCard3.classList.toggle("dark-theme-card");
    largeCardSocialName3.classList.toggle("dark-theme-text-gray");
    largeCardFollower3.classList.toggle("dark-theme-text");
    largeCard4.classList.toggle("dark-theme-card");
    largeCardSocialName4.classList.toggle("dark-theme-text-gray");
    largeCardFollower4.classList.toggle("dark-theme-text");
    smallCard1.classList.toggle("dark-theme-card");
    smallCard1Header.classList.toggle("dark-theme-text-gray");
    smallCard1Body.classList.toggle("dark-theme-text");
    smallCard2.classList.toggle("dark-theme-card");
    smallCard2Header.classList.toggle("dark-theme-text-gray");
    smallCard2Body.classList.toggle("dark-theme-text");
    smallCard3.classList.toggle("dark-theme-card");
    smallCard3Header.classList.toggle("dark-theme-text-gray");
    smallCard3Body.classList.toggle("dark-theme-text");
    smallCard4.classList.toggle("dark-theme-card");
    smallCard4Header.classList.toggle("dark-theme-text-gray");
    smallCard4Body.classList.toggle("dark-theme-text");
    smallCard1s.classList.toggle("dark-theme-card");
    smallCard1Headers.classList.toggle("dark-theme-text-gray");
    smallCard1Bodys.classList.toggle("dark-theme-text");
    smallCard2s.classList.toggle("dark-theme-card");
    smallCard2Headers.classList.toggle("dark-theme-text-gray");
    smallCard2Bodys.classList.toggle("dark-theme-text");
    smallCard3s.classList.toggle("dark-theme-card");
    smallCard3Headers.classList.toggle("dark-theme-text-gray");
    smallCard3Bodys.classList.toggle("dark-theme-text");
    smallCard4s.classList.toggle("dark-theme-card");
    smallCard4Headers.classList.toggle("dark-theme-text-gray");
    smallCard4Bodys.classList.toggle("dark-theme-text");
    textSwitch();
    ColorSwitcher();

    function textSwitch() {
      var toggletext = document.querySelector(".onoff-switch p");
      if (toggletext.innerHTML === "Dark Mode") {
        toggletext.innerHTML = "Light Mode";
      } else {
        toggletext.innerHTML = "Dark Mode";
      }
    }
    function ColorSwitcher() {
      var inputSwitch = document.querySelector("#toggleColor");
      if (inputSwitch.classList.contains("dark-switch")) {
        inputSwitch.classList.remove("dark-switch");
        inputSwitch.classList.add("light-switch");
      } else if (inputSwitch.classList.contains("light-switch")) {
        inputSwitch.classList.remove("light-switch");
        inputSwitch.classList.add("dark-switch");
      }
    }
  };
  render() {
    return (
      <div className="nav-header">
        <div className="title">
          <p>Social Media Dashboard</p>
          <p>Total Followers:<CountUp end={23004} /></p>
        </div>
        <div className="onoff-switch">
          <p>Dark Mode</p>
          <input
            id="toggleColor"
            className="dark-switch"
            type="checkbox"
            onClick={this.toggleSwitch}
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
