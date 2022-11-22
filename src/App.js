import './App.css';
// components CHARTS
import Charts from './components/Charts';

function App() {

  return (
    <div className="App">
      <h1>Taxa Selic nos anos anteriores</h1>
        <p>Taxa Selic total nos 3 anos anteriores: <b>17,2%</b> </p>
        <p>Sendo: <b>2,75%</b> em 2020, representando do 16% total.</p>
        <p>Sendo: <b>4,44%</b> em 2021, representando do 25,8% total.</p>
        <p>Sendo: <b>10,01%</b> em 2022, representando do 58,02% total.</p>
      <Charts />
    </div>
  );
}

export default App;
