import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home';

const useRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/store/:type">
          <Home />
        </Route>
        <Route path="*">
          <Redirect to="/store/1" />
        </Route>
      </Switch>
    </Router>
  );
};

export default useRoutes;
