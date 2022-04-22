import { getComments, deleteComment } from "./Utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import WriteComment from "./WriteComment";
export const DisplayComments = () => {
  const [comments, setComments] = useState([]);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [err, setErr] = useState(null);
  const { article_id } = useParams();

  const clickHandler = (comment_id) => {
    deleteComment(comment_id);
    setDeleteConfirmation(true);
  };

  useEffect(() => {
    getComments(article_id)
      .then((comments) => {
        setComments(comments);
        setDeleteConfirmation(false);
      })
      .catch((err) => {
        return <p>{err.response}</p>;
      });
  }, [article_id, deleteConfirmation]);

  if (err) return <p>{err}</p>;
  return (
    <>
      <WriteComment setComments={setComments} />
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <h4 className="title">{comment.author}</h4>
              {comment.body}
              <p>Votes: {comment.votes}</p>
              <button
                onClick={() => {
                  clickHandler(comment.comment_id);
                }}
              >
                delete comment
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default DisplayComments;
