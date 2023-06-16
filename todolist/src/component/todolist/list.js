import React from "react"

function List({props,onRemove,onComplete,onModify,currentState}) {
    const {value,complete,id} = props;

    const currentComplete = complete?(complete === 1 ? "1":"2"):"0"
    const completeClass = complete?(complete === 1 ? "proceeding":"complete"):"inComplete"

    if(currentState !== currentComplete) return;
    
    return (
            <li className="inList">
                <span className={completeClass}>
                    {value}
                </span>

                <div className="btnGroup">
                    <button className="listBtn"
                    onClick={() => onComplete(id)}>
                        {complete?(complete === 1 ? "완료하기":"미완료하기"):"진행하기"}
                    </button>

                    <button className="listBtn"
                    onClick={() => onModify(id,
                    prompt("수정할 내용을 입력하세요",value),
                    value)}>수정하기</button>

                    <button className="listBtn"
                    onClick={() => onRemove(id)}>삭제하기</button>
                </div>
            </li>
    )
}

export default List;