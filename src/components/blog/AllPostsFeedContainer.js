import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import ReactMarkdown from 'react-markdown';
import SectionLoader from './../common/SectionLoader';
import PostFeed from './PostFeed';
import { POSTS_PER_PAGE } from './../../config';

const GET_ALL_POSTS = gql`
query getAllPosts($skip: Int!, $first: Int!) {
  allPosts(skip: $skip, first: $first) {
    title
    summary
    slug
    coverImage {
      url
    }
    dateAndTime
  }
  _allPostsMeta {
    count
  }
}`;

/**
 * AllPostsFeedContainer
 */
export class AllPostsFeedContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      isLoadingMore: false
    };

    this.renderLoadMoreButton = this.renderLoadMoreButton.bind(this);
    this.toggleLoadMore = this.toggleLoadMore.bind(this);
  }

  toggleLoadMore() {
    this.setState({
      isLoadingMore: !this.state.isLoadingMore
    });
  }

  onLoadMore(fetchMore, data) {
    // toggle state to disable the load more button
    this.toggleLoadMore();

    fetchMore({
      // overwrite existing variables
      variables: {
        skip: data.allPosts.length
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        // toggle state to reenable the load more button
        this.toggleLoadMore();
        // return previous query result if nothing more's fetched
        if (!fetchMoreResult) return prev;
        // merge previous result with result of fetchmore
        return Object.assign({}, prev, {
          allPosts: [...prev.allPosts, ...fetchMoreResult.allPosts]
        });
      }
    });
  }

  renderLoadMoreButton(totalPosts, currentPosts, onLoadMore) {
    if (totalPosts <= currentPosts) return null;
    return (
      <button
        className='button button--primary'
        onClick={onLoadMore}
        disabled={this.state.isLoadingMore}
      >
        Load more posts
      </button>
    );
  }

  render() {
    return (
      <Query query={GET_ALL_POSTS} variables={{skip: 0, first: POSTS_PER_PAGE }}>
        {( { loading, error, data, fetchMore } ) => {
          if (loading) return <SectionLoader isActive={true} />;
          if (error) return <div>Error :(</div>;
            if (data.allPosts) {
              return (
                <React.Fragment>
                  <PostFeed postsData={data.allPosts} />
                  {this.renderLoadMoreButton(data._allPostsMeta.count, data.allPosts.length, this.onLoadMore.bind(this, fetchMore, data))}
                </React.Fragment>
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
    );
  }
}

export default AllPostsFeedContainer;
