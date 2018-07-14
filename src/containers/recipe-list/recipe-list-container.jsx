import { connect } from 'react-redux';
import RecipeList from './recipe-list';

import getData from '../../actions/get-data';
import deleteRecipe from '../../actions/delete-recipe';

const mapStateToProps = ({ data, isLoading, loadingError }) => ({
  data,
  isLoading,
  loadingError,
});

const mapDispatchToProps = dispatch => ({
  getData: id => dispatch(getData(id)),
  onDelete: id => dispatch(deleteRecipe(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
