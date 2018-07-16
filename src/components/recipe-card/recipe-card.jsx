import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './recipe-card.scss';

const RecipeCard = (props) => {
  const { recipe, onDelete, viewRecipe } = props;
  return (
    <div className="recipe-card">
      <div className="recipe-header">
        <h4 className="recipe-title" role="presentation" onClick={() => viewRecipe(recipe.id)}>
          {recipe.title}
        </h4>
        <div className="card-buttons">
          <Link to={`/edit/${recipe.id}/false`}><span className="fas fa-edit card-button" /></Link>
          <span className="fas fa-trash card-button" role="presentation" onClick={() => onDelete(recipe.id)} />
        </div>
      </div>
      <div className="recipe-body" role="presentation" onClick={() => viewRecipe(recipe.id)}>
        {recipe.content}
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  viewRecipe: PropTypes.func.isRequired,
};

export default RecipeCard;
