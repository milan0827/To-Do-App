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

console.log(day);

// console.log(year, month, day, hour, minutes);

const taskCreatedDate = `${month < 10 ? "0" + month : month}/${year}`;
const taskCreatedTime = `${dayNames[day].slice(0, 3)} - ${
  hour < 10 ? "0" + hour : hour
} : ${minutes < 10 ? "0" + minutes : minutes}`;

const tasks = [
  {
    id: 1234,
    title: "Learn react js",
    comment: "let's do this",
    taskDate: taskCreatedDate,
    taskTime: taskCreatedTime,
    finished: true,
  },
  {
    id: 1235,
    title: "Learn Node js",
    comment: "let's do this",
    taskDate: taskCreatedDate,
    taskTime: taskCreatedTime,
    finished: false,
  },
  {
    id: 1236,
    title: "Go to play",
    comment: "let's do this",
    taskDate: taskCreatedDate,
    taskTime: taskCreatedTime,
    finished: false,
  },
  {
    id: 1237,
    title: "Meet friends",
    comment: "let's do this",
    taskDate: taskCreatedDate,
    taskTime: taskCreatedTime,
    finished: true,
  },
];

const comments = [
  {
    id: 123,
    commentTitle: "good",
  },
  {
    id: 124,
    commentTitle: "good",
  },
  {
    id: 125,
    commentTitle: "good",
  },
];

function Welcome() {
  const [formOpen, setFormOpen] = useState(false);
  const [taskList, setTaskList] = useState(tasks);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  // const [taskTime, setTaskTime] = useState(taskCreatedTime);
  // const [taskDate, setTaskDate] = useState(taskCreatedTime);

  const id = crypto.randomUUID();

  function handleTaskFormSubmit(e) {
    e.preventDefault();
    const newTask = {
      id,
      title,
      // taskTime,
    };

    handleAddTask(newTask);

    console.log(newTask);
  }

  function handleCommentFormSubmit(e) {
    e.preventDefault();
    const newComment = {
      id,
      comment,
    };

    handleAddComment(newComment);
    console.log(newComment);
  }

  // function handleCommentFormSubmit(e) {
  //   e.preventDefault();
  //   const newComment = {
  //     id,
  //     comment,
  //   };

  //   handleAddComment(newComment)
  // }

  function handleAddTask(task) {
    setTaskList([...tasks, task]);
    setTitle("");
  }

  function handleAddComment(comment) {
    setTaskList([...tasks, comment]);
    setComment("");
  }

  function handleFormOpen() {
    setFormOpen((open) => !open);
  }

  return (
    <div className="welcome main">
      <h1>Welcome to TO-DO</h1>

      <div className="welcome__btn">
        <button className="btn btn__add btn__active" onClick={handleFormOpen}>
          + New Task
        </button>
        <button className="btn btn__add">Filters</button>
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
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export default Welcome;
