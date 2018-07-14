import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { RecipeList, AddRecipe, EditRecipe } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={RecipeList} />
    <Route path="/add" component={AddRecipe} />
    <Route path="/edit/:id" component={EditRecipe} />
  </Switch>
);

export default Routes;
