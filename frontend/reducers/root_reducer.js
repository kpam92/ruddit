import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import CommentReducer from './comment_reducer';
import PhotoReducer from './photo_reducer';
import AlbumReducer from './album_reducer';
import UserReducer from './user_reducer';
import SearchReducer from './search_reducer';

export const RootReducer = combineReducers({
  session: SessionReducer,
  photos: PhotoReducer,
  user: UserReducer,
  albums: AlbumReducer,
  comments: CommentReducer,
  search_results: SearchReducer
});

export default RootReducer;
