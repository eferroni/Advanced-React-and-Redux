import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveComment, fetchComments } from "actions";
import requireAuth from "./requireAuth";

const CommentBox = ({ teste }) => {
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveComment(comment));
    setComment("");
  };

  const handleFetch = () => {
    dispatch(fetchComments());
  };

  return (
    <form data-testid="commentBox" onSubmit={handleSubmit}>
      <h4>Add a comment</h4>
      <textarea onChange={(e) => setComment(e.target.value)} value={comment} />
      <div>
        <button>Submit Comment</button>
        <button
          type="button"
          onClick={handleFetch}
          style={{ marginLeft: "10px" }}
        >
          Fetch Comments
        </button>
      </div>
      test prop: {teste}
    </form>
  );
};

export default requireAuth(CommentBox);
