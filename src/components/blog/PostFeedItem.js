import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PostFeedItem = ({ post }) => {
  const { title, summary, coverImage, slug } = post;
  return (
    <article className='post-feed__item'>
      <img
        className='post-feed__item-cover'
        src={coverImage.url}
        alt={title}
      />
      <div className="post-feed__item-content">
        <h3 className='post-feed__item-title'>{title}</h3>
        <p className='post-feed__item-summary'>{summary}</p>
        <Link to={`/frontend-blog/${slug}`} className='post-feed__item-cta' aria-label={title}>Read more</Link>
      </div>

    </article>
  )
}

PostFeedItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    coverImage: PropTypes.shape({
      url: PropTypes.string.isRequired
    }).isRequired,
    dateAndTime: PropTypes.string.isRequired
  }).isRequired
};

export default PostFeedItem;
