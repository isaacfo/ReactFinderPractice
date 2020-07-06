// rce for  class based component shortcut emit shortcut
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GitHubContext from '../../context/github/githubContext';

// props here with function component, not pulled out in render anymore
const Search = ({ setAlert }) => {
  const githubContext = useContext(GitHubContext);
  // method setText used to set/change state when needed
  const [text, setText] = useState('');

  //   changed from regular function to function expression to exist in overall function component
  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };
  // form has to have an onChange to update state
  const onChange = e => {
    setText(e.target.value);
  };
  //   no render anymore
  // const { showClear, clearUsers } = this.props;
  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Seach Users..."
          value={text}
          // made for updating state
          onChange={onChange}
        />
        <input type="submit" value="Seach" className="btn btn-dark btn-block" />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  //   ptfr emit shortcut
  setAlert: PropTypes.func.isRequired
};

export default Search;
