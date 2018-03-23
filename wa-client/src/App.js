import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import axios from 'axios';
import TokenService from './services/TokenService';

import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Watches from './components/Watches';
import Watch from './components/Watch';
import Footer from './components/Footer';
import NewItem from './components/NewItem';
import Contact from './components/Contact';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      allWatchData: "",
      loggedInStatus: "unknown"
    }

    this.getItems = this.getItems.bind(this);
    this.getLoginStatus = this.getLoginStatus.bind(this)
  }

componentDidMount(){
  this.getItems();
  this.getLoginStatus();
}

getItems(){
  axios({
    url: 'http://localhost:3000/items',
    method: 'GET'
  }).then( response => {
    this.setState({allWatchData: response.data})
  })
}

postItem(data){
  axios({
    url: 'http://localhost:3000/items',
    data: data,
    method: 'POST'
  }).then( response => {
    this.setState(this.props.history.push(`watches/${response.data.id}`))
  })
}

getLoginStatus(){
    axios('http://localhost:3000/isLoggedIn', {
      headers: {
        Authorization: `Bearer ${TokenService.read()}`,
      }, 
    }).then(resp => {
      console.log(resp)
      this.setState({loggedInStatus: "isLoggedIn"})
    })
    .catch(err => {
      if (err.response && err.response.status === 401){ this.setState({loggedInStatus: "notLoggedIn"})} 
      else {
        throw err;
      }
    });
  }




  render() {
    if (!this.state.allWatchData) return <center><h2> LOADING... </h2></center>
    return (
      <div className="App">
        <Router>
          <Switch>

             <Route
              exact
              path="/"
              render={ props => {
                return(
                  <div>
                  <div id="hompage-global-nav">                 
                  <Navbar
                  loggedInStatus={this.state.loggedInStatus}
                  getLoginStatus={this.getLoginStatus}
                  {...props}
                  />
                  </div>
                  <LandingPage 
                  loggedInStatus={this.state.loggedInStatus}
                  getLoginStatus={this.getLoginStatus}
                  {...props}
                  />
                  <Watches
                  {...props}
                  allWatchData={this.state.allWatchData}
                   />
                  <Footer />
                  </div>
                  )
              }}
            />

            <Route
              exact
              path="/signup"
              render={ props => {
                return(
                  <div>
                  <div id="hompage-global-nav">
                  <Navbar
                  loggedInStatus={this.state.loggedInStatus}
                  getLoginStatus={this.getLoginStatus}
                  {...props}
                  />
                  </div>
                  <Signup
                  {...props}
                   />
                  }
                  <div className="backdrop-div">
                  <LandingPage
                  loggedInStatus={this.state.loggedInStatus}
                  getLoginStatus={this.getLoginStatus} 
                  {...props}
                  />
                  </div>
                  </div>
                  )
              }}
            />

            <Route
              exact
              path="/login"
              render={ props => {
                return(
                  <div>
                  <div id="hompage-global-nav">
                  <Navbar
                  loggedInStatus={this.state.loggedInStatus}
                  getLoginStatus={this.getLoginStatus} 
                  {...props}
                  />
                  </div>
                  <Login
                  getLoginStatus={this.getLoginStatus} 
                  {...props}
                  />
                  <div className="backdrop-div">
                  <LandingPage 
                  loggedInStatus={this.state.loggedInStatus}
                  getLoginStatus={this.getLoginStatus}
                  {...props}
                  />
                  </div>
                  </div>
                  )
              }}
            />

            <Route
              exact
              path="/contact"
              render={ props => {
                return(
                  <div>
                  <div id="hompage-global-nav">
                  <Navbar 
                  loggedInStatus={this.state.loggedInStatus}
                  getLoginStatus={this.getLoginStatus}
                  {...props}
                  />
                  </div>
                  <Contact 
                  {...props}
                  />
                  <div className="backdrop-div">
                  <LandingPage 
                  loggedInStatus={this.state.loggedInStatus}
                  getLoginStatus={this.getLoginStatus}
                  {...props}
                  />
                  </div>
                  </div>
                  )
              }}
            />

            <Route
              exact
              path="/watches/new"
              render={ props => {
                return(
                  <div>
                  <Navbar
                  loggedInStatus={this.state.loggedInStatus}
                  getLoginStatus={this.getLoginStatus} 
                  {...props}
                  />
                  <NewItem {...props} 
                  getItems={this.getItems.bind(this)} 
                  postItem={this.postItem.bind(this)}
                  />
                  <Footer />
                  </div>
                  )
              }}
            />

            <Route
              exact
              path="/watches/:id"
              render={ props => {
                return(
                  <div>
                  <Navbar
                  loggedInStatus={this.state.loggedInStatus}
                  getLoginStatus={this.getLoginStatus} 
                  {...props}
                  />
                  <Watch
                  allWatchData={this.state.allWatchData} 
                  {...props}
                  />
                  <Footer />
                  </div>
                  )
              }}
            />

         </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
