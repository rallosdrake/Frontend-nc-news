import { useEffect, useState } from "react";
import { getArticlesFromApi } from "./Utils/api";

const GetAllArticles = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    getArticlesFromApi()
      .then((articlesApi) => {
        console.log(articlesApi, "API");
        setArticles(articlesApi);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        setErr(`Not found`);
      });
  });
  if (err) return <p>{err}</p>;
  if (isLoading) return <h1> loading</h1>;
  console.log(articles, "this is data");
  return (
    <main className="article_section">
      <h2>Articles</h2>
      <ul>
        {articles.map((data) => {
          return (
            <li key={articles.article_id} className="article__list">
              Topic: {data.topic} {data.title} {data.body}
              {data.votes} {data.author} {data.comment_count}
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default GetAllArticles;
