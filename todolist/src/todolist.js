import React from "react";

function List({props,onRemove,onComplete,onModify}) {
    return (
        <>
            <div>
                <span className={props.active === true ? "complete" : null}>{props.value}</span>
                <button onClick={() => onComplete(props.id)}>완료하기</button>
                <button onClick={() => onModify(props.id,prompt("수정할 내용을 입력하세요"))}>수정하기</button>
                <button onClick={() => onRemove(props.id)}>삭제하기</button>
            </div>
        </>
    )
}

function TodoList({prop,onRemove,onComplete,onModify}) {
    return(
        <div>
            {prop.map((value,index)=>(<List props={value} key={index} onRemove={onRemove} onComplete={onComplete} onModify={onModify}/>))}
        </div>
    )
}

export default TodoList