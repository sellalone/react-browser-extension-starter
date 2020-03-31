import { Reducer } from 'redux';
import { CounterActionTypes } from './types';

export interface ICounter {
  clicksMade: number;
}

const initialState: ICounter = {
  clicksMade: 0,
};

const counter: Reducer<ICounter> = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return { ...state, clicksMade: state.clicksMade + (payload || 1) };

    case CounterActionTypes.DECREMENT:
      return { ...state, clicksMade: state.clicksMade - (payload || 1) };

    default:
      return state;
  }
};

export default counter;
