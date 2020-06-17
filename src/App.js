import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';

// You can just put extends component if you
class App extends Component {
  state = {
    users: [],
    loading: false
  };
  // you make http request in component did mount
  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_REACTFINDER_CLIENT_ID}&client_secret=${process.env.REACT_APP_REACTFINDER_CLIENT_SECRET}`
    );

    this.setState({ users: res.data, loading: false });
  }
  // render is a lifecycle method
  render() {
    return (
      // React.Fragment can be used instead of div and it won't show up in dev tools, "ghost element"
      <div>
        <Navbar />
        <div className="container">
          <Search />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
