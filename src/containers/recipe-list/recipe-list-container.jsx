import { connect } from 'react-redux';
import RecipeList from './recipe-list';

import getData from '../../actions/get-data';

const mapStateToProps = ({ data, isLoading, loadingError }) => ({
  data,
  isLoading,
  loadingError,
});

const mapDispatchToProps = dispatch => ({
  getData: id => dispatch(getData(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
