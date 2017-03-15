import React from 'react';
import {Provider} from 'react-redux';
import AppRouter from './router.jsx';

const Root = ({store}) => {

  const fetchAllPhotosOnEnter = () => {
		store.dispatch(Actions.fetchAllPhotos());
	};

  return (
    <Provider store={store}>
      <AppRouter store= {store}/>
    </Provider>
  );
};

export default Root;
