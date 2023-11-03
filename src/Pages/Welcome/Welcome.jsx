import { useState } from "react";
import Form from "../../Components/Form/Form";
import TaskList from "../../Components/TaskList/TaskList";
import "./Welcome.css";
import FormAddTask from "../../Components/Form/FormAddTask";
import Comments from "../../Components/Form/CommentAdd/commentAdd";

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hour = date.getHours();
const minutes = date.getMinutes();

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// console.log(year, month, day, hour, minutes);

const taskCreatedDate = `${month < 10 ? "0" + month : month}/${year}`;
const taskCreatedTime = `${dayNames[day].slice(0, 3)} - ${
  hour < 10 ? "0" + hour : hour
} : ${minutes < 10 ? "0" + minutes : minutes}`;

// const tasks = [
//   {
//     id: 1234,
//     title: "Learn react js",
//     comment: "let's do this",
//     taskDate: taskCreatedDate,
//     taskTime: taskCreatedTime,
//     finished: true,
//   },
//   {
//     id: 1235,
//     title: "Learn Node js",
//     comment: "let's do this",
//     taskDate: taskCreatedDate,
//     taskTime: taskCreatedTime,
//     finished: false,
//   },
//   {
//     id: 1236,
//     title: "Go to play",
//     comment: "let's do this",
//     taskDate: taskCreatedDate,
//     taskTime: taskCreatedTime,
//     finished: false,
//   },
//   {
//     id: 1237,
//     title: "Meet friends",
//     comment: "let's do this",
//     taskDate: taskCreatedDate,
//     taskTime: taskCreatedTime,
//     finished: true,
//   },
// ];

function Welcome() {
  const [formOpen, setFormOpen] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [taskTime, setTaskTime] = useState(taskCreatedTime);
  const [taskDate, setTaskDate] = useState(taskCreatedDate);

  const taskNumber = taskList.length;

  const id = crypto.randomUUID();

  function handleTaskFormSubmit(e) {
    e.preventDefault();
    if (!title) return;
    const newTask = {
      id,
      title,
      isComplete: false,
      taskTime,
      taskDate,
    };

    handleAddTask(newTask);
  }

  function handleCommentFormSubmit(e) {
    e.preventDefault();
    if (!comment) return;
    const newComment = {
      id,
      comment,
      // isComplete,
    };

    handleAddComment(newComment);
  }

  function handleIsComplete(id) {
    setTaskList((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  }

  function handleAddTask(task) {
    setTaskList([...taskList, task]);
    setTitle("");
  }

  function handleAddComment(comment) {
    setTaskList([...taskList, comment]);
    setComment("");
  }

  function handleFormOpen() {
    setFormOpen((open) => !open);
  }

  function handleDelete(id) {
    setTaskList((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="welcome main">
      <h1>Welcome to TO-DO</h1>

      <div className="welcome__btn">
        <div>
          <button className="btn btn__add btn__active" onClick={handleFormOpen}>
            + New Task
          </button>
          <button className="btn btn__add">Filters</button>
        </div>
        <span>Task Added: {taskNumber}</span>
      </div>

      <Form formOpen={formOpen}>
        {formOpen && (
          <div className="form">
            <FormAddTask
              onTaskFormSubmit={handleTaskFormSubmit}
              title={title}
              setTitle={setTitle}
            />
            {title && (
              <Comments
                onCommentFormSubmit={handleCommentFormSubmit}
                comment={comment}
                setComment={setComment}
              />
            )}
          </div>
        )}
      </Form>

      <div className="taskList">
        {taskNumber === 0 ? (
          <h2>Let's Create A Task</h2>
        ) : (
          <TaskList
            tasks={taskList}
            taskNumber={taskNumber}
            onTaskComplete={handleIsComplete}
            onDeleteTask={handleDelete}
          />
        )}
      </div>
    </div>
  );
}

export default Welcome;
