import { BiComment } from "react-icons/bi";
import "./TaskList.css";

function TaskList({ tasks, onTaskComplete, onDeleteTask }) {
  return (
    <ul className="task__list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onTaskComplete={onTaskComplete}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}

function TaskItem({ task, onTaskComplete, onDeleteTask }) {
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
