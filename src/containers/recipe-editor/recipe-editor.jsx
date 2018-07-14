import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/button/button';

import './recipe-editor.scss';

class RecipeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      id: '',
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.updateRecipeState = this.updateRecipeState.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  componentDidMount() {
    if (this.props.isEdit || this.props.isView) {
      const { id } = this.props.match.params;
      const recipe = this.props.data.find(item => item.id === id);
      this.updateRecipeState(recipe);
    }
  }

  onSave() {
    const { title, content, id } = this.state;
    this.props.onSave({ title, content, id });
    this.props.history.push('/');
  }

  updateRecipeState({ title, content, id }) {
    this.setState({
      title,
      content,
      id,
    });
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleContentChange(event) {
    this.setState({
      content: event.target.value,
    });
  }

  render() {
    const {
      isEdit,
      isView,
    } = this.props;

    const pageTitle = isEdit ? 'Edit Recipe' : 'Create new Recipe';

    return (
      <div className="recipe-editor">
        <h2 className="recipe-editor-title">{pageTitle}</h2>
        <form className="add-edit-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Recipe</label>
            <textarea
              rows="8"
              className="form-control"
              id="recipe"
              onChange={this.handleContentChange}
              value={this.state.content}
            />
          </div>
          <div className="form-buttons">
            <Button type="danger" text="Cancel" isLink path="/" />
            <Button type="light" text="Save" onClick={this.onSave} />
          </div>
        </form>
      </div>
    );
  }
}

RecipeEditor.defaultProps = {
  onSave: () => {},
  isEdit: false,
  isView: false,
};

RecipeEditor.propTypes = {
  onSave: PropTypes.func,
  isEdit: PropTypes.bool,
  isView: PropTypes.bool,
};

export default RecipeEditor;
