import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '../styles/App.css';
import UserList from '../components/UserList';
import Home from '../components/Home';
import BaseLayout from '../components/BaseLayout';
import User from '../components/User';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <BrowserRouter>
            <BaseLayout>
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/userlist" component={UserList} />
                <Route path="/user/:id" component={User} />
              </Switch>
            </BaseLayout>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
