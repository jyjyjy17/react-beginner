import { number } from 'prop-types';
import { useState, useEffect } from 'react' ;

function App(){
    const [loading,setLoading] = useState(true) ;
    const [coins,setCoins] = useState([]) ;
    const [money,setMoney] = useState(0) ;
    const [coin, setCoin] = useState(171115) ;
    useEffect(()=> {
        fetch("https://api.coinpaprika.com/v1/tickers?limit=19").
        then((response) => response.json()).
        then((json)=>{
            setCoins(json) ;
            setLoading(false) ;
        }) ;
    }, []) ;
    const onChangeMoney = (event)=>setMoney(event.target.value) ;
    const onSelect = (event)=>setCoin(event.target.value) ;
    return (
        <div>
            <h1>The Coins@ {coins.length}</h1>
            {loading ? <strong>Loaiding...</strong> :null }
            <input type="number" value = {money} onChange={onChangeMoney} placeholder ="write your money"></input>
            <select value = {coin} onChange={onSelect} onSelect = {onSelect}>
                {coins.map((coin) =>
                    <option value= {Number(coin.quotes.USD.price)}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}</option>
                )}
            </select>
            <h3>you will get {parseInt(money/coin)} coins</h3>
            
        </div>
    ) ;
}

export default App ;