import { connect } from 'react-redux';
import RecipeEditor from './recipe-editor';

import editRecipe from '../../actions/edit-recipe';
import getData from '../../actions/get-data';

const mapStateToProps = ({ data, isLoading, loadingError }) => ({
  isEdit: true,
  data,
  isLoading,
  loadingError,
});

const mapDispatchToProps = dispatch => ({
  onSave: (recipe, isView) => dispatch(editRecipe(recipe, isView)),
  getData: () => dispatch(getData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeEditor);
