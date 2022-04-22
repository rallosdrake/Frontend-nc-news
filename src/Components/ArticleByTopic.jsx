import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticlesFromApi } from "./Utils/api";

const ArticleByTopic = () => {
  const [articles, setArticles] = useState([]);
  const { topic_slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [page, setPage] = useState(0);
  useEffect(() => {
    getArticlesFromApi(page, topic_slug)
      .then((articlesApi) => {
        setArticles(articlesApi);
        console.log("in line 15");
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(`Not found`);
      });
  }, [topic_slug]);
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
