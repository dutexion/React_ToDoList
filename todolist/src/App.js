import React,{useState} from 'react';
import './App.css';
import Input from './input';
import TodoList from './todolist';

function App() {
  const [text,newInput] = useState("");

  const onChange = (e) => {
    newInput(e.target.value);
  }
  
  const nextId = useState(2);
  const onCreate = () => {
    const newList = {id:nextId,value:text};
    setList([...list,newList]);
    newInput("");
  }

  const [list,setList] = useState([]);

  return (
    <div className="App">
      <Input onChange={onChange} onCreate={onCreate} text={text}/>
      <TodoList prop={list}/>
    </div>
  );
}

export default App;