import React from 'react'
import Todo from './Todo'

function List({ list, removeToDoListProp }) {
    const renderedList = list.map((item) => <Todo title={item.title} completed={item.completed} removeToDoItemProp={(e) => removeToDoListProp(item.id)} key={item.title} />);
    return (
        <div className="ui grid center aligned">
            {renderedList}
        </div>
    )
}

export default List
