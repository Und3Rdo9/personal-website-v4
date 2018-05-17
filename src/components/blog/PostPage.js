import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import ReactMarkdown from 'react-markdown';
import SectionLoader from './../common/SectionLoader';

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
    content
  }
}
`;

const PostPage = ( {match} ) => (
  <div>
    <Query query={GET_POST} variables={{ slug: match.params.slug }}>
      {( { loading, error, data } ) => {
        if (loading) return <SectionLoader isActive={true} />;
        if (error) return <div>Error :(</div>;
          if (data.Post) {
            return (
              <article className="container">
                <h1>{data.Post.title}</h1>
                <p>{`by ${data.Post.authors[0].name}`}</p>
                <p>{data.Post.postsummary}</p>
                <main>
                  <ReactMarkdown source={data.Post.content} />
                </main>
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
