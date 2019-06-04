import React from 'react';
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

export default MenuItem;
