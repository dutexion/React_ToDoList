import React,{useState} from 'react';
import './App.css';
import Input from './input';
import TodoList from './todolist';

function App() {
  const [text,newInput] = useState("");
  const [list,setList] = useState([]);

  const onChange = (e) => {
    newInput(e.target.value);
  }
  
  const nextId = useState(0);
  const onCreate = () => {
    if(text !== '')
    {
      const newList = {id:nextId,value:text};
      setList([...list,newList]);
      newInput("");
    }
    else
    {
      alert("문자를 입력해주세요");
    }
  }

  const onRemove = id => {
    setList(list.filter(value => value.id !== id));
  }

  return (
    <div className="App">
      <Input onChange={onChange} onCreate={onCreate} text={text}/>
      <TodoList prop={list} onRemove={onRemove}/>
    </div>
  );
}

export default App;