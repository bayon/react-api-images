import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import List from './components/List';
import Button from './components/Button';

class App extends Component {
  constructor () {
    super()
    this.state = {
      groceryData: [],
    }
  }

  componentDidMount() {
    fetch('http://www.forteworks.com/api/simple-api.php/grocery')
    .then(results => {
      return results.json();
       
    }).then(data => {
      console.log(data);
      
      let groceryData = data.map((grocery) => {
        return(
          <li key={new Date() * Math.random()*3 } className="collection-item" >
            
            <div className="list-item-text">{grocery.name}</div><Button></Button>
          </li>
        )
      })
      this.setState({groceryData: groceryData});
      console.log("state", this.state.groceryData);
    })
  }
   
  
  render() {
     
    return (
      <div className="App">
        <Header title="l-o-g-o"></Header>
        <List listHeader="grocerys" listData={this.state.groceryData}></List>
        
      </div>
    );
  }
  
}

export default App;
