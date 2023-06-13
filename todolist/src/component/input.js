import React from "react";

function Input({onChange,onCreate,text}) {
    return(
        <>
            <h1>ToDoList</h1>
            <div className="inputDiv">
                <input className="input" onChange={onChange} value={text}/>
                <button className="inputBtn" onClick={onCreate}>추가하기</button>
            </div>
            
        </>
    )
}

export default Input