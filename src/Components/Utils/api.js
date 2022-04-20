import axios from "axios";

const articlesApi = axios.create({
  baseURL: `https://enigmatic-tor-40960.herokuapp.com/api/`,
});

export const getArticlesFromApi = (topic_slug, article_id) => {
  return articlesApi
    .get(`/articles`, {
      params: {
        article_id,
        topic_slug,
        limit: 30,
      },
    })
    .then(({ data }) => {
      return data.articles;
    });
};
