import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import SectionLoader from './../common/SectionLoader';
import PostFeed from './PostFeed';

const GET_POSTS = gql`
query {
  allPosts(orderBy: dateAndTime_DESC, first: 3, filter: {isPublished: true}) {
    title
    summary
    slug
    coverImage {
      url
    }
    dateAndTime
  }
}
`;

/**
* LatestPostsFeedContainer
*/
const LatestPostsFeedContainer = () => (
  <Query query={GET_POSTS}>
    {({ loading, error, data }) => {
      if (loading) return <SectionLoader isActive={true} />;
      if (error) return <div>Error :( </div>;
      if (data.allPosts.length) {
        return <PostFeed postsData={data.allPosts} />
      }
      else {
        return (
          <article>
            <p>Sorry, this content has not been found.</p>
          </article>
        )
      }
    }}
  </Query>
);

export default LatestPostsFeedContainer;
