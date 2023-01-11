import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import {Meteo} from './Meteo';


function App() {
  return (
    <div className='content'>
      <h1>Météo </h1>
      <Clock></Clock>
      <Meteo></Meteo>
    </div>
  );
}

export default App;
