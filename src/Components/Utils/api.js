import axios from "axios";

const articlesApi = axios.create({
  baseURL: `https://enigmatic-tor-40960.herokuapp.com/api`,
});

export const getArticlesFromApi = async (topic_slug) => {
  const { data } = await articlesApi.get(`/articles`, {
    params: {
      topic_slug,
      limit: 30,
    },
  });
  return data.articles;
};

export const getSingleArticleFromApi = async (article_id) => {
  const { data } = await articlesApi.get(`/articles/${article_id}`);

  return data.article;
};

export const increaseVotes = async (article_id, increment) => {
  const { data } = await articlesApi.patch(`/articles/${article_id}`, {
    inc_votes: increment,
  });
  return data;
};
