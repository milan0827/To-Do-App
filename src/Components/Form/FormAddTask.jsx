import "./Form.css";

function FormAddTask({ onTaskFormSubmit, title, setTitle }) {
  return (
    <form className="form__task" onSubmit={onTaskFormSubmit}>
      <textarea
        type="text"
        placeholder="Enter Task To Do..."
        style={{
          resize: "none",
          fontSize: "18px",
          color: "#343434",
        }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></textarea>
      <button className="btn">Add Task</button>
    </form>
  );
}

export default FormAddTask;
