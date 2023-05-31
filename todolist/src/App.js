import React,{useState,useRef,useEffect} from 'react';
import './App.css';
import Input from './input';
import TodoList from './todolist';

function App() {
  const [text,newInput] = useState("");
  const [list, setList] = useState(() => {
    const storedList = window.localStorage.getItem("list");
    return storedList ? JSON.parse(storedList) : [];
  });

  const onChange = (e) => {
    newInput(e.target.value);
  }

  const nextId = useRef(list.length ? list[list.length-1].id+1 : 0);

  const onCreate = () => {
    if(text !== '')
    {
      const newList = {id:nextId.current,value:text,active:false};
      setList([...list,newList]);
      newInput("");
      nextId.current += 1;
    }
    else
    {
      alert("문자를 입력해주세요");
    }
  }

  const onRemove = id => {
    setList(list.filter(value => value.id !== id));
  }

  const onComplete = id => {
    setList(list.map(value => value.id === id ? {...value, active:!value.active}:value))
  }

  const onModify = (id,inner) => {
    if(inner !== '' && inner !== null)
    {
      setList(list.map((value) => value.id === id ? {...value, value:inner}:value))
    }
    else
    {
      alert("문자를 입력해주세요")
    }
  }

  useEffect(() => {
    window.localStorage.setItem("list",JSON.stringify(list));
  }, [list])

  return (
    <div className="App">
      <Input onChange={onChange} onCreate={onCreate} text={text}/>
      <TodoList prop={list} onRemove={onRemove} onComplete={onComplete} onModify={onModify}/>
    </div>
  );
}

export default App;