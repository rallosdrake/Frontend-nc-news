import { useEffect, useState } from "react";
import { getSingleArticleFromApi } from "./Utils/api";
import { useParams } from "react-router-dom";
import ArticleByTopic from "./ArticleByTopic";

export const SingleArticle = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  console.log(useParams(), "this is article id");
  const [article, setArticle] = useState({});
  const [err, setErr] = useState(null);

  useEffect(() => {
    if (!article_id) return;
    getSingleArticleFromApi(article_id)
      .then((articlesApi) => {
        setArticle(articlesApi);
      })
      .then(() => setIsLoading(false))

      .catch((err) => {
        setErr(`Not found`);
      });
  }, [article_id]);
  if (!isLoading && !article) return <p>"Error404"</p>;
  if (err) return <p>{err}</p>;
  if (isLoading) return <h1> loading</h1>;
  return (
    <div className="articleBody">
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <p>{article.author}</p>
    </div>
  );
};

export default SingleArticle;
