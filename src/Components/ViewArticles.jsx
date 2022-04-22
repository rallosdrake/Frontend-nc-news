import React from "react";
import { Link } from "react-router-dom";

const ViewArticles = () => {
  return (
    <>
      <main className="Nav">
        <div className="Topic drop down"></div>
        <label htmlFor="articles"></label>
        <Link to="/articles">
          <button type="button" className="allarticles">
            <h2>View All Articles</h2>
          </button>
        </Link>
      </main>
    </>
  );
};

export default ViewArticles;
