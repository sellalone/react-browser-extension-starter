import { action } from 'typesafe-actions';
import { CounterActionTypes, CounterPayload } from './types';

export const increment = (payload: CounterPayload = 1) =>
  action(CounterActionTypes.INCREMENT, payload);

export const decrement = (payload: CounterPayload = 1) =>
  action(CounterActionTypes.DECREMENT, payload);
