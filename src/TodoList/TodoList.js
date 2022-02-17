// import { useState } from "react";
import "./TodoList.css";
function TodoList(props) {
    const displayList = () => {
        let items = props.item.map((item, index) => {
            return <p
                className="list-item"
                key={index}
                style={item.marked ? { textDecoration: "line-through" } : { textDecoration: "none" }}
                onClick={() => props.delete(index)}>
                {item}
            </p>
        })
        return items;
    };
    return (
        <div className="todo-body">
            {displayList()}
        </div>
    )
}

export default TodoList;