import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoin(json)
      setLoading(false)
    })
  }, [])

  return (
    <div className="App">
      <h1>The coins!</h1>
      {loading ? <strong>loading...</strong> : null}
      <ul>
        {coin.map((coin) => 
          (
            <li>{coin.name}</li>
          )
        )}
      </ul>
    </div>
  );
}

export default App;
