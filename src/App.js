import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      pictures: [],
    }
  }
  /*
https://jsonplaceholder.typicode.com/posts
  */
  componentDidMount() {
    fetch('https://randomuser.me/api/?results=100')
    .then(results => {
      return results.json();
    }).then(data => {
      let pictures = data.results.map((pic) => {
        return(
          <div key={pic.results}>
            <img src={pic.picture.medium} />
          </div>
        )
      })
      this.setState({pictures: pictures});
      console.log("state", this.state.pictures);
    })
  }
   
  
  render() {
     
    return (
      <div className="App">
        <div>
          {this.state.pictures}
        </div>
      </div>
    );
  }
}

export default App;
