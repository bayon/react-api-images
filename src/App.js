import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      pictures: [],
    }
  }
 /*
<img src={pic.picture.medium} alt={pic.name.first} className="list-img" />
 */
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
}

export default App;
