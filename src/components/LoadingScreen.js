import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const LoadingScreen = () => (
  <div style={{ display: 'flex', height: '100vh', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
    <div>
      <CircularProgress size={200} thickness={10} />
    </div>
  </div>
);

export default LoadingScreen;
