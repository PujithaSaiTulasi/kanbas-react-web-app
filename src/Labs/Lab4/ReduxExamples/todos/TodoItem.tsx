import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

type Todo = {
    id: string;
    title: string;
  };

export default function TodoItem({ todo }: { todo: Todo }) {
    const dispatch = useDispatch();

    return (
        <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
        <span>{todo.title}</span>
        <div>
          <button
            className="btn btn-lg btn-primary me-2"
            onClick={() => dispatch(setTodo(todo))}
            id="wd-set-todo-click"
          >
            Edit
          </button>
          <button
            className="btn btn-lg btn-danger"
            onClick={() => dispatch(deleteTodo(todo.id))}
            id="wd-delete-todo-click"
          >
            Delete
          </button>
        </div>
      </li>);}
  
  