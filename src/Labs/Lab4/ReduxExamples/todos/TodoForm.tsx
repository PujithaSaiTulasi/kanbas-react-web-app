import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
        <input
          defaultValue={todo.title}
          onChange={(e) =>
            dispatch(setTodo({ ...todo, title: e.target.value }))
          }
        />
        <div>
        <button
          className="btn btn-lg btn-warning ms-2"
          onClick={() => dispatch(addTodo(todo))}
          id="wd-update-todo-click"
        >
          Update
        </button>
        <button
          className="btn btn-lg btn-success ms-2"
          onClick={() => dispatch(updateTodo(todo))}
          id="wd-add-todo-click"
        >
          Add
        </button></div>
      </li>
);}
  