import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

const date = new Date().toLocaleString("en", {
  weekday: "short",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
});

function TaskProvider({ children }) {
  const [formOpen, setFormOpen] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");

  const taskNumber = taskList.length;

  const id = crypto.randomUUID();

  function handleTaskFormSubmit(e) {
    e.preventDefault();
    if (!title) return;
    const newTask = {
      id,
      title,
      isComplete: false,
      taskTime: date,
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
    <TaskContext.Provider
      value={{
        formOpen: formOpen,
        onTaskFormSubmit: handleTaskFormSubmit,
        title: title,
        setTitle: setTitle,
        taskNumber: taskNumber,
        onCommentFormSubmit: handleCommentFormSubmit,
        comment: comment,
        setComment: setComment,
        tasks: taskList,
        onTaskComplete: handleIsComplete,
        onDeleteTask: handleDelete,
        handleFormOpen: handleFormOpen,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

function useTask() {
  const context = useContext(TaskContext);
  if (context === undefined)
    throw new Error("Context was defined outside of the TaskProvider.");

  return context;
}

export { TaskProvider, useTask };
