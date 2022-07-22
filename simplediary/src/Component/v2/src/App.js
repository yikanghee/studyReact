import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplace"
    )
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
