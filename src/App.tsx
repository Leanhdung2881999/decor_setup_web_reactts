import React from "react";
import "./App.scss";
// import InputField from "./components/InputField";
// import TodoList from "./components/TodoList";
// import { Todo } from "./models/models";
// import { DragDropContext, DropResult } from "react-beautiful-dnd";
import HomePage from "./components/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import ErrorPage from "./components/ErrorPage";
import DetailPost from "./components/DetailPost/DetailPost";
import { IconContext } from "react-icons";

// const App: React.FC = () => {
//     const [todo, setTodo] = useState<string>("");
//     const [todos, setTodos] = useState<Todo[]>([]);
//     const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

//     const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         if (todo) {
//             setTodos([
//                 ...todos,
//                 {
//                     id: Date.now(),
//                     name: todo,
//                     isDone: false,
//                 },
//             ]);
//             setTodo("");
//         }
//     };
//     const onDragEnd = (result: DropResult) => {
//         const { source, destination } = result;
//         if (!destination) return;
//         if (
//             source.droppableId === destination.droppableId &&
//             source.index === destination.index
//         )
//             return;
//         let current,
//             active = todos,
//             completed = completedTodos;

//         if (source.droppableId === "ActiveTasks") {
//             current = active[source.index];
//             active.splice(source.index, 1);
//         } else {
//             current = completed[source.index];
//             completed.splice(source.index, 1);
//         }

//         if (destination.droppableId === "CompletedTasks") {
//             completed.splice(destination.index, 0, {
//                 ...current,
//                 isDone: true,
//             });
//         } else {
//             active.splice(destination.index, 0, { ...current, isDone: false });
//         }
//         setCompletedTodos(completed);
//         setTodos(active);
//     };
//     return (
//         <DragDropContext onDragEnd={onDragEnd}>
//             <div className="App">
//                 <span className="heading">Taskify</span>
//                 <InputField
//                     todo={todo}
//                     setTodo={setTodo}
//                     handleAdd={handleAdd}
//                 />
//                 <TodoList
//                     todos={todos}
//                     setTodos={setTodos}
//                     completedTodos={completedTodos}
//                     setCompletedTodos={setCompletedTodos}
//                 />
//             </div>
//         </DragDropContext>
//     );
// };
const App: React.FC = () => {
    return (
        <div>
            <IconContext.Provider value={{ className: "react-icons" }}>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="post/:postId" element={<DetailPost />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </IconContext.Provider>
        </div>
    );
};

export default App;
