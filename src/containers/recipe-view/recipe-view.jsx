import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/button/button';
import PageTitle from '../../components/page-title/page-title';

import './recipe-view.scss';

const RecipeView = ({ data, match }) => {
  const { id } = match.params;
  const { title, content } = data.find(recipe => recipe.id === id);
  const rightHeaderContent = (
    <div className="edit-button">
      <Button isLink path={`/edit/${id}`} text="EDIT" />
    </div>
  )
  return (
    <div className="recipe-view-page">
      <PageTitle title={title} rightHeaderContent={rightHeaderContent} />
      <div className="recipe-content">
        {content}
      </div>
    </div>
  );
};

// RecipeEditor.defaultProps = {
//   onSave: () => {},
//   isEdit: false,
// };
//
// RecipeEditor.propTypes = {
//   onSave: PropTypes.func,
//   isEdit: PropTypes.bool,
// };

export default RecipeView;
