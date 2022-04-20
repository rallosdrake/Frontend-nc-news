import { useEffect, useState } from "react";
import { getArticlesFromApi } from "./Utils/api";
import { useParams } from "react-router-dom";

export const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [err, setErr] = useState(null);
  useEffect(() => {
    getArticlesFromApi(article_id)
      .then((articlesApi) => {
        setArticle(articlesApi);
      })
      .catch((err) => {
        setErr(`Not found`);
      });
  }, [article_id]);
  if (err) return <p>{err}</p>;

  return (
    <section>
      <h2 className="indie__art__card">{article.title}</h2>;
      <p>{article.body}</p>
    </section>
  );
};

export default SingleArticle;
