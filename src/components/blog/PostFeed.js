import React from 'react';
import PropTypes from 'prop-types';
import PostFeedItem from './PostFeedItem';

const PostFeed = ({ postsData }) => {
  const renderPosts = (data) => {
    if (!data.length) return null;
    return data.map((postData) => {
      return <PostFeedItem post={postData} key={postData.slug} />
    })
  }
  return (
    <div className="post-feed">
      {renderPosts(postsData)}
    </div>
  )
};

PostFeed.propTypes = {
  postsData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PostFeed;
