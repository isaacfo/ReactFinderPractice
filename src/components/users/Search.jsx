// rce for  class based component shortcut emit shortcut
import React, { Component } from 'react';
class Search extends Component {
  state = {
    text: ''
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.text);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
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
      </div>
    );
  }
}

export default Search;
