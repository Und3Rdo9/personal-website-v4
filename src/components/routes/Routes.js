import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from './../layouts/HomePage';
import PostPage from './../blog/PostPage';

const Blog = () => (
  <div>There should be a blog overview here</div>
);

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/frontend-blog" component={Blog} />
      <Route exact path="/frontend-blog/:slug" component={PostPage} />
    </Switch>
  </main>
);

export default Routes;
