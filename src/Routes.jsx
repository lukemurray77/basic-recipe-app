import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { RecipeList, About } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={RecipeList} />
    <Route path="/about" component={About} />
  </Switch>
);

export default Routes;
