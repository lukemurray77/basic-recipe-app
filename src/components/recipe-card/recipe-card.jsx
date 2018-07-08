import React from 'react';
import PropTypes from 'prop-types';

import './recipe-card.scss';

const RecipeCard = (props) => {
  const { recipe } = props;
  return (
    <div className="recipe-card">
      <div className="recipe-header">
        <h4 className="recipe-title">{recipe.title}</h4>
        <button className="edit-button"><span className="fas fa-edit" /></button>
      </div>
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
