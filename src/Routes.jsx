import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { RecipeList, AddRecipe, EditRecipe, RecipeView } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={RecipeList} />
    <Route path="/add" component={AddRecipe} />
    <Route path="/edit/:id" component={EditRecipe} />
    <Route path="/view/:id" component={RecipeView} />
  </Switch>
);

export default Routes;
