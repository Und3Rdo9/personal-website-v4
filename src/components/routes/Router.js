import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from './../layouts/HomePage';
import PostPage from './../blog/PostPage';

const Blog = () => (
  <div>There should be a blog overview here</div>
);

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/frontend-blog" component={Blog} />
      <Route exact path="/frontend-blog/:slug" component={PostPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
