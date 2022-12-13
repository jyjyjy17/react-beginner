import { number } from 'prop-types';
import { useState, useEffect } from 'react' ;

function App(){
    const [loading,setLoading] = useState(true) ;
    const [coins,setCoins] = useState([]) ;
    const [money,setMoney] = useState() ;
    const [coin, setCoin] = useState() ;
    const [result, setResult] = useState(0) ;
    useEffect(()=> {
        fetch("https://api.coinpaprika.com/v1/tickers?limit=19").
        then((response) => response.json()).
        then((json)=>{
            setCoins(json) ;
            setLoading(false) ;
        }) ;
    }, []) ;
    const onSubmint = (event)=>{
        event.preventDefault() ;
        setResult(Number(money)/Number(coin)) ; 
    }
    const onChangeMoney = (event)=>setMoney(event.target.value) ;
    const onSelect = (event)=>setCoin(event.target.value) ;
    return (
        <div>
            <h1>The Coins@ {coins.length}</h1>
            {loading ? <strong>Loaiding...</strong> :null }
            <form onSubmit={onSubmint}>
                <input value = {money} onChange={onChangeMoney} type="number" placeholder ="write your money"></input>
                <select value = {coin} onChange={onSelect} onSelect = {onSelect}>
                    {coins.map((coin) =>
                    <option value= {coin.quotes.USD.price}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}</option>
                    )}
                </select>
            </form>
            <h3>you will get {result}</h3>
            
        </div>
    ) ;
}

export default App ;