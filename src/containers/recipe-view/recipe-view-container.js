import { connect } from 'react-redux';
import RecipeView from './recipe-view';

const mapStateToProps = ({ data }) => ({
  data,
});

export default connect(mapStateToProps)(RecipeView);
