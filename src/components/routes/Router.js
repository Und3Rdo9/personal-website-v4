import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from './../layouts/HomePage';
import PostPage from './../blog/PostPage';

const Blog = () => (
  <div>There should be a blog overview here</div>
);

const Router = ({ children }) => (
  <BrowserRouter>
    <React.Fragment>
      {children}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/frontend-blog" component={Blog} />
        <Route exact path="/frontend-blog/:slug" component={PostPage} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>

);

export default Router;
