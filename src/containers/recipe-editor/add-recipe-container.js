import { connect } from 'react-redux';
import RecipeEditor from './recipe-editor';

import addRecipe from '../../actions/add-recipe';

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  addRecipe: recipe => dispatch(addRecipe(recipe)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeEditor);
