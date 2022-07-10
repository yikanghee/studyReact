import { useEffect,useState } from "react";

const Coin = () => {
    
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    
    useEffect(() => {
      fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => {
          setLoading(false);
          setCoins(json);
        });
    }, []);
    
    return (
      <div className="App">
        <h1>The Coins</h1>
        {loading ? <strong>loading</strong> : null}
        <ul>
          {coins.map((coin) => (
            <li>{coin.name}</li>
          ))}
        </ul>
      </div>
    );
    
}

export default Coin;
