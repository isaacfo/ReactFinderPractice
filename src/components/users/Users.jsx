import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
// impt emit shortcut
import PropTypes from 'prop-types';

// props are users and loading pulled out here
const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

// variable used for styling for the grid, since its not inline, the variable doesnt need {{ userStyle}}, instead { userStyle } is good
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

Users.proptypes = {
  // ptar emit shortcut
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Users;
