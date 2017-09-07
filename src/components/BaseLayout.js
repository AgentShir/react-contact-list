import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';

class BaseLayout extends Component{
  render() {
    return(
      <AppBar title="My Peeps" />
    );
  }
}


export default BaseLayout;
