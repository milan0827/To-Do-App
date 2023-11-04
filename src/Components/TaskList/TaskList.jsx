import { BiComment } from "react-icons/bi";
import "./TaskList.css";
import { useContext } from "react";
import { TaskContext } from "../../Pages/Welcome/Welcome";

function TaskList() {
  const { taskNumber, tasks } = useContext(TaskContext);

  return taskNumber === 0 ? (
    <h2>Let's Create A Task</h2>
  ) : (
    <ul className="task__list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

function TaskItem({ task }) {
  const { onTaskComplete, onDeleteTask } = useContext(TaskContext);

  return (
    <li className="task__item">
      <input
        type="checkbox"
        value={task.isComplete}
        onChange={() => onTaskComplete(task.id)}
      />
      <div className="task__desc">
        <h3 className={task.isComplete ? "cross-line" : ""}>{task.title}</h3>
        <div className="task__time">
          <span>{task.taskTime}</span> <span>{task.taskDate}</span>
        </div>
        <div className="task__comment">
          <BiComment className="icon" />
          <p>{task.comment}</p>
        </div>
      </div>

      <button
        style={{ cursor: "pointer" }}
        onClick={() => onDeleteTask(task.id)}
      >
        🗑️
      </button>
    </li>
  );
}

export default TaskList;
