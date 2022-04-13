import React, { useState } from 'react'

function Todo({ title, completed, removeToDoItemProp }) {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(title);
    const [tempValue, setTempValue] = useState(title);
    const [isDone, setIsDone] = useState(completed);

    const handleDivDoubleClick = () => {
        setIsEditing(true);
    }

    const handleInputKeyDown = (e) => {
        const key = e.keyCode;

        if (key === 13) { //Enter key
            setValue(tempValue);
            setIsEditing(false);
        } else if (key === 27) { //ESC key
            setTempValue(value);
            setIsEditing(false);
        }
    }

    const handleInputOnChange = (e) => {
        setTempValue(e.target.value);
    }

    const handleButtonClick = () => {
        setIsDone((oldDone) => !oldDone );
    }

    return (
        <div className="row">
            {
                isEditing ?
                    <div className="column seven wide">
                        <div className="ui input fluid">
                            <input
                                autoFocus={true}
                                onKeyDown={handleInputKeyDown}
                                onChange={handleInputOnChange}
                                value={tempValue}
                            />
                        </div>
                    </div>
                    :
                    <>
                        <div className="column five wide"  onDoubleClick={handleDivDoubleClick}>
                            <h2 className={"ui header" + (isDone ? " green" : "")}>{value}</h2>
                        </div>

                        <div className="column one wide">
                            <button 
                            className={"ui button circular icon" + (isDone ? " grey" : " green")}
                            onClick={handleButtonClick}
                            >
                                <i className="white check icon" />
                            </button>
                        </div>
                        <div className="column one wide">
                            <button 
                            className="ui button circular icon red"
                            onClick={removeToDoItemProp}
                            >
                                <i className="white remove icon" />
                            </button>
                        </div>
                    </>
            }
        </div>

    )
}

export default Todo
