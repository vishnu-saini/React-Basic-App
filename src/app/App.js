import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    var menuItems = ["Home","Contacts","Practice Demos"];

    var user=[{
      firstName : "Sunil",
      lastName : "Saini",
      email : "vishnu.saini@email.com",
      hobbies : ["Table tennis", "Music"]
    },{
      firstName : "Mary",
      lastName : "Moe",
      email : "mary@example.com",
      hobbies : ["Table tennis", "Music"]
    },{
      firstName : "July",
      lastName : "Dooley",
      email : "july@example.com",
      hobbies : ["Table tennis", "Music"]
    }]

    return (
      <div className="App">
        <Header webSiteName="React Practice" menuItems={menuItems}/>
        <MainContent tableTitle={"User Profiles"} userCount={1} users={user}/>
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  tableTitle : PropTypes.string,
  userCount : PropTypes.number,
  users : PropTypes.array
}

export default App;
