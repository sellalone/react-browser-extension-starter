import { connect } from 'react-redux';
import { IAppState } from '../../store';
import { Counter } from './index';
import { decrement, increment } from '../../store/counter/actions';

import { ICounter } from '../../store/counter/reducer';

export interface ICounterProps {
  counter: ICounter;
  onClickIncrement: typeof increment;
  onClickDecrement: typeof decrement;
}

const mapStateToProps = (state: IAppState) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = {
  onClickIncrement: increment,
  onClickDecrement: decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
