import React, { useEffect, useState, useRef } from "react";
import { Todo } from "../models/models";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Draggable } from "react-beautiful-dnd";

interface Props {
    index: number;
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ index, todo, todos, setTodos }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.name);
    const handleEdit = () => {
        if (!isEdit && !todo.isDone) {
            setIsEdit(!isEdit);
        }
    };
    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo, _) => todo.id !== id));
    };
    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo, _) =>
                todo.id === id ? { ...todo, isDone: true } : todo
            )
        );
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
        e.preventDefault();
        setTodos(
            todos.map((todo, _) =>
                todo.id === id
                    ? { id: todo.id, name: editTodo, isDone: false }
                    : todo
            )
        );
        setIsEdit(false);
    };
    useEffect(() => {
        if (isEdit) inputRef.current?.focus();
    }, [isEdit]);

    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {(provided, snapshot) => (
                <form
                    className={`todos__single ${
                        snapshot.isDragging ? "drag" : ""
                    }`}
                    onSubmit={(e) => handleSubmit(e, todo.id)}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {isEdit && !todo.isDone ? (
                        <input
                            ref={inputRef}
                            value={editTodo}
                            onChange={(e) => setEditTodo(e.target.value)}
                            className="todos__single--text"
                        />
                    ) : (
                        <span className="todos__single--text">{todo.name}</span>
                    )}
                    <div>
                        {!todo.isDone && (
                            <span className="icon" onClick={() => handleEdit()}>
                                <AiFillEdit />
                            </span>
                        )}
                        <span
                            className="icon"
                            onClick={() => handleDelete(todo.id)}
                        >
                            <AiFillDelete />
                        </span>
                        {!todo.isDone && (
                            <span
                                className="icon"
                                onClick={() => handleDone(todo.id)}
                            >
                                <MdDone />
                            </span>
                        )}
                    </div>
                </form>
            )}
        </Draggable>
    );
};

export default SingleTodo;
