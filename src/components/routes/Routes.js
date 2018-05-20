import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './../layouts/HomePage';
import PostPageContainer from './../blog/PostPageContainer';
import ContentPageContainer from './../page/ContentPageContainer';
import BlogOverview from './../blog/BlogOverview';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/frontend-blog' component={BlogOverview} />
      <Route exact path='/frontend-blog/:slug' component={PostPageContainer} />
      <Route exact path='/amsterdam-frontend-developer/:slug' component={ContentPageContainer} />
    </Switch>
  </main>
);

export default Routes;
