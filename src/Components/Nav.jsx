import React from "react";

import Header from "./Header";
import TopicButtons from "./Topicbuttons";
import ViewArticles from "./ViewArticles";

const Nav = () => {
  return (
    <>
      <Header />
      <TopicButtons />
      <ViewArticles />
    </>
  );
};

export default Nav;
