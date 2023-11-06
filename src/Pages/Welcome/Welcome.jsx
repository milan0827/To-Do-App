import TaskList from "../../Components/TaskList/TaskList";
import "./Welcome.css";
import Form from "../../Components/Form/Form";
import Button from "../../Components/Button/Button";
import { TaskProvider, useTask } from "../../Contexts/taskContexts";

// console.log(year, month, day, hour, minutes);

// const taskCreatedDate = `${month < 10 ? "0" + month : month}/${year}`;
// const taskCreatedTime = `${dayNames[day].slice(0, 3)} - ${
//   hour < 10 ? "0" + hour : hour
// } : ${minutes < 10 ? "0" + minutes : minutes}`;

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
  const { handleFormOpen, taskNumber, formOpen } = useTask();

  return (
    <div className="welcome main">
      <h1>Welcome to TO-DO</h1>
      <div className="welcome__btn">
        <Button className="btn btn__add btn__active" onClick={handleFormOpen}>
          + New Task
        </Button>
        <Button className="btn btn__add">filters</Button>
        <span>Task Added: {taskNumber}</span>
      </div>
      {formOpen && <Form />}
      <TaskList />
    </div>
  );
}

export { Welcome };
