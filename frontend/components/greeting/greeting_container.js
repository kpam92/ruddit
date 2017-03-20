import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { goToProfile } from '../../actions/user_actions';
import Greeting from './greeting';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  goToProfile: (id) => dispatch(goToProfile(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
