import React from "react"

function List({props,onRemove,onComplete,onModify}) {
    
    return (
        <>
            <li className="inList">
                <span className={props.complete === true ? "complete" : null}>
                    {props.value}
                </span>

                <div className="btnGroup">
                    <button className="listBtn"
                    onClick={() => onComplete(props.id)}>완료하기</button>

                    <button className="listBtn"
                    onClick={() => onModify(props.id,
                    prompt("수정할 내용을 입력하세요",props.value),
                    props.value)}>수정하기</button>

                    <button className="listBtn"
                    onClick={() => onRemove(props.id)}>삭제하기</button>
                </div>
            </li>
        </>
    )
}

export default List;