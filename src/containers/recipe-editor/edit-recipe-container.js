import { connect } from 'react-redux';
import RecipeEditor from './recipe-editor';

import editRecipe from '../../actions/edit-recipe';
import getData from '../../actions/get-data';

const mapStateToProps = ({ data }) => ({
  isEdit: true,
  data,
});

const mapDispatchToProps = dispatch => ({
  onSave: recipe => dispatch(editRecipe(recipe)),
  getData: id => dispatch(getData(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeEditor);
