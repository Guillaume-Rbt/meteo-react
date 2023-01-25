import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import LocationWeather from './components/LocationWeather'


function App() {
  return (
    <div className='content'>
      <h1>Météo </h1>
      <Clock></Clock>
      <LocationWeather></LocationWeather>
    </div>
  );
}

export default App;
