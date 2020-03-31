import { combineReducers } from 'redux';
import counter, { ICounter } from './counter/reducer';
import settings, { IAppSettings } from './settings/reducer';

type OnSuccess = () => void;
type OnError = (e: Error) => void;

export interface IAppState {
  counter: ICounter;
  settings: IAppSettings;
}

export const loadState = (): IAppState | undefined => {
  try {
    const serializedState = localStorage.getItem('appstate');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (
  appstate: IAppState,
  success: OnSuccess = () => {},
  error: OnError = () => {}
) => {
  try {
    const serializedState = JSON.stringify(appstate);
    localStorage.setItem('appstate', serializedState);
    success();
  } catch (e) {
    error(e);
  }
};

const reducers = combineReducers<IAppState>({
  counter,
  settings,
});

export default reducers;
