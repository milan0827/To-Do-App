import FormAddTask from "./FormAddTask";
import Comments from "./CommentAdd/commentAdd";
import { useTask } from "../../Contexts/taskContexts";

function Form() {
  const { title } = useTask();

  return (
    <div className="form">
      <FormAddTask />
      {title && <Comments />}
    </div>
  );
}

export default Form;
