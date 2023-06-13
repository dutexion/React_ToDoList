import React,{useState,useRef,useEffect} from 'react';
import './App.css';
import Input from './component/input';
import TodoList from './component/todolist/todolist';

function App() {
  const [inputValue,setInputValue] = useState("");
  const [list, setList] = useState(() => {
    const storedList = window.localStorage.getItem("list");
    return storedList ? JSON.parse(storedList) : [];
  });

  const onChange = (e) => {
    setInputValue(e.target.value);
  }

  const nextId = useRef(list.length ? list[list.length-1].id + 1 : 0);

  const onCreate = () => {
    if(inputValue === '')
    {
      alert("문자를 입력하세요");
      return;
    }

    const newList = {
      id: nextId.current,
      value: inputValue,
      complete: false
    };

    setList([...list,newList]);
    setInputValue("");
    nextId.current += 1;
  }

  const onRemove = id => {
    const listFilter = list.filter(value => value.id !== id)

    setList(listFilter);
  }

  const onComplete = id => {
    const listMap = list.map(value =>
      value.id === id ?
      toggleObjectInValue(value,"complete") : value
    )

    setList(listMap)
  }
  
  const onModify = (id,inner,value) => {
    if(inner === null) return;

    if(inner !== '')
    {
      setList(list.map((value) =>
      value.id === id ? {...value, value:inner}:value
      ))
    }
    else
    {
      alert("문자를 입력해주세요")
      onModify(id,prompt("수정할 내용을 입력하세요",value),value)
    }
  }

  const toggleObjectInValue = (object, currentValue) => {
    return {
      ...object,
      [currentValue]: !object[currentValue]
    }
  }

  useEffect(() => {
    window.localStorage.setItem("list",JSON.stringify(list));
  }, [list])

  return (
    <div className="App">
      <Input onChange={onChange}
      onCreate={onCreate}
      text={inputValue}/>

      <TodoList prop={list}
      onRemove={onRemove}
      onComplete={onComplete}
      onModify={onModify}/>
    </div>
  );
}

export default App;