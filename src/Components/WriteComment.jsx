import { useState } from "react";
import { postComment } from "./Utils/api";
import { useParams } from "react-router-dom";

const WriteComment = ({ setComments }) => {
  const [comment, setComment] = useState({});
  const { article_id } = useParams();
  const [err, setErr] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
    setComment("comment posted");
    postComment(
      article_id,
      e.target.username.value,
      e.target.comment.value
    ).then((data) => {
      setComment(data);
      setComments((currComments) => {
        return [data, ...currComments];
      }).catch((err) => {
        setErr("please enter a valid username");
      });
    });
  };
  return (
    <>
      <OpenForm>
        <p>{comment.body}</p>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <label htmlFor="username" value="username">
            Username:
          </label>
          <input type="text" id="username" required></input>

          <label htmlFor="comment"> Comment:</label>
          <input type="text" id="comment" required></input>

          <button type="submit">Post Comment</button>
        </form>
      </OpenForm>
    </>
  );
};

const OpenForm = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((currOpen) => !currOpen);

  return (
    <div>
      <button onClick={toggleOpen}>
        {isOpen ? "Discard Comment" : "Post Comment"}
      </button>
      {isOpen && children}
    </div>
  );
};
export default WriteComment;
