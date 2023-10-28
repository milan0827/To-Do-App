import { BiComment } from "react-icons/bi";
import "./TaskList.css";

function TaskList({ tasks }) {
  return (
    <ul className="task__list">
      {tasks.map((task) => (
        <li className="task__item" key={task.id}>
          <input type="checkbox" />
          <div className="task__desc">
            <h3>{task.title}</h3>
            <div className="task__time">
              <span>{task.taskTime}</span> <span>{task.taskDate}</span>
            </div>
            <div className="task__comment">
              <BiComment className="icon" />
              <p>{task.comment}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
