import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticlesFromApi } from "./Utils/api";

const ArticleByTopic = () => {
  const [articles, setArticles] = useState([]);
  const { topic_slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [page] = useState(0);
  useEffect(() => {
    getArticlesFromApi(page, topic_slug)
      .then((articlesApi) => {
        setArticles(articlesApi);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(`Not found`);
      });
  }, [topic_slug, page]);
  if (err) return <p>{err}</p>;
  if (isLoading) return <h1> Loading...</h1>;
  return (
    <div>
      {articles.map((article) => (
        <li key={article.article_id} className="topic__card">
          <b>{article.title}</b>
          <p>{article.body}</p>
          <p>Topic: {article.topic}</p>
          <b>Author: {article.author}</b>
        </li>
      ))}
    </div>
  );
};

export default ArticleByTopic;
