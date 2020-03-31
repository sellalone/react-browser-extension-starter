import { Action } from 'redux';

export enum SettingsActionTypes {
  DARK = 'DARK_THEME',
  LIGHT = 'LIGHT_THEME',
}

export type SettingsActions = Action<SettingsActionTypes>;
