import React from "react";
import List from "./list";

function TodoList({prop,onRemove,onComplete,onModify}) {
    return(
        <ul>
            {prop.map((value)=>
            (<List props={value} key={value.id}
            onRemove={onRemove} onComplete={onComplete}
            onModify={onModify}/>
            ))}
        </ul>
    )
}

export default TodoList