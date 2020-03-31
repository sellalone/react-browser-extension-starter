import * as React from 'react';
import styled from 'styled-components';
import { ICounterProps } from './container';

const CounterContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 100px;
  padding: 5px;
  margin: 5px;
  background-color: ${(p) => p.theme.backgroundColor};
`;

const Display = styled('div')`
  font-size: 48px;
  justify-self: center;
`;

const Controls = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  min-width: 200px;
`;

const Button = styled('button')`
  display: inline-block;
  position: relative;
  padding: 10px 30px;
  border: 1px solid transparent;
  border-bottom: 4px solid rgba(0, 0, 0, 0.21);
  border-radius: 4px;
  background: linear-gradient(
    rgba(27, 188, 194, 1) 0%,
    rgba(24, 163, 168, 1) 100%
  );

  color: white;
  font-size: 22px;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  text-decoration: none;

  cursor: pointer;
  outline: none;
  user-select: none;

  &:active {
    background: #169499;
  }
`;

class Counter extends React.Component<ICounterProps> {
  increment = () => {
    const { onClickIncrement } = this.props;
    onClickIncrement();
  };

  decrement = () => {
    const { onClickDecrement } = this.props;
    onClickDecrement();
  };

  render() {
    const { counter } = this.props;
    return (
      <CounterContainer>
        <Display>{counter.clicksMade}</Display>
        <Controls>
          <Button onClick={this.increment}>+</Button>
          <Button onClick={this.decrement}>-</Button>
        </Controls>
      </CounterContainer>
    );
  }
}

export { Counter };
