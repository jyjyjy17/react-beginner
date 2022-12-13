
import {useState, useEffect} from 'react' ;

function App(){
    const [todo, setTodo] = useState("") ;
    const [todos, setTodos] = useState([]) ;
    const onChange = (event) =>setTodo(event.target.value) ;
    const onSubmit = (event) =>{
        event.preventDefault(); 
        console.log(todos);
        if(todo==="") return ;
        setTodo("") ;
        setTodos((currentArray)=>[todo,...currentArray]) ;
    };
    return(
        <div>
            <h1>myTodos ({todos.length})</h1>
            <form onSubmit={onSubmit}>
            <input value = {todo} type="text" placeholder='Write your to do...' onChange={onChange}></input>
            </form>
            <hr/>
            <ul>
                {todos.map((item,index)=> <li key={index}>{item}</li>)}
            </ul>
            
        </div>
    ) ;
}
export default App;