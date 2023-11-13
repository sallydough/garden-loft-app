import './App.css';
import Logo from './components/Logo/Logo';
import Call911 from './components/Call911/Call911';
import TempControl from './components/TempControl/TempControl';
import Lock from './components/Lock/Lock';
import Lights from './components/Lights/Lights';
import Greeting from './components/Greeting/Greeting';
import Schedule from './components/Schedule/Schedule';


function App() {
  return (
    <div className="App">
      <Logo />
      <Call911 />
      <TempControl />
      <Lock />
      <Lights />
      <Greeting />
      <Schedule />
      

    </div>
  );
}

export default App;
