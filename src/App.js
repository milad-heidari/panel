import React from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BarChart from './components/charts/barChart/BarChart';
import Table from './components/table/Table';
function App() {
  return (
    <div className="App">
            <BarChart/>
            
            <Table/>
    </div>

  );
}

export default App;
