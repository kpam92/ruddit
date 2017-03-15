import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: "",
			guest: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleGuest = this.handleGuest.bind(this);
	}
	componentDidUpdate(){
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn(){
		if (this.props.loggedIn){
			hashHistory.push("/");
		}
	}

	update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	handleSubmit(e){
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}
	handleGuest(e){
		e.preventDefault();
		const user = {username: "user1", password: "password", guest: true};
		this.props.login({user})
	}

	navLink(){
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/login">log in instead</Link>;
		}
	}



	renderErrors(){
		return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className="enter-page">
				<div className="login-form-container">
					<form onSubmit={this.handleSubmit} className="login-form-box">
						Welcome to OpenWall!
						<br/>
							Please { this.props.formType } or { this.navLink() }
							{ this.renderErrors() }
						<div className="login-form">
							<br />
							<label className="first-form">
								<label className="form-label">
									USERNAME:
								</label>
								<input type="text"
									value={this.state.username}
									onChange={this.update("username")}
									className="login-input" />
							</label>

							<br />
							<label className="first-form">
								<label className="form-label">
								 PASSWORD:
							 </label>
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input" />
							</label>

							<br />
							<input className="splash-button" type="button" onClick={this.handleGuest} value="Guest Login" />
							<input className="splash-button" type="submit" value="Submit" />
						</div>
					</form>
				</div>
			</div>
		);
	}

}

export default SessionForm;
