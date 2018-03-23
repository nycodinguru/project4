import React, { Component } from "react";
import Scrollchor from 'react-scrollchor';
import TokenService from "../services/TokenService";




export default class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.redirector = this.redirector.bind(this);
    this.revealGlobalNav = this.revealGlobalNav.bind(this);
    this.currentdate = this.currentdate.bind(this)
  }

  componentDidMount(){
    window.addEventListener("scroll", this.revealGlobalNav);
    window.scrollTo(0, 0);
    this.currentdate();
  }

  componentWillUnmount(){
    window.removeEventListener("scroll", this.revealGlobalNav)
  }

  currentdate() {
  var date = new Date();
  var day = date.getDay()
  var da = date.getDate();
  var month = date.getMonth();
  var year = date.getYear();

  if (day === 0) {day = "Sun"}
  if (day === 1) {day = "Mon"}
  if (day === 2) {day = "Tues"}
  if (day === 3) {day = "Wed"}
  if (day === 4) {day = "Thurs"}
  if (day === 5) {day = "Fri"}
  if (day === 6) {day = "Sat"}
  
  if (month === 0) {month = "January"}
  if (month === 1) {month = "February"}
  if (month === 2) {month = "March"}
  if (month === 3) {month = "April"}
  if (month === 4) {month = "May"}
  if (month === 5) {month = "June"} 
  if (month === 6) {month = "July"}
  if (month === 7) {month = "August"}
  if (month === 8) {month = "September"}
  if (month === 9) {month = "October"}
  if (month === 10) {month = "November"}
  if (month === 11) {month = "December"}  
  if (year > 100) {year = year+1900}

  document.getElementById("date").innerHTML = `${day}, ${month} ${da}, ${year}`;
}


  revealGlobalNav() {
  var globalNav = document.querySelectorAll("#global-nav")[0];
  var globalNavContainer = document.querySelectorAll('#hompage-global-nav')[0];
  var downChevron = document.querySelectorAll('#down-chevron')[0];

  const yVal = 1-(window.scrollY * .0026)
  const yVal2 = (window.scrollY * .0026)

  if (window.scrollY >= 729) {
    globalNav.style =
      "display: block; transition: 1s; position: fixed; top: 0; height: 27px; z-index: 400; width: 100vw;";
    globalNavContainer.style = "display: block;"
    downChevron.style = `opacity: ${yVal2}`
  }

  if (window.scrollY <= 719) {
    globalNav.style =
      "display: none; position: relative; top: 0; height: 0px; z-index: 400; transition: .9s; width: 100vw;"
    globalNavContainer.style = "display: none;"
    downChevron.style = `opacity: ${yVal}`
  } else {
    downChevron.style = "display: none;"
  }
}

  redirector(e) {
    if (e.target.dataset.page === "logout") {
      TokenService.destroy(), this.props.getLoginStatus(),
      this.setState(this.props.history.push("/"), window.scrollTo(0, 0));
    }
    if (e.target.dataset.page === "login") {
      this.setState(this.props.history.push("/login"));
    }
    if (e.target.dataset.page === "signup") {
      this.setState(this.props.history.push("/signup"));
    }
    if (e.target.dataset.page === "contact") {
      this.setState(this.props.history.push("/contact"));
    }
    if (e.target.dataset.page === "cart") {
      this.setState(this.props.history.push("/cart"));
    }
  }

  render() {
    if (this.props.loggedInStatus === "isLoggedIn"){
    return (
      <div id="hero-image-div">
        <nav id="homepage-nav">
          <h3 id="wa-nav">WRISTADVISOR</h3>
          <br />
          <ul id="nav-links">
            <Scrollchor to="recent-arrivals" animate={{offset: -95, duration: 20}}><li className="homepage-li">WATCHES</li></Scrollchor>
            <a href="http://watchville.com/" target="_blank"><li className="homepage-li">NEWS</li></a>
            <li className="homepage-li">FEATURES</li>
            <Scrollchor to="footer" animate={{offset: 0, duration: 150}}><li className="homepage-li">ABOUT</li></Scrollchor>
            <li data-page="contact" className="homepage-li" onClick={this.redirector}>CONTACT</li>
          </ul>
          <ul id="login-signup">
            <li data-page="logout" onClick={this.redirector}>
              LOGOUT
            </li>
            <li data-page="cart" onClick={this.redirector}>
              CART
            </li>
          </ul>
        </nav>
        <p id="date"></p>
        

        <Scrollchor to="recent-arrivals" animate={{offset: -95, duration: 450}}><div id="down-chevron" /></Scrollchor>
      </div>
    );}
    else{
      return (
      <div id="hero-image-div">
        <nav id="homepage-nav">
          <h3 id="wa-nav">WRISTADVISOR</h3>
          <br />
          <ul id="nav-links">
            <Scrollchor to="recent-arrivals" animate={{offset: -95, duration: 20}}><li className="homepage-li">WATCHES</li></Scrollchor>
            <a href="http://watchville.com/" target="_blank"><li className="homepage-li">NEWS</li></a>
            <li className="homepage-li">FEATURES</li>
            <Scrollchor to="footer" animate={{offset: 0, duration: 150}}><li className="homepage-li">ABOUT</li></Scrollchor>
            <li data-page="contact" className="homepage-li" onClick={this.redirector}>CONTACT</li>
          </ul>
          <ul id="login-signup">
            <li data-page="login" onClick={this.redirector}>
              LOGIN
            </li>
            <li data-page="signup" onClick={this.redirector}>
              SIGN UP
            </li>
          </ul>
        </nav>
        <p id="date"></p>
        

        <Scrollchor to="recent-arrivals" animate={{offset: -95, duration: 450}}><div id="down-chevron" /></Scrollchor>
      </div>
    );
    }
  }
}
