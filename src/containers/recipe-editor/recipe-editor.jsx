import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '../../components/button/button';

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
    const pageTitle = this.props.isEdit ? 'Edit Recipe' : 'Create new Recipe';

    return (
      <div className="recipe-editor">
        <h2 className="recipe-editor-title">{pageTitle}</h2>
        <form className="add-edit-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" />
          </div>
          <div className="form-group">
            <label htmlFor="title">Recipe</label>
            <textarea rows="8" className="form-control" id="recipe" />
          </div>
          <div className="form-buttons">
            <Button type="danger" text="Cancel" isLink path="/" />
            <Button type="light" text="Save" />
          </div>
        </form>
      </div>
    );
  }
}

RecipeEditor.defaultProps = {

};

RecipeEditor.propTypes = {

};

export default RecipeEditor;
