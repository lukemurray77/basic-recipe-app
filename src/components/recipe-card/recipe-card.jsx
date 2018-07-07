import React from 'react';
import PropTypes from 'prop-types';

import './recipe-card.scss';

const RecipeCard = (props) => {
  const { recipe } = props;
  return (
    <div className="recipe-card">
      <h4 className="recipe-title">{recipe.title}</h4>
      <div className="recipe-body">{recipe.content}</div>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default RecipeCard;
