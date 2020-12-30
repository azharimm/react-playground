import React, { useState, useReducer } from "react";

const ACTIONS = {
    ADD_TODO: "add_todo",
    TOGGLE_TODO: "toggle_todo",
    DELETE_TODO: "delete_todo",
};

function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)];
        case ACTIONS.TOGGLE_TODO:
            return todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete };
                }
            });
        case ACTIONS.DELETE_TODO:
            return todos.filter((todo) => {
                return todo.id !== action.payload.id;
            });
        default:
            return todos;
    }
}

function newTodo(name) {
    return { id: Date.now(), name, complete: false };
}

const UseReducerPage = (props) => {
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
        setName("");
    }

    return (
        <div className="text-center">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </form>
            {todos.map((todo) => {
                return (
                    <div>
                        <span
                            style={{ color: todo.complete ? "#AAA" : "#000" }}
                        >
                            {todo.name}
                        </span>
                        <button
                            onClick={() =>
                                dispatch({
                                    type: ACTIONS.TOGGLE_TODO,
                                    payload: { id: todo.id },
                                })
                            }
                        >
                            Toggle
                        </button>
                        <button
                            onClick={() =>
                                dispatch({
                                    type: ACTIONS.DELETE_TODO,
                                    payload: { id: todo.id },
                                })
                            }
                        >
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default UseReducerPage;
