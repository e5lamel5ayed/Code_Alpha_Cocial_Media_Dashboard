import React, { Component } from "react";
import "./dashboard-card-container.css";
import CardBig from "./dashboard-card";
import CardSmall from "./dashboard-card-small";
import Navbar from "./dashboard-nav";
import facebook from "../images/icon-facebook.svg";
import iconup from "../images/icon-up.svg";
import icondown from "../images/icon-down.svg";
import instagram from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";
import youtube from "../images/icon-youtube.svg";
import CountUp from "react-countup"; 

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-body">
        <div className="nav-container">
          <Navbar />
        </div>
        <div className="section1">
          <CardBig
            imgsrc={facebook}
            username="@nathanf"
            followernumber={<CountUp end={1987} />} // Updated with CountUp component
            follower="followers"
            imgsrc1={iconup}
            today="12 Today"
            cssClass="color-bar"
            LargeCard="largeCard1"
            LargeCardSocial="#largeCardSocialName1"
          />
          <CardBig
            imgsrc={twitter}
            username="@nathanf"
            followernumber={<CountUp end={1044} />} // Updated with CountUp component
            follower="followers"
            imgsrc1={iconup}
            today="12 Today"
            cssClass="color-bar"
            LargeCard="largeCard2"
            LargeCardSocial="#largeCardSocialName2"
          />
          <CardBig
            imgsrc={instagram}
            username="@realnathanf"
            followernumber={<CountUp end={11000} />} // Updated with CountUp component
            follower="followers"
            imgsrc1={iconup}
            today="12 Today"
            cssClass="color-bar3"
            LargeCard="largeCard3"
            LargeCardSocial="#largeCardSocialName3"
          />
          <CardBig
            imgsrc={youtube}
            username="Nathan F."
            followernumber={<CountUp end={8239} />} // Updated with CountUp component
            follower="subscribers"
            imgsrc1={icondown}
            today="144 Today"
            cssClass="color-bar2"
            LargeCard="largeCard4"
            LargeCardSocial="#largeCardSocialName4"
          />
        </div>
        <div className="sub-header">
          <p>Overview - Today</p>
        </div>
        <div className="section1">
          <CardSmall
            imgsrc={facebook}
            smallheader="Page Views"
            countnumber={<CountUp end={87} />} // Updated with CountUp component
            percent="3%"
            smallColor="small-color2"
            imgsrc2={iconup}
            smallCard="smallCard1"
          />
          <CardSmall
            imgsrc={facebook}
            smallheader="Page Views"
            countnumber={<CountUp end={52} />} // Updated with CountUp component
            percent="2%"
            smallColor="small-color"
            imgsrc2={icondown}
            smallCard="smallCard2"
          />
          <CardSmall
            imgsrc={instagram}
            smallheader="Likes"
            countnumber={<CountUp end={5462} />} // Updated with CountUp component
            percent="2257%"
            smallColor="small-color2"
            imgsrc2={iconup}
            smallCard="smallCard3"
          />
          <CardSmall
            imgsrc={instagram}
            smallheader="Profile Views"
            countnumber={<CountUp end={52000} />} // Updated with CountUp component
            percent="1375%"
            smallColor="small-color2"
            imgsrc2={iconup}
            smallCard="smallCard4"
          />
        </div>
        <div className="section2">
          <CardSmall
            imgsrc={twitter}
            smallheader="Retweets"
            countnumber={<CountUp end={117} />} // Updated with CountUp component
            percent="303%"
            smallColor="small-color2"
            imgsrc2={iconup}
            smallCard="smallCard1"
          />
          <CardSmall
            imgsrc={twitter}
            smallheader="Likes"
            countnumber={<CountUp end={507} />} // Updated with CountUp component
            percent="553%"
            smallColor="small-color2"
            imgsrc2={iconup}
            smallCard="smallCard2"
          />
          <CardSmall
            imgsrc={youtube}
            smallheader="Likes"
            countnumber={<CountUp end={107}  />} // Updated with CountUp component
            percent="19%"
            smallColor="small-color"
            imgsrc2={icondown}
            smallCard="smallCard3"
          />
          <CardSmall
            imgsrc={youtube}
            smallheader="Team Views"
            countnumber={<CountUp end={1407} />} // Updated with CountUp component
            percent="12%"
            smallColor="small-color"
            imgsrc2={icondown}
            smallCard="smallCard4"
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
