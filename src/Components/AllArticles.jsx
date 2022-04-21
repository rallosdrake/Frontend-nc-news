import { useEffect, useState } from "react";
import { getArticlesFromApi } from "./Utils/api";
import { Link } from "react-router-dom";
import { SingleArticle } from "../Components/SingleArticle";
const AllArticles = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    getArticlesFromApi()
      .then((articlesApi) => {
        setArticles(articlesApi);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(`Not found`);
      });
  }, []);
  if (err) return <p>{err}</p>;
  if (isLoading) return <h1> loading</h1>;
  return (
    <main>
      <h2>Articles</h2>
      <ul className="allarticle__list">
        {articles.map((article) => {
          return (
            <li key={article.article_id} className="article__card">
              "{article.title}"
              <Link to={`/articles/${article.topic}`}>
                <p> Topic: {article.topic}.</p>
              </Link>
              <Link to={`/article/${article.article_id}`}>
                <button type="button" className="Read__Article">
                  Read Article
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default AllArticles;
