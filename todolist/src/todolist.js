import React from "react";

function List({props}) {
    return (
        <>
            <div>
                {props.value}
                <button>완료하기</button>
                <button>수정하기</button>
                <button>삭제하기</button>
            </div>
        </>
    )
}

function TodoList({prop}) {
    return(
        <div>
            {prop.map((value,index)=>(<List props={value} key={index}/>))}
        </div>
    )
}

export default TodoList