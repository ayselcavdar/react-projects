
import './App.css';
import { useEffect } from 'react';
import { init } from './socketApi';
import Palette from './components/Palette';

function App() {

  useEffect(()=>{
    init()
  },[])
  return (
    <div className="App">
      <Palette/>
    </div>
  );
}

export default App;
