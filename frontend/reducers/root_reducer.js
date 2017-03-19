import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
// import CommentReducer from './comment_reducer';
// import PhotoReducer from './photo_reducer';
import UserReducer from './user_reducer';
// import SearchReducer from './search_reducer';

export const RootReducer = combineReducers({
  session: SessionReducer,
  user: UserReducer

});

export default RootReducer;
