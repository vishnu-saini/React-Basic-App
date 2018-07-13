import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { Header } from "./components/Header";
import { MainContent1 } from "./components/MainContent1";
import { MainContent2 } from "./components/MainContent2";
import { Footer } from "./components/Footer";
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    var menuItems = ["Home", "Contacts", "Practice Demos"];

    var user = [{
      firstName: "Sunil",
      lastName: "Saini",
      email: "vishnu.saini@email.com",
      hobbies: ["Table tennis", "Music"]
    }, {
      firstName: "Mary",
      lastName: "Moe",
      email: "mary@example.com",
      hobbies: ["Table tennis", "Music"]
    }, {
      firstName: "July",
      lastName: "Dooley",
      email: "july@example.com",
      hobbies: ["Table tennis", "Music"]
    }]

    return (

      <Router>
        <div className="App">
          <Header webSiteName="React Practice" menuItems={menuItems} />
          <Route path={"/page1"} component={MainContent1} userCount={1} />
          <Route path={"/page2"} render={(props) => <MainContent2 tableTitle={"User Profiles"} users={user} />} />
          <Footer />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  tableTitle: PropTypes.string,
  userCount: PropTypes.number,
  users: PropTypes.array
}

export default App;
