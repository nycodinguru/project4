import React, { Component } from 'react';
import axios from 'axios';
import TokenService from '../services/TokenService';

export default class Login extends Component{
  constructor(props){
    super(props)

    this.state = {
      email: "",
      password: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBackHome = this.goBackHome.bind(this);
  }


  componentDidMount(){
    var downChevron = document.querySelectorAll('#down-chevron')[0];
    var backdropDiv = document.querySelectorAll('.backdrop-div')[0];

    downChevron.style = "display: none;"
    backdropDiv.addEventListener("click", this.goBackHome);
  }

  componentWillUnmount(){
    var downChevron = document.querySelectorAll('#down-chevron')[0];
    var backdropDiv = document.querySelectorAll('.backdrop-div')[0];

    downChevron.style = "display: block;"
    backdropDiv.removeEventListener("click", this.goBackHome);
  }

  goBackHome(){
    this.setState(this.props.history.push('/'))
  }

  loginUser(){

    const data = this.state

    axios({
      url: 'http://localhost:3000/users/login',
      method: 'POST',
      data: data
    }).then( response => {
      TokenService.save(response.data.token),
      this.props.getLoginStatus(),
      this.setState(this.props.history.push('/'))
    }).catch(err => console.log(`err: ${err}`));

  }

  handleSubmit(e){

  e.preventDefault()

  this.loginUser() 

  }

  handleChange(e){
    const name = e.target.name
    const value = e.target.value

    this.setState({[name]: value}, this.buildAddress);
  }

  render(){
    return(
      <div id="login-div">
      <h2> Log in </h2>
      <p> Login to add items to your cart to place orders </p>

      <input type="text" name="email" placeholder="Email" onChange={this.handleChange}></input>
      <input type="password" name="password" placeholder="Password" onChange={this.handleChange}></input>
      
        
      <div id="login-button" onClick={this.handleSubmit}>LOG IN</div>



      </div>
    )
  }
}