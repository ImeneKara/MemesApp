import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png'
export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <a className="navbar-brand" href="/">
                <img src={logo} width="50" height="50"></img>
                CSE Memes</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav"> 
                <li className="nav-item">
                    <Link to="/memes" className="nav-link"> Memes</Link>
                </li>
                <li className="nav-item">
                <Link to="/editor" className="nav-link"> Editor</Link>
                </li>
                <li className="nav-item">
                <Link to="/profile" className="nav-link"> Profile</Link>
                </li>
              </ul>
            </div>
          </nav>
        );
    }
} 

export default Navbar;