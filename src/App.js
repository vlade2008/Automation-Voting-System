import React from 'react';
import {Provider} from 'react-redux';
import store from './utils/store';
import Home from './components/Home/index';

const App = () => (
  <Provider store={store}>
    <Home/>
  </Provider>
);

export default App;