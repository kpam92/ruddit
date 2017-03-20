import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { goToProfile } from '../../actions/user_actions';
import Greeting from './greeting';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  search_results: state.search_results
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  goToProfile: (id) => dispatch(goToProfile(id)),
  receiveNewSearchResults: (data) => dispatch(receiveNewSearchResults(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
