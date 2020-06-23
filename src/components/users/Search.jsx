// rce for  class based component shortcut emit shortcut
import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Search extends Component {
  state = {
    text: ''
  };

  // static because it is a class component

  static propTypes = {
    //   ptfr emit shortcut
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };
  // form has to have an onChange to update state
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Seach Users..."
            value={this.state.text}
            // made for updating state
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Seach"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
