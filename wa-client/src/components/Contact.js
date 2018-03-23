import React, { Component } from 'react';
import axios from 'axios';
import TokenService from '../services/TokenService';

export default class Signup extends Component{
  constructor(props){
    super(props)

    this.state = {
      email: "",
      fname: "",
      lname: "",
      message: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.buildAddress = this.buildAddress.bind(this);
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

  registerUser(){

    // const address = `${this.state.street} ${this.state.city} ${this.state.zipcode} ${this.state.state}`
    //   this.setState({address: address})

    const data = this.state

    // {password: this.state.password,
    //   email: this.state.email,
    //   fname: this.state.fname,
    //   lname: this.state.lname,
    //   address: `${this.state.street} ${this.state.city} ${this.state.zipcode} ${this.state.state}`};
    // console.log("data is, ", data);

    axios({
      url: 'http://localhost:3000/users/',
      method: 'POST',
      data: data
    }).then( response => {
      TokenService.save(response.data.token)
    }).catch(err => console.log(`err: ${err}`));

  }

  handleSubmit(e){

  e.preventDefault()

  this.registerUser() 

  }

  buildAddress(){
    const address = `${this.state.street} ${this.state.city} ${this.state.zipcode} ${this.state.state}`
      this.setState({address: address})
  }

  handleChange(e){
    const name = e.target.name
    const value = e.target.value

    this.setState({[name]: value}, this.buildAddress);
  }

  render(){
    return(
      <div id="signup-div">
      <h2 id="signup-h2"> Contact Us </h2>
      <p id="signup-p"> Drop us a message. We'd love to hear any feedback, comments, or suggestions</p>
      <input className="signup-input" type="text" name="fname" placeholder="First Name" onChange={this.handleChange}></input>
      <input className="signup-input" type="text" name="lname" placeholder="Last Name" onChange={this.handleChange}></input>
      <input className="signup-input" type="text" name="email" placeholder="Email" onChange={this.handleChange}></input>
      <textarea
              id="contact-text-area"
              type="text"
              name="message"
              placeholder="Type message here..."
              onChange={this.handleChange}
            />
          
        
      <div id="form-submit-button" onClick={this.handleSubmit}> SEND</div>



      </div>
    )
  }
}