import React, { Component } from 'react';
import axios from 'axios';
import TokenService from '../services/TokenService';

export default class Signup extends Component{
  constructor(props){
    super(props)

    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: "",
      address: "",
      street: "",
      city: "",
      zipcode: "",
      state: "",
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
      <h2 id="signup-h2"> Sign up </h2>
      <p id="signup-p"> Sign up for a free account in order to add items to your cart for purchase</p>
      <input className="signup-input" type="text" name="fname" placeholder="First Name" onChange={this.handleChange}></input>
      <input className="signup-input" type="text" name="lname" placeholder="Last Name" onChange={this.handleChange}></input>
      <input className="signup-input" type="text" name="email" placeholder="Email" onChange={this.handleChange}></input>
      <input className="signup-input" type="password" name="password" placeholder="Password" onChange={this.handleChange}></input>
      <input className="signup-input" type="text" name="street" placeholder="Address" onChange={this.handleChange}></input>
      <input className="signup-input" type="text" name="zipcode" placeholder="Zip Code" onChange={this.handleChange}></input>
      <input className="signup-input" type="text" name="city" placeholder="City" onChange={this.handleChange}></input>
        <select className="signup-input" name="state" onChange={this.handleChange}>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select><br/>       
        
      <div id="form-submit-button" onClick={this.handleSubmit}> SIGNUP</div>



      </div>
    )
  }
}