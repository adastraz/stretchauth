import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Welcome from './components/Welcome'
import SignIn from './components/SignIn'
import JokesList from './components/JokesList'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute path='/jokes' component={JokesList} />
          <Route path='/signin' component={SignIn} />
          <Route path='/' component={Welcome} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
