import React,{useState,useRef,useEffect} from 'react';
import './App.css';
import Input from './component/input';
import TodoList from './component/todolist/todolist';
import List from './component/todolist/list';

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
      complete: 0
    };

    setList([...list,newList]);
    setInputValue("");
    nextId.current += 1;
  }

  const onRemove = (id) => {
    const listFilter = list.filter(value => value.id !== id)

    setList(listFilter);
  }

  const onComplete = (Id) => {
    const listMap = list.map(Value =>
      {
        const {id,value,complete} = Value;
        return(id === Id ? (complete === 2 ? {
          id,
          value,
          complete:0
        }:{
          id,
          value,
          complete: complete+1
        }):Value)
      }
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

  useEffect(() => {
    window.localStorage.setItem("list",JSON.stringify(list));
  }, [list])

  return (
    <div className="App">
      <Input onChange={onChange}
      onCreate={onCreate}
      text={inputValue}/>
      <div className="ulBox">
        <ul className="inCompleteList">
          {list.map((value)=>
          (<List props={value} key={value.id}
          onRemove={onRemove} onComplete={onComplete}
          onModify={onModify} currentState="0"/>
          ))}
        </ul>
      
        <ul className="proceedingList">
          {list.map((value)=>
          (<List props={value} key={value.id}
          onRemove={onRemove} onComplete={onComplete}
          onModify={onModify} currentState="1"/>
          ))}
        </ul>

        <ul className="completeList">
          {list.map((value)=>
          (<List props={value} key={value.id}
          onRemove={onRemove} onComplete={onComplete}
          onModify={onModify} currentState="2"/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;