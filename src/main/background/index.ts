import { createStore } from 'redux';
import { wrapStore } from 'webext-redux';
import { configureApp } from '../../store/helpers';
import reducers, { loadState } from '../../store';

const preloadedState = loadState();

// Main Store
const store = createStore(reducers, preloadedState);

configureApp(store);

// Connect store with proxy stores in UI pages
wrapStore(store);
