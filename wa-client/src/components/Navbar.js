import React, { Component } from "react";
import TokenService from "../services/TokenService";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.redirector = this.redirector.bind(this);
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
    if (e.target.dataset.page === "home") {
      this.setState(this.props.history.push("/"));
    }
    if (e.target.dataset.page === "contact") {
      this.setState(this.props.history.push("/contact"));
    }
    if (e.target.dataset.page === "cart") {
      this.setState(this.props.history.push("/cart"));
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.revealGlobalNav);
  }

  render() {
    if (this.props.loggedInStatus === "isLoggedIn") {
      return (
        <div>
          <nav id="global-nav">
            <h3 id="global-wa-nav" data-page="home" onClick={this.redirector}>
              WRISTADVISOR
            </h3>
            <ul id="global-nav-links">
              <li>WATCHES</li>
              <a href="http://watchville.com/" target="_blank">
                <li>NEWS</li>
              </a>
              <li>FEATURES</li>
              <a href="#footer">
                <li>ABOUT</li>
              </a>
              <li data-page="contact" onClick={this.redirector}>
                CONTACT
              </li>
            </ul>
            <ul id="global-login-signup">
              <li data-page="logout" onClick={this.redirector}>
                LOGOUT
              </li>
              <li data-page="cart" onClick={this.redirector}>
                CART
              </li>
            </ul>
          </nav>
        </div>
      );
    } else {
      return (
        <div>
          <nav id="global-nav">
            <h3 id="global-wa-nav" data-page="home" onClick={this.redirector}>
              WRISTADVISOR
            </h3>
            <ul id="global-nav-links">
              <li>WATCHES</li>
              <a href="http://watchville.com/" target="_blank">
                <li>NEWS</li>
              </a>
              <li>FEATURES</li>
              <a href="#footer">
                <li>ABOUT</li>
              </a>
              <li data-page="contact" onClick={this.redirector}>
                CONTACT
              </li>
            </ul>
            <ul id="global-login-signup">
              <li data-page="login" onClick={this.redirector}>
                LOGIN
              </li>
              <li data-page="signup" onClick={this.redirector}>
                SIGN UP
              </li>
            </ul>
          </nav>
        </div>
      );
    }
  }
}
