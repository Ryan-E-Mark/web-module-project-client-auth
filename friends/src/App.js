import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Logout from './components/Logout';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendsForm';

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
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/logout'>Logout</Link>
            </li>
            <li>
              <Link to='/friends'>Friends</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/friends" component={FriendsList} />
          <Route path="/friendform" component={FriendForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
