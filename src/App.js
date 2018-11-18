import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      contactsData: [],
    }
  }
 /*
 https://randomuser.me/api/?results=100
<img src={pic.picture.medium} alt={pic.name.first} className="list-img" />
//---------------------
http://www.forteworks.com/api/simple-api.php/contacts/
 */
  componentDidMount() {
    fetch('http://www.forteworks.com/api/simple-api.php/contacts')
    .then(results => {
      return results.json();
       
    }).then(data => {
      console.log(data);
      
      let contactsData = data.map((contact) => {
        return(
          <li key={new Date() * Math.random()*3 } className="individual-img" >
            
            <div className="list-city">{contact.contact_name}</div>
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
        <div className="listContainer">
        <ul>
         {this.state.contactsData}
         </ul>
        </div>
      </div>
    );
  }
  /*
componentDidMount() {
    fetch('https://randomuser.me/api/?results=100')
    .then(results => {
      return results.json();
    }).then(data => {
      let pictures = data.results.map((pic) => {
        return(
          <li key={new Date() * Math.random()*3 } className="individual-img" >
            
            <div className="list-city">{pic.location.city}</div>
          </li>
        )
      })
      this.setState({pictures: pictures});
      console.log("state", this.state.pictures);
    })
  }
   
  
  render() {
     
    return (
      <div className="App">
        <div className="listContainer">
        <ul>
         {this.state.pictures}
         </ul>
        </div>
      </div>
    );
  }
  */
}

export default App;
