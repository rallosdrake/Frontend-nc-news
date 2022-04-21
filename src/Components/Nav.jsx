import React from "react";

import Header from "./Header";
import TopicButtons from "./Topicbuttons";
import ViewArticles from "./ViewArticles";
import ViewComments from "./ViewComments";

const Nav = () => {
  return (
    <>
      <Header />
      <TopicButtons />
      <ViewArticles />
      {/* <ViewComments /> */}
    </>
  );
};

export default Nav;
