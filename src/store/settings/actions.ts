import { action } from 'typesafe-actions';
import { SettingsActionTypes } from './types';

export const setDarkTheme = () => action(SettingsActionTypes.DARK);
export const setLightTheme = () => action(SettingsActionTypes.LIGHT);
