import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { Check } from "@mui/icons-material";

const Todo = ({ task, deleteTodo, doneTask, editTodo }) => {
  return (
    <>
      <div className="flex justify-center items-center w-full p-2 m-4">
        <div
          className={`flex justify-between min-w-[70%] w-1/2 p-4 border rounded-md items-center transition ${
            task.completed ? "bg-green-700" : "bg-slate-500"
          }`}
        >
          <p>{task.task}</p>
          <div className=" flex gap-4">
            <FontAwesomeIcon
              icon={faPenToSquare}
              onClick={() => editTodo(task.id)}
            />
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => deleteTodo(task.id)}
            />
            <FontAwesomeIcon
              icon={faCheckSquare}
              onClick={() => doneTask(task.id)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
