// import { useEffect, useState } from "react";
// import axios from "axios";
// const Articles = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`https://enigmatic-tor-40960.herokuapp.com/api/articles`)
//       .then((data) => {
//         setArticles(data.data.articles);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   return (
//     <main className="article_section">
//       <h2>Articles</h2>
//       <ul>
//         {articles.map((article) => {
//           return (
//             <li key={article.article_id} className="article_list">
//               Topic: {article.topic}. "{article.title}" {article.body}
//               {article.votes} {article.author} {article.comment_count}
//             </li>
//           );
//         })}
//       </ul>
//     </main>
//   );
// };

// export default Articles;
