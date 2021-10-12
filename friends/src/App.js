import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';

import Login from './components/Login';
import Logout from './components/Logout';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendsForm';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <Router>
      <div>
        <nav>
          <div className="nav-text">
            <h4>Friends List</h4>
          </div>
          <ul>
          <li>
              <Link to='/friends'>Friends</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/logout'>Logout</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <PrivateRoute path="/friends" component={FriendsList} />
          <PrivateRoute path="/friendform" component={FriendForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
