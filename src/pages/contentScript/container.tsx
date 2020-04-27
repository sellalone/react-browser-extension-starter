import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled, { ThemeProvider } from 'styled-components';
import { IAppState } from '../../store';
import { themes, ThemeTypes } from '../../styles/themes';
import Counter from '../../components/Counter/container';

interface ICounterApp {
  theme: ThemeTypes;
  dispatch: Dispatch;
}

const Container = styled('div')`
  position: fixed;
  z-index: 9;
  bottom: 0;
  right: 0;
  background-color: ${(p) => p.theme.backgroundColor};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

// eslint-disable-next-line react/prefer-stateless-function
class ContentScriptApp extends React.Component<ICounterApp> {
  render() {
    const { theme } = this.props;
    return (
      <ThemeProvider theme={themes[theme]}>
        <>
          <Container>
            <Counter />
          </Container>
        </>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    theme: state.settings.theme,
  };
};

const ContentScriptAppContainer = connect(mapStateToProps)(ContentScriptApp);

export { ContentScriptAppContainer };
