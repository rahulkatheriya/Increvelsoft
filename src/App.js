import './App.css';
import DataTable from './Table'
import LineChart from './LineChart';
import BarChart from './BarChart';

function App() {
  return (
    <div className="App">
      <div className="chart">
        <LineChart />
        <BarChart />
        </div>
      <DataTable />
    </div>
  );
}

export default App;
