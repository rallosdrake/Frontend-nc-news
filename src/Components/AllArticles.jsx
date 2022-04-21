import { useEffect, useState } from "react";
import { getArticlesFromApi } from "./Utils/api";
import { Link } from "react-router-dom";
import { SingleArticle } from "../Components/SingleArticle";
const AllArticles = () => {
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    getArticlesFromApi(page)
      .then((articlesApi) => {
        setArticles(articlesApi);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(`Not found`);
      });
  }, [page]);

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
      <p>Current Page: {page + 1}</p>
      <button onClick={previousPageHandler}>Previous Page</button>
      <button onClick={nextPageHandler}>Next Page</button>
      <ul className="allarticle__list">
        {articles.map((article) => {
          return (
            <li key={article.article_id} className="article__card">
              "{article.title}"
              <Link to={`/${article.topic}`}>
                <p> Topic: {article.topic}.</p>
              </Link>
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
    </main>
  );
};

export default AllArticles;
