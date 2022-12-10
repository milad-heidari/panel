import React from 'react';
import './App.css';
import BarChart from './components/charts/barChart/BarChart';
import Table from './components/table/Table';
function App() {
  return (
    <div className="App">
            <div className='container'>
            <h3>Task one</h3>
            <div className='chart'>
            <BarChart/>

            </div>
            </div>

            <div className='container'>
              <h3>Task Two</h3>
              <Table/>
            </div>
    </div>

  );
}

export default App;
