import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search_results: ""}
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveNewSearchResults(this.state);
    this.setState({search_results: ''});
  }
  handleTop(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
  }

  componentDidMount(){
    this.props.router.push(`/login`)
  }

  render() {

    const sessionLinks = () => (
    <div>
    <div className="splash-background"/>
      <nav className="login-signup">
        <div className="actions">
          <Link to="/login" activeClassName="current">LOGIN</Link>
          &nbsp;or&nbsp;
          <Link to="/signup" activeClassName="current">SIGN UP</Link>
        </div>

        <div className='splash-logo'><label className="logo-letter">O</label>pen<label className="logo-letter">W</label>all</div>
        <div className='tagline'> A virtual space for creating and sharing work...</div>
      </nav>
    </div>
    );


    const personalGreeting = () => (
    	<hgroup className="header-nav">
        <Link to="/home"><label className="icon">O</label></Link>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input className="search-bar"type="text" autoComplete="off" name="search" value={this.state.search_results} placeholder="search" onChange={this.update('search_results')}/>
        </form>
        <div className="right-nav">

          <li><button className="header-button" onClick={this.props.logout}>Log Out</button></li>
      		<li className="header-name">{this.props.currentUser.username}</li>
          <li><a className='prof-icon'><img onClick={handleRouteClick(this.props.router, `/profile/${this.props.currentUser.id}`)}
                                            src={this.props.currentUser.profile_pic}/></a></li>
        </div>
        <a onClick={this.handleTop.bind(this)}className="back-to-top">
          <img src="http://res.cloudinary.com/dt5viyxyq/image/upload/c_scale,h_60/v1473185181/Black_Arrow_Up.svg_tsualf.png"/>

        </a>
    	</hgroup>
    );

    const handleRouteClick = (router, url) => (
    () => router.push(url)
    )

    if (this.props.currentUser){
      return personalGreeting();
    } else {
      return sessionLinks();
    }
  }
}



export default withRouter(Greeting);
