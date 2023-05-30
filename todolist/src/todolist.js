import React from "react";

function List({props}) {
    return (
        <>
            <div>{props.value}</div>
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