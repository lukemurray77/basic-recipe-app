import React from 'react';
import PropTypes from 'prop-types';

import './recipe-card.scss';

const RecipeCard = (props) => {
  const { recipe } = props;
  return (
    <div className="recipe-card">
      <h4 className="recipe-title">{recipe.title}</h4>
      <div className="recipe-body">{recipe.body}</div>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
};

export default RecipeCard;