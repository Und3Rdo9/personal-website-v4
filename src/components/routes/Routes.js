import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from './../layouts/HomePage';
import PostPage from './../blog/PostPage';
import BlogOverview from './../blog/BlogOverview';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/frontend-blog" component={BlogOverview} />
      <Route exact path="/frontend-blog/:slug" component={PostPage} />
    </Switch>
  </main>
);

export default Routes;
