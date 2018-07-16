import { connect } from 'react-redux';
import RecipeView from './recipe-view';
import getData from '../../actions/get-data';

const mapStateToProps = ({ data, isLoading, loadingError }) => ({
  data,
  isLoading,
  loadingError,
});

const mapDispatchToProps = dispatch => ({
  getData: id => dispatch(getData(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeView);
