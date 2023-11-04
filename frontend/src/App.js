import React from 'react';
import './App.css';
import Layout from './components/layout';
import Body from './components/body';
import { Box } from '@mui/material';

const App =() => {
  return (
    <Box className="App">
      <Layout>
        <Body/>
      </Layout>
    </Box>
  );
};

export default App;
