import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './recipe-card.scss';

const RecipeCard = (props) => {
  const { recipe, onDelete } = props;
  return (
    <div className="recipe-card">
      <div className="recipe-header">
        <h4 className="recipe-title">{recipe.title}</h4>
        <Link to={`/edit/${recipe.id}`}><span className="fas fa-edit" /></Link>
        <span className="fas fa-trash" role="presentation" onClick={onDelete} />
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
  onDelete: PropTypes.func.isRequired,
};

export default RecipeCard;
