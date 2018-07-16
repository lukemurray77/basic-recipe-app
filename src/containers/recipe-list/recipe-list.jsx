import React, { Component } from 'react';
import PropTypes from 'prop-types';

import List from '../../components/list/list';
import Button from '../../components/button/button';
import PageTitle from '../../components/page-title/page-title';

import './recipe-list.scss';

class RecipeList extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.viewRecipe = this.viewRecipe.bind(this);
  }

  componentDidMount() {
    this.props.getData();
  }

  handleFilterChange(event) {
    this.setState({
      searchValue: event.target.value,
    });
  }

  viewRecipe(id) {
    this.props.history.push(`/view/${id}`);
  }

  render() {
    const {
      isLoading,
      data,
      loadingError,
      onDelete,
    } = this.props;

    if (isLoading || !data) return <div>LOADING...</div>;
    if (loadingError) return <div>ERROR...</div>;

    const filteredData = data.filter(recipe =>
      recipe.title.toLowerCase().includes(this.state.searchValue.toLowerCase()));

    const rightHeaderContent = (
      <div className="search-bar">
        <input
          placeholder="Search..."
          className="input"
          onChange={this.handleFilterChange}
        />
        <Button text="CREATE" isLink path="/add" />
      </div>
    );

    return (
      <React.Fragment>
        <PageTitle title="NomNom Recipes" rightHeaderContent={rightHeaderContent} />
        <List data={filteredData} onDelete={onDelete} viewRecipe={this.viewRecipe} />
      </React.Fragment>
    );
  }
}

RecipeList.defaultProps = {
  data: null,
  isLoading: false,
  loadingError: false,
};

RecipeList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })),
  isLoading: PropTypes.bool,
  loadingError: PropTypes.bool,
  getData: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default RecipeList;
