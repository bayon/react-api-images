import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Button from './components/Button';

class App extends Component {
  constructor () {
    super()
    this.state = {
      contactsData: [],
    }
  }

  componentDidMount() {
    fetch('http://www.forteworks.com/api/simple-api.php/contacts')
    .then(results => {
      return results.json();
       
    }).then(data => {
      console.log(data);
      
      let contactsData = data.map((contact) => {
        return(
          <li key={new Date() * Math.random()*3 } className="list-item" >
            
            <div className="list-item-text">{contact.contact_name}</div><Button></Button>
          </li>
        )
      })
      this.setState({contactsData: contactsData});
      console.log("state", this.state.contactsData);
    })
  }
   
  
  render() {
     
    return (
      <div className="App">
        <Header></Header>
        <div className="list-header">
        <h4>Contacts:</h4>
        </div>
       
        <div className="list-container">
        <ul>
         {this.state.contactsData}
         </ul>
        </div>
      </div>
    );
  }
  
}

export default App;
