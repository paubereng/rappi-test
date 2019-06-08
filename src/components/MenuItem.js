import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const  MenuItem = (props) => {
  return (
      <NavLink
        className="nav-link"
        activeClassName={"active"}
        {...props}
      />
  );
}

MenuItem.propTypes = {
  router: PropTypes.object
};

export default MenuItem;
