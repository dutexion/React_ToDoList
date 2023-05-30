import React from "react";

function Input({onChange,onCreate,text}) {
    return(
        <>
            <h1>ToDoList</h1>
            <input onChange={onChange} value={text}/>
            <button onClick={onCreate}>click me</button>
        </>
    )
}

export default Input