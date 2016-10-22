import React from 'react';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';

const NavBar = () => (
  <AppBar
    title="ShowMeTheTorrent"
    onTitleTouchTap={() => browserHistory.push('/')}
    titleStyle={{ cursor: 'pointer' }}
  />
);

export default NavBar;
