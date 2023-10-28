import "../Form.css";

function Comments({ onCommentFormSubmit, comment, setComment }) {
  return (
    <form className="comments" onSubmit={onCommentFormSubmit}>
      <input
        type="text"
        placeholder="Comment here..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button className="btn ">Add comment</button>
    </form>
  );
}

export default Comments;
