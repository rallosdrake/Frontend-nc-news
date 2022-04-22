import axios from "axios";

const articlesApi = axios.create({
  baseURL: `https://enigmatic-tor-40960.herokuapp.com/api`,
});

export const getArticlesFromApi = async (page, topic_slug) => {
  let path = `/articles`;

  path += `?page=${page}`;

  if (!!topic_slug) {
    path += `&topic_slug=${topic_slug}`;
  }
  const { data } = await articlesApi.get(path);
  console.log({ data });
  return data.articles;
};

export const getSingleArticleFromApi = async (article_id) => {
  const { data } = await articlesApi.get(`/articles/${article_id}`);

  return data.article;
};

export const increaseVotes = (article_id, increment) => {
  return articlesApi
    .patch(`/articles/${article_id}`, { inc_votes: increment })
    .then(({ data }) => {
      return data;
    });
};

export const getComments = (article_id) => {
  return articlesApi
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};

export const postComment = async (article_id, username, body) => {
  const { data } = await articlesApi.post(`/articles/${article_id}/comments`, {
    username: username,
    body: body,
  });
  console.log(data, "this is result");
  return data.comment;
};
