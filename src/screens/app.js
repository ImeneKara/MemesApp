import React, {Component} from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Memes from './memes';
import Editor from './editor';
import Profile from './profile';
import Navbar from '../components/Navbar'
class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <Switch>
          <Redirect exact from="/" to="/memes" />
          <Route path='/memes' component={Memes} />}
          <Route path='/editor' component={Editor} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </div>
    );
  }
}

export default App;