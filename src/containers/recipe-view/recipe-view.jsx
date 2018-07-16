import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/button/button';
import PageTitle from '../../components/page-title/page-title';

import './recipe-view.scss';

const RecipeView = ({
  data,
  match,
  getData,
  isLoading,
  loadingError,
}) => {
  const { id } = match.params;
  if (!data) getData(id);
  const { title, content } = data ? data.find(recipe => recipe.id === id) : {};
  const rightHeaderContent = (
    <div className="buttons">
      <Button isLink path="/" text="BACK" />
      <Button isLink path={`/edit/${id}/true`} text="EDIT" />
    </div>
  );

  if (isLoading) return <div>LOADING...</div>;
  if (loadingError) return <div>ERROR...</div>;

  return (
    <div className="recipe-view-page">
      <PageTitle title={title} rightHeaderContent={rightHeaderContent} />
      <div className="recipe-content">
        {content}
      </div>
    </div>
  );
};

RecipeView.defaultProps = {
  data: [],
  isLoading: false,
  loadingError: false,
};

RecipeView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })),
  isLoading: PropTypes.bool,
  loadingError: PropTypes.bool,
  getData: PropTypes.func.isRequired,
};

export default RecipeView;
