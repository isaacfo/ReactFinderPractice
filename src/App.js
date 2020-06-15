import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import './App.css';

// You can just put extends component if you
class App extends Component {
  // render is a lifecycle method
  render() {
    return (
      // React.Fragment can be used instead of div and it won't show up in dev tools, "ghost element"
      <div>
        <Navbar />
        <UserItem />
      </div>
    );
  }
}

export default App;
