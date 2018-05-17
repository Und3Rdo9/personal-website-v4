import React from 'react';
import PostFeedItem from './PostFeedItem';

const PostFeed = ({ postsData }) => {
  const renderPosts = (data) => {
    if (!data.length) return null;
    return data.map( (postData) => {
      return <PostFeedItem post={postData} />
    })
  }

  return (
    <div className="post-feed">
      {renderPosts(postsData)}
    </div>
  )
}

export default PostFeed;
