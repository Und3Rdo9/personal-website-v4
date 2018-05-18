import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import SectionLoader from './../common/SectionLoader';
import PostFeed from './PostFeed';

const GET_POSTS = gql`
query {
  allPosts {
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
* PostFeedContainer
*/
const PostFeedContainer = () => (
  <Query query={GET_POSTS}>
    {( { loading, error, data } ) => {
      if (loading) return <SectionLoader isActive={true} />;
      if (error) return <div>Error :( {error}</div>;
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

export default PostFeedContainer;
