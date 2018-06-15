import React from 'react';
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import SectionLoader from './../common/SectionLoader';
import PostDetail from './PostDetail';

export const GET_POST = gql`
  query post($slug: String!) {
    Post(slug: $slug) {
      title
      authors {
        name
      }
      dateAndTime
      tags
      content
      coverImage {
        url
      }
    }
  }
`;

const PostPageContainer = ({ match }) => (
  <Query query={GET_POST} variables={{ slug: match.params.slug }}>
    {({ loading, error, data }) => {
      if (loading) return <SectionLoader isActive={true} />;
      if (error) {
        return <div>Error :(</div>;
      }
      if (data.Post) {
        return (
          <PostDetail
            title={data.Post.title}
            authorName={data.Post.authors[0].name}
            coverImage={data.Post.coverImage.url}
            tags={data.Post.tags}
            content={data.Post.content}
            dateAndTime={data.Post.dateAndTime}
          />
        );
      } else {
        return (
          <article>
            <p>Sorry, this post has not been found.</p>
          </article>
        );
      }
    }}
  </Query>
);

PostPageContainer.propTypes = {
  match: PropTypes.object.isRequired
};

export default PostPageContainer;
