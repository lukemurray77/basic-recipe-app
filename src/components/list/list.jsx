import React from 'react';
import PropTypes from 'prop-types';

import RecipeCard from '../recipe-card/recipe-card';

import './list.scss';

const List = (props) => {
  const { data, onDelete } = props;
  const items = data.map(listItem =>
    (
      <RecipeCard
        key={listItem.id}
        recipe={listItem}
        onDelete={onDelete}
      />
    ));

  return (
    <div className="list-main">
      {items}
    </div>
  );
};

List.defaultProps = {
  data: [],
};

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })),
};

export default List;
