import React, { Component } from 'react';
import { Link } from 'react-router';
import BackButton from '../components/BackButton'

class NavBar extends Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>
      <div id="navigation">
      <Link to='/'>Home</Link>
      <p><Link to='/resume'>Resume</Link></p>
      <p><Link to='/projects'>Projects</Link></p>
      <BackButton />


      </div>




      <div id="main-page">
        {this.props.children}


      </div>

    </div>
    )
  }
}

export default NavBar;
