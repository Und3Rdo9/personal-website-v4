import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_POST = gql`
query post($slug: String!) {
  Post(slug: $slug) {
    title
    authors {
      name
    }
    dateAndTime
    summary
    tags
  }
}
`;

const PostPage = ( {match} ) => (
  <div>
    <h1>{match.params.slug}</h1>
    <Query query={GET_POST} variables={{ slug: match.params.slug }}>
      {( { loading, error, data } ) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error :(</div>;
          if (data.Post) {
            return (
              <article>
                <h1>{data.Post.title}</h1>
                <p>{`by ${data.Post.authors[0].name}`}</p>
                <p>{data.Post.postsummary}</p>
              </article>
            )
          }
          else {
            return (
              <article>
                <p>Sorry, this post has not been found.</p>
              </article>
            )
          }

        }}
      </Query>
  </div>
)

export default PostPage;
