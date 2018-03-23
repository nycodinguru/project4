import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div id="footer-flex">
          <div>
            <h2>WRISTADVISOR</h2>
          </div>
          <div id="about">
            <h3 className="footer-header">ABOUT</h3>
            <p>
              Since our establishment in 2014, WristAdvisor has been dedicated
              to bringing you watch industry news, information, and the best
              pieces we can possibly find. We sell vintage as well as modern
              watches with our own 2-year warranty.
            </p>
          </div>

          <div id="contact">
            <h3 className="footer-header">CONTACT</h3>
            <ul>
              <li>
                <h4>Phone</h4><br/>
              </li>
              <li>+1(212)555-5555</li>
              <li>
                <h4>Email</h4><br/>
              </li>
              <li>wristadvisor@gmail.com</li>
            </ul>
          </div>

          <div id="social">
            <h3 className="footer-header">FOLLOW</h3>
            <div id="social-links">
              <a href="https://twitter.com/" target="_blank"><div id="twitter"> </div></a>
              <a href="https://www.instagram.com/wristadvisor/" target="_blank"><div id="insta"> </div></a>
            </div>
          </div>
        </div>

        <div id="bottom-text">
          <p>COPYRIGHT &copy; 2018, WRISTADVISOR. ALL RIGHTS RESERVED</p>
        </div>
      </div>
    );
  }
}
