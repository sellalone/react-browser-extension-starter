import { Reducer } from 'redux';
import { ThemeTypes } from '../../styles/themes';
import { SettingsActions, SettingsActionTypes } from './types';

export interface IAppSettings {
  theme: ThemeTypes;
}

const initialState: IAppSettings = {
  theme: 'light',
};

const settings: Reducer<IAppSettings, SettingsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SettingsActionTypes.DARK:
      return { ...state, theme: 'dark' };

    case SettingsActionTypes.LIGHT:
      return { ...state, theme: 'light' };

    default:
      return state;
  }
};

export default settings;
