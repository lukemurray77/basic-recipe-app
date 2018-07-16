import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/button/button';
import PageTitle from '../../components/page-title/page-title';
import Loading from '../../components/loading/loading';
import ErrorMessage from '../../components/error-message/error-message';

import './recipe-editor.scss';

class RecipeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      id: '',
      titleError: false,
      contentError: false,
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.updateRecipeState = this.updateRecipeState.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  componentDidMount() {
    if (!this.props.data && this.props.isEdit) {
      this.props.getData();
    } else if (this.props.isEdit) {
      this.updateRecipeState(this.props.data);
    }
  }

  componentWillReceiveProps(nextProps) {
    if ((nextProps.data !== this.props.data) && nextProps.data) {
      this.updateRecipeState(nextProps.data);
    }
  }

  onSave() {
    const { isView } = this.props.match.params;
    const { title, content, id } = this.state;
    if (title && content) {
      this.props.onSave({ title, content, id }, isView);
    } else {
      this.setFormErrors(!title, !content);
    }
  }

  setFormErrors(titleError, contentError) {
    this.setState({
      titleError,
      contentError,
    });
  }

  updateRecipeState(data) {
    const { id } = this.props.match.params;
    const { title, content } = data.find(item => item.id === id);
    this.setState({
      title,
      content,
      id,
    });
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value,
      titleError: false,
    });
  }

  handleContentChange(event) {
    this.setState({
      content: event.target.value,
      contentError: false,
    });
  }

  render() {
    const {
      isEdit,
      isLoading,
      loadingError,
    } = this.props;
    let content;

    if (isLoading) {
      content = <Loading />;
    } else if (loadingError) {
      content = <ErrorMessage message="Sorry there was a problem =(" />;
    } else {
      const contentError = this.state.contentError ? (
        <ErrorMessage message="Please enter a recipe" />
      ) : null;

      const titleError = this.state.titleError ? (
        <ErrorMessage message="Please enter a title" />
      ) : null;

      content = (
        <div className="recipe-editor">
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
              {titleError}
            </div>
            <div className="form-group">
              <label htmlFor="title">Recipe</label>
              <textarea
                rows="10"
                className="form-control"
                id="recipe"
                onChange={this.handleContentChange}
                value={this.state.content}
              />
              {contentError}
            </div>
            <div className="form-buttons">
              <Button type="danger" text="Cancel" isLink path="/" />
              <Button type="light" text="Save" onClick={this.onSave} />
            </div>
          </form>
        </div>
      );
    }

    const pageTitleText = isEdit ? 'Edit Recipe' : 'Create new Recipe';

    return (
      <React.Fragment>
        <PageTitle title={pageTitleText} align="center" />
        {content}
      </React.Fragment>
    );
  }
}

RecipeEditor.defaultProps = {
  onSave: () => {},
  getData: () => {},
  isEdit: false,
  data: null,
  isLoading: false,
  loadingError: false,
};

RecipeEditor.propTypes = {
  onSave: PropTypes.func,
  isEdit: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })),
  isLoading: PropTypes.bool,
  loadingError: PropTypes.bool,
  getData: PropTypes.func,
};

export default RecipeEditor;
