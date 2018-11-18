import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: props.title,
    }
  }
 
  componentDidMount() {
    
  }
   
  render() {
     
    return (
      <div className="layout-header">
        <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo"><i class="material-icons">cloud</i>{this.props.title}</a>
      <ul class="right hide-on-med-and-down">
        <li><a href="sass.html"><i class="material-icons">search</i></a></li>
        <li><a href="badges.html"><i class="material-icons">view_module</i></a></li>
        <li><a href="collapsible.html"><i class="material-icons">refresh</i></a></li>
        <li><a href="mobile.html"><i class="material-icons">more_vert</i></a></li>
      </ul>
    </div>
  </nav>
        
      </div>
    );
  }
  
}

export default Header;
