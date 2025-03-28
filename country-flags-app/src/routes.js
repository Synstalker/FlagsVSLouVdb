import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CountryGrid from './components/CountryGrid';
import CountryDetail from './components/CountryDetail';

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CountryGrid} />
        <Route path="/detail" component={CountryDetail} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;