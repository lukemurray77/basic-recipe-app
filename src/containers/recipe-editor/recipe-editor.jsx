import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './recipe-editor.scss';

class RecipeEditor extends Component {
  constructor() {
    super();
    this.state = {
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(event) {
    this.setState({
    });
  }

  render() {
    return (
      <div>ADD RECIPE</div>
    );
  }
}

RecipeEditor.defaultProps = {

};

RecipeEditor.propTypes = {

};

export default RecipeEditor;
