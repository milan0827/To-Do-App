import "../Form.css";
import { useTask } from "../../../Contexts/taskContexts";

function Comments() {
  const { onCommentFormSubmit, comment, setComment } = useTask();

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
