import { connect } from 'react-redux';
import CategoriesView from './CategoriesView';
import { fetchCategorie } from './CategoriesActions';

export default connect(
  state => ({
    categories: state.categories,
    routeState: state.routing.locationBeforeTransitions.state
  }),
  { fetchCategorie }
)(CategoriesView);
