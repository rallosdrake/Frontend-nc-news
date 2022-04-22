import { useEffect, useState } from "react";
import { getArticlesFromApi } from "./Utils/api";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const AllArticles = () => {
  const [sort, setSort] = useState("author");
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [err, setErr] = useState(null);
  const [order, setOrder] = useState("asc");
  let { topic_slug } = useParams();
  useEffect(() => {
    getArticlesFromApi(page, topic_slug, sort, order)
      .then((articlesApi) => {
        setArticles(articlesApi);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(`Not found`);
      });
  }, [page, sort, order]);

  const sortHandler = (e) => {
    console.log(e.target.value);
    setSort(e.target.value);
  };

  const orderHandler = (e) => {
    setOrder(e.target.value);
    console.log(e.target.value);
  };

  const nextPageHandler = () => {
    setPage((currPage) => {
      return currPage + 1;
    });
  };
  const previousPageHandler = () => {
    setPage((currPage) => {
      return currPage - 1;
    });
  };

  if (err) return <p>{err}</p>;
  if (isLoading) return <h1> Loading...</h1>;

  return (
    <main>
      <h2>Articles</h2>
      <>
        <label className="select" htmlFor="sort">
          Sort by:
        </label>
        <select
          className="select"
          name="sort"
          id="sort"
          onChange={(e) => {
            sortHandler(e);
          }}
        >
          <option value="author">Author</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Comment count</option>
        </select>
        <label htmlFor="order"></label>
        <select
          className="select"
          name="order"
          id="order"
          onChange={orderHandler}
        >
          <option value="asc">ascending</option>
          <option value="desc">descending</option>
        </select>
      </>
      <p>Current Page: {page + 1}</p>
      {page > 0 && <button onClick={previousPageHandler}>Previous Page</button>}
      {articles.length === 10 && (
        <button onClick={nextPageHandler}>Next Page</button>
      )}
      <ul className="allarticle__list">
        {articles.map((article) => {
          return (
            <li key={article.article_id} className="article__card">
              "{article.title}"
              <Link to={`/${article.topic}`}>
                <p> Topic: {article.topic}.</p>
              </Link>
              <p> Author: {article.author}</p>
              <Link to={`/article/${article.article_id}`}>
                <button type="button" className="Read__Article">
                  Read Article
                </button>
              </Link>
              Comments: {article.comment_count}
            </li>
          );
        })}
      </ul>
      <p>Current Page: {page + 1}</p>
      <button onClick={previousPageHandler}>Previous Page</button>
      <button onClick={nextPageHandler}>Next Page</button>
    </main>
  );
};

export default AllArticles;
