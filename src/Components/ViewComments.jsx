import React from "react";

const ViewComments = () => {
  return (
    <div className="Post comment">
      <label htmlFor="comment"></label>
      <button
        type="button"
        className="comment button"
        onClick={() => console.log("com button clicked")}
      >
        <h2>View Comments</h2>
      </button>
    </div>
  );
};

export default ViewComments;
