import { useEffect, useState } from "react";
import { getSingleArticleFromApi } from "./Utils/api";
import { useParams } from "react-router-dom";
import { increaseVotes } from "./Utils/api";
export const SingleArticle = () => {
  const clickHandler = (e, increment) => {
    setVotes(async () => {
      const res = await increaseVotes(article_id, increment);
      console.log(increment);
      const newVotes = res.votes;
      return newVotes;
    });
  };

  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [err, setErr] = useState(null);
  const [votes, setVotes] = useState(article.votes);
  const [clicked, setClicked] = useState(false);

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
  }, [votes]);

  if (!isLoading && !article) return <p>"Error404"</p>;
  if (err) return <p>{err}</p>;
  if (isLoading) return <h1> Loading...</h1>;
  return (
    <div className="articleBody">
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <p>Article author: {article.author}</p>
      <p>Votes: {article.votes}</p>
      <button
        className="upvote__Button"
        onClick={(e) => {
          clickHandler(e, 1);
        }}
      >
        ❤️
      </button>
      <button
        className="downvote__Button"
        onClick={(e) => {
          clickHandler(e, -1);
        }}
      >
        💔
      </button>
    </div>
  );
};

export default SingleArticle;
