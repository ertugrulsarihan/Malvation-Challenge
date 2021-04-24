import React, { Component } from "react";
import { FiMessageSquare } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { AiFillDashboard } from "react-icons/ai";
import { SiGoogleanalytics } from "react-icons/si";
import { AiFillCalendar } from "react-icons/ai";
import { BsListNested } from "react-icons/bs";

import $ from "jquery";

class Navbar extends Component {
  componentDidMount() {
   
    //Profile image animation
    $(document).ready(function () {
      $(".myimage").mouseover(function () {
        $(this).animate({
          width: "65px",
          height: "65px",
        });
      });
      $(".myimage").mouseleave(function () {
        $(this).animate({
          width: "40px",
          height: "40px",
        });
      });
    });

    //Clock

    function currentTime() {
      var date = new Date(); /* creating object of Date class */
      var hour = date.getHours();
      var min = date.getMinutes();
      var sec = date.getSeconds();
      var midday = "AM";
      midday = hour >= 12 ? "PM" : "AM"; /* assigning AM/PM */
      hour =
        hour === 0
          ? 12
          : hour > 12
          ? hour - 12
          : hour; /* assigning hour in 12-hour format */
      hour = updateTime(hour);
      min = updateTime(min);
      sec = updateTime(sec);
      document.getElementById("clock").innerHTML =
        hour +
        " : " +
        min +
        " : " +
        sec +
        " " +
        midday; /* adding time to the div */
       setTimeout(currentTime, 1000); /* setting timer */
    }

    function updateTime(k) {
      /* appending 0 before time elements if less than 10 */
      if (k < 10) {
        return "0" + k;
      } else {
        return k;
      }
    }

    currentTime();
  }

  render() {
    return (
      <div>
        <div className="slider-button">
          <a href="/" data-target="slide-out" className="sidenav-trigger">
            <BsListNested size="35px" />
          </a>
        </div>
        <div className="user-info">
          <a href="#user">
            <img
              className="circle myimage"
              src="https://i.pinimg.com/originals/90/46/7d/90467d03d8e3fbd6851fdda0ffe93d42.jpg"
              alt="user"
            />
          </a>
        </div>

        <div id="clock"></div>
        <div id="slide-out" className="col-2 nav sidenav ">
          <div className="title">
            <p href="/">
              <AiFillCalendar />
            </p>
            <h5>Dashboard</h5>
          </div>
          <div className="icons-group">
            <a href="/" className="waves-effect">
              <FiMessageSquare className="icons" />
              <span>Messages</span>
            </a>
          </div>

          <div className="icons-group ">
            <a href="/" className="waves-effect">
              <CgProfile className="icons" />
              <span>Profile</span>
            </a>
          </div>
          <div className="icons-group">
            <a href="/" className="waves-effect">
              <FiSettings className="icons" />
              <span>Settings</span>
            </a>
          </div>
          <div className="icons-group">
            <a href="/" className="waves-effect">
              <AiFillDashboard className="icons" />
              <span>Dashboard</span>
            </a>
          </div>
          <div className="icons-group">
            <a href="/" className="waves-effect">
              <SiGoogleanalytics className="icons" />
              <span>Analytics</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
