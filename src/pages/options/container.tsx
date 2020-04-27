import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled, { ThemeProvider } from 'styled-components';
import { IAppState } from '../../store';
import GlobalStyle from '../../styles/GlobalStyle';
import { themes, ThemeTypes } from '../../styles/themes';
import Counter from '../../components/Counter/container';

interface IOptionsApp {
  theme: ThemeTypes;
  dispatch: Dispatch;
}

const Container = styled('div')`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  align-items: center;
  height: 90vh;
  width: 90vw;
  left: 5vw;
  top: 5vh;
  background-color: ${(p) => p.theme.backgroundColor};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

// eslint-disable-next-line react/prefer-stateless-function
class OptionsApp extends React.Component<IOptionsApp> {
  render() {
    const { theme } = this.props;
    return (
      <ThemeProvider theme={themes[theme]}>
        <>
          <GlobalStyle />
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

const OptionsAppContainer = connect(mapStateToProps)(OptionsApp);

export { OptionsAppContainer };
