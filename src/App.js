import './App.css';
import React, { Component } from 'react';
import ProfileWeb from './components/profileweb/profileweb.component';
import SendEmail from './components/sendemail/sendemail';
import PropTypes from 'prop-types';
import ContactUs from './components/ContactUs/contactus.component';
class App extends Component{

  render(){
    return (
      <div className="App">
      <ContactUs/>
       {/* <ProfileWeb />  */}
      {/* <SendEmail env={this.props.env}/> */}
    </div>
    );
  }
 }

App.propTypes = {
  env: PropTypes.object.isRequired
};


export default App;
