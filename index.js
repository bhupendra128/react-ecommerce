import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './app.js';
import { ThemeProvider } from 'styled-components';
import Theme from './src/assests/styles/theme';
import './style.css';

class AppRoot extends Component {

  render() {
    return (
      <div>
      <ThemeProvider theme={Theme}>
     <App />
        </ThemeProvider>
      </div>
    );
  }
}

render(<AppRoot />, document.getElementById('root'));
