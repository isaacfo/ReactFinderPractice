import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  // static defaultProps = {
  //      title: 'Github Finder',
  //      icon: 'fab fa-gihub' }

  return (
    <nav className="navbar bg-primary">
      <h1>
        {/* this.props.title/icon would be basic way to pull in props if it were still a class component and if it werent destructured above*/}
        <i className={icon}></i> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

// was put outside of return becuase it is not a class component anymore
// default props if none are defined instead of using static above return
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};

// was put outside of return becuase it is not a class component anymore
// what type of prop it should be, instead of using static above return
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
