import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux';
import { OptionsAppContainer } from './container';

// Create proxy store
const store = new Store();

// wait for the store to connect to the background page
store.ready().then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <OptionsAppContainer />
    </Provider>,
    document.getElementById('options-root')
  );
});
