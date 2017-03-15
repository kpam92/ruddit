import React from "react";
import ReactDOM from 'react-dom';
import {configureStore} from './store/store';
import Root from './components/root';
import {receiveCurrentUser} from "./actions/session_actions"
import {fetchAllAlbums, fetchSingleAlbum} from "./actions/album_actions"
import {fetchAllComments, deleteComment} from "./actions/comment_actions"
import Modal from 'react-modal';



document.addEventListener("DOMContentLoaded", () => {
  let store;
if (window.currentUser) {
  const initialState = {session: {currentUser: window.currentUser}};
  store = configureStore(initialState);
} else {
  store = configureStore();
}
  Modal.setAppElement(document.body);
  const root = document.getElementById("root");
  ReactDOM.render(<Root store = {store}/>, root);
  // window.store = store;
  // window.receiveCurrentUser = receiveCurrentUser;
  // window.fetchAllAlbums = fetchAllAlbums;
  // window.fetchAllComments = fetchAllComments;
  // window.deleteComment = deleteComment;

});
