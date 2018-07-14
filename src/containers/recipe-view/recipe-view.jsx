import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/button/button';
import PageTitle from '../../components/page-title/page-title';

import './recipe-view.scss';

const RecipeView = ({ data, match }) => {
  const { id } = match.params;
  const { title, content } = data.find(recipe => recipe.id === id);
  const rightHeaderContent = (
    <Button isLink path={`/edit/${id}`} text="EDIT" />
  )
  return (
    <React.Fragment>
      <PageTitle title={title} rightHeaderContent={rightHeaderContent} />
      <div>{content}</div>
    </React.Fragment>
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
