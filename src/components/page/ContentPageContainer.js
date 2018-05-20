import React from 'react';
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import SectionLoader from './../common/SectionLoader';
import ContentPage from './ContentPage';

const GET_PAGE = gql`
query contentPage($slug: String!) {
  ContentPage(slug: $slug) {
    title
    content
    coverImage {
      url
    }
  }
}
`;

const PostPageContainer = ( {match} ) => (
  <Query query={GET_PAGE} variables={{ slug: match.params.slug }}>
    {( { loading, error, data } ) => {
      if (loading) return <SectionLoader isActive={true} />;
      if (error) return <div>Error :(</div>;
        if (data.ContentPage) {
          return (
            <ContentPage
              title={data.ContentPage.title}
              coverImage={data.ContentPage.coverImage}
              content={data.ContentPage.content}
            />
          )
        }
        else {
          return (
            <article>
              <p>Sorry, this page has not been found.</p>
            </article>
          )
        }

    }}
  </Query>
);

PostPageContainer.propTypes = {
  match: PropTypes.object.isRequired
};

export default PostPageContainer;
