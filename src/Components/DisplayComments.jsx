import { getComments } from "./Utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const DisplayComments = () => {
  const [comments, setComments] = useState([]);
  const [err, setErr] = useState(null);
  const { article_id } = useParams();
  useEffect(() => {
    getComments(article_id)
      .then((comments) => {
        setComments(comments);
      })
      .catch((err) => {
        return <p>{err.response}</p>;
      });
  }, [article_id]);

  if (err) return <p>{err}</p>;
  return (
    <>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <h4 className="title">{comment.author}</h4>
              {comment.body}
              <p>Votes: {comment.votes}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default DisplayComments;
