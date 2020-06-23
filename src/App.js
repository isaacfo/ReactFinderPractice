import React, { Component, Fragment } from 'react';
// router is alias for BroweserRouter
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';

// You can just put extends component if you
class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
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

  // Get single github user
  getUser = async username => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_REACTFINDER_CLIENT_ID}&client_secret=${process.env.REACT_APP_REACTFINDER_CLIENT_SECRET}`
    );

    this.setState({ user: res.data, loading: false });
  };

  // Clear Users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  // Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  // render is a lifecycle method
  render() {
    const { users, user, loading } = this.state;

    return (
      // React.Fragment can be used instead of div and it won't show up in dev tools, "ghost element"
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About}></Route>
              <Route
                exact
                path="/user/:login"
                render={props => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    user={user}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
