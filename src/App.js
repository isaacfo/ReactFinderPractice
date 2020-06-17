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
  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_REACTFINDER_CLIENT_ID}&client_secret=${process.env.REACT_APP_REACTFINDER_CLIENT_SECRET}`
  //   );

  //   this.setState({ users: res.data, loading: false });
  // }
  // Search Github Users
  // because it is arrow function async goes there
  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_REACTFINDER_CLIENT_ID}&client_secret=${process.env.REACT_APP_REACTFINDER_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  // Clear Users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };
  // render is a lifecycle method
  render() {
    const { users, loading } = this.state;
    return (
      // React.Fragment can be used instead of div and it won't show up in dev tools, "ghost element"
      <div>
        <Navbar />
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}
export default App;
