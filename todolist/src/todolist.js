import React from "react";

function List({props,onRemove}) {
    return (
        <>
            <div>
                {props.value}
                <button>완료하기</button>
                <button>수정하기</button>
                <button onClick={() => onRemove(props.id)}>삭제하기</button>
            </div>
        </>
    )
}

function TodoList({prop,onRemove}) {
    return(
        <div>
            {prop.map((value,index)=>(<List props={value} key={index} onRemove={onRemove}/>))}
        </div>
    )
}

export default TodoList