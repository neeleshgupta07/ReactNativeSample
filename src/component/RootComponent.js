import Navigation from './Navigation';

import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {masterReducer} from '../reducer/CombineReducers';
import thunk from 'redux-thunk';

const RootComponent = () => {
  const store = createStore(masterReducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default RootComponent;
