import { useContext } from "react";
import "../Form.css";
import { TaskContext } from "../../../Pages/Welcome/Welcome";

function Comments() {
  const { onCommentFormSubmit, comment, setComment } = useContext(TaskContext);

  return (
    <form className="comments" onSubmit={onCommentFormSubmit}>
      <input
        type="text"
        placeholder="The comment section does not work for now..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button className="btn ">Add comment</button>
    </form>
  );
}

export default Comments;
