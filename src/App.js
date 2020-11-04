import React, { Component } from 'react';
import './App.css';

import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';
import userOutput from './components/UserOutput';

class App extends Component {
  state = {
    username: 'Kalf'
  }

  userNameChanged = (event) => {
    this.setState({username:event.target.value});
  }

  render() {
    return (
      <div className="App">

      <p>First Assigment</p>

      <UserInput changed = {this.userNameChanged} currentName = {this.state.username}/>

      <p>Change name in text box to see the changes</p>

      <UserOutput userName={this.state.username} />
      <UserOutput userName={this.state.username} />

      </div>
    );
  }
}

export default App;
