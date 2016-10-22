import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { NavBar } from './modules';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = ({ children }) => (
  <MuiThemeProvider>
    <div>
      <NavBar />
      {children}
    </div>
  </MuiThemeProvider>
);

export default App;
