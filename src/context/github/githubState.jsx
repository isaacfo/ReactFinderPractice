import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import githubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  GET_USER,
  GET_REPOS,
  CLEAR_USERS
} from '../types';

const GithubState = props => {
  const intialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(githubReducer, intialState);

  //   Search Users
  const searchUsers = async text => {
    setLoading();
    // this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_REACTFINDER_CLIENT_ID}&client_secret=${process.env.REACT_APP_REACTFINDER_CLIENT_SECRET}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });

    // this.setState({ users: res.data.items, loading: false });
  };

  //   Get User
  // Get single github user
  const getUser = async username => {
    setLoading();

    // this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_REACTFINDER_CLIENT_ID}&client_secret=${process.env.REACT_APP_REACTFINDER_CLIENT_SECRET}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data
    });
    // this.setState({ user: res.data, loading: false });
  };

  // Get Repos
  // Get users repos
  const getUserRepos = async username => {
    setLoading();
    // this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_REACTFINDER_CLIENT_ID}&client_secret=${process.env.REACT_APP_REACTFINDER_CLIENT_SECRET}`
    );

    dispatch({ type: GET_REPOS, payload: res.data });

    // this.setState({ repos: res.data, loading: false });
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
