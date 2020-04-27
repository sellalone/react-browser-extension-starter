import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux';
import { ContentScriptAppContainer } from './container';

import { createDomAnchor } from '../../utils/index';

// Create a node
createDomAnchor('content-script-root');

// Create proxy store
const store = new Store({ portName: 'my-project' });

// wait for the store to connect to the background page
store.ready().then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <ContentScriptAppContainer />
    </Provider>,
    document.getElementById('content-script-root')
  );
});
