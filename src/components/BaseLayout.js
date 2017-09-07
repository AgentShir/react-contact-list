import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import UserList from '../components/UserList';

import AppBar from 'material-ui/AppBar';

class BaseLayout extends Component{
  render() {
    return(
      <div>
      <AppBar title="My Peeps" />
      <UserList />
      </div>
    );
  }
}


export default BaseLayout;
