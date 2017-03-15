import React from 'react';
//Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//Components
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import HomeContainer from './home/home_container';
import ProfileContainer from './profile/profile_container';
import AlbumDetailContainer from './album/album_detail_container';
import PhotoFormContainer from './photo/photo_form_container';
import AlbumFormContainer from './album/album_form_container';
import SearchContainer from './search/search_container';

import { fetchAllPhotos } from '../actions/photo_actions';
import { fetchAllUsers } from '../actions/user_actions';
import { fetchAllAlbums } from '../actions/album_actions';
import { fetchAllComments } from '../actions/comment_actions';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this._fetchAllAssetsOnEnter = this._fetchAllAssetsOnEnter.bind(this);
    this.store = this.props.store;
  }

  _ensureLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (!currentUser) {
      replace('/login');
    } else {
      window.scrollTo(0, 0);
      this._fetchAllAssetsOnEnter();
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  _fetchAllAssetsOnEnter(){
    this.store.dispatch(fetchAllPhotos());
    this.store.dispatch(fetchAllUsers());
    this.store.dispatch(fetchAllAlbums());
    this.store.dispatch(fetchAllComments());
  }

  render(){
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <Route path="/login" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
          <Route path="/signup" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
          <Route path="/home" component={ HomeContainer } onEnter={this._ensureLoggedIn}/>
          <Route path="/search/:search_part" component={ SearchContainer } onEnter={this._ensureLoggedIn}/>
          <Route path="/profile/:profileId" component={ProfileContainer} onEnter={this._ensureLoggedIn}/>
          <Route path="/album/:albumId" component={AlbumDetailContainer} onEnter={this._ensureLoggedIn}/>
          <Route path="profile/:profileId/upload/album/:albumId" component={PhotoFormContainer} onEnter={this._ensureLoggedIn}/>
          <Route path="profile/:profileId/upload" component={AlbumFormContainer} onEnter={this._ensureLoggedIn}/>
        </Route>
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
