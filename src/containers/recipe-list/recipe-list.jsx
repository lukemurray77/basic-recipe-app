import React from 'react';
import PropTypes from 'prop-types';

import List from '../../components/list/list';

const RecipeList = ({
  data,
  isLoading,
  loadingError,
  getData,
}) => {
  if (!data && !loadingError) {
    getData();
  }

  if (isLoading || !data) return <div>LOADING...</div>;


  return (
    <div>
      <List data={JSON.parse(data)} />
    </div>
  );
};

RecipeList.defaultProps = {
  data: null,
  isLoading: false,
  loadingError: false,
};

RecipeList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  })),
  isLoading: PropTypes.bool,
  loadingError: PropTypes.bool,
  getData: PropTypes.func.isRequired,
};

export default RecipeList;
