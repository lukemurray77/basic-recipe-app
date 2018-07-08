import { connect } from 'react-redux';
import RecipeEditor from './recipe-editor';

import editRecipe from '../../actions/edit-recipe';

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  editRecipe: recipe => dispatch(editRecipe(recipe)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeEditor);
