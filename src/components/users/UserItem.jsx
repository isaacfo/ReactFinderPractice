import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// userItem was made into functional component because it has no state

//   destructuring to avoid repeating this.state and no need for prop.state anymore due to pulling out props like below
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  // this. no longer need becuase it is not a class component
  // Dont need constructor to define state
  //   Render isn't needed if it is a func component

  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        className="round-img"
        style={{ width: '60px' }}
        alt=""
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

// ptor
UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
