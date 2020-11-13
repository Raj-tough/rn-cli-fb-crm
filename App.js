import React from 'react';
import {Provider} from 'react-redux';
import Root from './src/Root';
import configureStore from './src/configStore';
const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export default App;
