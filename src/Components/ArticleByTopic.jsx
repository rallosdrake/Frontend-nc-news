import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticlesFromApi } from "./Utils/api";

const ArticleByTopic = () => {
  const [articles, setArticles] = useState([]);
  const { topic_slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    getArticlesFromApi(topic_slug)
      .then((articlesApi) => {
        setArticles(articlesApi);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(`Not found`);
      });
  }, [topic_slug]);
  if (err) return <p>{err}</p>;
  if (isLoading) return <h1> loading</h1>;
  return (
    <div>
      {articles
        .filter((article) => article.topic === topic_slug)
        .map((filteredPerson) => (
          <li key={filteredPerson.article_id} className="topic__card">
            <b>{filteredPerson.title}</b>
            <p>{filteredPerson.body}</p>
            <p>Topic: {filteredPerson.topic}</p>
            <b>Author: {filteredPerson.author}</b>
          </li>
        ))}
    </div>
  );
};

export default ArticleByTopic;
