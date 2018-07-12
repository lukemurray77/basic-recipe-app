import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import List from '../../components/list/list';
import Button from '../../components/button/button';

import './recipe-list.scss';

class RecipeList extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    if (!this.props.data && !this.props.loadingError) {
      this.props.getData();
    }
  }

  handleFilterChange(event) {
    this.setState({
      searchValue: event.target.value,
    });
  }

  render() {
    const {
      isLoading,
      data,
      loadingError,
    } = this.props;

    if (isLoading || !data) return <div>LOADING...</div>;
    if (loadingError) return <div>ERROR...</div>;

    const filteredData = data.filter(recipe =>
      recipe.title.toLowerCase().includes(this.state.searchValue.toLowerCase()));

    return (
      <React.Fragment>
        <div className="main-header">
          <h3 className="title">NomNom Recipes</h3>
          <div className="search-bar">
            <input
              placeholder="Search..."
              className="input"
              onChange={this.handleFilterChange}
            />
          <Link to="/add">
            <Button text="CREATE"/>
          </Link>
          </div>
        </div>
        <List data={filteredData} />
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
};

export default RecipeList;
