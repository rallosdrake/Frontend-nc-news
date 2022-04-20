import axios from "axios";

const articlesApi = axios.create({
  baseURL: `https://enigmatic-tor-40960.herokuapp.com/api/`,
});

export const getArticlesFromApi = () => {
  return articlesApi
    .get(`/articles`, {
      params: {
        limit: 30,
      },
    })
    .then(({ data }) => {
      console.log(data);
      return data.articles;
    });
};
