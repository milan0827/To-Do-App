import FormAddTask from "./FormAddTask";
import Comments from "./CommentAdd/commentAdd";
import { useContext } from "react";
import { TaskContext } from "../../Pages/Welcome/Welcome";

function Form() {
  const { title } = useContext(TaskContext);

  return (
    <div className="form">
      <FormAddTask />
      {title && <Comments />}
    </div>
  );
}

export default Form;
