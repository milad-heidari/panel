import React from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BarChart from './components/charts/barChart/BarChart';
function App() {
  return (
    <div className="App">

        <CssBaseline />
        <Container sx={{
          height: '100vh',
          width:'100vw',
          padding:'4rem',
}}>
          <Box sx={{ 
            bgcolor: '#2a2b3d',
            padding:'1rem' ,
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center'
            }} >
            <BarChart/>

          </Box>
        </Container>
    </div>

  );
}

export default App;
