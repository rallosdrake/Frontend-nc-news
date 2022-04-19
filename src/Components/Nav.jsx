import React from "react";

const Nav = () => {
  return (
    <>
      <main className="Nav">
        <div className="Topic drop down">
          <form>
            <label for="topics">
              Choose a topic to view all associated articles:
            </label>
            <select name="topics" id="topics">
              <option value="Topic 1">Topic 1</option>
              <option value="Topic 2">Topic 2</option>
              <option value="Topic 3">Topic 3</option>
            </select>
          </form>
          <input type="submit" value="Submit"></input>
        </div>
        <div className="Post comment">
          <button
            type="button"
            className="comment button"
            onSubmit={console.log("button clicked")}
          >
            <h2>View Comments</h2>
          </button>
        </div>
      </main>
    </>
  );
};

export default Nav;
