import Button from "./Button" ;
import styles from "./App.module.css" ;
import {useState, useEffect} from 'react' ;

function App() {
  const [counter, setValue] = useState(0) ;
  const [keyword,setKeyword] = useState("") ;
  const onClick = () =>setValue((prev)=>(prev+1) );
  const onChange = (event) => setKeyword(event.target.value) ;
  useEffect(()=>{
    if(keyword!=="") console.log("Search For", keyword) ;
  },[counter]) ;
  return (
   <div>
      <input value = {keyword} onChange = {onChange} type="text" placeholder="search here..."/>
      <h1>{counter} </h1>
      <Button onClick = {onClick} text = "CLICK" />
    </div>
   
  );
}

export default App;
